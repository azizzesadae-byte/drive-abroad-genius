import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  webpSrc?: string;
}

const LazyImage = ({ src, alt, className = '', placeholder = '/placeholder.svg', webpSrc }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check WebP support
            const supportsWebP = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
            const finalSrc = supportsWebP && webpSrc ? webpSrc : src;
            
            // Preload image
            const img = new Image();
            img.src = finalSrc;
            img.onload = () => {
              setImageSrc(finalSrc);
              setIsLoaded(true);
            };
            
            observer.unobserve(imageRef);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src, webpSrc]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading="lazy"
    />
  );
};

export default LazyImage;