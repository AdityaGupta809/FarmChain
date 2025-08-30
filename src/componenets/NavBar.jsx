import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#0a1a2f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wide">
              🌱 FarmChain
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-400 transition">
              Home
            </Link>
            <Link to="/marketplace" className="hover:text-green-400 transition">
              Marketplace
            </Link>
            <Link to="/orders" className="hover:text-green-400 transition">
              My Orders
            </Link>
            <Link to="/farmer/dashboard" className="hover:text-green-400 transition">
              Farmer Dashboard
            </Link>
          </div>

            {/* Right: Connect Wallet Button */}
          <div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition">
              <Wallet size={18} />
              Farmers Signp
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}