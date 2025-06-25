import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './componnets/Home';
import Email from './componnets/Email';
import Login from './componnets/Login';
import Signup from './componnets/Signup';
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-white relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Routes */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/email" element={<Email />} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </div>
      </div>

      <Analytics />
    </>
  );
}

export default App;
