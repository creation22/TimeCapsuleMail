import React, { useState } from 'react'
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useContext } from "react";
import { FirebaseContext } from "./context/Firebase";
import Footer from './Footer';
import Working from './Working';
import Testimonials from './Testimonials';

import Featurs from './Features';
const Home = () => {
  const navigate = useNavigate()
  const { user, logoutUser } = useContext(FirebaseContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logoutUser().then(() => {
      setShowMenu(false);
      navigate("/");
    });
  };
  
  return (
    <div className='relative z-10 text-gray-900 font-inter'>
      {/* Header */}
      <div className='container mx-auto flex items-center justify-between py-8 px-6 lg:px-8'>
        <div className='text-3xl font-black text-black'>
          TimeCapsuleMail
        </div>
        <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
          <Link to = "home" smooth= {true} duration = {500}  className='cursor-pointer hover:text-gray-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50'>Home</Link>
          <Link to = "about" smooth = {true} duration = {500} className='cursor-pointer hover:text-gray-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50'>About</Link>
          <Link to = "stories" smooth = {true} duration = {500}  className='cursor-pointer hover:text-gray-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50'>Stories</Link>
          <Link to = "pricing" smooth = {true} duration = {500}  className='cursor-pointer hover:text-gray-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50'>Pricing</Link>
    <div className="relative">
      {user ? (
        <div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-semibold"
          >
            {user.displayName || user.email}
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
              <div
                onClick={handleLogout}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-semibold"
          onClick={() => navigate("/signup")}
        >
          Signup
        </div>
      )}
    </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className='md:hidden flex flex-col gap-1 cursor-pointer'>
          <div className='w-6 h-0.5 bg-gray-800'></div>
          <div className='w-6 h-0.5 bg-gray-800'></div>
          <div className='w-6 h-0.5 bg-gray-800'></div>
        </div>
      </div>

      {/* Hero Section */}
      <div id = "home" className='flex flex-col items-center justify-center min-h-[85vh] text-center px-6 py-16'>
        <div className='flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8'>
          <Sparkles className='w-4 h-4' />
          <span>Send messages through time ✨</span>
        </div>
        
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black max-w-6xl leading-tight mb-8'>
          Send a message to your{' '}
          <span className='text-black'>
            future self
          </span>
          … or someone special.
        </h1>
        
        <p className='text-gray-600 mt-6 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium'>
          Create meaningful connections across time. Schedule heartfelt messages that arrive exactly when they're needed most, creating moments of joy, love, and inspiration.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-6 mt-12'>
          <div className='bg-black text-white px-10 py-4 rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg font-bold flex items-center gap-2' onClick={() => navigate('/email')}>
            <Send className='w-5 h-5' />
            Start Your Journey Free
          </div>
          <div className='border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full cursor-pointer hover:border-black hover:text-black transition-all duration-300 text-lg font-semibold flex items-center gap-2' to = "working" smooth = {true} duration = {500}>
            <Calendar className='w-5 h-5' />
            See How It Works
          </div>
        </div>
        
        <div className='flex items-center gap-8 mt-16 text-sm text-gray-500'>
          <div className='flex items-center gap-2'>
            <CheckCircle className='w-4 h-4 text-green-500' />
            <span>100% Delivery Guaranteed</span>
          </div>
          <div className='flex items-center gap-2'>
            <Shield className='w-4 h-4 text-blue-500' />
            <span>Privacy Protected</span>
          </div>
          <div className='flex items-center gap-2'>
            <Heart className='w-4 h-4 text-red-500' />
            <span>10M+ Messages Sent</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
          <Featurs/>

      {/* How It Works Section */}
      
            <Working/>
      {/* Testimonials Section */}
            <Testimonials/>

      
      {/* {footer} */}
            <Footer/>

    </div>
  )
}

export default Home