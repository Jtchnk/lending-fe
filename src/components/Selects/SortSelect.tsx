import useComponentVisible from 'hooks/useComponentVisible';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { TokenInfo } from 'types';

const SortList = [
  { list: 'Token Name', desc: 'A-Z' },
  { list: 'Current Pool', desc: 'High to Low' },
  // { list: 'Daily Interest %', desc: 'Low to High' },
  { list: 'Best LTV', desc: 'High to Low' },
  { list: 'Duration', desc: 'Shortest to Longest' },
];

interface SortProps {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  allData?: TokenInfo[];
  setUnSelectedTokens?: Dispatch<SetStateAction<TokenInfo[]>>;
  onChange?: (e: any) => void;
  // setIsComponentVisible?: Dispatch<SetStateAction<boolean>>
}

export const SortSelect = ({
  value,
  setValue,
  allData,
  setUnSelectedTokens,
  onChange,
}: SortProps) => {
  // const [value, setValue] = useState<string>('Sort by');

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleExpanded = () => {
    setIsComponentVisible((current) => !current);
  };

  const handleSelected = (list: string) => {
    setValue(list);
    if (list == 'Token Name') {
      const sortName = allData.sort((a: any, b: any) => a.name.localeCompare(b.name) );
      setUnSelectedTokens(sortName);
    } else if (list == 'Current Pool') {
      const sortPool = allData.sort((a,b)=> b.currentPool-a.currentPool)
      setUnSelectedTokens(sortPool);
    }
    else if (list == 'Best LTV') {
      const sortLTV = allData.sort((a,b)=> b.ltv-a.ltv)
      setUnSelectedTokens(sortLTV);
    } 
    else if (list == 'Duration') {
      const sortDuration =allData.sort((a,b)=> a.duration-b.duration)
      setUnSelectedTokens(sortDuration);
    }
    setIsComponentVisible(false);
  };

  return (
    <>
      <div className='relative' ref={ref}>
        <div
          className={`flex items-center justify-between bg-black border border-gray hover:border-orange-light cursor-pointer ${
            isComponentVisible ? 'border-orange-light' : 'border-gray'
          } rounded-lg lg:py-3 lg:px-7 py-2 px-4 text-white lg:text-[22px] text-base `}
          onClick={() => toggleExpanded()}
        >
          {value}
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
        {/* {isComponentVisible && ( */}
        <div
          className={`absolute w-full bg-black text-white border border-gray rounded-lg py-3 top-[74px] left-0 text-xl overflow-y-scroll no-scrollbar z-10 overflow-hidden transition-[max-height] duration-300 ease-in ${
            isComponentVisible ? 'max-h-[250px]' : 'max-h-0 invisible'
          }`}
        >
          {SortList.map((item, index) => (
            <div
              key={index}
              className='px-5 py-[10px] hover:bg-gray-dark active:bg-white active:text-black cursor-pointer'
              onClick={() => handleSelected(item.list)}
            >
              <div className='flex items-center gap-2'>
                {item.list}
                <span className='text-base text-[#D9D9D9]'>({item.desc})</span>
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </>
  );
};
