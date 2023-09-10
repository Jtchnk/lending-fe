import { ButtonProps } from "types"

export const LinkAccountButton = ({text, onClick}: ButtonProps) => {
  return (
    <div className='bg-black pt-[6px] pb-1 px-5 rounded-lg text-center border border-gray cursor-pointer hover:drop-shadow-hover' onClick={onClick}>
      <span className="text-white text-xl">{text}</span>
    </div>
  )
}