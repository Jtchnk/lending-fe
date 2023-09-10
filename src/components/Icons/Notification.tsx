import { IconProps } from "types";

const Notification = ({...props}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width={props.width}
      height={props.height}
      viewBox='0 0 24 24'
      fill={props.fill}
    >
      <path d='M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 15 L 18 15 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 4 17 L 4 19 L 10.269531 19 A 2 2 0 0 0 10 20 A 2 2 0 0 0 12 22 A 2 2 0 0 0 14 20 A 2 2 0 0 0 13.728516 19 L 20 19 L 20 17 L 4 17 z'></path>
    </svg>
  );
};

export default Notification;