import useComponentVisible from 'hooks/useComponentVisible';
import Image from 'next/image';
import { FC, ReactNode, useRef, useState } from 'react';

interface SearchTokensProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export const SearchTokens = ({value,onChange}: SearchTokensProps) => {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };
  // if(!searchList) {
  //   searchList = Mock
  // }

  // const { ref, isComponentVisible, setIsComponentVisible } =
  //   useComponentVisible(false);

  // const toggleExpanded = () => setIsComponentVisible((current) => !current)

  return (
    <>
      <div className='relative'>
        <div
          className={`flex items-center justify-between bg-black border border-gray hover:border-orange-light rounded-lg lg:py-3 lg:px-7 py-2 px-4 text-white lg:text-[22px] text-base `}
        >
          <input
            className='bg-black focus:outline-0'
            placeholder='Search tokens'
            value={value}
            onChange={onChange}
            ref={ref}
          />
          {/* {value} */}
          {/* <div className='border-l border-gray lg:pl-5 pl-2'> */}
            <div className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]'>
              <Image
                priority
                src='/icons/magnifying-glass.svg'
                height={30}
                width={30}
                alt='chevron'
                onClick={handleClick}
                className='cursor-pointer'
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
