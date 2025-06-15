const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Base directories
const srcDir = 'src';

// Function to find all files with specific extensions
function findFiles(directory, extensions) {
  try {
    let results = [];
    
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const fullPath = path.join(directory, file);
      
      try {
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Recursively process subdirectories
          results = results.concat(findFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.includes(path.extname(file).toLowerCase())) {
          results.push(fullPath);
        }
      } catch (error) {
        console.error(`Error accessing ${fullPath}:`, error.message);
      }
    }
    
    return results;
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error.message);
    return [];
  }
}

// Function to update image references in a file
function updateImageReferences(filePath) {
  try {
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Original content for comparison
    const originalContent = content;
    
    // Regular expressions to match image paths in src/srcSet attributes
    const imgSrcRegex = /src=["']\/([^"']+\.(webp|jpg|jpeg|png))["']/g;
    
    // Replace direct path references
    content = content.replace(imgSrcRegex, (match, p1) => {
      // Only replace if the file exists in the optimized directory
      const baseName = path.basename(p1, path.extname(p1));
      const webpPath = path.join('optimized', `${baseName}.webp`);
      const fullOptimizedPath = path.join('public', webpPath);
      
      if (fs.existsSync(fullOptimizedPath)) {
        return match.replace(p1, `optimized/${baseName}.webp`);
      }
      
      return match;
    });
    
    // If content changed, write it back to the file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated image references in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating image references in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Updating image references to use optimized versions...');
  
  // Find all JSX, TSX, JS, TS files
  const files = findFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
  
  let updatedFiles = 0;
  
  // Update image references in each file
  for (const file of files) {
    const updated = updateImageReferences(file);
    if (updated) {
      updatedFiles++;
    }
  }
  
  console.log(`Updated image references in ${updatedFiles} files.`);
}

// Run the script
main(); 