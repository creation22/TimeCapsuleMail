import React, { useState, useContext } from 'react';
import { Calendar, Send, CheckCircle, Shield, Heart, Sparkles, X, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FirebaseContext } from "./context/Firebase";
import Footer from './Footer';
import Working from './Working';
import Testimonials from './Testimonials';
import Features from './Features';

const Home = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(FirebaseContext);
  const [showMenu, setShowMenu] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCoffeePopup, setShowCoffeePopup] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleLogout = () => {
    logoutUser().then(() => {
      setShowMenu(null);
      navigate("/");
    });
  };

  return (
    <div className='relative z-10 bg-black text-white font-inter'>

      {/* Header */}
      <div className='container mx-auto flex items-center justify-between py-6 px-6 lg:px-8 relative'>
        <div className='text-3xl font-black'>
          TimeCapsuleMail
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
          <Link to="home" smooth duration={500} className='cursor-pointer hover:underline'>Home</Link>
          <Link to="about" smooth duration={500} className='cursor-pointer hover:underline'>About</Link>
          <Link to="stories" smooth duration={500} className='cursor-pointer hover:underline'>Stories</Link>

          {/* Support Dropdown */}
          <div className="relative">
            <div
              onClick={() => setShowMenu(showMenu === 'support' ? null : 'support')}
              className='cursor-pointer hover:underline'
            >
              Support
            </div>

            {showMenu === 'support' && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black border rounded shadow-lg z-20">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setShowQr(true); setShowMenu(null); }}
                >
                  Show UPI QR
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setShowCoffeePopup(true); setShowMenu(null); }}
                >
                  Buy Me a Coffee
                </div>
              </div>
            )}
          </div>

          {/* Auth Button */}
          <div className="relative">
            {user ? (
              <div>
                <div
                  onClick={() => setShowMenu(showMenu === 'auth' ? null : 'auth')}
                  className="bg-white text-black px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300 font-semibold"
                >
                  {user.displayName || user.email}
                </div>

                {showMenu === 'auth' && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-20 text-black">
                    <div
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="bg-white text-black px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300 font-semibold"
                onClick={() => navigate("/signup")}
              >
                Signup
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-4'>
          <Menu className='w-6 h-6 cursor-pointer' onClick={() => setShowMobileMenu(true)} />
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className='fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 text-2xl z-50'>
            <X className='w-8 h-8 absolute top-6 right-6 cursor-pointer' onClick={() => setShowMobileMenu(false)} />

            <Link to="home" smooth duration={500} className='cursor-pointer hover:underline' onClick={() => setShowMobileMenu(false)}>Home</Link>
            <Link to="about" smooth duration={500} className='cursor-pointer hover:underline' onClick={() => setShowMobileMenu(false)}>About</Link>
            <Link to="stories" smooth duration={500} className='cursor-pointer hover:underline' onClick={() => setShowMobileMenu(false)}>Stories</Link>
            <div className='cursor-pointer hover:underline' onClick={() => { setShowQr(true); setShowMobileMenu(false); }}>Show UPI QR</div>
            <div className='cursor-pointer hover:underline' onClick={() => { setShowCoffeePopup(true); setShowMobileMenu(false); }}>Buy Me a Coffee</div>

            {user ? (
              <div
                className="bg-white text-black px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300 font-semibold"
                onClick={() => { handleLogout(); setShowMobileMenu(false); }}
              >
                Logout
              </div>
            ) : (
              <div
                className="bg-white text-black px-6 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300 font-semibold"
                onClick={() => { navigate("/signup"); setShowMobileMenu(false); }}
              >
                Signup
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div id="home" className='flex flex-col items-center justify-center min-h-[85vh] text-center px-6 py-16'>
        <div className='flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-8'>
          <Sparkles className='w-4 h-4' />
          <span>Send messages through time</span>
        </div>

        <h1 className='text-4xl md:text-7xl font-extrabold max-w-4xl leading-tight mb-8'>
          Send a message to your <span className='underline decoration-white/30'>future self</span>… or someone special.
        </h1>

        <p className='mt-6 text-lg md:text-2xl max-w-2xl text-gray-300 leading-relaxed'>
          Create meaningful connections across time. Schedule heartfelt messages that arrive exactly when they're needed most.
        </p>

        <div className='flex flex-col sm:flex-row gap-6 mt-12'>
          <div
            className='bg-white text-black px-10 py-4 rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-lg font-bold flex items-center gap-2'
            onClick={() => navigate('/email')}
          >
            <Send className='w-5 h-5' />
            Start Your Journey Free
          </div>

          <Link
            to="working"
            smooth
            duration={500}
            className='border-2 border-white text-white px-10 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold flex items-center gap-2'
          >
            <Calendar className='w-5 h-5' />
            See How It Works
          </Link>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-16 text-sm text-gray-400'>
          <div className='flex items-center gap-2'>
            <CheckCircle className='w-4 h-4' />
            <span>100% Delivery Guaranteed</span>
          </div>
          <div className='flex items-center gap-2'>
            <Shield className='w-4 h-4' />
            <span>Privacy Protected</span>
          </div>
          <div className='flex items-center gap-2'>
            <Heart className='w-4 h-4' />
            <span>10M+ Messages Sent</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <Working />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Buy Me a Coffee Popup */}
      {showCoffeePopup && (
        <div className='fixed bottom-6 right-6 bg-white text-black px-4 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3'>
          <span>☕ Thanks for the support!</span>
          <X className='w-4 h-4 cursor-pointer' onClick={() => setShowCoffeePopup(false)} />
        </div>
      )}

      {/* UPI QR Popup */}
      {showQr && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg relative'>
            <X className='w-5 h-5 absolute top-2 right-2 cursor-pointer' onClick={() => setShowQr(false)} />
            <h2 className='text-lg font-bold mb-4 text-black text-center'>Scan to Support</h2>
            {/* Replace with your actual QR code image */}
            <img src="your-qr-code.png" alt="UPI QR" className='w-64 h-64 object-contain mx-auto' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
