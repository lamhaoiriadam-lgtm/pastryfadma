import { Menu, ShoppingBag, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface NavbarProps {
  onCartClick: () => void;
  onMenuClick: () => void;
  cartItemCount: number;
}

export function Navbar({ onCartClick, onMenuClick, cartItemCount }: NavbarProps) {
  const t = translations.fr;
  
  return (
    <nav className="fixed top-0 left-0 right-0 h-24 bg-bg-warm/80 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto h-full px-8 grid grid-cols-3 items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 lg:hidden flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Menu className="w-6 h-6 text-stone-800" />
          </button>
          <div className="hidden lg:flex items-center space-x-8">
            <button className="text-[10px] font-bold tracking-[0.2em] text-stone-400 hover:text-accent uppercase transition-colors">{t.menu}</button>
            <button className="text-[10px] font-bold tracking-[0.2em] text-stone-400 hover:text-accent uppercase transition-colors">{t.ourLocation}</button>
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="flex items-center justify-center h-full py-2">
          <img 
            src="https://ik.imagekit.io/ehm3lt9la/Design%20sans%20titre%20(1).png" 
            alt="FADMA" 
            className="h-14 lg:h-20 w-auto object-contain cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Right Section */}
        <div className="flex items-center justify-end space-x-6 lg:space-x-8">
          <button 
            onClick={onCartClick}
            className="relative p-2 -mr-2 hover:scale-105 transition-transform group flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 text-stone-800 group-hover:text-accent transition-colors" />
            {cartItemCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-bg-warm shadow-sm" 
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export function SearchBar() {
  const t = translations.fr;
  
  return (
    <div className="px-8 mb-8 max-w-2xl">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-stone-400" />
        <input 
          type="text" 
          placeholder={t.searchPlaceholder}
          className="w-full py-4 pl-12 pr-4 bg-white border border-stone-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-shadow shadow-sm"
        />
      </div>
    </div>
  );
}
