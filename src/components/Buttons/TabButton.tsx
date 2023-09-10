interface ButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  width?: string
}

export const TabButton = ({text, onClick, isActive, width}: ButtonProps) => {
  return (
    <div className={`${isActive ? 'bg-orange/[0.5] border-white' : 'bg-black border-gray'} py-2 px-5 ${width} rounded-lg text-center border cursor-pointer hover:drop-shadow-hover`} onClick={onClick}>
      <div className="text-white text-base">{text}</div>
    </div>
  )
}