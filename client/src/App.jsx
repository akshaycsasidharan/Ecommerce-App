import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import Pagenotfound from "./pages/Pagefound.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import UserRoute from "./components/Routes/UserRoute.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import User from "./pages/Admin/User.jsx";
import Orders from "./pages/user/Orders.jsx";
import Profile from "./pages/user/Profile.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UserRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/createcategory" element={<CreateCategory />} />
          <Route path="admin/createproduct" element={<CreateProduct />} />
          <Route path="admin/users" element={<User />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/pagenotfound" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
