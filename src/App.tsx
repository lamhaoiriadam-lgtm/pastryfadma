import { useState } from 'react';
import { Navbar, SearchBar } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { FeaturedCard, ProductCard } from './components/ProductCards';
import { CartDrawer } from './components/CartDrawer';
import { MobileMenu } from './components/MobileMenu';
import { ProductPage } from './components/ProductPage';
import { CheckoutPage } from './components/CheckoutPage';
import { PRODUCTS, INITIAL_CART, CartItem, Product } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const t = translations.fr;
  
  const featuredProduct = PRODUCTS.find(p => p.featured) || PRODUCTS[0];
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS.filter(p => !p.featured)
    : PRODUCTS.filter(p => p.category === activeCategory);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const clearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-bg-warm pb-12 relative overflow-y-auto no-scrollbar ltr">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        onMenuClick={() => setIsMenuOpen(true)}
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
      />
      
      <div className="pt-32 max-w-7xl mx-auto">
        <SearchBar />
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {activeCategory === 'All' && featuredProduct && (
          <FeaturedCard 
            product={featuredProduct} 
            onAddToCart={(p) => addToCart(p)} 
            onClick={setSelectedProduct}
          />
        )}

        <div className="px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg lg:text-xl font-bold tracking-wider text-stone-900 uppercase">
              {t.ourCollections}
            </h2>
            <button className="text-xs font-bold tracking-widest text-accent uppercase hover:opacity-80 transition-opacity">
              {t.explore}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard 
                    product={product} 
                    onAddToCart={(p) => addToCart(p)} 
                    onClick={setSelectedProduct}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductPage 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)}
            onAddToCart={(p, q) => {
              addToCart(p, q);
              setSelectedProduct(null);
            }}
          />
        )}
      </AnimatePresence>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClear={clearCart}
        specialInstructions={specialInstructions}
        onUpdateInstructions={setSpecialInstructions}
        onCheckout={() => {
          setIsCartOpen(false);
          setShowCheckout(true);
        }}
      />

      <AnimatePresence>
        {showCheckout && (
          <CheckoutPage 
            items={cartItems}
            onBack={() => setShowCheckout(false)}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            specialInstructions={specialInstructions}
            onUpdateInstructions={setSpecialInstructions}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
