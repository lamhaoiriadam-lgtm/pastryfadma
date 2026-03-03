import { ChevronLeft, Minus, Plus, ShoppingBag, Sprout, Droplet, Circle, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Product } from '../types';
import { translations } from '../translations';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductPage({ product, onBack, onAddToCart }: ProductPageProps) {
  const t = translations.fr;
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants ? product.variants[0] : null);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="fixed inset-0 bg-bg-warm z-[60] flex flex-col overflow-hidden ltr"
    >
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-bg-warm/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-stone-900 hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center justify-center">
            <img 
              src="https://ik.imagekit.io/ehm3lt9la/Design%20sans%20titre%20(1).png" 
              alt="FADMA" 
              className="h-12 lg:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-10" /> {/* Spacer to keep logo centered */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-32 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center space-x-3">
                  {product.isBestseller && (
                    <span className="px-4 py-1.5 bg-accent text-stone-900 text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-lg">
                      {t.bestseller}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold italic text-stone-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                {product.subtitle && (
                  <p className="text-stone-400 text-sm lg:text-base font-bold tracking-widest uppercase mb-8">
                    {product.subtitle}
                  </p>
                )}
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-accent">
                    {product.boxInfo 
                      ? `${(selectedVariant ? selectedVariant.price : product.price).toFixed(0)}dh / ${product.boxInfo}`
                      : `${(selectedVariant ? selectedVariant.price : product.price).toFixed(0)}dh / pièce`
                    }
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-stone-100 mb-8" />

              {/* Variants Picker */}
              {product.variants && (
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-4 flex items-center">
                    <span className="w-8 h-px bg-stone-200 mr-3" />
                    Choisir la taille
                  </h3>
                  <div className="flex bg-stone-100 p-1 rounded-2xl w-fit">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.label}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all ${
                          selectedVariant?.label === variant.label
                            ? 'bg-white text-stone-900 shadow-sm'
                            : 'text-stone-400 hover:text-stone-600'
                        }`}
                      >
                        {variant.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-stone-600 leading-relaxed mb-10 text-base lg:text-lg">
                {product.description}
              </p>

              {/* Box Contents */}
              {product.contents && (
                <div className="mb-10">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-900 uppercase mb-6 flex items-center">
                    <span className="w-8 h-px bg-accent/30 mr-3" />
                    {product.category === 'Plateaux' ? t.plateauContents : t.boxContents}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.contents.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="px-5 py-2.5 bg-[#FDFCF7] border border-accent/30 rounded-full shadow-sm"
                      >
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-12">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase mb-6 flex items-center">
                    <span className="w-8 h-px bg-stone-200 mr-3" />
                    {t.ingredientsLabel}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.ingredients.map((ing, idx) => (
                      <div key={idx} className="bg-stone-50/50 rounded-[20px] p-4 flex items-center border border-stone-100">
                        <span className="text-[10px] font-bold text-stone-600 uppercase tracking-widest">
                          {ing.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Bar (Desktop) */}
              <div className="hidden lg:flex items-center space-x-4 mt-auto">
                <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm border border-stone-100">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-stone-400 hover:text-accent transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-lg font-bold w-12 text-center text-stone-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-stone-400 hover:text-accent transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <button 
                  onClick={() => onAddToCart({
                    ...product,
                    price: selectedVariant ? selectedVariant.price : product.price,
                    name: selectedVariant ? `${product.name} (${selectedVariant.label})` : product.name
                  }, quantity)}
                  className="flex-grow h-14 bg-accent hover:bg-accent/90 text-stone-900 font-bold px-10 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <span className="text-base">{t.addToCart}</span>
                  <div className="w-px h-4 bg-stone-900/20 mx-4" />
                  <span className="text-base">
                    {((selectedVariant ? selectedVariant.price : product.price) * quantity).toFixed(0)}dh
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-10 left-0 right-0 px-5 flex items-center justify-center space-x-3 z-[70]">
        <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-3 py-2 shadow-lg border border-white/20 h-[52px] flex-shrink-0">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 text-stone-400 hover:text-accent transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-base font-bold w-10 text-center text-stone-900">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 text-stone-400 hover:text-accent transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button 
          onClick={() => onAddToCart({
            ...product,
            price: selectedVariant ? selectedVariant.price : product.price,
            name: selectedVariant ? `${product.name} (${selectedVariant.label})` : product.name
          }, quantity)}
          className="flex-grow max-w-[240px] h-[52px] bg-accent hover:bg-accent/90 text-stone-900 font-bold px-6 rounded-full flex items-center justify-center shadow-xl shadow-accent/30 transition-all active:scale-[0.98] whitespace-nowrap"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest">{t.addToCart}</span>
            <div className="w-px h-3 bg-stone-900/20" />
            <span className="text-[10px]">
              {((selectedVariant ? selectedVariant.price : product.price) * quantity).toFixed(0)}dh
            </span>
          </div>
        </button>
      </div>
    </motion.div>
  );
}
