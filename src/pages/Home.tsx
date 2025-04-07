import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const { addItem } = useCart();

  const categories = [
    { id: 1, name: 'Fruits & Vegetables', image: '/images/fruits.jpg' },
    { id: 2, name: 'Dairy & Eggs', image: '/images/dairy.jpg' },
    { id: 3, name: 'Snacks & Beverages', image: '/images/snacks.jpg' },
    { id: 4, name: 'Personal Care', image: '/images/personal-care.jpg' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Fresh Apples', price: 99, image: '/images/apple.jpg' },
    { id: 2, name: 'Milk 1L', price: 60, image: '/images/milk.jpg' },
    { id: 3, name: 'Bread', price: 40, image: '/images/bread.jpg' },
    { id: 4, name: 'Eggs', price: 80, image: '/images/eggs.jpg' },
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Groceries delivered in minutes</h1>
            <p className="text-xl mb-8">Get your daily essentials delivered to your doorstep</p>
            <Link to="/products" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name.toLowerCase().replace(/ & /g, '-')}`}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
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
      </section>
    </div>
  );
};

export default Home; 