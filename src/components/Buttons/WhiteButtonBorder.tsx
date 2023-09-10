import { ButtonProps } from "types"

export const WhiteButtonBorder = ({text, onClick}: ButtonProps) => {
  return (
    <div className='bg-white py-2 md:py-3 w-full md:rounded-[15px] rounded-lg text-center border border-black cursor-pointer hover:drop-shadow-hover' onClick={onClick}>
      <span className="text-black text-base">{text}</span>
    </div>
  )
}
