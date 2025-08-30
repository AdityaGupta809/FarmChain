// import { useState } from "react";
// import { ShoppingCart, Leaf } from "lucide-react";

// export default function Marketplace() {
//   const [crops] = useState([
//     {
//       id: 1,
//       name: "Wheat",
//       farmer: "Aditya Farms",
//       price: "50 MON",
//       quantity: "100 kg",
//       image: "https://picsum.photos/200?random=1",
//     },
//     {
//       id: 2,
//       name: "Rice",
//       farmer: "Green Valley",
//       price: "60 MON",
//       quantity: "200 kg",
//       image: "https://picsum.photos/200?random=2",
//     },
//     {
//       id: 3,
//       name: "Corn",
//       farmer: "Harvest Co.",
//       price: "40 MON",
//       quantity: "150 kg",
//       image: "https://picsum.photos/200?random=3",
//     },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#0a1a2f] text-white px-6 py-10">
//       <h1 className="text-3xl font-bold mb-8">🌾 Marketplace</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-700 rounded-lg shadow-lg">
//           <thead className="bg-[#12263f]">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Crop</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Farmer</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Quantity</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-700">
//             {crops.map((crop) => (
//               <tr key={crop.id} className="hover:bg-[#1b2d4a] transition">
//                 <td className="px-6 py-4">
//                   <img
//                     src={crop.image}
//                     alt={crop.name}
//                     className="h-12 w-12 rounded-lg object-cover"
//                   />
//                 </td>
//                 <td className="px-6 py-4 flex items-center gap-2">
//                   <Leaf className="h-5 w-5 text-green-400" />
//                   {crop.name}
//                 </td>
//                 <td className="px-6 py-4">{crop.farmer}</td>
//                 <td className="px-6 py-4">{crop.quantity}</td>
//                 <td className="px-6 py-4 text-green-400 font-semibold">{crop.price}</td>
//                 <td className="px-6 py-4">
//                   <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition">
//                     <ShoppingCart size={18} />
//                     Buy
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { ShoppingCart, Leaf, X } from "lucide-react";

// export default function Marketplace() {
//   const [crops] = useState([
//     {
//       id: 1,
//       name: "Wheat",
//       farmer: "Aditya Farms",
//       price: "50 MON",
//       quantity: "100 kg",
//       image: "/wheat.jpg",
//     },
//     {
//       id: 2,
//       name: "Rice",
//       farmer: "Green Valley",
//       price: "60 MON",
//       quantity: "200 kg",
//       image: "/rice.jpg",
//     },
//     {
//       id: 3,
//       name: "Corn",
//       farmer: "Harvest Co.",
//       price: "40 MON",
//       quantity: "150 kg",
//       image: "/corn.jpg",
//     },
//   ]);

//   const [selectedCrop, setSelectedCrop] = useState(null);
//   const [quantity, setQuantity] = useState("");

//   const handleBuy = (crop) => {
//     setSelectedCrop(crop);
//     setQuantity("");
//   };

//   const handleConfirmPurchase = () => {
//     alert(
//       `You bought ${quantity} of ${selectedCrop.name} from ${selectedCrop.farmer}`
//     );
//     setSelectedCrop(null);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a1a2f] text-white px-6 py-10">
//       <h1 className="text-3xl font-bold mb-8">🌾 Marketplace</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-700 rounded-lg shadow-lg">
//           <thead className="bg-[#12263f]">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Crop</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Farmer</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Quantity</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-700">
//             {crops.map((crop) => (
//               <tr key={crop.id} className="hover:bg-[#1b2d4a] transition">
//                 <td className="px-6 py-4">
//                   <img
//                     src={crop.image}
//                     alt={crop.name}
//                     className="h-12 w-12 rounded-lg object-cover"
//                   />
//                 </td>
//                 <td className="px-6 py-4 flex items-center gap-2">
//                   <Leaf className="h-5 w-5 text-green-400" />
//                   {crop.name}
//                 </td>
//                 <td className="px-6 py-4">{crop.farmer}</td>
//                 <td className="px-6 py-4">{crop.quantity}</td>
//                 <td className="px-6 py-4 text-green-400 font-semibold">
//                   {crop.price}
//                 </td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleBuy(crop)}
//                     className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition"
//                   >
//                     <ShoppingCart size={18} />
//                     Buy
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {selectedCrop && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-[#12263f] p-6 rounded-2xl shadow-xl w-96 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedCrop(null)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//             >
//               <X size={20} />
//             </button>

//             <h2 className="text-xl font-bold mb-4">
//               Buy {selectedCrop.name} from {selectedCrop.farmer}
//             </h2>
//             <p className="text-sm text-gray-400 mb-2">
//               Price: <span className="text-green-400">{selectedCrop.price}</span>
//             </p>
//             <p className="text-sm text-gray-400 mb-4">
//               Available: {selectedCrop.quantity}
//             </p>

//             {/* Quantity Input */}
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               placeholder="Enter quantity (kg)"
//               className="w-full px-4 py-2 rounded-lg bg-[#0a1a2f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
//             />

//             {/* Confirm Button */}
//             <button
//               onClick={handleConfirmPurchase}
//               disabled={!quantity}
//               className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
//             >
//               Confirm Purchase
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import { useState } from "react";
import { ShoppingCart, Leaf, X } from "lucide-react";

export default function Marketplace() {
  const [crops] = useState([
    {
      id: 1,
      name: "Wheat",
      farmer: "Aditya Farms",
      price: "50 MON", // per kg
      quantity: 100, // in kg
      image: "/wheat.jpg",
    },
    {
      id: 2,
      name: "Rice",
      farmer: "Green Valley",
      price: "60 MON",
      quantity: 200,
      image: "/rice.jpg",
    },
    {
      id: 3,
      name: "Corn",
      farmer: "Harvest Co.",
      price: "40 MON",
      quantity: 150,
      image: "/corn.jpg",
    },
  ]);

  const [selectedCrop, setSelectedCrop] = useState(null);
  const [quantity, setQuantity] = useState("");

  const handleBuy = (crop) => {
    setSelectedCrop(crop);
    setQuantity("");
  };

  const handleConfirmPurchase = () => {
    alert(
      `You bought ${quantity} kg of ${selectedCrop.name} from ${selectedCrop.farmer} for ${totalPrice} MON`
    );
    setSelectedCrop(null);
  };

  // calculate price
  const unitPrice = selectedCrop
    ? parseInt(selectedCrop.price.split(" ")[0])
    : 0;
  const totalPrice = quantity ? unitPrice * quantity : 0;

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">🌾 Marketplace</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg shadow-lg">
          <thead className="bg-[#12263f]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Crop</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Farmer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Available</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price (per kg)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {crops.map((crop) => (
              <tr key={crop.id} className="hover:bg-[#1b2d4a] transition">
                <td className="px-6 py-4">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-400" />
                  {crop.name}
                </td>
                <td className="px-6 py-4">{crop.farmer}</td>
                <td className="px-6 py-4">{crop.quantity} kg</td>
                <td className="px-6 py-4 text-green-400 font-semibold">
                  {crop.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleBuy(crop)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition"
                  >
                    <ShoppingCart size={18} />
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#12263f] p-6 rounded-2xl shadow-xl w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCrop(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">
              Buy {selectedCrop.name} from {selectedCrop.farmer}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              Price per kg:{" "}
              <span className="text-green-400">{selectedCrop.price}</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Available: {selectedCrop.quantity} kg
            </p>

            {/* Quantity Input */}
            <input
              type="number"
              value={quantity}
              min={1}
              max={selectedCrop.quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity (kg)"
              className="w-full px-4 py-2 rounded-lg bg-[#0a1a2f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            />

            {/* Show total price */}
            {quantity && (
              <p className="text-sm text-gray-300 mb-4">
                Total Price:{" "}
                <span className="text-green-400 font-semibold">
                  {totalPrice} MON
                </span>
              </p>
            )}

            {/* Confirm Button */}
            <button
              onClick={handleConfirmPurchase}
              disabled={!quantity || quantity <= 0 || quantity > selectedCrop.quantity}
              className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
