import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const FooterSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const UPI_ID = 'srajangupta220@okhdfcbank';
  const PAYEE_NAME = 'Srajan Gupta';
  const UPI_MSG = 'Build More Break More';
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&tn=${encodeURIComponent(UPI_MSG)}&cu=INR`;

  return (
    <div className="relative flex flex-col items-center text-center">
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-semibold hover:underline"
      >
        Support the Developer
      </button>

      {/* Floating QR Popup */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 bg-white p-3 rounded-lg border shadow flex flex-col items-center gap-2 z-50">
          <QRCode
            value={upiUrl}
            size={100}
            bgColor="#fff"
            fgColor="#222"
          />
          <div className="text-xs text-gray-600">
            UPI ID: <span className="font-mono">{UPI_ID}</span>
          </div>
          <div className="text-[11px] text-gray-500">
            Scan to pay with any UPI app
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterSupport;
