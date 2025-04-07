import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const Products: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState<string>('price');
  const [filterPrice, setFilterPrice] = useState<number>(1000);
  const { addItem } = useCart();

  // Mock products data
  const products: Product[] = [
    { id: 1, name: 'Fresh Apples', price: 99, category: 'fruits', image: '/images/apple.jpg' },
    { id: 2, name: 'Milk 1L', price: 60, category: 'dairy', image: '/images/milk.jpg' },
    { id: 3, name: 'Bread', price: 40, category: 'bakery', image: '/images/bread.jpg' },
    { id: 4, name: 'Eggs', price: 80, category: 'dairy', image: '/images/eggs.jpg' },
    { id: 5, name: 'Bananas', price: 49, category: 'fruits', image: '/images/banana.jpg' },
    { id: 6, name: 'Cheese', price: 120, category: 'dairy', image: '/images/cheese.jpg' },
  ];

  const filteredProducts = products
    .filter(product => !category || product.category === category)
    .filter(product => product.price <= filterPrice)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Filters</h3>
            
            {/* Price Range Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price: ₹{filterPrice}
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={filterPrice}
                onChange={(e) => setFilterPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="price">Price: Low to High</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-primary font-bold">₹{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-2 bg-primary text-white py-2 rounded-md hover:bg-primary/90"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 