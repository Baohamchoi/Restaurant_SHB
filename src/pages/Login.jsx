import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../components/menu/Context"; 

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

  const { isLoggedIn, currentUser, login, logout } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const savedData = localStorage.getItem("rememberedUser");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev,
        name: parsedData.name || "",
        email: parsedData.email || "",
        rememberMe: true,
      }));
    }
  }, []);

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


  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (isLogin) {
      const usersData = localStorage.getItem("usersData");
      const users = usersData ? JSON.parse(usersData) : [];

      if (users.length > 0) {
        const user = users.find((user) => user.email === formData.email);
        if (user) {
          if (user.password !== formData.password) {
            newErrors.password = "Mật khẩu không chính xác";
          }
        } else {
          newErrors.email = "Không tìm thấy tài khoản với email này";
        }
      } else {
        newErrors.email = "Không có tài khoản nào được đăng ký";
      }
    } else {

      const usersData = localStorage.getItem("usersData");
      const users = usersData ? JSON.parse(usersData) : [];

      if (users.some((user) => user.email === formData.email)) {
        newErrors.email = "Email đã được đăng ký";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
  
      setTimeout(() => {
        console.log("Form submitted:", formData);
  

        const usersData = localStorage.getItem("usersData");
        const users = usersData ? JSON.parse(usersData) : [];
  
        let userData;
  
        if (isLogin) {

          userData = users.find((user) => user.email === formData.email);
  
          const updatedUsers = users.map((u) =>
            u.email === formData.email
              ? { ...u, lastLogin: new Date().toISOString() }
              : u
          );
          localStorage.setItem("usersData", JSON.stringify(updatedUsers));
  
          if (formData.rememberMe) {
            localStorage.setItem(
              "rememberedUser",
              JSON.stringify({
                email: userData.email,
                name: userData.name,
              })
            );
          } else {
            localStorage.removeItem("rememberedUser");
          }
  
          login(userData);
  
          setIsSubmitting(false);
          setLoginSuccess(true);
  
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          userData = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            registrationDate: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
          };
  
          users.push(userData);
          localStorage.setItem("usersData", JSON.stringify(users));
  
          setIsSubmitting(false);
          setLoginSuccess(true);
  
          setTimeout(() => {
            setIsLogin(!isLogin)
          }, 1500);
        }
      }, 1000);
    }
  };
  

  const handleLogout = () => {
    logout(); 

    if (!formData.rememberMe) {
      setFormData({
        name: "",
        email: "",
        password: "",
        rememberMe: false,
      });
    } else {
      setFormData({
        ...formData,
        password: "",
      });
    }

    setErrors({});
    setLoginSuccess(false);
  };

  useEffect(() => {
    setErrors({});
    setLoginSuccess(false);

    if (isLogin) {
      const rememberedUser = localStorage.getItem("rememberedUser");
      if (rememberedUser) {
        const parsedData = JSON.parse(rememberedUser);
        setFormData({
          name: parsedData.name || "",
          email: parsedData.email || "",
          password: "",
          rememberMe: true,
        });
      } else {
        setFormData({
          name: "",
          email: "",
          password: "",
          rememberMe: false,
        });
      }
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
        rememberMe: false,
      });
    }
  }, [isLogin]);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <div className="bg-white p-8 rounded-t-3xl">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isLoggedIn
                  ? `Welcome, ${currentUser?.name}`
                  : isLogin
                  ? "Welcome Back"
                  : "Create Account"}
              </h2>

              {loginSuccess && (
                <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  {isLogin
                    ? `Login successful!`
                    : "Account created successfully!"}{" "}
                </div>
              )}

              {isLoggedIn ? (
                <div className="flex flex-col items-center">
                  <div className="mb-6 flex items-center justify-center bg-gray-200 rounded-full w-24 h-24">
                    <FaUser size={48} className="text-gray-600" />
                  </div>

                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold">
                      {currentUser?.name}
                    </h3>
                    <p className="text-gray-600">{currentUser?.email}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Last login:{" "}
                      {new Date(currentUser?.lastLogin).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition duration-300 mt-4"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
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
                            placeholder="username"
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
                      <label className="block text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-300"
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
