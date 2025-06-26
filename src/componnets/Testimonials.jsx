
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useContext } from "react";
import { FirebaseContext } from "./context/Firebase";

import React from 'react'

const Testimonials = () => {
  return (
          <div id = "stories" className='py-24 px-6 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              Stories That{' '}
              <span className='text-black'>
                Touch Hearts
              </span>
            </h2>
            <p className='text-xl text-gray-600'>Real experiences from our amazing community</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                quote: "Sent myself a message during a tough time. When it arrived 6 months later, it was exactly what I needed to hear. Pure magic! ✨",
                author: "Sarah Chen",
                role: "Student, Mumbai"
              },
              {
                quote: "Surprised my wife with a love letter that arrived on our 10th anniversary. She cried happy tears for hours. Best gift ever! 💕",
                author: "Rajesh Kumar",
                role: "Software Engineer, Bangalore"
              },
              {
                quote: "Started a tradition of sending birthday messages to my daughter. She's now 16 and looks forward to them every year! 🎂",
                author: "Priya Sharma",
                role: "Doctor, Delhi"
              }
            ].map((testimonial, index) => (
              <div key={index} className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='flex items-center gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <p className='text-gray-700 mb-6 italic leading-relaxed'>"{testimonial.quote}"</p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold'>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>{testimonial.author}</div>
                    <div className='text-sm text-gray-500'>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Testimonials
