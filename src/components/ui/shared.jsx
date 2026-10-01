import React from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Container({ className, children, id }) {
  return (
    <section id={id} className={cn("w-full py-20 lg:py-32 px-6 md:px-12 max-w-7xl mx-auto", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("mb-16 md:mb-24", className)}>
      {subtitle && (
        <span className="text-orange-primary font-medium tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}
