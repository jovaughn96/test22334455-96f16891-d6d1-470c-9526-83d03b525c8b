import React from 'react';
import { cn } from '@/lib/utils';

const FloatingShapes: React.FC = () => {
  return (
    <div className={cn("absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none")}>
      <div className="shape bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-25 animate-float"></div>
      <div className="shape bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-30 animate-float"></div>
    </div>
  );
}

export default FloatingShapes;
