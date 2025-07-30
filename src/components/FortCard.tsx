import { MapPin, Clock, Mountain, Star, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Fort {
  id: string;
  name: string;
  location: string;
  district: string;
  difficulty: "Easy" | "Moderate" | "Difficult" | "Expert";
  historicalPeriod: string;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  description: string;
  features: string[];
}

interface FortCardProps {
  fort: Fort;
}

const FortCard = ({ fort }: FortCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      case "Difficult": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group hover:shadow-elevation-3 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-border/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={fort.image}
          alt={fort.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={getDifficultyColor(fort.difficulty)}>
            {fort.difficulty}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            <Camera className="h-3 w-3 mr-1" />
            Photo Spot
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {fort.name}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {fort.location}, {fort.district}
            </div>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-fort-sunset text-fort-sunset" />
              <span className="text-sm font-medium ml-1">{fort.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({fort.reviews} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {fort.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {fort.historicalPeriod}
            </div>
            <div className="flex items-center">
              <Mountain className="h-3 w-3 mr-1" />
              {fort.distance}
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1">
            {fort.features.slice(0, 2).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {fort.features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{fort.features.length - 2} more
              </Badge>
            )}
          </div>

          {/* Action Button */}
          <Button 
            className="w-full mt-4 bg-gradient-accent hover:shadow-elevation-2 transition-all duration-200"
            size="sm"
          >
            Explore Fort
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FortCard;