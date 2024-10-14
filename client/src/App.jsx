import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import Pagenotfound from "./pages/Pagefound.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import PrivateRoute from "./components/Routes/Private.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
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
