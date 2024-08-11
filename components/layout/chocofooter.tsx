import React from 'react';
import { CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <div className="p-12 flex items-center justify-center">
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        
        <a
          href="#"
          className="text-xl font-bold text-gray-600 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          Brand
        </a>

        <p className="py-2 sm:py-0 text-gray-800 dark:text-white">
          All rights reserved ©2024
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
            aria-label="Reddit"
          >
            <CiInstagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
            aria-label="Facebook"
          >
            <PiTiktokLogo className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
            aria-label="Github"
          >
            <CiYoutube className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;