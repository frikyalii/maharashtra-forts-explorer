import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-fort.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maharashtra Fort at Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fort-shadow/60 via-transparent to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
            Discover Maharashtra's
            <span className="block text-fort-sunset">Historic Forts</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Explore ancient fortresses that witnessed the rise of the Maratha Empire. 
            From Raigad to Shivneri, uncover the stories carved in stone.
          </p>

          {/* Hero Search */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search forts by name or location..."
                className="pl-10 h-12 bg-white/95 backdrop-blur-sm border-white/20"
              />
            </div>
            <Button 
              size="lg" 
              className="h-12 px-8 bg-gradient-accent hover:shadow-hero transition-all duration-300"
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/80" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;