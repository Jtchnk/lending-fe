import { WhiteButton } from 'components/Buttons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface ModalHowItWorks {
  header?: string;
  isOpen: boolean;
  textButton: string;
  onClickClose: () => void;
}

export const ModalHowItWorks = ({
  header,
  isOpen,
  textButton,
  onClickClose,
}: ModalHowItWorks) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const router = useRouter();

  const lendImg = [1,2,3,4,5,6,7]
  const borrowImg = [1,2,3,4,5]
  
  const next = () => {
    if (router.pathname == '/lend') {
      if (current >= 6) return;
      else setCurrent(current + 1);
    } else if (router.pathname == '/borrow') {
      if (current >= 4) return;
      else setCurrent(current + 1);
    }
    
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out';
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <>
      <div
        className={`fixed backdrop-blur top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center ${
          isOpen ? '' : 'duration-500 invisible'
        }`}
      >
        <div
          className={`border border-gray bg-black text-white sm:p-7 p-5 mx-auto lg:w-[679px] sm:w-[500px] w-[300px]  rounded-[20px] relative ${
            isOpen ? 'animate-modal-open' : 'animate-modal-close'
          }`}
        >
          <div className='flex items-center justify-between mb-7'>
            <div className='text-2xl font-myriadreg'>{header}</div>
            <Image
              priority
              src='/icons/cancel.svg'
              height={25}
              width={25}
              alt='cancel'
              onClick={onClickClose}
            />
          </div>
          <div className='flex items-center sm:gap-5 gap-2'>
          <Image
              priority
              src='/icons/chevron-left-2.svg'
              height={30}
              width={30}
              alt='chevron'
              onClick={prev}
              className='w-[30px] h-[30px] cursor-pointer'
            />
          <div className={`overflow-hidden ${!isOpen ? 'invisible' : ''}`}>
            <div className='flex' ref={ref}>
              {router.pathname == '/lend' && [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div className='shrink-0 flex justify-center items-center'>
                  <Image
                    src={`/images/lend/Lend-Step-${item}.png`}
                    alt='Lend'
                    width={544}
                    height={544}
                    className='lg:w-[544px] lg:h-[544px] sm:w-[364px] sm:h-[364px] w-[204px] h-[204px]'
                  />
                </div>
              ))}
              {router.pathname == '/borrow' && [1, 2, 3, 4, 5].map((item, index) => (
                <div className='shrink-0 flex justify-center items-center'>
                  <Image
                    src={`/images/borrow/Borrow-Step-${item}.png`}
                    alt='Borrow'
                    width={544}
                    height={544}
                    className='lg:w-[544px] lg:h-[544px] sm:w-[364px] sm:h-[364px] w-[204px] h-[204px]'
                  />
                </div>
              ))}
            </div>
          </div><Image
              priority
              src='/icons/chevron-right.svg'
              height={30}
              width={30}
              alt='chevron'
              onClick={next}
              className='w-[30px] h-[30px] cursor-pointer'
            /></div>
          <div className='mt-12 w-[160px] mx-auto'>
            <WhiteButton text={textButton} onClick={onClickClose} />
          </div>
        </div>
      </div>
    </>
  );
};
