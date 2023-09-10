import { ButtonProps } from "types"

interface BlackBtnProps extends ButtonProps {
  isDisabled?: boolean
}

export const BlackButtonSm = ({text,isDisabled, onClick}: BlackBtnProps) => {
  if (!isDisabled) {
    isDisabled = false
  }
  return (
    <div className={`bg-black py-2 md:py-3 w-full md:rounded-[15px] rounded-lg text-center border border-gray ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} hover:drop-shadow-hover`} onClick={onClick}>
      <span className="text-white text-base">{text}</span>
    </div>
  )
}
