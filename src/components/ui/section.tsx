import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24 relative overflow-hidden', className)}
        {...props}
      >
        {container ? (
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        ) : (
            children
        )}
      </section>
    );
  }
);
Section.displayName = 'Section';
