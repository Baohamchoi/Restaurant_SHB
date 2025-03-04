import React, { useState } from 'react'
import { ChefHat } from "lucide-react";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF, FaUser } from 'react-icons/fa'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Background Image Placeholder */}
            
            {/* Form Container */}
            <div className="bg-white p-8  rounded-t-3xl">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              
              {/* Toggle Buttons */}
              <div className="flex mb-8 bg-gray-100 rounded-full p-1">
                <button 
                  className={`flex-1 py-2 rounded-full text-center ${isLogin ? 'bg-primary text-white' : 'text-gray-600'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button 
                  className={`flex-1 py-2 rounded-full text-center ${!isLogin ? 'bg-primary text-white' : 'text-gray-600'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>
              
              {/* Login/Register Form */}
              <form>
                {!isLogin && (
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FaUser size={16} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaEnvelope size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="••••••••"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock size={16} />
                    </div>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="remember" 
                        className="mr-2"
                      />
                      <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition duration-300"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
              </form>
              
              {/* Social Login */}
              <div className="mt-8">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-300 w-full"></div>
                  <div className="bg-white px-4 text-sm text-gray-500 absolute">or continue with</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FaGoogle className="mr-2 text-red-500" />
                    <span>Google</span>
                  </button>
                  <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FaFacebookF className="mr-2 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
              
              {/* Login/Register Toggle Link */}
              <div className="mt-8 text-center text-gray-600">
                {isLogin ? (
                  <p>Don't have an account? <button onClick={() => setIsLogin(false)} className="text-primary hover:underline">Register</button></p>
                ) : (
                  <p>Already have an account? <button onClick={() => setIsLogin(true)} className="text-primary hover:underline">Login</button></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login