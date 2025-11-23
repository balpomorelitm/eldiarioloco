import React from 'react';
import { ReferenceItem } from '../types';

interface ReferenceCardProps {
  item: ReferenceItem;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ item }) => {
  // Determine color theme based on unit
  let borderColor = 'border-gray-200';
  let headerBg = 'bg-gray-100';
  let titleColor = 'text-gray-800';
  let badgeColor = 'bg-gray-200 text-gray-700';

  if (item.unit === '8') {
    borderColor = 'border-purple-200';
    headerBg = 'bg-purple-100';
    titleColor = 'text-purple-900';
    badgeColor = 'bg-purple-200 text-purple-800';
  } else if (item.unit === '9') {
    borderColor = 'border-pink-200';
    headerBg = 'bg-pink-100';
    titleColor = 'text-pink-900';
    badgeColor = 'bg-pink-200 text-pink-800';
  } else if (item.unit === '10') {
    borderColor = 'border-slate-300';
    headerBg = 'bg-slate-200';
    titleColor = 'text-slate-900';
    badgeColor = 'bg-slate-300 text-slate-800';
  }

  return (
    <div className={`border-2 ${borderColor} rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow`}>
      <div className={`${headerBg} px-4 py-2 flex justify-between items-center`}>
        <h3 className={`font-serif font-bold ${titleColor}`}>{item.title}</h3>
        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
          Unidad {item.unit}
        </span>
      </div>
      <div className="p-4">
        {item.content}
      </div>
    </div>
  );
};

export default ReferenceCard;
