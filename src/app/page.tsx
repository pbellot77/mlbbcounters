'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { HeroCard } from '../components/heroes/HeroCard';
import type { Hero, HeroRole } from '../types/hero';
import { heroes } from '../data/heroes';
import { HeroModal } from '../components/heroes/HeroModal';
import { equipment } from '../data/equipment';
import { EquipmentModal } from '@/components/equipment/EquipmentModal';
import type { Equipment } from '../types/equipment';
import Image from 'next/image';
import Advertisement from '@/components/Advertisement';


export default function Home() {
  // Your existing state declarations
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'All'>('All');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [activeTab, setActiveTab] = useState<'heroes' | 'equipment'>('heroes');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedType, setSelectedType] = useState<'Attack' | 'Magic' | 'Defense' | 'All'>('All');

  // Your existing filter logic
  const filteredHeroes = heroes
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(hero => {
      const matchesSearch = searchQuery
        ? hero.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        : true;
      const matchesRole = selectedRole === 'All' || hero.role === selectedRole;
      return matchesSearch && matchesRole;
    });

  const filteredEquipment = equipment
    .filter(item => {
      const matchesSearch = searchQuery
        ? item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        : true;
      const matchesType = selectedType === 'All' || item.type === selectedType;
      return matchesSearch && matchesType;
    });

  return (
    <div className="min-h-screen bg-[#1E2533]">
      {/* Simple SEO Header */}
      <div className="bg-[#252B3B] p-4 text-gray-300 text-sm">
        <div className="container mx-auto text-center">
          <p>
            Find the perfect counter picks for{' '}
            <a 
              href="https://www.mobilelegends.com/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Mobile Legends: Bang Bang
            </a>{' '}
            heroes and optimize your equipment builds.
          </p>
        </div>
      </div>

      {/* Your existing header */}
      <header className="bg-gradient-to-b from-[#252B3B] to-[#1E2533] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            MLBB Counters
          </h1>
          

          {/* Rest of your existing header content */}
          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {/* Your existing tab buttons */}
            <button
              onClick={() => setActiveTab('heroes')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'heroes'
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#252B3B] text-gray-300 hover:bg-[#353B4B]'
              }`}
            >
              Heroes
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === 'equipment'
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#252B3B] text-gray-300 hover:bg-[#353B4B]'
              }`}
            >
              Equipment
            </button>
          </div>

          {/* Your existing search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                className="w-full px-4 py-3 pr-20 rounded-full bg-[#252B3B] border border-[#353B4B] text-white focus:border-blue-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-12 top-3 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>

          {/* Your existing role/type filters */}
          {activeTab === 'heroes' && (
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Fighter', 'Tank', 'Assassin', 'Marksman', 'Mage', 'Support'].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role as HeroRole | 'All')}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    selectedRole === role
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-[#252B3B] text-gray-300 hover:bg-[#353B4B] hover:text-white'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'equipment' && (
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Attack', 'Magic', 'Defense'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as 'Attack' | 'Magic' | 'Defense' | 'All')}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    selectedType === type
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-[#252B3B] text-gray-300 hover:bg-[#353B4B] hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Your existing main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Heroes Grid */}
        {activeTab === 'heroes' ? (
          filteredHeroes.length === 0 ? (
            <div className="flex justify-center items-center min-h-[200px] w-full">
              <div className="text-gray-400 text-center">
                <p className="text-xl mb-2">No heroes found</p>
                <p className="text-sm">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredHeroes.map((hero) => (
                  <HeroCard
                    key={hero.id}
                    hero={hero}
                    onClick={setSelectedHero}
                  />
                ))}
              </div>

              <div className='mt-8'>
                <Advertisement
                  slot="content-bottom-ad-slot"
                  className="w-full flex justify-center"
                />
              </div>
            </>
          )
        ) : (
          // Equipment Grid
          filteredEquipment.length === 0 ? (
            <div className="flex justify-center items-center min-h-[200px] w-full">
              <div className="text-gray-400 text-center">
                <p className="text-xl mb-2">No equipment found</p>
                <p className="text-sm">Try adjusting your search criteria</p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredEquipment.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedEquipment(item)}
                    className="bg-[#252B3B] rounded-lg p-4 hover:bg-[#353B4B] transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover mb-2"
                      />
                      <h3 className="text-white text-center text-sm font-medium">{item.name}</h3>
                      <span className="text-blue-400 text-xs mt-1">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-8'>
                <Advertisement
                  slot="content-bottom-ad-slot"
                  className="w-full flex justify-center"
                />
              </div>
            </>
          )
        )}
      </main>

      {/* Simple SEO Footer */}
      <footer className="bg-[#252B3B] text-gray-300 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            Stay updated with the latest{' '}
            <a 
              href="https://www.mobilelegends.com/en/news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              game updates
            </a>
            {' '}and{' '}
            <a 
              href="https://www.mobilelegends.com/en/guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              hero guides
            </a>
            . MLBB is a trademark of{' '}
            <a 
              href="https://www.moonton.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Moonton
            </a>
            .
          </p>
        </div>
      </footer>

      {/* Your existing modals */}
      {selectedHero && (
        <HeroModal
          hero={selectedHero}
          onClose={() => setSelectedHero(null)}
        />
      )}

      {selectedEquipment && (
        <EquipmentModal
          equipment={selectedEquipment}
          onClose={() => setSelectedEquipment(null)}
        />
      )}
    </div>
  );
}