import { Home, MapPin, Bookmark, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search", active: false },
    { icon: MapPin, label: "Map", active: false },
    { icon: Bookmark, label: "Saved", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-elevation-3">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 px-3 py-2 h-auto ${
              active 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className={`h-5 w-5 ${active ? "text-primary" : ""}`} />
            <span className="text-xs">{label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;