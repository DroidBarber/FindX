import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export const Footer = () => (
  <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
    &copy;  {new Date().getFullYear()} Mehdi. All Rights Reserved.
    <button label type="button" className="dark:bg-gray-700 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"><AiFillGithub /></button>
  </div>
);
