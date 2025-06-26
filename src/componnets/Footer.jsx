import React from 'react';
import { Star, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-black text-white py-8 px-6'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>

        {/* Star the Repo */}
        <a
          href='https://github.com/your-github-repo' // Replace with your repo link
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 hover:underline'
        >
          <Star className='w-4 h-4' />
          <span>Star the Repo</span>
        </a>

        {/* Social Links */}
        <div className='flex items-center gap-6'>
          <a
            href='https://twitter.com/yourprofile' // Replace with your Twitter link
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:underline'
          >
            <Twitter className='w-4 h-4' />
            <span className='hidden sm:inline'>Twitter</span>
          </a>

          <a
            href='https://linkedin.com/in/yourprofile' // Replace with your LinkedIn link
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:underline'
          >
            <Linkedin className='w-4 h-4' />
            <span className='hidden sm:inline'>LinkedIn</span>
          </a>

          <a
            href='https://github.com/yourprofile' // Replace with your GitHub profile link
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:underline'
          >
            <Github className='w-4 h-4' />
            <span className='hidden sm:inline'>GitHub</span>
          </a>
        </div>

        {/* Credit */}
        <div className='text-sm text-center md:text-right'>
          Made by <span className='font-bold'>Srajan Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
