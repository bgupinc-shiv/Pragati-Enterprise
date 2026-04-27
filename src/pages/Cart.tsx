import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, Tag, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center flex flex-col items-center max-w-7xl mx-auto px-4">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-8 text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-bold italic text-primary">Your cart is empty</h2>
        <p className="text-gray-500 mt-4 mb-10 max-w-xs">Looks like you haven't added anything to your cart yet. Let's find some styles for you.</p>
        <Link
          to="/shop"
          className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all shadow-xl"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-secondary/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary italic mb-10">Shopping Bag <span className="text-gray-400 not-italic font-medium ml-2">({cartCount} Items)</span></h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Items List */}
          <div className="flex-grow space-y-4">
            {cart.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`${item.id}-${item.selectedSize}-${item.selectedColor.name}`}
                className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-32 aspect-[3/4] bg-secondary rounded-2xl overflow-hidden shrink-0">
                  <img src={item.selectedColor.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-grow w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-primary italic truncate">{item.name}</h3>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1 flex items-center">
                        Size: {item.selectedSize} • Color: {item.selectedColor.name}
                        <span 
                          className="w-2.5 h-2.5 rounded-full ml-2 border border-black/5" 
                          style={{ backgroundColor: item.selectedColor.hex }}
                        ></span>
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor.name)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border-2 border-gray-100 rounded-xl px-2 py-1 bg-secondary/20">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
                        className="p-1.5 hover:text-accent transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
                        className="p-1.5 hover:text-accent transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₹{item.price * item.quantity}</p>
                      <p className="text-xs text-gray-400 font-medium italic">₹{item.price} / item</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link to="/shop" className="inline-flex items-center text-sm font-bold text-accent hover:underline mt-4 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              CONTINUE SHOPPING
            </Link>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-primary italic mb-6">Order Summary</h3>

              {/* Coupon */}
              <div className="mb-8">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Coupon Code</p>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                    <input
                      type="text"
                      placeholder="ENTER CODE"
                      className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-transparent rounded-xl text-sm font-bold uppercase transition-all focus:bg-white focus:border-accent outline-none"
                    />
                  </div>
                  <button className="px-5 py-3 bg-primary text-white text-xs font-bold rounded-xl hover:bg-accent transition-colors">
                    APPLY
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-primary">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Free</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Tax (GST)</span>
                  <span className="text-primary">₹{Math.round(cartTotal * 0.05)}</span>
                </div>
                <div className="pt-4 border-t border-dashed border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-bold text-primary italic">Estimated Total</span>
                  <span className="text-2xl font-bold text-accent">₹{cartTotal + Math.round(cartTotal * 0.05)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl flex items-center justify-center hover:bg-accent transition-all group"
              >
                PROCEED TO CHECKOUT
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-50 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Secure</p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 mx-auto opacity-40" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Delivery</p>
                  <p className="text-[10px] font-bold text-primary italic">Pan-India Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
