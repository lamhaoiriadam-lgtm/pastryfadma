import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram, Facebook, MessageCircle, ChevronRight } from 'lucide-react';
import { translations } from '../translations';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = translations.fr;
  
  const menuItems = [
    { name: t.menu, href: '/' },
    { name: t.ourLocation, href: 'https://maps.google.com' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/pastry__fadma/', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1Aq7VDQrMi/?mibextid=wwXIfr', color: 'hover:text-blue-600' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/yournumber', color: 'hover:text-green-500' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
          />

          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-bg-warm z-[61] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex items-center justify-between border-b border-stone-100">
              <img 
                src="https://ik.imagekit.io/ehm3lt9la/Design%20sans%20titre%20(1).png" 
                alt="FADMA" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow py-8 px-8 space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between group"
                >
                  <span className="text-xl font-serif font-bold text-stone-900 group-hover:text-accent transition-colors">
                    {item.name}
                  </span>
                  <ChevronRight className="w-5 h-5 text-stone-200 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-8 border-t border-stone-100 bg-white/50">
              <p className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                Connect With Us
              </p>
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center space-y-2 text-stone-400 transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="px-8 py-6 bg-stone-50">
              <p className="text-[10px] text-stone-400 leading-relaxed">
                © 2024 FADMA Artisanal Pastries.<br />
                Crafted with passion in Morocco.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
