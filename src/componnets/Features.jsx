import { Clock, Users, Star, Heart } from 'lucide-react';

const Features = () => {
  return (
    <div id="about" className='py-20 px-6 bg-black text-white'>
      <div className='container mx-auto'>
        
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-extrabold mb-4'>
            Why Choose <span className='underline decoration-white/30'>TimeCapsuleMail?</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Experience the magic of time-delayed communication with our platform built for meaningful connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {[
            {
              icon: Clock,
              title: "Scheduled Delivery Guaranteed",
              description: "Advanced scheduling ensures your messages arrive exactly when promised, down to the minute."
            },
            {
              icon: Users,
              title: "Send to Yourself or Others",
              description: "Create personal reminders or surprise loved ones with thoughtful messages across time."
            },
            {
              icon: Star,
              title: " Free",
              description: "Experience the magic risk-free , your message completely on us until we hit the api limit.."
            },
            {
              icon: Heart,
              title: "Surprise When It Matters",
              description: "Perfect timing for birthdays, anniversaries, achievements, or moments of encouragement."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className='group bg-black border border-white/20 p-6 rounded-2xl hover:scale-105 hover:border-white transition-all duration-300 cursor-pointer text-center'
            >
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300'>
                <feature.icon className='w-8 h-8 text-black' />
              </div>
              <h3 className='text-lg md:text-xl font-bold mb-3'>{feature.title}</h3>
              <p className='text-gray-300 text-base leading-relaxed'>{feature.description}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Features;
