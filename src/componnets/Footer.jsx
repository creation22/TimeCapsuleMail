
import React, { useState } from 'react'
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useContext } from "react";
import { FirebaseContext } from "./context/Firebase";
const Footer = () => {
  return (
    
      <div className='bg-gray-900 text-white py-16 px-6'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
            {/* Brand */}
            <div className='md:col-span-1'>
              <div className='text-3xl font-black text-white mb-4'>
                TimeCapsuleMail
              </div>
              <p className='text-gray-400 leading-relaxed mb-6'>
                Connecting hearts across time with meaningful messages that arrive exactly when they're needed most.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors'>
                  <span className='text-sm font-bold'>f</span>
                </div>
                <div className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors'>
                  <span className='text-sm font-bold'>t</span>
                </div>
                <div className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors'>
                  <span className='text-sm font-bold'>i</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Product</h4>
              <div className='space-y-4 text-gray-400'>
                <div className='cursor-pointer hover:text-white transition-colors'>Features</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Pricing</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Templates</div>
                <div className='cursor-pointer hover:text-white transition-colors'>API</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Mobile App</div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Company</h4>
              <div className='space-y-4 text-gray-400'>
                <div className='cursor-pointer hover:text-white transition-colors'>About Us</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Our Story</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Careers</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Press Kit</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Blog</div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Support</h4>
              <div className='space-y-4 text-gray-400'>
                <div className='cursor-pointer hover:text-white transition-colors'>Help Center</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Contact Us</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Privacy Policy</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Terms of Service</div>
                <div className='cursor-pointer hover:text-white transition-colors'>Status Page</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between'>
            <div className='text-gray-400 mb-4 md:mb-0'>
              © 2025 TimeCapsuleMail. All rights reserved. Made with ❤️ in India
            </div>
            <div className='flex items-center gap-6 text-gray-400'>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                <span>English</span>
              </div>
              <div className='flex items-center gap-2'>
                <Shield className='w-4 h-4' />
                <span>Secure</span>
              </div>
              <div className='flex items-center gap-2'>
                <Heart className='w-4 h-4' />
                <span>Trusted by 1M+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
