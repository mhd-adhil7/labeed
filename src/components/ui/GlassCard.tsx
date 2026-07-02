import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-[2rem] p-6 md:p-8 backdrop-blur-md transition-all duration-500 ${
        hoverEffect 
          ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(96,165,250,0.08)] hover:border-secondary/40 cursor-pointer glass-shine' 
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
