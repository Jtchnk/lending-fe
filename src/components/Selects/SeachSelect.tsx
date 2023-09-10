import useComponentVisible from 'hooks/useComponentVisible';
import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';

interface SearchSelectProps {
  searchList?: string[];
}

const Mock = [
  'Token Name',
  'Current Pool',
  'Daily Interest %',
  'Best LTV',
  'Duration',
  'Current Pool',
  'Daily Interest %',
  'Best LTV',
  'Duration',
];

export const SearchSelect = ({searchList}: SearchSelectProps) => {
  const [value, setValue] = useState<string>('Search tokens');

  if(!searchList) {
    searchList = Mock
  }

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleExpanded = () => setIsComponentVisible((current) => !current)

  const handleSelected = (e: any) => {
    setValue(e.target.textContent);
    setIsComponentVisible(false);
  };

  return (
    <>
      <div className='relative' ref={ref}>
        <div
          className={`flex items-center justify-between bg-black border border-gray hover:border-orange-light ${
            isComponentVisible ? 'border-orange-light' : 'border-gray'
          } rounded-lg lg:py-3 lg:px-7 py-2 px-4 text-white lg:text-[22px] text-base `}
          onClick={() => toggleExpanded()}
        >
          {value}
          <div className='border-l border-gray lg:pl-5 pl-2'>
            <div className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px]'>
              <Image
                priority
                src='/icons/chevron-down.svg'
                height={30}
                width={30}
                alt='chevron'
              />
            </div>
          </div>
        </div>
        {/* {isComponentVisible && ( */}
          <div className={`absolute w-full bg-black text-white border border-gray rounded-lg top-[74px] left-0 py-3 text-xl overflow-y-scroll no-scrollbar z-10 overflow-hidden transition-[max-height] duration-300 ease-in ${isComponentVisible ? "max-h-[250px]" : "max-h-0 invisible"}`}>
            {searchList.map((item:string, index:number) => (
              <div
                key={index}
                className='px-5 py-[10px] hover:bg-gray-dark active:bg-white active:text-black cursor-pointer'
                onClick={(e) => handleSelected(e)}
              >
                {item}
              </div>
            ))}
          </div>
        {/* )} */}
      </div>
    </>
  );
};
