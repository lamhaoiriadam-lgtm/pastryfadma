import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface InlineTimePickerProps {
  selectedTime: string;
  onSelect: (time: string) => void;
}

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00'
];

export function InlineTimePicker({ selectedTime, onSelect }: InlineTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-[280px]" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-5 py-3 
          bg-bg-warm border rounded-2xl transition-all duration-300
          ${isOpen ? 'border-accent ring-1 ring-accent/20 shadow-sm' : 'border-stone-100 hover:border-accent/50'}
        `}
      >
        <div className="flex items-center space-x-3">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold text-stone-900 tracking-wide">
            {selectedTime}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="absolute top-full left-0 right-0 z-50 mt-1 bg-bg-warm border border-stone-100 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="max-h-[240px] overflow-y-auto no-scrollbar py-2">
              {TIME_SLOTS.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => {
                      onSelect(time);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full px-5 py-3 text-left text-sm font-medium transition-all relative group
                      ${isSelected ? 'text-accent' : 'text-stone-600 hover:text-stone-900'}
                    `}
                  >
                    <span className="relative z-10">{time}</span>
                    
                    {/* Hover/Selection effect: Soft cream glow or gold underline */}
                    <div className={`
                      absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity
                      ${isSelected ? 'opacity-100' : ''}
                    `} />
                    
                    {isSelected && (
                      <motion.div 
                        layoutId="active-underline"
                        className="absolute bottom-2 left-5 right-5 h-[1px] bg-accent/30"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
