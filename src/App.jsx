import NavBar from "./componenets/NavBar"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./componenets/Footer"
import FarmerDashboard from "./pages/FarmersDashBoard"
import Marketplace from "./pages/MarketPlace"
import MyOrders from "./pages/Orders"

function App() {


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
      </Routes>


      <Footer />

    </>
  )
}

export default App
