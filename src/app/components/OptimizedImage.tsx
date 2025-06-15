"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  fallbackSrc?: string;
}

/**
 * OptimizedImage component that serves pre-optimized images directly
 * This bypasses Next.js image processing for images we've already optimized
 */
export default function OptimizedImage({
  src,
  webpSrc,
  avifSrc,
  fallbackSrc,
  alt,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  // Use optimized path if not explicitly provided
  const optimizedWebpSrc = webpSrc || 
    (src.startsWith('/') && !src.includes('optimized') ? 
      src.replace(/\.(jpe?g|png|webp)$/, '.webp').replace(/^\//, '/optimized/') : 
      src);
      
  const optimizedAvifSrc = avifSrc || 
    (src.startsWith('/') && !src.includes('optimized') ? 
      src.replace(/\.(jpe?g|png|webp)$/, '.avif').replace(/^\//, '/optimized/') : 
      null);
  
  // For SEO and accessibility
  const imgProps = {
    ...props,
    loading: props.priority ? 'eager' as const : props.loading || 'lazy' as const,
    decoding: 'async' as const,
    fetchPriority: props.priority ? 'high' : props.fetchPriority || 'auto',
    style: {
      maxWidth: '100%',
      height: 'auto',
      display: 'block', // Prevent layout shift
      ...props.style,
    },
    sizes: props.sizes || '100vw',
  };

  // Create custom srcset for better responsive image loading
  const createSrcSet = (src: string) => {
    if (!width) return undefined;
    
    // Generate responsive sizes based on width
    const sizes = [0.5, 0.75, 1, 1.5, 2].map(scale => 
      Math.round(Number(width) * scale)
    );
    
    // Create srcset string
    return sizes
      .filter(size => size > 0 && size <= 1920) // Limit to reasonable sizes
      .map(size => `${src}?w=${size} ${size}w`)
      .join(', ');
  };

  // Use <picture> element for better format selection
  if (optimizedAvifSrc) {
    return (
      <picture>
        {optimizedAvifSrc && <source srcSet={optimizedAvifSrc} type="image/avif" sizes={imgProps.sizes} />}
        <source srcSet={optimizedWebpSrc} type="image/webp" sizes={imgProps.sizes} />
        <img 
          src={fallbackSrc || src} 
          alt={alt || ''}
          width={width || 100}
          height={height || 100}
          loading={imgProps.loading}
          decoding={imgProps.decoding}
          fetchPriority={imgProps.fetchPriority as any}
          style={imgProps.style}
          className={props.className}
        />
      </picture>
    );
  }
  
  // Use regular img element for pre-optimized WebP images
  // This is more efficient than Next.js Image for already optimized assets
  if (src.includes('optimized')) {
    return (
      <img
        src={optimizedWebpSrc}
        alt={alt || ''}
        width={width || 100}
        height={height || 100}
        loading={imgProps.loading}
        decoding={imgProps.decoding}
        fetchPriority={imgProps.fetchPriority as any}
        srcSet={createSrcSet(optimizedWebpSrc)}
        sizes={imgProps.sizes}
        style={imgProps.style}
        className={props.className}
      />
    );
  }
  
  // Use Next.js Image as fallback for unoptimized images
  return (
    <Image
      src={optimizedWebpSrc}
      alt={alt || ''}
      width={width || 100}
      height={height || 100}
      loading={imgProps.loading}
      sizes={imgProps.sizes}
      className={props.className}
      style={imgProps.style}
      fetchPriority={imgProps.fetchPriority as any}
    />
  );
} 