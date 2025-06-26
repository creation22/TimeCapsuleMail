
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { useContext } from "react";
import { FirebaseContext } from "./context/Firebase";
const Working = () => {
  return (
    <div  className='py-24 px-6' id = "working">
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              How It{' '}
              <span className='text-black'>
                Works
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Three simple steps to create your time capsule message
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>
            {/* Connection Lines */}
            <div className='hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gray-300'></div>
            
            {[
              {
                step: "1",
                title: "Write Your Message",
                description: "Compose your heartfelt message with our intuitive editor. Add photos, videos, or voice notes to make it truly special.",
                icon: Mail
              },
              {
                step: "2",
                title: "Choose Perfect Timing",
                description: "Select the exact date and time for delivery. Set reminders for special occasions or future milestones.",
                icon: Calendar
              },
              {
                step: "3",
                title: "Magic Delivery",
                description: "Your message arrives at the perfect moment, creating surprise, joy, and meaningful connections across time.",
                icon: Send
              }
            ].map((step, index) => (
              <div key={index} className='text-center relative'>
                <div className='w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                  <step.icon className='w-10 h-10 text-white' />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-700'>
                  {step.step}
                </div>
                <h3 className='text-2xl font-bold mb-4'>{step.title}</h3>
                <p className='text-gray-600 leading-relaxed max-w-sm mx-auto'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Working
