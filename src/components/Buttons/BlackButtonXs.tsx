import { ButtonProps } from "types"

export const BlackButtonXs = ({text, onClick}: ButtonProps) => {
  return (
    <div className='bg-black py-2 px-5 rounded-lg text-center border border-gray cursor-pointer hover:drop-shadow-hover' onClick={onClick}>
      <span className="text-white text-base">{text}</span>
    </div>
  )
}
