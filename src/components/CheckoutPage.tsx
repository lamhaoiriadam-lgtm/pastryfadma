import { ChevronLeft, MapPin, Edit2, Trash2, Minus, Plus, ArrowRight, User, Phone, Clock, Calendar, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { useState } from 'react';
import { InlineTimePicker } from './InlineTimePicker';
import { translations } from '../translations';

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  specialInstructions: string;
  onUpdateInstructions: (val: string) => void;
}

export function CheckoutPage({ 
  items, 
  onBack, 
  onUpdateQuantity, 
  onRemoveItem,
  specialInstructions,
  onUpdateInstructions
}: CheckoutPageProps) {
  const t = translations.fr;
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    pickupTime: '12:00'
  });
  const [errors, setErrors] = useState<string[]>([]);
  
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' ? 50 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    const newErrors: string[] = [];
    
    // Name validation: Letters and spaces only, at least 2 characters
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
    if (!formData.fullName.trim() || !nameRegex.test(formData.fullName.trim())) {
      newErrors.push('fullName');
    }

    // Phone validation: Moroccan format (+212 or 0 followed by 9 digits)
    // Allows spaces, dots, hyphens
    const phoneRegex = /^(?:\+212|0)[5-7]\d{8}$/;
    const cleanPhone = formData.phoneNumber.replace(/[\s.-]/g, '');
    if (!formData.phoneNumber.trim() || !phoneRegex.test(cleanPhone)) {
      newErrors.push('phoneNumber');
    }

    if (deliveryType === 'delivery' && !formData.address.trim()) {
      newErrors.push('address');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      let alertMsg = 'Veuillez corriger les erreurs suivantes :\n';
      if (newErrors.includes('fullName')) alertMsg += '- Nom invalide (lettres uniquement)\n';
      if (newErrors.includes('phoneNumber')) alertMsg += '- Numéro de téléphone invalide (ex: 0612345678)\n';
      if (newErrors.includes('address')) alertMsg += '- Adresse de livraison manquante\n';
      
      alert(alertMsg);
      return;
    }

    setErrors([]);
    const whatsappNumber = '+212754706569';
    
    let orderDetails = items.map(item => `- ${item.name} x${item.quantity} (${(item.price * item.quantity).toFixed(0)}dh)`).join('\n');
    
    const message = `*Nouvelle Commande FADMA* 🥐\n\n` +
      `*Client:* ${formData.fullName}\n` +
      `*Téléphone:* ${formData.phoneNumber}\n\n` +
      `*Détails de la Commande:*\n${orderDetails}\n\n` +
      (specialInstructions.trim() ? `*Instructions Spéciales:* ${specialInstructions}\n\n` : '') +
      `*Type:* ${deliveryType === 'delivery' ? 'Livraison 🚚' : 'Retrait en boutique 🏪'}\n` +
      (deliveryType === 'delivery' ? `*Adresse:* ${formData.address}\n` : `*Heure de retrait:* ${formData.pickupTime}\n`) +
      `\n*Total:* ${total.toFixed(0)}dh\n\n` +
      `Merci pour votre commande ! ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 bg-white z-[80] flex flex-col overflow-hidden ltr"
    >
      {/* Header */}
      <div className="px-8 py-6 flex items-center bg-white border-b border-stone-100">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center text-stone-900 hover:bg-stone-50 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="flex-grow text-center text-xl font-bold text-stone-900 mr-10">
          {t.checkout}
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto no-scrollbar bg-stone-50/30">
        <div className="max-w-2xl mx-auto px-8 py-8 space-y-8">
          
          {/* Delivery Toggle */}
          <div className="bg-stone-100 p-1 rounded-2xl flex">
            <button 
              onClick={() => setDeliveryType('delivery')}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                deliveryType === 'delivery' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'
              }`}
            >
              Livraison
            </button>
            <button 
              onClick={() => setDeliveryType('pickup')}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                deliveryType === 'pickup' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'
              }`}
            >
              Retrait
            </button>
          </div>

          {/* Conditional Form */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                {deliveryType === 'delivery' ? (
                  <MapPin className="w-4 h-4 text-accent" />
                ) : (
                  <Clock className="w-4 h-4 text-accent" />
                )}
              </div>
              <h2 className="text-lg font-bold text-stone-900">
                {deliveryType === 'delivery' ? 'Détails de Livraison' : 'Détails du Retrait'}
              </h2>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm space-y-6">
              {/* Common Fields */}
              <div className="space-y-1">
                <label className={`block text-sm font-serif font-bold ml-1 transition-colors ${errors.includes('fullName') ? 'text-red-500' : 'text-stone-900'}`}>Nom Complet</label>
                <div className="relative">
                  <User className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.includes('fullName') ? 'text-red-400' : 'text-accent/40'}`} />
                  <input 
                    type="text"
                    placeholder="Entrez votre nom complet"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.includes('fullName')) setErrors(errors.filter(e => e !== 'fullName'));
                    }}
                    className={`w-full pl-7 py-3 bg-transparent border-b outline-none placeholder:text-stone-200 transition-colors text-sm ${
                      errors.includes('fullName') ? 'border-red-500 focus:border-red-600' : 'border-stone-100 focus:border-accent'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={`block text-sm font-serif font-bold ml-1 transition-colors ${errors.includes('phoneNumber') ? 'text-red-500' : 'text-stone-900'}`}>Numéro de Téléphone</label>
                <div className="relative">
                  <Phone className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.includes('phoneNumber') ? 'text-red-400' : 'text-accent/40'}`} />
                  <input 
                    type="tel"
                    placeholder="+212 6XX XXX XXX"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.includes('phoneNumber')) setErrors(errors.filter(e => e !== 'phoneNumber'));
                    }}
                    className={`w-full pl-7 py-3 bg-transparent border-b outline-none placeholder:text-stone-200 transition-colors text-sm ${
                      errors.includes('phoneNumber') ? 'border-red-500 focus:border-red-600' : 'border-stone-100 focus:border-accent'
                    }`}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {deliveryType === 'delivery' ? (
                  <motion.div 
                    key="delivery"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-1"
                  >
                    <label className={`block text-sm font-serif font-bold ml-1 transition-colors ${errors.includes('address') ? 'text-red-500' : 'text-stone-900'}`}>Adresse de Livraison Complète</label>
                    <textarea 
                      placeholder="Nom de la rue, numéro du bâtiment, appartement..."
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        if (errors.includes('address')) setErrors(errors.filter(e => e !== 'address'));
                      }}
                      className={`w-full py-3 bg-transparent border-b outline-none placeholder:text-stone-200 transition-colors text-sm resize-none h-24 ${
                        errors.includes('address') ? 'border-red-500 focus:border-red-600' : 'border-stone-100 focus:border-accent'
                      }`}
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="pickup"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4 flex flex-col items-center"
                  >
                    <div className="w-full space-y-2">
                      <label className="block text-xs font-serif font-bold text-stone-400 uppercase tracking-widest text-center">
                        Heure de Retrait Préférée
                      </label>
                      <div className="flex justify-center">
                        <InlineTimePicker 
                          selectedTime={formData.pickupTime}
                          onSelect={(time) => setFormData({ ...formData, pickupTime: time })}
                        />
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-400 italic text-center max-w-[240px] leading-relaxed">
                      Notre équipe s'assurera que votre commande est fraîche et prête à être récupérée à l'heure choisie.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-stone-900">Articles de la Commande</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-[32px] border border-stone-100 shadow-sm flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-stone-900 truncate">{item.name}</h3>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-stone-300 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[10px] text-stone-400 font-medium mb-3">Boîte de 12 pcs • Recette Traditionnelle</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold">
                        {item.price.toFixed(0)}
                        {item.boxInfo ? `dh / ${item.boxInfo}` : 'dh / pièce'}
                      </span>
                      <div className="flex items-center bg-stone-50 rounded-full px-2 py-1 space-x-3 border border-stone-100">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className={`p-1 transition-colors ${item.quantity <= 1 ? 'text-stone-200 cursor-not-allowed' : 'text-stone-400 hover:text-accent'}`}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center text-stone-900">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-stone-400 hover:text-accent transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-accent" />
              </div>
              <h2 className="text-lg font-bold text-stone-900">Instructions Spéciales</h2>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm">
              <textarea 
                placeholder="Ajoutez un message cadeau ou des instructions de livraison..."
                value={specialInstructions}
                onChange={(e) => onUpdateInstructions(e.target.value)}
                className="w-full h-32 p-0 bg-transparent border-none focus:ring-0 text-stone-900 placeholder:text-stone-200 transition-colors text-sm resize-none"
              />
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-stone-900 mb-6">Résumé du Paiement</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-stone-400 text-sm">
                <span>Sous-total</span>
                <span className="font-bold text-stone-900">{subtotal.toFixed(0)}dh</span>
              </div>
              <div className="flex justify-between text-stone-400 text-sm">
                <span>Frais de Livraison</span>
                <span className="font-bold text-stone-900">{deliveryFee.toFixed(0)}dh</span>
              </div>
              <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                <span className="text-lg font-bold text-stone-900">Montant Total</span>
                <span className="text-2xl font-bold text-accent">{total.toFixed(0)}dh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-8 pt-4 pb-10 bg-white border-t border-stone-100 flex flex-col items-center">
        <button 
          onClick={handleCheckout}
          className="w-full max-w-md h-14 bg-accent hover:bg-accent/90 text-stone-900 font-bold px-8 rounded-full flex items-center justify-center shadow-xl shadow-accent/30 transition-all active:scale-[0.98] mb-4"
        >
          <span className="text-lg">Passer la Commande</span>
          <ArrowRight className="w-5 h-5 ml-3" />
        </button>
      </div>
    </motion.div>
  );
}
