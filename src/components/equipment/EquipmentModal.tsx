import { Equipment } from '../../types/equipment';
import { X } from 'lucide-react';
import { getEquipmentCounters } from '../../data/equipment';
import Image from 'next/image';
import Advertisement from '../Advertisement';  // Add this import

interface EquipmentModalProps {
  equipment: Equipment;
  onClose: () => void;
}

export function EquipmentModal({ equipment, onClose }: EquipmentModalProps) {
  const counters = getEquipmentCounters(equipment.name);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-[#252B3B] rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={equipment.imageUrl}
              alt={equipment.name}
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-white">{equipment.name}</h2>
              <span className="text-blue-400 text-sm">{equipment.type}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto">
          <div className="bg-[#1E2533] rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Counter Items:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {counters?.items.map((counterName) => (
                <div
                  key={counterName}
                  className="flex items-center gap-2 bg-[#353B4B] p-2 rounded"
                >
                  <span className="text-white text-sm">{counterName}</span>
                </div>
              ))}
            </div>
            {counters?.description && (
              <p className="text-gray-400 mt-3 text-sm">{counters.description}</p>
            )}
          </div>
          
          {/* Advertisement */}
          <div className="mt-4">
            <Advertisement
              slot="equipment-modal-ad-slot"
              className="w-full flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}