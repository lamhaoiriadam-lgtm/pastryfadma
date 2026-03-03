import { CATEGORIES } from '../types';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const t = translations.fr;
  
  return (
    <div className="px-8 mb-12 overflow-x-auto no-scrollbar">
      <div className="flex space-x-12 whitespace-nowrap border-b border-stone-100">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`relative pb-6 text-sm lg:text-base font-bold tracking-widest uppercase transition-colors ${
              activeCategory === category ? 'text-accent' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            {t.categories[category] || category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
