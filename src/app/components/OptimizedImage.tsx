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
    loading: props.priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    style: {
      maxWidth: '100%',
      height: 'auto',
      ...props.style,
    },
  };

  // Use <picture> element for better format selection
  if (optimizedAvifSrc) {
    return (
      <picture>
        {optimizedAvifSrc && <source srcSet={optimizedAvifSrc} type="image/avif" />}
        <source srcSet={optimizedWebpSrc} type="image/webp" />
        <Image 
          src={fallbackSrc || src} 
          alt={alt}
          width={width}
          height={height}
          {...imgProps} 
        />
      </picture>
    );
  }
  
  // Use Next.js Image with optimized WebP source
  return (
    <Image
      src={optimizedWebpSrc}
      alt={alt}
      width={width}
      height={height}
      {...imgProps}
    />
  );
} 