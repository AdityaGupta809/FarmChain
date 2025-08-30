import { useState } from "react";
import { Package, CheckCircle, Clock } from "lucide-react";

export default function MyOrders() {
  // Mock orders for demo — you can replace with smart contract reads
  const [orders] = useState([
    {
      id: "ORD-001",
      crop: "Wheat",
      quantity: "100kg",
      price: "50 MON",
      status: "Delivered",
      date: "2025-08-28",
    },
    {
      id: "ORD-002",
      crop: "Rice",
      quantity: "200kg",
      price: "120 MON",
      status: "Pending",
      date: "2025-08-29",
    },
  ]);

  const statusColor = {
    Delivered: "text-green-400",
    Pending: "text-yellow-400",
    Cancelled: "text-red-400",
  };

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg shadow-lg">
          <thead className="bg-[#12263f]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Crop</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-[#1b2d4a] transition">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-green-400" />
                  {order.crop}
                </td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className={`px-6 py-4 font-semibold ${statusColor[order.status]}`}>
                  {order.status === "Delivered" && <CheckCircle className="inline h-5 w-5 mr-1" />}
                  {order.status === "Pending" && <Clock className="inline h-5 w-5 mr-1" />}
                  {order.status}
                </td>
                <td className="px-6 py-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
