export interface Game {
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
}

export const mockGames: Game[] = [
  {
    id: "1",
    name: "PUBG Mobile",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=pubg&backgroundColor=ff6b6b",
    rating: 4.2,
    downloads: "1B+",
    category: "Action",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tencent.ig",
    developer: "KRAFTON, Inc.",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=pubg1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pubg2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pubg3"
    ],
    description: "Battle royale game with intense multiplayer action and strategic gameplay."
  },
  {
    id: "2",
    name: "Clash of Clans",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=clash&backgroundColor=4ecdc4",
    rating: 4.5,
    downloads: "500M+",
    category: "Strategy",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans",
    developer: "Supercell",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=clash1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=clash2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=clash3"
    ],
    description: "Build your village, raise a clan, and compete in epic Clan Wars!"
  },
  {
    id: "3",
    name: "Candy Crush Saga",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=candy&backgroundColor=ffe66d",
    rating: 4.4,
    downloads: "1B+",
    category: "Puzzle",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
    developer: "King",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=candy1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=candy2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=candy3"
    ],
    description: "Match three candies in this sweet and challenging puzzle game."
  },
  {
    id: "4",
    name: "Minecraft",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=minecraft&backgroundColor=95e1d3",
    rating: 4.6,
    downloads: "10M+",
    category: "Adventure",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
    developer: "Mojang",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=minecraft1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=minecraft2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=minecraft3"
    ],
    description: "Build, explore, and survive in this blocky sandbox adventure."
  },
  {
    id: "5",
    name: "Among Us",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=among&backgroundColor=ff8b94",
    rating: 4.1,
    downloads: "100M+",
    category: "Action",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia",
    developer: "InnerSloth LLC",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=among1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=among2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=among3"
    ],
    description: "Find the impostor among your crewmates in this social deduction game."
  },
  {
    id: "6",
    name: "Pokémon GO",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=pokemon&backgroundColor=a8e6cf",
    rating: 4.1,
    downloads: "1B+",
    category: "Adventure",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo",
    developer: "Niantic, Inc.",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=pokemon1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pokemon2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pokemon3"
    ],
    description: "Catch Pokémon in the real world with augmented reality technology."
  },
  {
    id: "7",
    name: "Call of Duty Mobile",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=cod&backgroundColor=ff9f43",
    rating: 4.3,
    downloads: "500M+",
    category: "Action",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter",
    developer: "Activision Publishing, Inc.",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=cod1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=cod2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=cod3"
    ],
    description: "Fast-paced multiplayer combat with iconic Call of Duty gameplay."
  },
  {
    id: "8",
    name: "Subway Surfers",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=subway&backgroundColor=ffd93d",
    rating: 4.4,
    downloads: "1B+",
    category: "Arcade",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf",
    developer: "SYBO Games",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=subway1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=subway2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=subway3"
    ],
    description: "Endless runner through subway tracks with colorful graphics."
  },
  {
    id: "9",
    name: "Genshin Impact",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=genshin&backgroundColor=c7ceea",
    rating: 4.5,
    downloads: "50M+",
    category: "RPG",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact",
    developer: "HoYoverse",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=genshin1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=genshin2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=genshin3"
    ],
    description: "Open-world RPG with stunning visuals and elemental combat system."
  },
  {
    id: "10",
    name: "Mobile Legends",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=ml&backgroundColor=b4f8c8",
    rating: 4.2,
    downloads: "1B+",
    category: "Strategy",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobile.legends",
    developer: "Moonton",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=ml1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=ml2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=ml3"
    ],
    description: "5v5 MOBA game with fast-paced battles and strategic team gameplay."
  },
  {
    id: "11",
    name: "Temple Run 2",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=temple&backgroundColor=ffaaa5",
    rating: 4.3,
    downloads: "1B+",
    category: "Arcade",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imangi.templerun2",
    developer: "Imangi Studios",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=temple1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=temple2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=temple3"
    ],
    description: "Navigate perilous cliffs, zip lines, mines and forests in this endless runner."
  },
  {
    id: "12",
    name: "Chess.com",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=chess&backgroundColor=dda0dd",
    rating: 4.7,
    downloads: "50M+",
    category: "Puzzle",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chess",
    developer: "Chess.com",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=chess1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=chess2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=chess3"
    ],
    description: "Play chess online with millions of players worldwide."
  }
];

export const getUniqueCategories = (games: Game[]): string[] => {
  const categories = games.map(game => game.category);
  return [...new Set(categories)].sort();
};