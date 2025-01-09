import React from "react";
import { BookOpen, Play } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full z-50">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-lavender via-lavender/90 to-white"></div>

      <div className="container mx-auto py-3 px-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8">
              <BookOpen className="h-8 w-8 text-gunmetal absolute animate-bounce-slow" />
            </div>
            <div className="overflow-hidden">
              <span className="text-2xl font-bold tracking-tight inline-block">
                <span className="inline-block animate-slide-right">
                  Scholar
                </span>
                <span className="gradient-text inline-block animate-slide-left">
                  Sync
                </span>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-gunmetal text-lavender rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center font-medium text-sm">
              Book a Demo
            </button>
            <button className="px-6 py-2 bg-french-grey/20 text-gunmetal rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center font-medium text-sm">
              Watch Demo
              <Play className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
