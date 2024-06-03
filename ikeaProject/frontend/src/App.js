import { Routes, Route } from "react-router-dom"

import "./App.css";

// assets de bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Instructor from "./components/vendor/Vendor"

//customer panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login"
import Dashboard from "./components/Customer/Dashboard";
import Orders from './components/Customer/Orders'
import Wishlist from "./components/Customer/wishlist";
import Profile from "./components/Customer/Profile";
import OrderSuccess from"./components/OrderSuccess";
import AddAdress from "./components/Customer/AddAdress";


//seller
import SellerDashboard from "./components/seller/Dashboard";
import SellerProduct from "./components/seller/Product";
import SellerAddProduct from "./components/seller/AddProduct";
import SellerOrders from "./components/seller/Orders";
import SellerCustomer from "./components/seller/Customer";
import SellerReports from "./components/seller/Reports";
import SellerProfile from "./components/seller/Profile";
import Product from "./components/seller/Product";
import SellerChangePassword from "./components/seller/ChangePassword";
import Context from "./Context";
import Vendor from "./components/vendor/Vendor";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Instructor />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/category/:category_slug/:category_id" element={<CategoryProducts />} />
        <Route path="/product/:product_slug/:product_id/" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/context" element={<Context />} />
        <Route path="/vendor" element={<Vendor/>} />

        {/* Customer Routes */}
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/success" element={<OrderSuccess/>}/>
        <Route path="/customer/wishlist" element={<Wishlist/>}/>
        <Route path="/customer/Profile" element={<Profile/>}/>
        <Route path="/customer/add-address" element={<AddAdress/>}/>

        {/* seller routes */}
        <Route path="/seller/product" element={<Product/>}/>
        <Route path="/seller/dashboard" element={<SellerDashboard/>}/>
        <Route path="/seller/Product" element={<SellerProduct/>}/>
        <Route path="/seller/AddProduct" element={<SellerAddProduct/>}/>
        <Route path="/seller/Orders" element={<SellerOrders/>}/>
        <Route path="/seller/Customer" element={<SellerCustomer/>}/>
        <Route path="/seller/Reports" element={<SellerReports/>}/>
        <Route path="/seller/Profile" element={<SellerProfile/>}/>
        <Route path="/seller/ChangePassword" element={<SellerChangePassword/>}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;

