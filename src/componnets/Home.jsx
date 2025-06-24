import React from 'react'
import { Clock, Mail, Heart, Shield, Star, Calendar, Send, CheckCircle, Users, Globe, Sparkles, ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className='relative z-10 text-gray-900 font-inter'>
      {/* Header */}
      <div className='container mx-auto flex items-center justify-between py-8 px-6 lg:px-8'>
        <div className='text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
          TimeCapsuleMail
        </div>
        <div className='hidden md:flex items-center gap-8 text-lg font-medium'>
          <div className='cursor-pointer hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50'>Home</div>
          <div className='cursor-pointer hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50'>About</div>
          <div className='cursor-pointer hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50'>Stories</div>
          <div className='cursor-pointer hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50'>Pricing</div>
          <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 font-semibold'>
            Login
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
      <div className='flex flex-col items-center justify-center min-h-[85vh] text-center px-6 py-16'>
        <div className='flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8'>
          <Sparkles className='w-4 h-4' />
          <span>Send messages through time ✨</span>
        </div>
        
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black max-w-6xl leading-tight mb-8'>
          Send a message to your{' '}
          <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
            future self
          </span>
          … or someone special.
        </h1>
        
        <p className='text-gray-600 mt-6 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium'>
          Create meaningful connections across time. Schedule heartfelt messages that arrive exactly when they're needed most, creating moments of joy, love, and inspiration.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-6 mt-12'>
          <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg font-bold flex items-center gap-2'>
            <Send className='w-5 h-5' />
            Start Your Journey Free
          </div>
          <div className='border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full cursor-pointer hover:border-purple-600 hover:text-purple-600 transition-all duration-300 text-lg font-semibold flex items-center gap-2'>
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
      <div className='py-24 px-6 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              Why Choose{' '}
              <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
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
                description: "Advanced scheduling system ensures your messages arrive exactly when promised, down to the minute.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Send to Yourself or Others",
                description: "Create personal reminders or surprise loved ones with thoughtful messages across time.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Star,
                title: "First Email Free",
                description: "Experience the magic risk-free with your first time capsule message completely on us.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Heart,
                title: "Surprise When It Matters",
                description: "Perfect timing for birthdays, anniversaries, achievements, or moments of encouragement.",
                color: "from-red-500 to-rose-500"
              }
            ].map((feature, index) => (
              <div key={index} className='group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer'>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='py-24 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              How It{' '}
              <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                Works
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Three simple steps to create your time capsule message
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>
            {/* Connection Lines */}
            <div className='hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300'></div>
            
            {[
              {
                step: "1",
                title: "Write Your Message",
                description: "Compose your heartfelt message with our intuitive editor. Add photos, videos, or voice notes to make it truly special.",
                icon: Mail,
                color: "from-purple-500 to-indigo-500"
              },
              {
                step: "2",
                title: "Choose Perfect Timing",
                description: "Select the exact date and time for delivery. Set reminders for special occasions or future milestones.",
                icon: Calendar,
                color: "from-indigo-500 to-blue-500"
              },
              {
                step: "3",
                title: "Magic Delivery",
                description: "Your message arrives at the perfect moment, creating surprise, joy, and meaningful connections across time.",
                icon: Send,
                color: "from-blue-500 to-cyan-500"
              }
            ].map((step, index) => (
              <div key={index} className='text-center relative'>
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
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

      {/* Testimonials Section */}
      <div className='py-24 px-6 bg-gradient-to-b from-purple-50 to-indigo-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              Stories That{' '}
              <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
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
                  <div className='w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold'>
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

      {/* Pricing Section */}
      <div className='py-24 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-6xl font-black mb-6'>
              Choose Your{' '}
              <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                Plan
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Start free and upgrade when you're ready to send unlimited messages through time
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {/* Free Plan */}
            <div className='bg-white border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-2'>Free</h3>
                <div className='text-4xl font-black mb-4'>₹0</div>
                <p className='text-gray-600'>Perfect for trying out</p>
              </div>
              <ul className='space-y-4 mb-8'>
                {[
                  "1 time capsule message",
                  "Basic scheduling",
                  "Email delivery",
                  "24/7 support"
                ].map((feature, i) => (
                  <li key={i} className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-500' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors duration-300'>
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className='bg-gradient-to-b from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl transform scale-105 relative'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold'>
                Most Popular
              </div>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-2'>Pro</h3>
                <div className='text-4xl font-black mb-1'>₹199</div>
                <div className='text-purple-200 mb-4'>/year</div>
                <p className='text-purple-100'>For regular users</p>
              </div>
              <ul className='space-y-4 mb-8'>
                {[
                  "Unlimited messages",
                  "Advanced scheduling",
                  "Email + SMS delivery",
                  "Photo & video attachments",
                  "Priority support",
                  "Message templates"
                ].map((feature, i) => (
                  <li key={i} className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-400' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='w-full bg-white text-purple-600 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300'>
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className='bg-white border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300'>
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold mb-2'>Enterprise</h3>
                <div className='text-4xl font-black mb-4'>₹999</div>
                <p className='text-gray-600'>For teams & businesses</p>
              </div>
              <ul className='space-y-4 mb-8'>
                {[
                  "Everything in Pro",
                  "Team collaboration",
                  "Bulk message sending",
                  "Custom branding",
                  "Analytics dashboard",
                  "Dedicated support",
                  "API access"
                ].map((feature, i) => (
                  <li key={i} className='flex items-center gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-500' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all duration-300'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-gray-900 text-white py-16 px-6'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
            {/* Brand */}
            <div className='md:col-span-1'>
              <div className='text-3xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4'>
                TimeCapsuleMail
              </div>
              <p className='text-gray-400 leading-relaxed mb-6'>
                Connecting hearts across time with meaningful messages that arrive exactly when they're needed most.
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors'>
                  <span className='text-sm font-bold'>f</span>
                </div>
                <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors'>
                  <span className='text-sm font-bold'>t</span>
                </div>
                <div className='w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors'>
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
    </div>
  )
}

export default Home