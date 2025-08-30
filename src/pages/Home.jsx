// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { ShoppingBag, Leaf, Tractor } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#0a1a2f] min-h-screen text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Empowering <span className="text-green-400">Farmers</span>,  
          Connecting <span className="text-green-400">Buyers</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          FarmChain is a decentralized marketplace where farmers sell directly to buyers. 
          Fair prices, transparency, and trust on the blockchain.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/marketplace"
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition"
          >
            Explore Marketplace
          </Link>
          <Link
            to="/farmer/dashboard"
            className="px-6 py-3 rounded-xl border border-green-500 hover:bg-green-500 hover:text-white transition"
          >
            Farmer Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0d2238] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl bg-[#11294b] shadow-md hover:shadow-lg transition">
            <Leaf size={40} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Organic Produce</h3>
            <p className="text-gray-300">
              Buy fresh, chemical-free crops directly from farmers.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#11294b] shadow-md hover:shadow-lg transition">
            <ShoppingBag size={40} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
            <p className="text-gray-300">
              Farmers get fair prices with no middlemen involved.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#11294b] shadow-md hover:shadow-lg transition">
            <Tractor size={40} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Trust</h3>
            <p className="text-gray-300">
              Secure transactions and transparent supply chains powered by blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join the <span className="text-green-400">Future of Farming</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Start buying fresh produce or become a seller today. Empower rural communities and 
          bring transparency to agriculture.
        </p>
        <div className="mt-6">
          <Link
            to="/marketplace"
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
