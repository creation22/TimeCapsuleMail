import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import FooterSupport from './FooterSupport';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-6 font-serif">
      <div className="container mx-auto flex flex-col items-center gap-8 text-center">

        {/* Social Links */}
        <div className="flex flex-col gap-5">
          <a
            href="https://x.com/_Creation22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:underline text-lg md:text-xl"
          >
            <Twitter className="w-6 h-6 md:w-7 md:h-7" />
            <span>Twitter</span>
          </a>

          <a
            href="https://linkedin.com/in/ssrajangupta22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:underline text-lg md:text-xl"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/creation22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:underline text-lg md:text-xl"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Support Section */}
        <div>
          <FooterSupport />
        </div>

        {/* Credit */}
        <div className="text-xl md:text-2xl">
          Made by <span className="font-bold">Srajan Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
