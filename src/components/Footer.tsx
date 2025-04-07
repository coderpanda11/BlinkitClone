import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Blinkit</h3>
            <p className="text-gray-600">
              Groceries delivered in minutes
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/fruits" className="text-gray-600 hover:text-primary">Fruits & Vegetables</Link></li>
              <li><Link to="/category/dairy" className="text-gray-600 hover:text-primary">Dairy & Eggs</Link></li>
              <li><Link to="/category/snacks" className="text-gray-600 hover:text-primary">Snacks & Beverages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: support@blinkit.com</li>
              <li className="text-gray-600">Phone: +91 1234567890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blinkit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 