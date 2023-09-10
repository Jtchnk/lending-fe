import useComponentVisible from 'hooks/useComponentVisible';
import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';

export const CurrencySelect: FC = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

    const toggleExpanded = () => setIsComponentVisible((current) => !current)


  const handleSelected = (e:any) => {
    setValue(e.target.textContent)
    setIsSelected(false)
  }
  
  return (
    <div className='flex flex-col'>
      <span className='lg:text-[22px] text-xl font-myriadreg'>Currency to Lend</span>
      <div className='relative' ref={ref}>
        <div
          className='flex items-center justify-between bg-white border border-gray rounded-lg py-2 px-5 my-[10px] text-black w-full lg:min-w-[300px] min-w-[256px]'
          onClick={() => toggleExpanded()}
        >
          <div className='flex gap-1 lg:text-2xl text-xl items-start'>
            <span>SOL</span>
            <Image
              priority
              src='/icons/sol.svg'
              height={25}
              width={25}
              alt='SOL'
            />
          </div>
          {/* <Image
            priority
            src='/icons/polygon.svg'
            height={8}
            width={20}
            alt='polygon'
          /> */}
        </div>
          {/* <div
            className={`absolute w-full bg-white text-black border border-gray rounded-lg py-3 px-5 top-[74px] left-0 text-xl overflow-hidden transition-[max-height] duration-300 ease-in ${isComponentVisible ? "max-h-[250px]" : "max-h-0 invisible"}`}
            onClick={(e) => handleSelected(e)}
          >
            SOL
          </div> */}
      </div>
      <span className='text-sm'>Only SOL available currently</span>
    </div>
  );
};
