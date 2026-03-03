import { Product } from '../types';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { translations } from '../translations';

export function FeaturedCard({ product, onAddToCart, onClick }: { product: Product, onAddToCart: (product: Product) => void, onClick: (product: Product) => void }) {
  const t = translations.fr;
  
  return (
    <div className="px-4 lg:px-8 mb-10">
      <motion.div 
        layoutId={`product-${product.id}`}
        onClick={() => onClick(product)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[180px] lg:h-[550px] rounded-[24px] lg:rounded-[48px] overflow-hidden shadow-xl group cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-4 lg:bottom-16 left-6 lg:left-16 right-6 lg:right-16 flex items-end justify-between gap-4 lg:gap-12">
          <div className="min-w-0 flex-grow">
            <span className="inline-block px-2 py-0.5 mb-2 text-[9px] lg:text-xs font-bold tracking-widest text-stone-900 bg-accent rounded uppercase">
              {t.bestseller}
            </span>
            <h2 className="text-xl lg:text-5xl font-serif font-bold text-white mb-1 lg:mb-2 truncate">
              {product.name}
            </h2>
            <p className="text-white/80 text-[10px] lg:text-base font-light line-clamp-1 max-w-xl">
              {product.description}
            </p>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-8 flex-shrink-0">
            <span className="text-accent font-bold text-xs lg:text-3xl whitespace-nowrap">
              {product.boxInfo 
                ? `${product.price.toFixed(0)}dh / ${product.boxInfo}`
                : `${product.price.toFixed(0)}dh / pièce`
              }
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-7 h-7 lg:w-14 lg:h-14 bg-accent text-stone-900 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 hover:scale-110 transition-transform active:scale-90"
            >
              <Plus className="w-3.5 h-3.5 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProductCard({ product, onAddToCart, onClick }: { product: Product, onAddToCart: (product: Product) => void, onClick: (product: Product) => void }) {
  return (
    <motion.div 
      layoutId={`product-${product.id}`}
      onClick={() => onClick(product)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full relative cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-serif font-semibold text-stone-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-stone-400 text-xs mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto gap-2">
          <span className="text-accent font-semibold text-xs whitespace-nowrap">
            {product.boxInfo 
              ? `${product.price.toFixed(0)}dh / ${product.boxInfo}`
              : `${product.price.toFixed(0)}dh / pièce`
            }
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-7 h-7 bg-accent text-stone-900 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform active:scale-90 flex-shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
