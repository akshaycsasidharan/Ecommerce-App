import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const REST_APP_API = import.meta.env.VITE_APP_API;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const navigate = useNavigate();

  const handleforgotsubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${REST_APP_API}/api/user/forgot-password`, {
        email,
        newpassword,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
      <div className="form-container ">
        <form onSubmit={handleforgotsubmit}>
          <h4 className="title">RESET PASSWORD</h4>

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
              value={newpassword}
              onChange={(e) => setNewpassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputFORGOTPASSWORD1"
              placeholder="Enter Your new password"
              required
              //   autoFocus
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
