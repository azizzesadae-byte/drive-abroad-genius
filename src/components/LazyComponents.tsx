import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
export const LazyFortuneWheel = lazy(() => import('@/components/FortuneWheel'));
export const LazyQuiz = lazy(() => import('@/components/Quiz'));
export const LazyCalculator = lazy(() => import('@/components/Calculator'));
export const LazySuccessStories = lazy(() => import('@/components/SuccessStories'));
export const LazyServicesMap = lazy(() => import('@/components/ServicesMap'));

// Loading component
const ComponentLoader = ({ height = '400px' }: { height?: string }) => (
  <div className="w-full" style={{ height }}>
    <Skeleton className="w-full h-full" />
  </div>
);

// Wrapper for lazy components
export const LazyComponent = ({ 
  Component, 
  height = '400px',
  ...props 
}: { 
  Component: React.LazyExoticComponent<any>;
  height?: string;
  [key: string]: any;
}) => (
  <Suspense fallback={<ComponentLoader height={height} />}>
    <Component {...props} />
  </Suspense>
);

export default LazyComponent;