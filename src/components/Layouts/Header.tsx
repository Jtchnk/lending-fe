import Image from 'next/image';
import { FC } from 'react';
import { useProgramStatus } from 'stores/useProgramStatus';
import { roundToFourDigits } from 'utils';

export const Header: FC = () => {
  const programStatus = useProgramStatus(state => state.programStatus);
  return (
    <div className='bg-orange/[0.5] w-full lg:py-[10px] py-[3px] lg:text-lg text-base'>
      <div className='overflow-hidden whitespace-nowrap'>
        <div className='inline-flex lg:gap-20 lg:animate-scrolling animate-scrollingMobile translate-x-full'>
          <div className='flex items-center gap-1 mr-5'>
            <span>ACTIVE LOANS: <span className='font-myriadbold'>{programStatus?.numActiveLoans ?? '0'} SOL</span></span>
            <Image
              priority
              src='/icons/sol.svg'
              height={18}
              width={18}
              alt='SOL'
              className='mt-[-4px]'
            />
          </div>
          <div className='flex items-center gap-1 mx-5'>
            <span>TOTAL VALUE LOCKED: <span className='font-myriadbold'>{roundToFourDigits(programStatus?.solDisbursed) ?? '0'} SOL</span></span>
            <Image
              priority
              src='/icons/sol.svg'
              height={18}
              width={18}
              alt='SOL'
              className='mt-[-4px]'
            />
          </div>
          <div className='flex items-center gap-1 mx-5'>
            <span>LOANS DISBURSED: <span className='font-myriadbold'>{programStatus?.numLoans ?? '0'}</span></span>
          </div>
          <div className='flex items-center gap-1 ml-5'>
            <span>TOTAL INTEREST: <span className='font-myriadbold'>{roundToFourDigits(programStatus?.totalInterest) ?? '0'} SOL</span></span>
            <Image
              priority
              src='/icons/sol.svg'
              height={18}
              width={18}
              alt='SOL'
              className='mt-[-4px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
