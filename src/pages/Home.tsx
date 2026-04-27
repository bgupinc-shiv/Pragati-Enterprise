import Hero from '../components/Home/Hero';
import ProductCard from '../components/Product/ProductCard';
import { products } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RefreshCcw, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);
  const newArrivals = products.filter(p => p.newArrival);

  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800', count: 120 },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800', count: 156 },
    { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', count: 86 },
    { name: 'Shirts', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=800', count: 42 },
  ];

  return (
    <div className="pb-20">
      <Hero />

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-beige-light flex items-center justify-center text-accent mb-4">
                <Truck size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Fast Delivery</h4>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">Across India</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-beige-light flex items-center justify-center text-accent mb-4">
                <RefreshCcw size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Easy Returns</h4>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">7-Day Return Policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-beige-light flex items-center justify-center text-accent mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Secure Payment</h4>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">100% Encrypted</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-beige-light flex items-center justify-center text-accent mb-4">
                <Zap size={24} />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Quality Fabric</h4>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">Premium Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-primary italic">Shop by Category</h2>
              <p className="text-gray-500 mt-2 text-sm italic">Explore our collections for every occasion.</p>
            </div>
            <Link to="/shop" className="text-accent text-xs uppercase font-bold tracking-widest flex items-center hover:underline">
              View All <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link key={idx} to={`/shop?category=${cat.name}`} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm border border-border-beige">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif italic">{cat.name}</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1">{cat.count} Items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-primary italic">New Arrivals</h2>
            <Link to="/shop?sort=newest" className="text-accent text-xs uppercase font-bold tracking-widest flex items-center hover:underline">
              Discovery More <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-white/5 shadow-2xl">
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <span className="text-accent font-bold uppercase tracking-[.4em] text-[10px]">Limited Time Offer</span>
              <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight font-serif italic">Flat 20% Off on <br /> Your First Order</h2>
              <p className="text-gray-400 mb-8 max-w-sm italic">Use code: <span className="text-white font-bold tracking-widest not-italic">WELCOME20</span> at checkout.</p>
              <Link to="/shop" className="inline-flex items-center px-10 py-3.5 bg-accent text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-accent/20 hover:brightness-110 transition-all duration-300">
                Claim Offer
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white" preserveAspectRatio="none">
                <path d="M 0 0 Q 50 100 100 0" fill="none" stroke="currentColor" strokeWidth="0.1" />
              </svg>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=800"
                alt="Banner Image"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary border-y border-border-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-primary mb-4 font-serif italic">Join Our Community</h2>
          <p className="text-gray-500 mb-10 text-sm max-w-lg mx-auto italic">Subscribe to receive updates, access to exclusive deals, and more curated content directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-8 py-4 rounded-full border border-border-beige focus:outline-none focus:ring-1 focus:ring-accent bg-white text-sm"
              required
            />
            <button type="submit" className="px-10 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/10">
              Subscribe Now
            </button>
          </form>
          <p className="text-[9px] text-gray-400 mt-6 uppercase tracking-[.3em] font-bold">Privacy preserved. No spam.</p>
        </div>
      </section>
    </div>
  );
}
