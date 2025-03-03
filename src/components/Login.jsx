import React, { useState } from "react";
import {
  Bell,
  Mail,
  ChevronRight,
  Coffee,
  User,
  Lock,
  Phone,
  Home,
  MapPin,
} from "lucide-react";

const ModernRestaurantAuth = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Main Content */}
      <main className="flex justify-center items-center p-6 py-16">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-hidden shadow-2xl">
          {/* Right Panel */}
          <div className="md:col-span-3 bg-white p-8 flex flex-col justify-center">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full p-1 bg-gray-100">
                <button
                  className={`px-6 py-2 rounded-full text-sm transition-all ${
                    activeTab === "login"
                      ? "bg-yellow-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm transition-all ${
                    activeTab === "signup"
                      ? "bg-yellow-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {activeTab === "login" ? "Welcome Back!" : "Create Your Account"}
            </h2>

            {activeTab === "login" ? (
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-yellow-600 hover:text-yellow-700"
                  >
                    Forgot password?
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                  <span>Login to Your Account</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>

                <div className="relative flex items-center my-6">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-4 text-gray-400">
                    or continue with
                  </span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.58V20.29H19.28C21.36 18.34 22.56 15.53 22.56 12.25Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23C14.97 23 17.46 22.02 19.28 20.29L15.71 17.58C14.74 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.82 14.1H2.13V16.89C3.94 20.47 7.69 23 12 23Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.82 14.1C5.6 13.44 5.48 12.73 5.48 12C5.48 11.27 5.6 10.56 5.82 9.9V7.11H2.13C1.41 8.58 1 10.25 1 12C1 13.75 1.41 15.42 2.13 16.89L5.82 14.1Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69 1 3.94 3.53 2.13 7.11L5.82 9.9C6.72 7.31 9.13 5.38 12 5.38Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </button>
                  <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="#1877F2"
                      />
                    </svg>
                  </button>
                  <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L11.05 14.933L5.22 21.75H1.91L9.629 12.915L1.472 2.25H8.282L12.92 8.481L18.244 2.25ZM17.041 19.77H18.759L7.304 4.126H5.472L17.041 19.77Z"
                        fill="#000000"
                      />
                    </svg>
                  </button>
                </div>

                <p className="text-center text-gray-600 mt-6">
                  Don't have an account?
                  <a
                    href="#"
                    className="text-yellow-600 hover:text-yellow-700 ml-1 font-medium"
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign up now
                  </a>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Lock className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Home className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                  <span>Create Your Account</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>

                <p className="text-center text-gray-600 mt-6">
                  Already have an account?
                  <a
                    href="#"
                    className="text-yellow-600 hover:text-yellow-700 ml-1 font-medium"
                    onClick={() => setActiveTab("login")}
                  >
                    Login now
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernRestaurantAuth;
