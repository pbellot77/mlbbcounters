export type HeroRole = 'Fighter' | 'Tank' | 'Assassin' | 'Marksman' | 'Mage' | 'Support';

export interface Hero {
  id: number;
  name: string;
  imageUrl: string;
  role: HeroRole;
  counters: Hero[];
}