
import React, { useState } from 'react'
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useContext } from "react";
import { FirebaseContext } from "./context/Firebase";
const Features = () => {
  return (
    <div id = "about" className='py-24 px-6 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6 ' id = "about">
              Why Choose{' '}
              <span className='text-black'>
                TimeCapsuleMail?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Experience the magic of time-delayed communication with our cutting-edge platform designed for meaningful connections.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Clock,
                title: "Scheduled Delivery Guaranteed",
                description: "Advanced scheduling system ensures your messages arrive exactly when promised, down to the minute."
              },
              {
                icon: Users,
                title: "Send to Yourself or Others",
                description: "Create personal reminders or surprise loved ones with thoughtful messages across time."
              },
              {
                icon: Star,
                title: "First Email Free",
                description: "Experience the magic risk-free with your first time capsule message completely on us."
              },
              {
                icon: Heart,
                title: "Surprise When It Matters",
                description: "Perfect timing for birthdays, anniversaries, achievements, or moments of encouragement."
              }
            ].map((feature, index) => (
              <div key={index} className='group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'>
                <div className='w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300'>
                  <feature.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Features
