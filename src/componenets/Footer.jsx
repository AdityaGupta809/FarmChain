// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">🌱 FarmChain</h2>
          <p className="mt-3 text-gray-400">
            Decentralized marketplace connecting farmers and buyers directly. 
            Fair prices, transparency, and trust on the blockchain.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/marketplace" className="hover:text-green-400">Marketplace</Link></li>
            <li><Link to="/orders" className="hover:text-green-400">My Orders</Link></li>
            <li><Link to="/farmer/dashboard" className="hover:text-green-400">Farmer Dashboard</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Docs</a></li>
            <li><a href="#" className="hover:text-green-400">Support</a></li>
            <li><a href="#" className="hover:text-green-400">Community</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-green-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-green-400"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} FarmChain. All rights reserved.
      </div>
    </footer>
  );
}
