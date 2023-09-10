import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import Image from 'next/image';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { useNumberInput } from 'stores/useNumberInput';
import { useUserSOLBalanceStore } from "stores/useUserSOLBalanceStore";
import { roundToTwoDigits } from 'utils';

interface AmountInputProps {
  header?: string
  iconHeader?: boolean
  icon?: boolean
  minMax?: boolean
  disableValidateSol?: boolean
  maxInput: number
  showSol?: boolean
}

export const AmountInputSm = ({ ...props }: AmountInputProps) => {
  const {maxInput} = props
  const connection = useMemo(
    () => new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC!),
    []
  );

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
      if (solAmount > balance) {
        setWarningText('insufficient sol')
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
      <div className='md:text-xl text-text-base flex items-center justify-between font-myriadreg gap-2 w-full'>{props.iconHeader && <Image
        priority
        src='/icons/sol.svg'
        height={18}
        width={18}
        alt='SOL'
      />}<span>{props.header}</span>
        <div className='relative flex items-center justify-between'>
          <input
            className='bg-white border border-gray rounded-lg py-2 px-4 my-[10px] text-black lg:text-xl text-lg sm:w-[200px] w-[120px]  focus:outline-0'
            type='number'
            value={numberInput}
            onChange={handleAmountOnChange}
          />
          {props.icon && <Image
            priority
            src='/icons/sol.svg'
            height={14}
            width={14}
            alt='SOL'
            className='absolute top-[26px] right-5'
          />}
        </div>
      </div>
      {props.minMax &&
        <div className='flex justify-end sm:gap-5 gap-2'>
          <span className='text-sm'>{warningText}</span>
          <div
            className='border border-gray bg-black py-1 rounded-md w-[60px] text-center lg:text-base text-sm text-white cursor-pointer'
            onClick={() => setInput(maxInput / 2)}
          >
            Half
          </div>
          <div
            className='border border-gray bg-black py-1 rounded-md w-[60px] text-center lg:text-base text-sm text-white cursor-pointer'
            onClick={() => setInput(maxInput)}
          >
            Max
          </div>
        </div>}
      {props.showSol && <div className='flex gap-1 justify-end mt-2'>
        <div>
          You have <span className='font-myriadbold'>{roundToTwoDigits(balance)}</span>
        </div>
        <Image
          priority
          src='/icons/sol.svg'
          height={14}
          width={14}
          alt='SOL'
        />
      </div>}
    </div>
  );
};
