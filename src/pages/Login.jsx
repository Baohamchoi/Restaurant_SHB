import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaUser,
  FaExclamationCircle,
} from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  // Load saved data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userAuthData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev,
        name: parsedData.name || "",
        email: parsedData.email || "",
        rememberMe: parsedData.rememberMe || false,
      }));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form validation with localStorage check
  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Check credentials against localStorage in login mode
    if (isLogin) {
      const savedData = localStorage.getItem("userAuthData");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.email && parsedData.password) {
          if (parsedData.email !== formData.email) {
            newErrors.email = "Email does not match registered account";
          }
          if (parsedData.password !== formData.password) {
            newErrors.password = "Incorrect password";
          }
        } else if (!parsedData.email) {
          newErrors.email = "No registered account found";
        }
      } else {
        newErrors.email = "No registered account found";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log("Form submitted:", formData);

        // Handle localStorage
        const dataToSave = {
          email: formData.email,
          password: formData.password,
          name: formData.name || "",
          rememberMe: isLogin ? formData.rememberMe : false,
          lastLogin: new Date().toISOString(),
        };
        localStorage.setItem("userAuthData", JSON.stringify(dataToSave));

        setIsSubmitting(false);
        setLoginSuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }, 1000);
    }
  };

  // Reset form when switching between login and register
  useEffect(() => {
    const savedData = localStorage.getItem("userAuthData");
    const parsedData = savedData ? JSON.parse(savedData) : {};

    setFormData({
      name: isLogin && parsedData.name ? parsedData.name : "",
      email: isLogin && parsedData.email ? parsedData.email : "",
      password: "",
      rememberMe:
        isLogin && parsedData.rememberMe ? parsedData.rememberMe : false,
    });
    setErrors({});
    setLoginSuccess(false);
  }, [isLogin]);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <div className="bg-white p-8 rounded-t-3xl">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>

              {loginSuccess && (
                <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  {isLogin
                    ? `Login successful with ${formData.name}`
                    : "Account created successfully!"}{" "}
                </div>
              )}

              <div className="flex mb-8 bg-gray-100 rounded-full p-1">
                <button
                  className={`flex-1 py-2 rounded-full text-center ${
                    isLogin ? "bg-primary text-white" : "text-gray-600"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 rounded-full text-center ${
                    !isLogin ? "bg-primary text-white" : "text-gray-600"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:border-primary`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <div className="flex items-center text-red-500 mt-1 text-sm">
                          <FaExclamationCircle className="mr-1" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:border-primary`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <div className="flex items-center text-red-500 mt-1 text-sm">
                        <FaExclamationCircle className="mr-1" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:border-primary`}
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <div className="flex items-center text-red-500 mt-1 text-sm">
                        <FaExclamationCircle className="mr-1" />
                        <span>{errors.password}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-sm text-gray-600"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition duration-300 flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                  ) : null}
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </form>

              <div className="mt-8 text-center text-gray-600">
                {isLogin ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-primary hover:underline"
                    >
                      Register
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-primary hover:underline"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
