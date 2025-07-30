import { X, MapPin, Clock, Mountain, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:sticky top-0 left-0 z-50 md:z-auto
        w-80 h-screen md:h-auto
        bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        overflow-y-auto shadow-elevation-2 md:shadow-none
      `}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Search */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Enter district or fort name..."
                className="mb-3"
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="raigad">Raigad</SelectItem>
                  <SelectItem value="satara">Satara</SelectItem>
                  <SelectItem value="kolhapur">Kolhapur</SelectItem>
                  <SelectItem value="nashik">Nashik</SelectItem>
                  <SelectItem value="aurangabad">Aurangabad</SelectItem>
                  <SelectItem value="aurangabad">Omerga</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Difficulty Level */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Mountain className="h-4 w-4" />
                Trek Difficulty
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Easy", "Moderate", "Difficult", "Expert"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={level.toLowerCase()} />
                  <Label htmlFor={level.toLowerCase()} className="text-sm">
                    {level}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Historical Period */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Historical Era
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Maratha Empire",
                "Mughal Period",
                "British Colonial",
                "Ancient/Medieval",
                "Shivaji's Forts",
              ].map((era) => (
                <div key={era} className="flex items-center space-x-2">
                  <Checkbox id={era.toLowerCase().replace(/\s+/g, "-")} />
                  <Label
                    htmlFor={era.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm"
                  >
                    {era}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Distance Range */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">
                Distance from Mumbai (km)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[50]}
                max={500}
                step={10}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 km</span>
                <span>500 km</span>
              </div>
            </CardContent>
          </Card>

          {/* Facilities */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Star className="h-4 w-4" />
                Facilities Available
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Parking Available",
                "Guide Services",
                "Food & Water",
                "Accommodation",
                "Photography Allowed",
              ].map((facility) => (
                <div key={facility} className="flex items-center space-x-2">
                  <Checkbox id={facility.toLowerCase().replace(/\s+/g, "-")} />
                  <Label
                    htmlFor={facility.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm"
                  >
                    {facility}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Clear All Filters
            </Button>
            <Button className="w-full bg-gradient-accent">Apply Filters</Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
