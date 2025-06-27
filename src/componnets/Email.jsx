import React, { useState, useContext } from 'react';
import { Mail, Clock, User, Calendar, Send, XCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from './context/Firebase';
import Footer from './Footer';

const Email = () => {
  const { user, writeDoc } = useContext(FirebaseContext);
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const handleSend = () => {
    if (!user) {
      setShowSignInPrompt(true);
    } else {
      if (!recipientName || !deliveryDate || !deliveryTime || !message) {
        setShowFailure(true);
        return;
      }

      writeDoc({
        senderEmail: user.email,
        senderId: user.uid,
        recipientEmail: recipientName,
        message,
        deliveryDate,
        deliveryTime,
      })
        .then(() => {
          setShowSuccess(true);
          setRecipientName('');
          setDeliveryDate('');
          setDeliveryTime('');
          setMessage('');
        })
        .catch(() => {
          setShowFailure(true);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden p-6">
<div className="bg-red-600/90 text-white px-4 py-4 mb-6 rounded-xl shadow-md flex items-start gap-3 border border-red-500">
  {/* Warning Icon */}
  <svg className="w-6 h-6 mt-1 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M9.17 4.93L19.07 14.83M14.83 4.93L4.93 14.83" />
  </svg>

  {/* Text Content */}
  <div className="space-y-1">
    <p className="font-semibold text-base">Important Notice</p>
    <p className="text-sm leading-relaxed">
      Currently in <span className="font-medium">Version 1</span>, this service works <span className="font-medium">only on laptop browsers</span>.
      To avoid misuse, please do not send more than <span className="font-medium">2 emails within 24 hours</span> — excessive usage may lead to emails being marked as spam by Gmail.
    </p>
    <p className="text-sm leading-relaxed mt-1">
      <span className="font-medium">Reminder:</span> You must sign in before sending an email. Unsigned users cannot restore their progress.
    </p>
  </div>
</div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TimeCapsuleMail</h1>
        <h2 className="text-2xl md:text-3xl mb-2">Write an Email to the Future</h2>
        <p className="text-lg md:text-xl font-light text-gray-300">
          A letter from {day} {monthName} {year}
        </p>
      </div>

      {/* Form Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Message Box */}
        <div className="md:col-span-3">
          <label className="block mb-3 text-lg font-medium flex items-center gap-2">
            <Mail className="w-5 h-5 text-white" />
            Your Message
          </label>
          <textarea
            className="w-full h-64 md:h-full p-4 border border-gray-500 bg-white text-black rounded-lg resize-none focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Form Fields */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium flex items-center gap-2">
              <User className="w-5 h-5 text-white" />
              Recipient's Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-500 bg-white text-black rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              placeholder="Enter recipient's email"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white" />
              Delivery Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-gray-500 bg-white text-black rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium flex items-center gap-2">
              <Clock className="w-5 h-5 text-white" />
              Delivery Time
            </label>
            <input
              type="time"
              className="w-full p-3 border border-gray-500 bg-white text-black rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </div>

          <button
            onClick={handleSend}
            className="w-full px-6 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 text-lg font-medium flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send to the Future
          </button>
        </div>
      </div>

      {/* Sign In Prompt */}
      {showSignInPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white text-black border border-gray-300 rounded-xl p-8 max-w-sm w-full mx-4 text-center space-y-6">
            <div className="flex justify-center">
              <User className="w-16 h-16 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold">Please Sign In</h2>
            <p className="text-gray-700">You must be signed in to send an email to the future.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('/login')}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                Sign In
              </button>
              <button
                onClick={() => setShowSignInPrompt(false)}
                className="bg-white text-black px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full mx-4 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold">Message Scheduled!</h2>
            <p>Your message to the future has been successfully scheduled.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Failure Popup */}
      {showFailure && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full mx-4 text-center space-y-4">
            <XCircle className="w-12 h-12 text-red-500 mx-auto" />
            <h2 className="text-2xl font-bold">Oops!</h2>
            <p>Failed to schedule your message. Please check your details and try again.</p>
            <button
              onClick={() => setShowFailure(false)}
              className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Email;
