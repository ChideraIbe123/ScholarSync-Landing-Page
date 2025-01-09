import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-lavender">
      <div className="container mx-auto max-w-6xl">
        <div className="gradient-border">
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-lavender to-french-grey/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-center group cursor-pointer">
              <div className="bg-gunmetal p-8 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500">
                <Play className="h-12 w-12 text-lavender animate-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};