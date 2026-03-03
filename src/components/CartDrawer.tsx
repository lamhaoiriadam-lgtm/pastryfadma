import { ShoppingBag, X, Minus, Plus, MessageSquare, ChevronRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { translations } from '../translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClear: () => void;
  onCheckout: () => void;
  specialInstructions: string;
  onUpdateInstructions: (val: string) => void;
}

export function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClear, 
  onCheckout,
  specialInstructions,
  onUpdateInstructions
}: CartDrawerProps) {
  const t = translations.fr;
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-2xl h-[85vh] bg-bg-warm z-50 flex flex-col shadow-2xl overflow-hidden rounded-t-[40px] ltr"
          >
            {/* Grabber Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-stone-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="px-8 py-4 flex items-center justify-between border-b border-stone-100 bg-bg-warm/50 backdrop-blur-md">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <ShoppingBag className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold italic text-stone-900">{t.cart}</h2>
                  <p className="text-xs text-stone-400 font-bold tracking-widest uppercase mt-1">
                    {items.length} {items.length === 1 ? 'Article' : 'Articles'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onClear}
                  className="text-xs font-bold tracking-widest text-stone-400 hover:text-accent uppercase transition-colors"
                >
                  Effacer
                </button>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-stone-900 hover:scale-110 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto px-8 py-6 space-y-8 no-scrollbar">
              {items.length === 0 ? (
                <div className="py-12 text-center text-stone-400 font-serif italic">
                  {t.emptyCart}
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-stone-300 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-stone-400 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-bold">
                          {item.price.toFixed(0)}
                          {item.boxInfo ? `dh / ${item.boxInfo}` : 'dh / pièce'}
                        </span>
                        <div className="flex items-center bg-stone-100/80 rounded-full px-2 py-1 space-x-4">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className={`p-1 transition-colors ${item.quantity <= 1 ? 'text-stone-300 cursor-not-allowed' : 'hover:text-accent'}`}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-accent transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Special Notes */}
              <div className="pt-4">
                <div className="flex items-center space-x-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-stone-900" />
                  <span className="text-sm font-bold text-stone-900">Notes Spéciales</span>
                </div>
                <textarea 
                  placeholder="Ajoutez un message cadeau ou des instructions de livraison..."
                  value={specialInstructions}
                  onChange={(e) => onUpdateInstructions(e.target.value)}
                  className="w-full h-24 p-4 bg-bg-warm border border-stone-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-shadow shadow-sm resize-none placeholder:text-stone-300"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pt-4 pb-10 bg-bg-warm/80 backdrop-blur-xl border-t border-stone-100">
              <div className="flex items-center justify-between mb-6 px-2">
                <span className="text-stone-400 font-medium text-sm lg:text-base">Sous-total</span>
                <span className="text-xl lg:text-2xl font-serif font-bold text-stone-900">
                  {subtotal.toFixed(0)}dh
                </span>
              </div>
              <button 
                onClick={onCheckout}
                disabled={items.length === 0}
                className={`w-full h-12 font-bold px-8 rounded-full flex items-center justify-center transition-all whitespace-nowrap ${
                  items.length === 0 
                    ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                    : 'bg-accent hover:bg-accent/90 text-stone-900 shadow-xl shadow-accent/30 active:scale-[0.98]'
                }`}
              >
                <span className="text-sm lg:text-base tracking-tight">{t.checkout}</span>
                <div className="flex items-center">
                  <div className={`w-px h-4 mx-4 ${items.length === 0 ? 'bg-stone-200' : 'bg-stone-900/20'}`} />
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
