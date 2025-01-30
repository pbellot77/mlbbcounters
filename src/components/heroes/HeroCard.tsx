import { Hero } from '../../types/hero';
import Image from 'next/image';

interface HeroCardProps {
  hero: Hero;
  onClick?: (hero: Hero) => void;
}

export function HeroCard({ hero, onClick }: HeroCardProps) {
  return (
    <div
      onClick={() => onClick?.(hero)}
      className="bg-[#252B3B] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer group"
    >
      <div className="relative aspect-square">
        <Image
          src={hero.imageUrl}
          alt={hero.name}
          width={100}
          height={100}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-3">
        <h3 className="text-white text-center font-semibold">{hero.name}</h3>
        <div className="flex flex-wrap gap-1 justify-center mt-1">
          <span className="text-xs bg-blue-900/50 text-blue-100 px-2 py-0.5 rounded">
            {hero.role}
          </span>
        </div>
      </div>
    </div>
  );
}