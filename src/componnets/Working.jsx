import { Mail, Calendar, Send } from 'lucide-react';

const Working = () => {
  return (
    <div className='bg-black text-white py-24 px-6' id="working">
      <div className='container mx-auto'>
        
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-extrabold mb-4'>
            How It <span className='text-white underline decoration-white/30'>Works</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            Just three simple steps to schedule your time capsule message
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>

          {/* Connection Line for large screens */}
          <div className='hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-white/20'></div>

          {/* Steps */}
          {[
            {
              step: "1",
              title: "Write Your Message",
              description: "Compose your heartfelt message with our intuitive editor. Add photos, videos, or voice notes to make it special.",
              icon: Mail
            },
            {
              step: "2",
              title: "Choose Perfect Timing",
              description: "Pick the exact date and time for delivery. Set reminders for special occasions or future milestones.",
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
              
              {/* Icon */}
              <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <step.icon className='w-10 h-10 text-black' />
              </div>

              {/* Step Number Badge */}
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-white text-black border-2 border-black rounded-full flex items-center justify-center text-sm font-bold'>
                {step.step}
              </div>

              {/* Step Title & Description */}
              <h3 className='text-2xl md:text-3xl font-bold mb-3'>{step.title}</h3>
              <p className='text-gray-300 leading-relaxed max-w-sm mx-auto text-base md:text-lg'>
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Working;
