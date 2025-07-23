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
  },
  {
    id: "13",
    name: "Free Fire",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=freefire&backgroundColor=ff4757",
    rating: 4.1,
    downloads: "1B+",
    category: "Action",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.dts.freefireth",
    developer: "Garena International I",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=freefire1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=freefire2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=freefire3"
    ],
    description: "Ultimate survival shooter game for mobile with 10-minute battle royale."
  },
  {
    id: "14",
    name: "Roblox",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=roblox&backgroundColor=00d2ff",
    rating: 4.4,
    downloads: "100M+",
    category: "Adventure",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.roblox.client",
    developer: "Roblox Corporation",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=roblox1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=roblox2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=roblox3"
    ],
    description: "Ultimate virtual universe where you can play, create, and be anything you can imagine."
  },
  {
    id: "15",
    name: "Brawl Stars",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=brawl&backgroundColor=ffa502",
    rating: 4.4,
    downloads: "500M+",
    category: "Action",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.supercell.brawlstars",
    developer: "Supercell",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=brawl1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=brawl2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=brawl3"
    ],
    description: "Fast-paced 3v3 multiplayer and battle royale made for mobile."
  },
  {
    id: "16",
    name: "Asphalt 9: Legends",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=asphalt&backgroundColor=ff3838",
    rating: 4.5,
    downloads: "100M+",
    category: "Racing",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM",
    developer: "Gameloft SE",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=asphalt1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=asphalt2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=asphalt3"
    ],
    description: "Arcade racing game featuring hypercars and intense races."
  },
  {
    id: "17",
    name: "Plants vs. Zombies™ 2",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=pvz&backgroundColor=2ed573",
    rating: 4.3,
    downloads: "100M+",
    category: "Strategy",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ea.game.pvz2_row",
    developer: "Electronic Arts",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=pvz1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pvz2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=pvz3"
    ],
    description: "Tower defense game where plants defend against zombie invasion across time."
  },
  {
    id: "18",
    name: "8 Ball Pool",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=8ball&backgroundColor=1e3799",
    rating: 4.5,
    downloads: "500M+",
    category: "Sports",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.miniclip.eightballpool",
    developer: "Miniclip.com",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=8ball1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=8ball2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=8ball3"
    ],
    description: "Play 8-ball pool online with players around the world."
  },
  {
    id: "19",
    name: "Hill Climb Racing 2",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=hill&backgroundColor=ff6348",
    rating: 4.4,
    downloads: "100M+",
    category: "Racing",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fingersoft.hcr2",
    developer: "Fingersoft",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=hill1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=hill2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=hill3"
    ],
    description: "Physics-based driving game with online multiplayer racing."
  },
  {
    id: "20",
    name: "Gardenscapes",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=garden&backgroundColor=7bed9f",
    rating: 4.4,
    downloads: "100M+",
    category: "Puzzle",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playrix.gardenscapes",
    developer: "Playrix",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=garden1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=garden2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=garden3"
    ],
    description: "Match-3 puzzle game combined with garden renovation and storyline."
  },
  {
    id: "21",
    name: "FIFA Mobile",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=fifa&backgroundColor=006ba6",
    rating: 4.1,
    downloads: "100M+",
    category: "Sports",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile",
    developer: "Electronic Arts",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=fifa1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=fifa2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=fifa3"
    ],
    description: "Build your Ultimate Team and compete in authentic football matches."
  },
  {
    id: "22",
    name: "Angry Birds 2",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=angry&backgroundColor=e74c3c",
    rating: 4.2,
    downloads: "100M+",
    category: "Arcade",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rovio.baba",
    developer: "Rovio Entertainment Corporation",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=angry1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=angry2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=angry3"
    ],
    description: "Launch birds to defeat the green pigs in this physics-based puzzle game."
  },
  {
    id: "23",
    name: "Clash Royale",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=royale&backgroundColor=3742fa",
    rating: 4.3,
    downloads: "100M+",
    category: "Strategy",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.supercell.clashroyale",
    developer: "Supercell",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=royale1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=royale2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=royale3"
    ],
    description: "Real-time strategy game featuring Clash of Clans troops and spells."
  },
  {
    id: "24",
    name: "Coin Master",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=coin&backgroundColor=f39c12",
    rating: 4.5,
    downloads: "100M+",
    category: "Casual",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.moonactive.coinmaster",
    developer: "Moon Active",
    screenshots: [
      "https://api.dicebear.com/7.x/shapes/svg?seed=coin1",
      "https://api.dicebear.com/7.x/shapes/svg?seed=coin2",
      "https://api.dicebear.com/7.x/shapes/svg?seed=coin3"
    ],
    description: "Spin the wheel to earn coins, attack friends, and build your village."
  }
];

export const getUniqueCategories = (games: Game[]): string[] => {
  const categories = games.map(game => game.category);
  return [...new Set(categories)].sort();
};