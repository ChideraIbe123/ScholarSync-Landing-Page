import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gunmetal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-french-grey/5 to-lavender/5" />
      <div className="container mx-auto px-4 py-32 relative">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-lavender mb-8 tracking-tight">
            Start Researching <span className="gradient-text">Smartly</span>
          </h2>
          <p className="text-xl text-french-grey mb-16 font-light max-w-3xl mx-auto">
            Join thousands of researchers who are already using ScholarSync to revolutionize 
            their academic workflow and unlock new insights in their research
          </p>
          <div className="flex justify-center">
            <button className="px-16 py-6 bg-lavender text-gunmetal rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-medium group">
              Schedule a Demo Today
              <ArrowRight className="h-5 w-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-32 pt-16 border-t border-french-grey/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <BookOpen className="h-8 w-8 text-lavender absolute" />
                  <BookOpen className="h-8 w-8 text-french-grey absolute animate-float" style={{ animationDelay: '-2s' }} />
                </div>
                <span className="text-xl font-bold text-lavender">ScholarSync</span>
              </div>
              <p className="text-french-grey/60 font-light">
                &copy; {new Date().getFullYear()} ScholarSync. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};