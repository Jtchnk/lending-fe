import { ButtonProps } from "types"

export const WhiteButtonXs = ({text, onClick}: ButtonProps) => {
  return (
    <div className='bg-white py-2 w-[120px] rounded-lg text-center cursor-pointer hover:drop-shadow-hover hover:text-orange-light transition-colors duration-300 ease-in-out text-black' onClick={onClick}>
      <span className="text-base font-myriadreg">{text}</span>
    </div>
  )
}
