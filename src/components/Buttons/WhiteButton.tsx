import { useRouter } from "next/router";
import { ButtonProps } from "types";

interface WhiteButton extends ButtonProps {
  cursor?: string;
}

export const WhiteButton = ({ text, onClick, cursor, path }: WhiteButton) => {
  const router = useRouter();
  if (!cursor) {
    cursor = "pointer"
  }
  return (
    //cursor not allowed not work
    < div className = {`bg-white cursor-${cursor} py-3 max-w-[220px] rounded-[15px] text-center mx-auto hover:drop-shadow-hover hover:text-orange-light transition-colors duration-300 ease-in-out text-black`} onClick = { path ? () => router.push(path) : onClick} >
      <span className="text-xl font-myriadbold align-text-top">{text}</span>
    </div >
  )
}
