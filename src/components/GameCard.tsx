import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, ExternalLink } from "lucide-react";

interface GameCardProps {
  game: {
    id: string;
    name: string;
    icon: string;
    rating: number;
    downloads: string;
    category: string;
    playStoreUrl: string;
    developer: string;
    screenshots: string[];
    description: string;
  };
}

export const GameCard = ({ game }: GameCardProps) => {
  const handleDownload = () => {
    window.open(game.playStoreUrl, '_blank');
  };

  return (
    <Card className="bg-game-card border-border hover:bg-game-card-hover hover:shadow-card hover:scale-105 transition-all duration-300 group cursor-pointer">
      <div className="p-4 space-y-4">
        {/* Game Icon and Basic Info */}
        <div className="flex items-start gap-3">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted">
            <img 
              src={game.icon} 
              alt={game.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${game.name}`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-lg line-clamp-2 group-hover:text-primary-glow transition-colors">
              {game.name}
            </h3>
            <p className="text-muted-foreground text-sm">{game.developer}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium">{game.rating}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {game.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Screenshots Preview */}
        <div className="flex gap-2 overflow-x-auto">
          {game.screenshots.slice(0, 3).map((screenshot, index) => (
            <div key={index} className="w-20 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
              <img 
                src={screenshot} 
                alt={`${game.name} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${game.name}-${index}`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Downloads and Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Download className="w-4 h-4" />
            <span>{game.downloads} downloads</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {game.description}
          </p>
        </div>

        {/* Download Button */}
        <Button 
          onClick={handleDownload}
          variant="gaming" 
          size="lg" 
          className="w-full font-semibold"
        >
          <ExternalLink className="w-4 h-4" />
          Get on Play Store
        </Button>
      </div>
    </Card>
  );
};