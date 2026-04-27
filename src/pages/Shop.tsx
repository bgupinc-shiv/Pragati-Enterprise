import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/mockData';
import ProductCard from '../components/Product/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filters State
  const activeGender = searchParams.get('gender') || 'All';
  const activeCategory = searchParams.get('category') || 'All';
  const activeCountry = searchParams.get('country') || 'All';
  const activeColor = searchParams.get('color') || 'All';
  const activeSort = searchParams.get('sort') || 'newest';

  const categories = ['All', 'T-Shirts', 'Shirts', 'Boxers', 'Nightdress'];
  const genders = ['All', 'Men', 'Women'];
  const origins = ['All', 'US', 'UK', 'CA'];
  const colors = ['All', 'Black', 'White', 'Blue', 'Red', 'Green', 'Navy', 'Grey', 'Pink', 'Cream', 'Olive'];
  const sorts = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Best Selling', value: 'best-selling' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeGender !== 'All') {
      result = result.filter((p) => p.gender === activeGender);
    }

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeCountry !== 'All') {
      result = result.filter((p) => p.id.includes(`-${activeCountry.toLowerCase()}-`));
    }

    if (activeColor !== 'All') {
      result = result.filter((p) => p.colors.some(c => c.name === activeColor));
    }

    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Mocking newest/best selling as id based if no other logic
        break;
    }

    return result;
  }, [activeGender, activeCategory, activeCountry, activeColor, activeSort]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-32 pb-20 bg-beige-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif italic text-primary">Our Collections</h1>
            <p className="text-gray-500 text-[11px] uppercase tracking-widest mt-2 font-bold opacity-70">A Curated selection of {filteredProducts.length} Premium Pieces</p>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-0 w-full md:w-auto">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-6 py-2.5 bg-white rounded-full border border-border-beige text-[11px] uppercase tracking-widest font-bold shadow-sm md:hidden w-full justify-center"
            >
              <Filter size={14} />
              <span>Filters</span>
            </button>

            <div className="relative group hidden md:block">
              <button className="flex items-center space-x-2 px-6 py-2.5 bg-white rounded-full border border-border-beige text-[11px] uppercase tracking-widest font-bold shadow-sm">
                <span>Sort By: {sorts.find(s => s.value === activeSort)?.label}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border-beige opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-20 overflow-hidden">
                {sorts.map((sort) => (
                  <button
                    key={sort.value}
                    onClick={() => updateFilter('sort', sort.value)}
                    className="block w-full text-left px-5 py-4 text-[11px] uppercase tracking-wider hover:bg-beige-light transition-colors font-bold border-b border-border-beige last:border-0 text-primary"
                  >
                    {sort.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 shrink-0 space-y-12">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[.3em] text-accent mb-8 border-b border-border-beige pb-4 italic">The Gender</h4>
              <div className="space-y-4">
                {genders.map((gender) => (
                  <label key={gender} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="gender"
                      checked={activeGender === gender}
                      onChange={() => updateFilter('gender', gender)}
                      className="hidden"
                    />
                    <span className={`w-3.5 h-3.5 rounded-full border border-border-beige mr-3 flex items-center justify-center transition-all ${activeGender === gender ? 'bg-accent' : 'bg-white group-hover:border-accent'}`}>
                      {activeGender === gender && <div className="w-1 h-1 rounded-full bg-white"></div>}
                    </span>
                    <span className={`text-[11px] uppercase tracking-widest font-bold ${activeGender === gender ? 'text-primary' : 'text-gray-400 group-hover:text-accent'}`}>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[.3em] text-accent mb-8 border-b border-border-beige pb-4 italic">The Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', cat)}
                    className={`block w-full text-left text-[11px] uppercase tracking-widest font-bold transition-all py-1.5 ${activeCategory === cat ? 'text-accent border-l-2 border-accent pl-4' : 'text-gray-400 hover:text-accent border-l-2 border-transparent pl-4'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[.3em] text-accent mb-8 border-b border-border-beige pb-4 italic">The Origin</h4>
              <div className="space-y-2">
                {origins.map((country) => (
                  <button
                    key={country}
                    onClick={() => updateFilter('country', country)}
                    className={`block w-full text-left text-[11px] uppercase tracking-widest font-bold transition-all py-1.5 ${activeCountry === country ? 'text-accent border-l-2 border-accent pl-4' : 'text-gray-400 hover:text-accent border-l-2 border-transparent pl-4'}`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[.3em] text-accent mb-8 border-b border-border-beige pb-4 italic">The Palette</h4>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateFilter('color', color)}
                    className={`w-8 h-8 rounded-full border transition-all flex items-center justify-center ${activeColor === color ? 'border-primary ring-2 ring-primary/20 scale-110 shadow-md' : 'border-border-beige hover:border-gray-300'}`}
                    style={color !== 'All' ? { backgroundColor: products.find(p => p.colors.some(c => c.name === color))?.colors.find(c => c.name === color)?.hex || '#ccc' } : {}}
                    title={color}
                  >
                    {color === 'All' && <span className="text-[8px] font-bold">ALL</span>}
                    {activeColor === color && color !== 'All' && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm border border-black/10"></div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[.3em] text-accent mb-8 border-b border-border-beige pb-4 italic">Price Spectrum</h4>
              <div className="space-y-6">
                <input type="range" className="w-full accent-accent h-1 bg-border-beige rounded-lg appearance-none cursor-pointer" min="0" max="5000" />
                <div className="flex justify-between text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  <span>₹0</span>
                  <span>₹5,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center shadow-sm">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                  <X size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary italic">No items found</h3>
                <p className="text-gray-500 mt-2 mb-8">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-[70] shadow-2xl p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold italic">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 -mr-2">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-12 overflow-y-auto max-h-[80vh] pr-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[.2em] text-accent mb-6">Gender</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {genders.map((gender) => (
                      <button
                        key={gender}
                        onClick={() => updateFilter('gender', gender)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${activeGender === gender ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-500'}`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[.2em] text-accent mb-6">Category</h4>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => updateFilter('category', cat)}
                        className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? 'bg-secondary text-accent font-bold' : 'text-gray-500'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg border border-primary hover:bg-accent transition-all"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
