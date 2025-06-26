import React, { useState, useContext } from 'react';
import { FirebaseContext } from './context/Firebase';
import { useNavigate } from 'react-router-dom';

const Email = () => {
  const date = new Date();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  const handleSend = () => {
    if (!user) {
      setShowSignInPrompt(true);
    } else {
      // Trigger your send logic here
      console.log("Sending email to future...");
    }
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto p-6">
      
      <div className="text-5xl font-bold text-center mt-10">TimeCapsuleMail</div>
      <div className="text-3xl mt-8 text-center">Write an Email to the Future</div>
      <div className="text-2xl font-bold font-serif text-center mt-2">
        A letter from {day} {monthName} {year}
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-12">
        
        <div className="flex-1">
          <label className="block mb-2 text-lg font-medium text-gray-200">Your Message</label>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-y"
            placeholder="Write your email here..."
          ></textarea>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-200">Recipient's Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter recipient's name"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-gray-200">Delivery Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>

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

      <div className="mt-12 flex justify-center">
        <button
          onClick={handleSend}
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg font-semibold"
        >
          Send to the Future
        </button>
      </div>

      {/* Sign In Prompt */}
      {showSignInPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h2 className="text-xl font-semibold">Please Sign In</h2>
            <p className="text-gray-600">You must be signed in to send an email to the future.</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignInPrompt(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
