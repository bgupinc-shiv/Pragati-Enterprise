import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border-beige p-2"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
        {product.newArrival && (
          <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="px-2.5 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-5 right-5 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <button className="p-3 bg-white rounded-full shadow-xl text-primary hover:bg-accent hover:text-white transition-all transform hover:scale-110 active:scale-95">
          <Heart size={18} />
        </button>
        <button
          onClick={handleQuickAdd}
          className="p-3 bg-white rounded-full shadow-xl text-primary hover:bg-accent hover:text-white transition-all transform hover:scale-110 active:scale-95"
        >
          <ShoppingCart size={18} />
        </button>
      </div>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
        
        {/* Quick Color View */}
        <div className="absolute bottom-3 left-3 flex gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {product.colors.slice(0, 4).map((color) => (
            <div 
              key={color.name}
              className="w-3 h-3 rounded-full border border-white/50 shadow-sm"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[8px] text-white font-bold bg-black/20 rounded px-1 flex items-center">+{product.colors.length - 4}</span>
          )}
        </div>
      </Link>

      {/* Details */}
      <div className="p-4 pt-5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            {product.category} • {product.gender}
          </p>
          <div className="flex items-center text-[10px] font-bold text-accent">
            <Star size={10} fill="currentColor" className="mr-1" />
            {product.rating}
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-serif italic text-primary group-hover:text-accent transition-colors truncate mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through opacity-60">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Action (Desktop Hover) */}
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-[9px] w-6 h-6 flex items-center justify-center bg-beige-light text-primary/60 rounded-md font-bold transition-all hover:bg-accent hover:text-white cursor-default">
                {size}
              </span>
            ))}
          </div>
          <button
            onClick={handleQuickAdd}
            className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center"
          >
            Quick Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
