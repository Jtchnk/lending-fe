import { HomeWhiteButton } from 'components/Buttons/HomeWhiteButton';
import { Contact } from 'components/Contact';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { HomeView } from 'views/home';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Connection } from '@solana/web3.js';
import { useProgramStatus } from 'stores/useProgramStatus';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import token_price_service from 'services/token_price';
import { useEffect } from 'react';
import { roundToTwoDigits } from 'utils';

const Home: NextPage = (props) => {
  const programStatus = useProgramStatus(state => state.programStatus);
  const router = useRouter();

  const wallet = useAnchorWallet()

  useEffect(() => {
    if (wallet?.publicKey) {
      token_price_service.getAndCacheTokenPrices("bonk").then(
        value => console.log('')
      ).catch((err) => {console.log(err)})
    }
  }, [wallet?.publicKey])
  
  return (
    <div>
      <Head>
        <title>Lending Lab by Atadia</title>
      </Head>
      <div className='bg-[url(/images/home_bg_mobile.png)] md:bg-[url(/images/home_bg.png)] bg-no-repeat bg-cover bg-center'>
        <div className='flex md:justify-between justify-center items-end mx-12'>
          <div className='hidden md:block w-[25%]'>
            <div className='text-4xl lg:text-5xl font-myriadbold'>{programStatus?.numActiveLoans ?? '0'}</div>
            <div className='text-2xl lg:text-3xl'>ACTIVE LOANS</div>
            <div className='text-4xl lg:text-5xl font-myriadbold flex items-center mt-7'>
              <span className='pr-3 pt-[6px]'>{roundToTwoDigits(programStatus?.activeSolValues) ?? '0'}</span>
              <Image
                priority
                src='/icons/sol.svg'
                height={40}
                width={40}
                alt='SOL'
              />
            </div>
            <div className='mb-7 text-2xl lg:text-3xl'>ACTIVE LOANS VALUE</div>
            <div className='text-4xl lg:text-5xl font-myriadbold flex items-center'>
              <span className='pr-3 pt-[6px]'>{roundToTwoDigits(programStatus?.solDisbursed) ?? '0'}</span>
              <Image
                priority
                src='/icons/sol.svg'
                height={40}
                width={40}
                alt='SOL'
              />
            </div>
            <div className='mb-11 text-2xl lg:text-3xl'>TOTAL VALUE LOCKED</div>
          </div>
          <div className='flex flex-col items-center justify-center h-[calc(100vh-155px)] lg:h-[calc(100vh-165px)]'>
            <div className='text-2xl md:text-3xl lg:text-4xl'>
              WELCOME TO THE
            </div>
            <div className='text-5xl md:text-6xl lg:text-7xl pt-4 pb-6 md:pb-20 font-[optima] tracking-[10px] text-center'>
              LENDING LAB
            </div>
            <div className='text-2xl md:text-3xl lg:text-4xl w-[80%] md:w-[500px] text-center'>
              Unlock liquidity in your tokens instantly.
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10 pt-12'>
              <HomeWhiteButton text='LEND' path={'/lend'} router={router} />
              <HomeWhiteButton text='BORROW' path={'/borrow'} router={router} />
            </div>
          </div>
          <div className='hidden md:flex flex-col items-end w-[25%] gap-4 mb-11'>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
