import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  color: string;
  reverse?: boolean;
}

export const Feature = ({
  title,
  description,
  icon: Icon,
  image,
  imageAlt,
  color,
  reverse = false
}: FeatureProps) => {
  const TextContent = () => (
    <div className={`lg:w-4/5 ${reverse ? 'lg:pl-24' : 'lg:pr-24'} ${reverse ? 'animate-slide-left' : 'animate-slide-right'}`}>
      <div className="mb-6 tech-card p-16 rounded-3xl hover:shadow-2xl transition-all duration-500">
        <Icon className={`h-20 w-20 ${color} mb-10`} />
        <h3 className="text-5xl font-bold mb-8 tracking-tight text-gunmetal">{title}</h3>
        <p className="text-xl text-gunmetal/70 leading-relaxed mb-10">
          {description}
        </p>
        <button className={`flex items-center ${color} font-medium group text-lg`}>
          Explore Technology
          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const ImageContent = () => (
    <div className={`lg:w-4/5 mt-12 lg:mt-0 feature-image ${reverse ? 'animate-slide-right' : 'animate-slide-left'}`}>
      <img 
        src={image} 
        alt={imageAlt}
        className="rounded-3xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-all duration-500"
      />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto">
      {reverse ? (
        <>
          <ImageContent />
          <TextContent />
        </>
      ) : (
        <>
          <TextContent />
          <ImageContent />
        </>
      )}
    </div>
  );
};