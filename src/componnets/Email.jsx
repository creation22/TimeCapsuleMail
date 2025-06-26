import React, { useState, useContext } from 'react';
import { Mail, Clock, User, Calendar, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from './context/Firebase';

const Email = () => {
  const { user , writeDoc } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const date = new Date();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

const handleSend = () => {
  if (!user) {
    setShowSignInPrompt(true);
  } else {
    if (!recipientName || !deliveryDate || !deliveryTime || !message) {
      alert("Please fill all fields.");
      return;
    }

    writeDoc({
      senderEmail: user.email,
      senderId: user.uid,
      recipientEmail: recipientName, // This should be recipient's EMAIL, not name
      message,
      deliveryDate,
      deliveryTime,
    })
      .then(() => {
        alert("Your email to the future has been scheduled!");
        // Optionally, reset fields:
        setRecipientName('');
        setDeliveryDate('');
        setDeliveryTime('');
        setMessage('');
      })
      .catch(() => {
        alert("Failed to schedule email. Please try again.");
      });
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black relative overflow-hidden">
      
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-5">
        <Mail className="absolute top-20 left-20 w-24 h-24" />
        <Clock className="absolute top-40 right-32 w-32 h-32" />
        <Mail className="absolute bottom-40 left-32 w-28 h-28" />
        <Clock className="absolute bottom-20 right-20 w-20 h-20" />
        <Mail className="absolute top-60 left-1/2 w-16 h-16" />
        <Clock className="absolute bottom-60 left-1/4 w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto p-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4">TimeCapsuleMail</h1>
          <h2 className="text-3xl mb-2">Write an Email to the Future</h2>
          <p className="text-xl font-serif">
            A letter from {day} {monthName} {year}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-5 gap-8 h-96">
          
          {/* Message Box */}
          <div className="col-span-3">
            <label className="block mb-3 text-lg font-medium flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Your Message
            </label>
            <textarea
              className="w-full h-full p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Form Fields */}
          <div className="col-span-2 space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium flex items-center gap-2">
                <User className="w-5 h-5" />
                Recipient's Email 
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                placeholder="Enter recipient's name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Delivery Date
              </label>
              <input
                type="date"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Delivery Time
              </label>
              <input
                type="time"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-200 text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Send to the Future
            </button>
          </div>
        </div>

        {/* Sign In Prompt Modal */}
        {showSignInPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white border-2 border-gray-300 rounded-xl p-8 max-w-sm w-full mx-4 text-center space-y-6 shadow-2xl">
              <div className="flex justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold">Please Sign In</h2>
              <p className="text-gray-700">You must be signed in to send an email to the future.</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-200 font-medium flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignInPrompt(false)}
                  className="bg-white text-black px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
