import { NextRouter } from "next/router";

interface ButtonProps {
  text: string;
  path: string,
  router: NextRouter
}

export const HomeWhiteButton = (
  { text, path, router }: ButtonProps,
) => {
  return (
    <button onClick={() => router.push(path)} className='bg-white py-[15px] w-[180px] lg:w-[250px] rounded-[20px] text-center hover:drop-shadow-hover hover:text-orange-light transition-colors duration-300 ease-in-out text-black'>
      <span className="text-2xl lg:text-3xl font-myriadbold align-text-top">{text}</span>
    </button>
    
  )
}
