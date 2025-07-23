import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: SearchBarProps) => {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search for games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 bg-game-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
        />
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Categories:</span>
        </div>
        <Badge
          variant={selectedCategory === "All" ? "default" : "secondary"}
          className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
            selectedCategory === "All" 
              ? "bg-primary text-primary-foreground shadow-neon" 
              : "hover:bg-primary hover:text-primary-foreground"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedCategory === category 
                ? "bg-primary text-primary-foreground shadow-neon" 
                : "hover:bg-primary hover:text-primary-foreground"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
};