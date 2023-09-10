import Image from 'next/image';
import { FC, ReactNode, useEffect, useState } from 'react';
import { ToggleProps } from './ToggleSwitch';

export const ToggleSwitchSm = ({checked, handleChange}: ToggleProps) => {

  const [isChecked, setChecked] = useState<boolean>(checked);

  const handleChangeWrapper = async () => {
    setChecked(!isChecked)
    handleChange()
  }

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' checked={isChecked} onChange={handleChangeWrapper} className='sr-only peer' />
      <div className="w-10 h-4 rounded-full dark:bg-[#898989] peer-checked:after:translate-x-[25px] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bg-black after:border after:border-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
    </label>
  );
};
