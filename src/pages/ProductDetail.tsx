import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, RefreshCw, Minus, Plus, ShoppingCart, MessageCircle, Heart, Share2, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColorName, setSelectedColorName] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [displayedHeroImage, setDisplayedHeroImage] = useState<string>('');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedSize(prev => prev || product.sizes[0] || '');
      setSelectedColorName(prev => prev || product.colors[0]?.name || '');
      setDisplayedHeroImage(prev => prev || product.colors[0]?.image || product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    // Reset selections only when the specific product ID changes
    if (product) {
      const initialColor = product.colors[0];
      setSelectedSize(product.sizes[0] || '');
      setSelectedColorName(initialColor?.name || '');
      setDisplayedHeroImage(initialColor?.image || product.images[0]);
      setQuantity(1);
    }
  }, [id]);

  useEffect(() => {
    if (product && selectedColorName) {
      const colorObj = product.colors.find(c => c.name === selectedColorName);
      if (colorObj) {
        setDisplayedHeroImage(colorObj.image);
      }
    }
  }, [selectedColorName, product]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/shop" className="text-accent underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const colorObj = product.colors.find(c => c.name === selectedColorName);
    if (colorObj) {
      addToCart(product, selectedSize, colorObj, quantity);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 space-x-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-primary truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="flex-1 space-y-4">
            <div className="aspect-[4/5] bg-secondary rounded-3xl overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={displayedHeroImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={displayedHeroImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-primary hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
                <Heart size={20} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedColorName(color.name);
                    setDisplayedHeroImage(color.image);
                  }}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${displayedHeroImage === color.image ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-4">
            <div className="flex items-center space-x-2 text-accent mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i < Math.floor(product.rating) ? 'text-accent' : 'text-gray-200'} />
                ))}
              </div>
              <span className="text-xs font-bold">({product.reviewsCount} Customer Reviews)</span>
              <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase tracking-wider">In Stock</span>
            </div>

            <h1 className="text-4xl font-bold text-primary mb-2 italic tracking-tight">{product.name}</h1>
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-bold rounded">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-500 leading-relaxed mb-6 text-lg">
              {product.description}
            </p>
            
            <div className="space-y-2 mb-10">
              {product.fabric && (
                <p className="text-sm font-medium text-primary flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent mr-3"></span>
                  Fabric: <span className="text-gray-500 ml-2">{product.fabric}</span>
                </p>
              )}
              <p className="text-sm font-medium text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent mr-3"></span>
                Gender: <span className="text-gray-500 ml-2">{product.gender}</span>
              </p>
            </div>

            {/* Selection */}
            <div className="space-y-8 mb-10">
              {/* Color */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest">Select Color: <span className="text-gray-500 font-medium ml-2">{selectedColorName}</span></h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color, idx) => (
                    <button
                      key={`${color.name}-${idx}`}
                      type="button"
                      onClick={() => {
                        setSelectedColorName(color.name);
                        setDisplayedHeroImage(color.image);
                      }}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                        selectedColorName === color.name 
                        ? 'border-primary scale-110 shadow-lg ring-2 ring-primary/20' 
                        : 'border-gray-100 hover:border-accent'
                      }`}
                      title={color.name}
                    >
                      <div 
                        className="absolute inset-1 rounded-full border border-black/5" 
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      {selectedColorName === color.name && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                          <Check size={10} strokeWidth={4} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest">Select Size: <span className="text-gray-500 font-medium ml-2">{selectedSize}</span></h4>
                  <button className="text-[10px] font-bold text-accent underline flex items-center">
                    <Info size={12} className="mr-1" /> SIZE CHART
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 flex items-center justify-center rounded-xl border-2 font-bold transition-all ${selectedSize === size ? 'border-primary bg-primary text-white shadow-xl' : 'border-gray-100 text-gray-500 hover:border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quantity</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-gray-100 rounded-xl px-4 py-2 bg-secondary/30">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-accent transition-colors">
                      <Minus size={18} />
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-accent transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 font-medium italic">High Demand: Selling Fast!</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleAddToCart}
                className="flex-grow flex items-center justify-center p-5 bg-primary text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl group"
              >
                <ShoppingCart size={20} className="mr-3 group-hover:-translate-x-1 transition-transform" />
                ADD TO CART
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Truck size={18} />
                </div>
                <div className="text-[10px] uppercase font-bold leading-none tracking-widest">
                  Quick <br /><span className="text-gray-400">Delivery</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <RefreshCw size={18} />
                </div>
                <div className="text-[10px] uppercase font-bold leading-none tracking-widest">
                  Easy <br /><span className="text-gray-400">Returns</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-[10px] uppercase font-bold leading-none tracking-widest">
                  Quality <br /><span className="text-gray-400">Fabric</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="border-b border-gray-100 flex space-x-12 mb-10">
            {['description', 'fabric_care', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
              >
                {tab.replace('_', ' & ')}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
              </button>
            ))}
          </div>
          <div className="max-w-3xl leading-relaxed text-gray-500">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p>Elevate your everyday style with our {product.name}. Designed for the modern person who values both comfort and aesthetics, this piece is a testament to quality craftsmanship.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Regular fit for everyday versatility</li>
                  <li>Premium look with subtle branding</li>
                  <li>Reinforced stitching for durability</li>
                  <li>Ethically sourced and manufactured in India</li>
                </ul>
              </div>
            )}
            {activeTab === 'fabric_care' && (
              <div className="space-y-4">
                <p>Main Material: 100% Premium Bio-washed Cotton</p>
                <p>Weight: 180 GSM (Perfect balance of thickness & breathability)</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-secondary rounded-xl">
                    <h5 className="font-bold text-primary mb-1 uppercase text-[10px]">Washing</h5>
                    <p className="text-xs">Machine wash cold, delicate cycle.</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <h5 className="font-bold text-primary mb-1 uppercase text-[10px]">Drying</h5>
                    <p className="text-xs">Tumble dry low or line dry in shade.</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <p>We offer standard pan-India shipping for all our products.</p>
                <p><strong>Shipping Time:</strong> 3-5 business days.</p>
                <p><strong>Returns:</strong> We accept returns within 7 days of delivery for unworn items with tags attached. Please see our Return Policy for more details.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom (Mobile Only) */}
      <div className="lg:hidden fixed bottom-1 left-4 right-4 z-40">
        <button
          onClick={handleAddToCart}
          className="w-full p-4 bg-primary text-white font-bold rounded-2xl shadow-2xl flex items-center justify-center space-x-3 border border-white/10"
        >
          <ShoppingCart size={18} />
          <span>ADD TO CART • ₹{product.price}</span>
        </button>
      </div>
    </div>
  );
}
