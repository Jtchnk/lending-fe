import { WhiteButton } from 'components/Buttons';
import { ToggleSwitch } from 'components/Switches';
import Image from 'next/image';
import { useState } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClickClose: () => void;
}

export const DevnetInformModal = ({
  isOpen,
  onClickClose,
}: ModalProps) => {

  const handleHideNewUserModal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.setItem("hideNewUserModal", event.target.checked.toString());
  };

  return (
    <>
      <div className={`fixed backdrop-blur top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center ${isOpen ? '' : 'duration-500 invisible'}`}>
        <div className={`border border-gray bg-black text-white p-7 mx-auto w-[75%] max-w-[500px] rounded-[20px] relative ${isOpen ? 'animate-modal-open' : 'animate-modal-close'}`}>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-myriadreg'>
              {"This p2p platform is on the devnet environment!"}
            </div>
            <Image
              priority
              src='/icons/cancel.svg'
              height={25}
              width={25}
              alt='cancel'
              onClick={onClickClose}
            />
          </div>
          <div className='text-lg my-7'>
            <div>This is for testing or trying out by user who don't want to spend their real SOL.</div>
            <div>The mainnet one just launched at <a className='underline' href='https://lending.atadia.io/'>lending.atadia.io</a></div>
            <br/>
            <div>If you wish to test out our platform on devnet, you have to...</div>
            <ul className="list-disc list-inside">
              <li>Ensure you have your own custodial wallet extension, such as <a className='underline' href='https://phantom.app/'>Phantom wallet</a>.</li>
              <li>Switch your network on Phantom to "testnet".</li>
              <li>Acquire SOL on the devnet by using <a className='underline' href='https://solfaucet.com/'>solfaucet</a>.</li>
              <li>For testing the <a className='underline' href='https://lendinglab-mg6fwvzq3a-as.a.run.app/borrow'>borrowing</a> feature, you'll need an internal test SPL token provided by us as collateral tokens.</li>
              <ul className="list-disc list-inside">
                <li>You can request the necessary test SPL token through a <a className='underline' href='https://discord.com/channels/909782912881291314/949242600374804530'>ticket</a> on our Discord server.</li>
                <li>OR Contact me <a className='underline' href='https://discord.com/invite/painchaosmax#5319'>directly</a> for assistance in obtaining the test SPL token.</li>
              </ul>
            </ul>
          </div>
          <div className="flex items-center">
            <input
              id='hide-message'
              type="checkbox"
              onChange={handleHideNewUserModal}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor='hide-message'
              className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">
              Do not show this messages again
            </label>
          </div>
          <div className='mt-12 w-[160px] mx-auto'>
            <WhiteButton text={"GOT IT!"} onClick={onClickClose} />
          </div>
        </div>
      </div>
    </>
  );
};