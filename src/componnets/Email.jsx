import React, { useState } from 'react';

const Email = () => {
  const date = new Date();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  return (
    <div className="relative z-10 max-w-4xl mx-auto p-6">
      
      {/* Header */}
      <div className="text-5xl font-bold text-center mt-10">TimeCapsuleMail</div>
      
      {/* Subheading */}
      <div className="text-3xl mt-8 text-center">Write an Email to the Future</div>
      <div className="text-2xl font-bold font-serif text-center mt-2">
        A letter from {day} {monthName} {year}
      </div>

      {/* Main Form Section - Flex Row */}
      <div className="flex flex-col md:flex-row gap-10 mt-12">
        
        {/* Left Side - Message Box */}
        <div className="flex-1">
          <label className="block mb-2 text-lg font-medium text-gray-200">Your Message</label>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-y"
            placeholder="Write your email here..."
          ></textarea>
        </div>

        {/* Right Side - Details */}
        <div className="flex-1 space-y-6">
          
          {/* Recipient's Name */}
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-200">Recipient's Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter recipient's name"
            />
          </div>

          {/* Delivery Date */}
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-200">Delivery Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>

          {/* Delivery Time */}
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-200">Delivery Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </div>

        </div>
      </div>

      {/* Send Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg font-semibold">
          Send to the Future
        </button>
      </div>
    </div>
  );
};

export default Email;
