import React, { useState } from "react";
import "../../styles/AuthStyle.css";
import Layout from "./../../components/Layout/Layout.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth.jsx";

const REACT_APP_API = import.meta.env.VITE_APP_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleloginsubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(`${REACT_APP_API}/api/user/login`);

      const res = await axios.post(`${REACT_APP_API}/api/user/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success("Login Successfully");

        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/dashboard");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout>
      <div className="form-container ">
        <form onSubmit={handleloginsubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEMAIL1"
              placeholder="Enter Your Email"
              required
              //   autoFocus
            />
          </div>

          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPASSWORD1"
              placeholder="Enter Your password"
              required
              //   autoFocus
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              FORGOT PASSWORD
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
