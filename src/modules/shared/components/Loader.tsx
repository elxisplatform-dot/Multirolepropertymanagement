import { Loader2 } from 'lucide-react';
import { cn } from '../utils/helpers';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function Loader({ size = 'md', className, text }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      <Loader2 className={cn(sizeClasses[size], 'animate-spin text-[#5d866c]')} />
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader size="lg" text="Loading..." />
    </div>
  );
}
