const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to scan for images
const directories = ['public', 'public/images'];

// Directory for optimized outputs
const optimizedDir = path.join('public', 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(optimizedDir)) {
  try {
    fs.mkdirSync(optimizedDir, { recursive: true });
    console.log(`Created directory: ${optimizedDir}`);
  } catch (error) {
    console.error(`Error creating directory ${optimizedDir}:`, error.message);
  }
}

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp'];

// Target formats to create
const targetFormats = ['webp', 'avif'];

// Function to optimize an image
async function optimizeImage(filePath) {
  try {
    const extension = path.extname(filePath).toLowerCase();
    if (!supportedFormats.includes(extension)) {
      return;
    }

    console.log(`Processing ${filePath}...`);

    // Get file name without extension
    const fileName = path.basename(filePath, extension);
    
    // Create output paths
    const webpOutputPath = path.join(optimizedDir, `${fileName}.webp`);
    const avifOutputPath = path.join(optimizedDir, `${fileName}.avif`);
    
    // Skip if both optimized versions already exist
    if (fs.existsSync(webpOutputPath) && fs.existsSync(avifOutputPath)) {
      console.log(`Skipping ${filePath} (optimized versions already exist)`);
      return;
    }
    
    // Load image with sharp
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions (maintain aspect ratio)
    const maxDimension = 1200; // Set max width/height
    let width = metadata.width;
    let height = metadata.height;

    if (width > maxDimension || height > maxDimension) {
      if (width > height) {
        height = Math.round((height / width) * maxDimension);
        width = maxDimension;
      } else {
        width = Math.round((width / height) * maxDimension);
        height = maxDimension;
      }
    }

    // Generate optimized WebP version
    if (!fs.existsSync(webpOutputPath)) {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpOutputPath);
      
      console.log(`Created ${webpOutputPath}`);
    }
    
    // Generate optimized AVIF version
    if (!fs.existsSync(avifOutputPath)) {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: 65, effort: 4 })
        .toFile(avifOutputPath);
      
      console.log(`Created ${avifOutputPath}`);
    }

    console.log(`Done processing ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all images in a directory
async function processDirectory(directory) {
  try {
    if (!fs.existsSync(directory)) {
      console.log(`Directory ${directory} does not exist. Skipping.`);
      return;
    }

    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      
      try {
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          // Skip optimized directory to avoid recursive processing
          if (filePath !== optimizedDir) {
            await processDirectory(filePath);
          }
        } else if (stats.isFile()) {
          await optimizeImage(filePath);
        }
      } catch (error) {
        console.error(`Error accessing ${filePath}:`, error.message);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  for (const dir of directories) {
    await processDirectory(dir);
  }
  
  console.log('Image optimization complete!');
}

// Run the script
main().catch(console.error); 