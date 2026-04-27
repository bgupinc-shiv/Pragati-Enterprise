import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ChevronLeft, MapPin, Phone, User, Mail, CreditCard as CardIcon, Banknote } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert('Order placed successfully! Order ID: #PRT' + Math.floor(Math.random() * 90000 + 10000));
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Your bag is empty</h2>
        <Link to="/shop" className="text-accent underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-secondary/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-10">
          <Link to="/cart" className="p-2 bg-white rounded-full text-gray-400 hover:text-primary transition-colors">
            <ChevronLeft />
          </Link>
          <h1 className="text-3xl font-bold text-primary italic">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact & Shipping */}
          <div className="flex-grow space-y-8">
            {/* Contact Details */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary italic">Contact Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Phone Number</label>
                  <input required type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary italic">Shipping Address</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Flat / House No. / Street</label>
                  <textarea required rows={2} placeholder="H-1502, Sky High Towers, Near Textile Park" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all resize-none"></textarea>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">City</label>
                    <input required type="text" placeholder="Surat" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">State</label>
                    <input required type="text" placeholder="Gujarat" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                  </div>
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">Pincode</label>
                    <input required type="text" placeholder="395003" className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-accent outline-none font-medium transition-all" />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <CreditCard size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary italic">Payment Method</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex items-center p-6 rounded-2xl border-2 transition-all text-left ${paymentMethod === 'cod' ? 'border-primary bg-secondary/50' : 'border-gray-50 bg-white hover:border-gray-200'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-200'}`}>
                    {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Banknote size={18} className="mr-2 text-green-600" />
                      <h4 className="font-bold text-primary">Cash on Delivery</h4>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Pay when you receive</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('online')}
                  className={`flex items-center p-6 rounded-2xl border-2 transition-all text-left ${paymentMethod === 'online' ? 'border-primary bg-secondary/50' : 'border-gray-50 bg-white hover:border-gray-200'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${paymentMethod === 'online' ? 'border-primary' : 'border-gray-200'}`}>
                    {paymentMethod === 'online' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <CardIcon size={18} className="mr-2 text-accent" />
                      <h4 className="font-bold text-primary">Online Payment</h4>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Cards, UPI, NetBanking</p>
                  </div>
                </button>
              </div>
            </section>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-primary p-8 rounded-3xl shadow-2xl sticky top-24 text-white">
              <h3 className="text-xl font-bold italic mb-8">Order Review</h3>

              <div className="max-h-60 overflow-y-auto pr-2 space-y-4 mb-8 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4">
                    <div className="w-14 h-18 rounded-lg overflow-hidden shrink-0 border border-white/10">
                      <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs font-bold italic truncate">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Qt: {item.quantity} • {item.selectedSize}</p>
                    </div>
                    <p className="text-sm font-bold">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <span className="text-gray-400 italic">Shipping</span>
                  <span className="px-2 py-0.5 bg-accent text-[10px] font-bold rounded uppercase tracking-wider">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t border-white/10 italic">
                  <span>Total Payable</span>
                  <span className="text-accent">₹{cartTotal}</span>
                </div>
              </div>

              <button
                disabled={isProcessing}
                type="submit"
                className="w-full py-5 bg-white text-primary font-bold rounded-2xl hover:bg-accent hover:text-white transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-center uppercase tracking-widest text-sm"
              >
                {isProcessing ? 'Processing Order...' : 'Place Secure Order'}
              </button>

              <div className="mt-8 flex items-center justify-center space-x-6 opacity-30 grayscale invert">
                <Truck size={20} />
                <ShieldCheck size={20} />
                <CreditCard size={20} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
