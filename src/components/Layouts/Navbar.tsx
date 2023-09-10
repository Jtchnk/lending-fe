import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { useProgramStatus } from 'stores/useProgramStatus';
import Notification from 'components/Icons/Notification';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const ContactData = [
  {
    image: '/icons/twitter.svg',
    alt: 'twitter',
    link: 'https://twitter.com/atadia_io',
  },
  {
    image: '/icons/discord.svg',
    alt: 'discord',
    link: 'https://discord.com/invite/atadia',
  },
  {
    image: '/icons/linktree.svg',
    alt: 'linktree',
    link: 'https://linktr.ee/atadia',
  },
];

export const Navbar: FC = () => {
  const router = useRouter();
  const [isOPenMenu, setIsOPenMenu] = useState<boolean>(false);
  const wallet = useAnchorWallet();

  return (
    <div className='flex items-center justify-between py-6 lg:py-7 px-8 text-white bg-black/[.5] relative'>
      <Link href='/'>
        <div className=''>
          <div className='font-[optima] sm:text-3xl text-2xl font-bold'>
            LENDING LAB
          </div>
          <div className='font-[optima] tracking-[2px] text-end leading-3 sm:text-base text-[10px]'>
            BY ATADIA
          </div>
        </div>
      </Link>
      <div className='items-center hidden lg:flex xl:gap-6'>
        <div
          className={`flex xl:gap-20 ${
            wallet?.publicKey ? 'xl:gap-20 lg:gap-6' : 'gap-10 lg:gap-20'
          } text-lg xl:text-xl font-myriadreg`}
        >
          <Link href='/lend'>
            <span
              className={
                router.pathname === '/lend'
                  ? 'text-orange-light font-myriadbold'
                  : 'hover:text-orange-light transition-colors duration-300 ease-in-out'
              }
            >
              LEND
            </span>
          </Link>
          <Link
            href='/borrow'
            className={
              router.pathname == '/borrow'
                ? 'text-orange-light font-myriadbold'
                : 'hover:text-orange-light transition-colors duration-300 ease-in-out'
            }
          >
            BORROW
          </Link>
          <Link
            href='/faqs'
            className={
              router.pathname == '/faqs'
                ? 'text-orange-light font-myriadbold'
                : 'hover:text-orange-light transition-colors duration-300 ease-in-out'
            }
          >
            FAQS
          </Link>
        </div>
        <div className='border rotate-90 w-[50px] h-0' />
        {wallet?.publicKey && (
          <div className='flex items-center lg:gap-6 xl:gap-20 text-lg xl:text-xl font-myriadreg'>
            <Link
              href='/offers'
              className={
                router.pathname == '/offers'
                  ? 'text-orange-light font-myriadbold'
                  : 'hover:text-orange-light transition-colors duration-300 ease-in-out'
              }
            >
              YOUR OFFERS
            </Link>
            <Link
              href='/loans'
              className={
                router.pathname == '/loans'
                  ? 'text-orange-light font-myriadbold'
                  : 'hover:text-orange-light transition-colors duration-300 ease-in-out'
              }
            >
              YOUR LOANS
            </Link>
            {/* <Notification width='30px' height='30px' fill='white'/> */}
          </div>
        )}
        <WalletMultiButtonDynamic>
          {!wallet?.publicKey && 'CONNECT WALLET'}
        </WalletMultiButtonDynamic>
      </div>
      <div className='items-center flex lg:hidden lg:gap-6'>
        {/* {isOPenMenu ? ( */}
        <>
          {/* <div className='flex items-center z-20 fixed right-7'> */}
          {/* {wallet?.publicKey && (
                <Image
                  priority
                  src='/icons/notification.svg'
                  height={30}
                  width={30}
                  alt='notification'
                />
              )} */}
          {isOPenMenu ? (
            <div className='flex items-center z-20 fixed right-7'>
              <Image
                priority
                src='/icons/cancel.svg'
                height={40}
                width={40}
                alt='cancel'
                onClick={() => setIsOPenMenu(false)}
              />
            </div>
          ) : (
            <div className='flex items-center sm:gap-7 gap-4'>
              <Image
                priority
                src='/icons/icon-menu.svg'
                height={40}
                width={40}
                alt='Menu'
                onClick={() => setIsOPenMenu(true)}
              />
            </div>
          )}

          <div
            className={`fixed backdrop-blur top-[0px] left-0 w-full h-full z-10 ${
              isOPenMenu ? '' : 'duration-200 invisible'
            }`}
          >
            <div
              className={`bg-black rounded-3xl p-12 mt-28 mx-auto flex flex-col items-center text-lg gap-7 font-myriadreg w-11/12 max-w-xl ${
                isOPenMenu ? 'animate-modal-open' : 'animate-modal-close'
              }`}
            >
              <WalletMultiButtonDynamic className='' />
              {wallet?.publicKey && (
                <>
                  <Link
                    href='/offers'
                    className={
                      router.pathname == '/offers' &&
                      'text-orange-light font-myriadbold'
                    }
                    onClick={() => setIsOPenMenu(false)}
                  >
                    YOUR OFFERS
                  </Link>
                  <Link
                    href='/loans'
                    className={
                      router.pathname == '/loans' &&
                      'text-orange-light font-myriadbold'
                    }
                    onClick={() => setIsOPenMenu(false)}
                  >
                    YOUR LOANS
                  </Link>
                  <div className='border w-full max-w-[500px] h-0' />
                </>
              )}
              <Link
                href='/lend'
                className={
                  router.pathname == '/lend' &&
                  'text-orange-light font-myriadbold'
                }
                onClick={() => setIsOPenMenu(false)}
              >
                LEND
              </Link>
              <Link href='/borrow' onClick={() => setIsOPenMenu(false)}>
                BORROW
              </Link>
              <Link href='/faqs' onClick={() => setIsOPenMenu(false)}>
                FAQS
              </Link>
              <div className='border w-full max-w-[500px] h-0' />
              <div className='flex items-center justify-center gap-9 cursor-pointer'>
                {ContactData.map((data, index) => (
                  <Link href={data.link} target='_blank' key={index}>
                    <Image
                      priority
                      src={data.image}
                      height={22}
                      width={22}
                      alt={data.alt}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
        {/* ) : 
        (
          <div className='flex items-center sm:gap-7 gap-4'>
            <Image
              priority
              src='/icons/icon-menu.svg'
              height={40}
              width={40}
              alt='Menu'
              onClick={() => setIsOPenMenu(true)}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};
