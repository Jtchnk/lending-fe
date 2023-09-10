interface ButtonProps {
  text: string;
  isDisable?: boolean
  isSelected?: boolean
  onClick?: () => void
}

export const SelectButton = ({text, isDisable, isSelected, onClick}: ButtonProps) => {
  if (!isDisable) {
    isDisable = false
  }
  return (
    <div className={`${isSelected ? 'bg-black border border-white' : 'bg-white'} ${isDisable ? 'opacity-50 font-myriadlight cursor-not-allowed' : 'cursor-pointer'}  font-myriadbold lg:py-3 py-2 rounded-[15px] text-center hover:drop-shadow-hover ${['UNAVAILABLE', 'NO TOKENS', 'NO LIQUIDITY'].includes(text) ? 'text-sm' : 'text-base'}`} onClick={onClick}>
      <span className={`${isSelected ?' text-white' : 'text-black'}`}>{text}</span>
    </div>
  )
}
