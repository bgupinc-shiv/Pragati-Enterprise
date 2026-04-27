import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Image/Shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1] serif">
              Trendy & Comfortable <br /> Clothing for Men <br /> and Women
            </h1>
            <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-sm">
              Shop quality T-shirts, shirts, boxers, nightwear and daily wear curated for the modern wardrobe. Crafted for your comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-accent/20 hover:brightness-110 transition-all duration-300 group"
              >
                Shop Now
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-white border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Collection
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center space-x-12"
          >
            <div>
              <p className="text-3xl font-bold text-primary">10k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Happy Customers</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Unique Styles</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-primary">24h</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Fast Delivery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
