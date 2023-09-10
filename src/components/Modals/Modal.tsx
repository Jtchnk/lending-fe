import { WhiteButton } from 'components/Buttons';
import Image from 'next/image';
import { useState } from 'react';
interface ModalProps {
  header?: string;
  description?: string;
  isOpen: boolean;
  textButton: string;
  onClickClose: () => void;
}

export const Modal = ({
  header,
  description,
  isOpen,
  textButton,
  onClickClose,
}: ModalProps) => {

  return (
    <>
        <div className={`fixed backdrop-blur top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center ${isOpen ? '' : 'duration-500 invisible'}`}>
          <div className={`border border-gray bg-black text-white p-7 mx-auto w-[75%] max-w-[500px] rounded-[20px] relative ${isOpen ? 'animate-modal-open' : 'animate-modal-close'}`}>
            <div className='flex items-center justify-between'>
              <div className='text-xl font-myriadreg'>{header}</div>
              <Image
                priority
                src='/icons/cancel.svg'
                height={25}
                width={25}
                alt='cancel'
                onClick={onClickClose}
              />
            </div>
            <div className='text-lg my-7'>{description}</div>
            <div className='mt-12 w-[160px] mx-auto'>
              <WhiteButton text={textButton} onClick={onClickClose} />
            </div>
          </div>
        </div>
    </>
  );
};
