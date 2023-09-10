import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useToast } from 'stores/useToast';
import { ToastProps } from 'stores/useToast';

export const Toast = () => {
  const { showToast, setShowToast, toastProps } = useToast();
  const { message,
    success,
    failed,
    textLink,
    link,
    onClickTryAgain, } = toastProps;
   
  useEffect(() => {
    setTimeout(function () {
      setShowToast(false)
    }, 10000);
  },[showToast])

  if (showToast) { 
    return (
      <div
        className={`px-7 py-5 bg-white rounded-[20px] fixed bottom-12 right-28 w-[364px] text-black text-xl z-10 
        animate-toast-up
        `}
      >
        <div className='flex items-center justify-between'>
          <span
            className={`font-myriadbold ${success
              ? 'text-green'
              : failed
                ? 'text-red'
                : 'font-myriadlight text-black'
              }`}
          >
            {message}
          </span>
          <Image
            priority
            src='/icons/cancel.svg'
            height={20}
            width={20}
            alt='cancel'
            className='invert cursor-pointer'
            onClick={() => setShowToast(false)}
          />
        </div>
        {success && (
          <Link
            href={`${link}`}
            target='_blank'
            className='underline decoration-1 underline-offset-2'
          >
            <div>{textLink}</div>
          </Link>
        )}
        {failed && (
          <div
            className='underline decoration-1 underline-offset-2 cursor-pointer'
            onClick={onClickTryAgain}
          >
            {textLink}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={`px-7 py-5 bg-white rounded-[20px] fixed bottom-12 right-28 w-[364px] text-black text-xl z-10
        animate-toast-down duration-1000 invisible
        `}
      >
        <div className='flex items-center justify-between'>
          <span
            className={`font-myriadbold ${success
              ? 'text-green'
              : failed
                ? 'text-red'
                : 'font-myriadlight text-black'
              }`}
          >
            {message}
          </span>
          <Image
            priority
            src='/icons/cancel.svg'
            height={20}
            width={20}
            alt='cancel'
            className='invert cursor-pointer'
            onClick={() => setShowToast(false)}
          />
        </div>
        {success && (
          <Link
            href={`${link}`}
            target='_blank'
            className='underline decoration-1 underline-offset-2'
          >
            <div>{textLink}</div>
          </Link>
        )}
        {failed && (
          <div
            className='underline decoration-1 underline-offset-2 cursor-pointer'
            onClick={onClickTryAgain}
          >
            {textLink}
          </div>
        )}
      </div>
    );
  }

};
