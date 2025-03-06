import React from 'react';
import { Mail, Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDF6F0] px-4 py-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">logo</span>
            </div>
          </div>

          {/* Most Loved Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">Most Loved Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Toys And Games</a></li>
              <li><a href="#" className="hover:text-gray-600">Sports And Outdoors</a></li>
              <li><a href="#" className="hover:text-gray-600">Jodhpuri Furniture</a></li>
              <li><a href="#" className="hover:text-gray-600">Cupboard Sets</a></li>
              <li><a href="#" className="hover:text-gray-600">Tissue Dispenser</a></li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">More</h3>
            <ul className="space-y-2">
              <li><a href="about" className="hover:text-gray-600">About Us</a></li>
              <li><a href="contact" className="hover:text-gray-600">Contact</a></li>
              <li><a href="news" className="hover:text-gray-600">NewsLetter</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-2">NEWS LETTER</h3>
            <p className="mb-4">Subscribe to our new channel to get updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Conversation Section */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>help@purav.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={20} />
              <span>Support Ticket</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p>@purav {currentYear}. All Rights Reserved</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-600"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-600"><Twitter size={20} /></a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Terms Of Services</a>
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;