import { ButtonProps } from "types"

export const BlackButton = ({text, onClick}: ButtonProps) => {
  return (
    <div className={`bg-black py-3 rounded-[15px] text-center border border-gray cursor-pointer hover:drop-shadow-hover`} onClick={onClick}>
      <span className="text-white text-sm lg:text-xl">{text}</span>
    </div>
  )
}
