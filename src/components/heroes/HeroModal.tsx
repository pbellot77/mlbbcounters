import { Hero } from '../../types/hero';
import { X } from 'lucide-react';
import { getCounters } from '../../data/counters';
import { heroes } from '../../data/heroes';
import Image from 'next/image';

interface HeroModalProps {
  hero: Hero;
  onClose: () => void;
}

export function HeroModal({ hero, onClose }: HeroModalProps) {
  const counters = getCounters(hero.name);
  const lanes = ['EXP', 'Mid', 'Gold', 'Jungle', 'Roam'];

  // Helper function to get hero image URL
  const getHeroImage = (heroName: string) => {
    const heroData = heroes.find(h => h.name === heroName);
    return heroData?.imageUrl;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-[#252B3B] rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={hero.imageUrl}
              alt={hero.name}
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold text-white">{hero.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {lanes.map((lane) => {
            const laneCounters = counters?.[lane as keyof typeof counters] || [];
            return (
              <div key={lane} className="bg-[#1E2533] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">{lane} Lane Counters:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {laneCounters.map((counterName) => {
                    const imageUrl = getHeroImage(counterName);
                    return (
                      <div
                        key={counterName}
                        className="flex items-center gap-2 bg-[#353B4B] p-2 rounded"
                      >
                        <Image
                          src={imageUrl || ''}
                          alt={counterName}
                          width={40}
                          height={40}
                          className="rounded object-cover"
                        />
                        <span className="text-white text-sm">{counterName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}