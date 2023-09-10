import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';

export interface ToggleProps {
  checked?: boolean
  handleChange?: () => void;
}

export const ToggleSwitch = ({checked, handleChange}: ToggleProps) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' checked={checked} onChange={handleChange} className='sr-only peer' />
      <div className="bg-white border border-black sm:w-[52px] w-[40px] sm:h-7 h-5 rounded-full dark:bg-white sm:peer-checked:after:translate-x-full peer-checked:after:bg-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] sm:after:left-[2px]  peer-checked:after:translate-x-[20px] after:bg-black after:rounded-full sm:after:h-6 after:h-4 sm:after:w-6 after:w-4 after:transition-all peer-checked:bg-white"></div>
    </label>
  );
};
