import { useState } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FilterSidebar from "@/components/FilterSidebar";
import FortCard from "@/components/FortCard";
import BottomNavigation from "@/components/BottomNavigation";
import { fortsData } from "@/data/fortsData";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={handleMenuClick} />
      <HeroBanner />
      
      <div className="flex">
        <FilterSidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        
        <main className="flex-1 container mx-auto px-4 py-8 md:ml-0">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Explore Historic Forts
            </h2>
            <p className="text-muted-foreground">
              Discover {fortsData.length} magnificent forts across Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 md:pb-8">
            {fortsData.map((fort) => (
              <FortCard key={fort.id} fort={fort} />
            ))}
          </div>
        </main>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
