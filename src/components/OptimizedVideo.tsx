import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const OptimizedVideo = ({ 
  src, 
  poster, 
  className = '', 
  autoPlay = true, 
  muted = true, 
  loop = true,
  controls = false 
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          if (entry.isIntersecting && videoRef.current) {
            // Start loading video when in view
            videoRef.current.load();
            
            if (autoPlay) {
              videoRef.current.play().catch(() => {
                // Autoplay was prevented, user interaction required
                console.log('Autoplay prevented');
              });
            }
          } else if (!entry.isIntersecting && videoRef.current) {
            // Pause video when out of view to save resources
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [autoPlay]);

  // Reduce quality on mobile
  const getVideoSource = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && src.includes('.mp4')) {
      // Return mobile version if available
      return src.replace('.mp4', '-mobile.mp4');
    }
    return src;
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        poster={poster}
        autoPlay={false} // We control this manually
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        preload="none"
      >
        <source src={getVideoSource()} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading overlay */}
      {!isLoaded && poster && (
        <img 
          src={poster} 
          alt="Video poster" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default OptimizedVideo;