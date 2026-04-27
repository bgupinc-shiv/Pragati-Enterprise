import { Product, Color } from '../types';

const genders: ('Men' | 'Women')[] = ['Men', 'Women'];
const categories = ['T-Shirts', 'Shirts', 'Boxers', 'Nightdress', 'Casual Wear', 'Summer Wear', 'Western Style'];

// Helper to get diverse images from Unsplash for specific categories and genders
const getImages = (gender: string, category: string, color: string, index: number) => {
  const keywords = {
    'T-Shirts': ['tshirt', 'tee', 'apparel'],
    'Shirts': ['shirt', 'formal shirt', 'casual shirt'],
    'Boxers': ['underwear', 'boxers', 'shorts'],
    'Nightdress': ['nightwear', 'pajamas', 'robe'],
    'Casual Wear': ['casual clothing', 'streetwear', 'lifestyle'],
    'Summer Wear': ['summer outfit', 'beachwear', 'vacation clothing'],
    'Western Style': ['fashion', 'style', 'trendy']
  };

  const key = keywords[category as keyof typeof keywords] || ['clothing'];
  const search = `${gender.toLowerCase()} ${color.toLowerCase()} ${key[index % key.length]}`;
  return `https://images.unsplash.com/photo-${1500000000000 + (index * 100000)}?auto=format&fit=crop&q=80&w=800&sig=${search.replace(/ /g, '-')}`;
};

// Actually, generating realistic color-mapped images automatically with Unsplash source ids is better
const imageSources = [
  '1521572163474-6864f9cf17ab', // Men T-shirt
  '1554568218-0f1715e72254', // Women T-shirt
  '1596755094514-f87e34085b2c', // Men Shirt
  '1615397587950-3cbb55f95b77', // Women Nightdress
  '1591195853828-11db59a44f6b', // Men Boxers
  '1618354691373-d851c5c3a99a', // Black T-shirt
  '1523381235199-2918953c4417', // White T-shirt
  '1583743814966-3bd8f967f651', // Grey T-shirt
  '1576566588028-4144fb446ee5', // Green T-shirt
  '1503342217505-b0a15ec3261c', // Women Black Tee
  '1503341455253-b2e72fbb0dbb', // Women Grey Tee
  '1603251578711-329432c7131c', // Blue Shirt
  '1589310243387-bc476baef3ef', // White Shirt
  '1621072156002-e2fcc103e707', // Checkered Shirt
  '1534030347209-467a5b0ad3e6', // Men Casual
  '1489987707025-afc232f7ea0f', // Women Casual
  '1515886657613-9f3515b0c78f', // Western Style
  '1539106622941-29cf339d3c2e', // Summer Style
  '1441984904996-e0b6ba687e04', // Shop vibe
  '1556905055-8f358a7a47b2', // Apparel vibe
];

const colors: Color[] = [
  { name: 'Black', hex: '#000000', image: `https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80&w=800` },
  { name: 'White', hex: '#FFFFFF', image: `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800` },
  { name: 'Navy', hex: '#000080', image: `https://images.unsplash.com/photo-1576566588028-4144fb446ee5?auto=format&fit=crop&q=80&w=800` },
  { name: 'Grey', hex: '#808080', image: `https://images.unsplash.com/photo-1583743814966-3bd8f967f651?auto=format&fit=crop&q=80&w=800` },
  { name: 'Olive', hex: '#556B2F', image: `https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800` },
  { name: 'Red', hex: '#FF0000', image: `https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800` },
];

const countries = ['US', 'UK', 'Canada'];

export const products: Product[] = [];

// Generate 30 products
for (let i = 1; i <= 30; i++) {
  const gender = genders[i % 2];
  const country = countries[i % 3];
  const category = categories[i % categories.length];
  
  // Custom naming based on country and style
  let prefix = country === 'US' ? 'Brooklyn' : country === 'UK' ? 'London' : 'Toronto';
  if (i % 5 === 0) prefix = 'Oxford';
  if (i % 7 === 0) prefix = 'Californian';
  
  const name = `${prefix} ${category} - ${gender}'s Collection`;
  
  // Dynamic color selection
  const productColors = colors.slice(0, 3 + (i % 4));
  
  // Each product gets its own color map
  const mappedColors = productColors.map((c, idx) => ({
    ...c,
    // Ensure every product color has a DIFFERENT image link by adding a unique sig
    image: `${c.image}&sig=prod-${i}-color-${idx}`
  }));

  products.push({
    id: `prod-${i}`,
    name,
    price: 1200 + (i * 50),
    originalPrice: 2000 + (i * 60),
    description: `A premium ${category.toLowerCase()} designed for the modern ${gender.toLowerCase()} in ${country}. Crafted with superior quality fabric for maximum comfort and a sophisticated Western look. Perfect for both casual outings and daily wear.`,
    category,
    gender,
    images: mappedColors.map(c => c.image),
    sizes: gender === 'Men' ? ['S', 'M', 'L', 'XL', 'XXL'] : ['XS', 'S', 'M', 'L', 'XL'],
    colors: mappedColors,
    rating: 4.0 + (i % 10) / 10,
    reviewsCount: 50 + (i * 12),
    inStock: true,
    featured: i % 5 === 0,
    newArrival: i % 4 === 0,
    fabric: i % 2 === 0 ? '100% Organic Cotton' : 'Premium Linen Blend'
  });
}


