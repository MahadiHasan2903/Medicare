import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { server } from "../utils/server";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../context/AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${server}/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        const { data, token, role, message } = response.data;

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: data,
            token: token,
            role: data.role,
          },
        });

        toast.success(message);
        setLoading(false);
        navigate("/users/profile/me");
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 my-10 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          <span className="text-primaryColor">Login </span> to your account
        </h3>

        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 mt-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2"
            >
              {loading ? <HashLoader size={35} color="#ffffff" /> : "Sign Up"}
            </button>
          </div>

          <p className="mt-5 text-center text-textColor">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="ml-1 font-medium text-primaryColor">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signin;
