import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import Image from 'next/image';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { useNumberInput } from 'stores/useNumberInput';
import { useUserSOLBalanceStore } from "stores/useUserSOLBalanceStore";
import { roundToTwoDigits } from 'utils';

interface AmountInputProps {
  header: string
  iconHeader?: boolean
  icon?: boolean
  showSol?: boolean
  disableValidateSol?: boolean
  maxInput?: number
}

export const AmountInput = ({ ...props }: AmountInputProps) => {
  const connection = useMemo(
    () => new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC!),
    []
  );

  const { disableValidateSol, maxInput } = props;

  const [warningText, setWarningText] = useState<string>("");

  const numberInput = useNumberInput(state => state.input);
  const setInput = useNumberInput(state => state.setInput);

  const balance = useUserSOLBalanceStore(state => state.balance);
  const getUserSOLBalance = useUserSOLBalanceStore(state => state.getUserSOLBalance);

  const handleAmountOnChange = (e: any) => {
    const input = e.target.value;
    setWarningText("")
    try {
      const solAmount = parseFloat(input);
      if (!solAmount) {
        setWarningText('number only')
      }
      if ((solAmount > balance) && (!disableValidateSol)) {
        setWarningText('insufficient sol')
        return
      }
      if (maxInput && (maxInput < input)) {
        setWarningText('limit exceed')
        return
      }
      setInput(solAmount);
    } catch (err) {
      console.log(err)
    }
  }

  const { publicKey } = useWallet();

  useEffect(() => {
    getUserSOLBalance(publicKey, connection)
  }, [publicKey])

  return (
    <div className='flex flex-col'>
      <span className='lg:text-[22px] text-xl flex font-myriadreg gap-1'>{props.iconHeader && <Image
        priority
        src='/icons/sol.svg'
        height={18}
        width={18}
        alt='SOL'
      />}{props.header}</span>
      <div className='relative flex items-center justify-between'>
        <input
          className='bg-white border border-gray rounded-lg py-2 px-5 my-[10px] text-black lg:text-2xl text-xl w-full lg:min-w-[300px] min-w-[220px] focus:outline-0'
          type='number'
          value={numberInput}
          placeholder='0'
          onChange={handleAmountOnChange}
        />
        {props.icon && <Image
          priority
          src='/icons/sol.svg'
          height={25}
          width={25}
          alt='SOL'
          className='absolute top-[22px] right-5'
        />}
      </div>
      <div className='flex justify-end gap-5'>
        <span className='text-sm'>{warningText}</span>
        <div
          className='border border-gray bg-black py-1 rounded-md w-[60px] text-center lg:text-base text-sm cursor-pointer'
          onClick={() => {setInput(maxInput/2)}}
        >
          Half
        </div>
        <div
          className='border border-gray bg-black py-1 rounded-md w-[60px] text-center lg:text-base text-sm cursor-pointer'
          onClick={() => setInput(maxInput)}
        >
          Max
        </div>
      </div>
      {props.showSol && <div className='flex text-xl gap-1 justify-end mt-5'>
        <div>
          You have <span className='font-myriadbold'>{roundToTwoDigits(balance)}</span>
        </div>
        <Image
          priority
          src='/icons/sol.svg'
          height={18}
          width={18}
          alt='SOL'
        />
      </div>}
    </div>
  );
};
