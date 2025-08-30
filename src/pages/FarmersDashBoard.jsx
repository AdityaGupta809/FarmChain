import { useState } from "react";
import { PlusCircle, Package, User, Settings, ClipboardList } from "lucide-react";

const Sidebar = ({ current, setCurrent }) => {
  const items = [
    { key: "profile", label: "Profile", icon: <User size={18} /> },
    { key: "listings", label: "My Listings", icon: <Package size={18} /> },
    { key: "create", label: "Create Listing", icon: <PlusCircle size={18} /> },
    { key: "orders", label: "Orders", icon: <ClipboardList size={18} /> },
    { key: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
        <div className="w-64 bg-[#0f172a] h-screen p-4 flex flex-col gap-2 border-r border-green-800 shadow-xl">
        <h2 className="text-xl font-bold text-green-400 mb-6 tracking-wide">🌾 Farmer Dashboard</h2>
        {items.map((item) => (
            <button
            key={item.key}
            onClick={() => setCurrent(item.key)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                current === item.key
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "text-gray-300 hover:bg-green-700/40 hover:text-white"
            }`}
            >
            <span className="text-green-300">{item.icon}</span>
            {item.label}
            </button>
        ))}
        </div>
  );
};

const ProfilePage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Profile</h1>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white shadow p-4 rounded-2xl">
        <h2 className="font-semibold mb-2">Farmer Info</h2>
        <p>Name: Ramesh Kumar</p>
        <p>Region: Dharwad, Karnataka</p>
        <p>Wallet: 0xabc...123</p>
      </div>
      <div className="bg-white shadow p-4 rounded-2xl">
        <h2 className="font-semibold mb-2">Reputation</h2>
        <p className="text-green-600 font-bold text-xl">⭐ 4.8 / 5</p>
        <p>Based on 23 trades</p>
      </div>
    </div>
  </div>
);

const MyListings = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Listings</h1>
    <div className="grid gap-4 md:grid-cols-2">
      {[1, 2].map((i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-4">
          <img src={`https://picsum.photos/200?random=${i}`} alt="crop" className="rounded-xl mb-2" />
          <h2 className="font-semibold">Organic Rice</h2>
          <p className="text-sm text-gray-600">₹45/kg · Dharwad</p>
          <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">Edit</button>
        </div>
      ))}
    </div>
  </div>
);

const CreateListing = () => (
  <div className="p-6 max-w-xl">
    <h1 className="text-2xl font-bold mb-4">Create New Listing</h1>
    <form className="space-y-4">
      <input type="text" placeholder="Crop Name" className="w-full border p-2 rounded-xl" />
      <input type="number" placeholder="Price per kg" className="w-full border p-2 rounded-xl" />
      <input type="number" placeholder="Quantity (kg)" className="w-full border p-2 rounded-xl" />
      <input type="file" className="w-full border p-2 rounded-xl" />
      <textarea placeholder="Description" className="w-full border p-2 rounded-xl"></textarea>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 shadow">
        Submit
      </button>
    </form>
  </div>
);

const Orders = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Orders</h1>
    <table className="w-full border-collapse bg-white shadow rounded-2xl">
      <thead>
        <tr className="bg-green-200 text-green-900">
          <th className="p-2 text-left">Order ID</th>
          <th className="p-2 text-left">Buyer</th>
          <th className="p-2 text-left">Crop</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">#101</td>
          <td className="p-2">Alice</td>
          <td className="p-2">Rice (50kg)</td>
          <td className="p-2"><span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg">Pending</span></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Setting = () => (
  <div className="p-6 max-w-xl">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <div className="space-y-4 bg-white shadow p-4 rounded-2xl">
      <div>
        <label className="block font-semibold mb-1">Bank Account</label>
        <input type="text" placeholder="IFSC / Account No" className="w-full border p-2 rounded-xl" />
      </div>
      <div>
        <label className="block font-semibold mb-1">Wallet Address</label>
        <input type="text" value="0xabc...123" readOnly className="w-full border p-2 rounded-xl bg-gray-100" />
      </div>
      <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">Save</button>
    </div>
  </div>
);

export default function FarmerDashboard() {
  const [current, setCurrent] = useState("profile");

  const renderPage = () => {
    switch (current) {
      case "profile": return <ProfilePage />;
      case "listings": return <MyListings />;
      case "create": return <CreateListing />;
      case "orders": return <Orders />;
      case "settings": return <Setting />;
      default: return <ProfilePage />;
    }
  };

  return (
    <div className="flex">
      <Sidebar current={current} setCurrent={setCurrent} />
      <div className="flex-1 bg-gray-50 min-h-screen">{renderPage()}</div>
    </div>
  );
}
