import { BookOpen, Play } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full bg-lavender/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-8 lg:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 ml-8">
          <div className="relative w-8 h-8">
            <BookOpen
              className="h-8 w-8 text-gunmetal absolute top-0 left-0 animate-float"
              style={{ animationDelay: "-2s" }}
            />
            <BookOpen
              className="h-8 w-8 text-french-grey absolute top-0 left-0 animate-float"
              style={{ animationDelay: "-4s" }}
            />
          </div>
          <span className="text-2xl font-bold gradient-text tracking-tight">
            ScholarSync
          </span>
        </div>
        <div className="flex items-center space-x-8 mr-8">
          <button className="px-8 py-2 bg-gunmetal text-lavender rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center font-medium">
            Book a Demo
          </button>
          <button className="px-8 py-2 bg-french-grey/20 text-gunmetal rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center font-medium">
            Watch Demo
            <Play className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
};
