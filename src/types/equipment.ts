export type EquipmentType = 'Attack' | 'Magic' | 'Defense';

export interface Equipment {
  id: number;
  name: string;
  imageUrl: string;
  type: EquipmentType;
  counters: {
    items: string[];  // Names of counter items
    description: string;  // Why these items counter it
  };
}