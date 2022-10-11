import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export const Footer = () => (
  <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
    &copy;  {new Date().getFullYear()} Mehdi. All Rights Reserved.
    <button type="button" className="dark:bg-gray-500 dark:text-gray-900 bg-white rounded-full px-1 py-1 hover:shadow-lg ml-2" href="https://github.com/DroidBarber/FindX" target="_blank">
      <AiFillGithub />
    </button>
  </div>
);
