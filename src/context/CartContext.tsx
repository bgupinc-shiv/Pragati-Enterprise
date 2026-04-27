import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { CartItem, Product, Color } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: Color, quantity: number) => void;
  removeFromCart: (id: string, size: string, colorName: string) => void;
  updateQuantity: (id: string, size: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size: string, color: Color, quantity: number) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor.name === color.name
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor.name === color.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Remove colors array from item storage to save space and match CartItem type Omit
      const { colors, ...productBase } = product;
      return [...prev, { ...productBase, selectedSize: size, selectedColor: color, quantity }];
    });
  };

  const removeFromCart = (id: string, size: string, colorName: string) => {
    setCart((prev) => prev.filter(
      (item) => !(item.id === id && item.selectedSize === size && item.selectedColor.name === colorName)
    ));
  };

  const updateQuantity = (id: string, size: string, colorName: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size && item.selectedColor.name === colorName
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
