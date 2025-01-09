import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-64 pb-48 px-4 bg-lavender">
      <div className="container mx-auto text-center max-w-6xl">
        <div className="mb-12">
          <h1 className="text-9xl font-bold text-gunmetal mb-8 tracking-tight animate-fade-up">
            Scholar<span className="gradient-text">Sync</span>
          </h1>
        </div>
        <p className="text-3xl text-gunmetal/80 mb-8 tracking-wide animate-fade-up font-light max-w-4xl mx-auto leading-relaxed">
          Revolutionize your academic research with AI-powered insights, seamless collaboration, 
          and intelligent paper analysis. Experience the future of scholarly work.
        </p>
        <p className="text-xl text-gunmetal/60 mb-16 animate-fade-up max-w-3xl mx-auto">
          Join thousands of researchers worldwide who are transforming their research workflow 
          with cutting-edge AI technology.
        </p>
        <div className="flex justify-center space-x-8">
          <button className="px-12 py-6 bg-gunmetal text-lavender rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center text-lg font-medium group">
            Book a Demo
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-12 py-6 bg-french-grey/20 text-gunmetal rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center text-lg font-medium border border-french-grey/30 group">
            Watch Demo
            <Play className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};