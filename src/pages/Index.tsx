import { useState, useMemo } from "react";
import { GameCard } from "@/components/GameCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { mockGames, getUniqueCategories } from "@/data/mockGames";
import { Gamepad2, Sparkles, TrendingUp } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = getUniqueCategories(mockGames);
  
  const filteredGames = useMemo(() => {
    return mockGames.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-gaming rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
                  GameVault
                </h1>
                <p className="text-muted-foreground">Discover amazing games from Play Store</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="gaming" size="lg">
                <Sparkles className="w-4 h-4" />
                Featured
              </Button>
              <Button variant="outline" size="lg">
                <TrendingUp className="w-4 h-4" />
                Trending
              </Button>
            </div>
          </div>
          
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "All" ? "All Games" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No games found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or category filters
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 py-8 border-t border-border">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Ready to discover your next favorite game?
            </h3>
            <p className="text-muted-foreground mb-4">
              Tap any game card to be redirected to the Google Play Store for download
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="gaming" size="lg">
                <Sparkles className="w-4 h-4" />
                Explore Featured Games
              </Button>
              <Button variant="outline" size="lg">
                <TrendingUp className="w-4 h-4" />
                View Trending Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
