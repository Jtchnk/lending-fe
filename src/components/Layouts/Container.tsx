import { Contact } from 'components/Contact';
import Profile from 'components/Profile/Profile';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const route = useRouter();

  return (
    <div className='w-full px-8 pb-12 mx-auto relative'>
      {(route.pathname == '/borrow' || route.pathname == '/loans') && <Profile />}
      <div className='hidden xxl:flex flex-col gap-5 items-end absolute bottom-[40px] right-8'><Contact/></div>
      <div className='max-w-[1700px] mx-auto xxl:px-8'>{children}</div>
    </div>
  );
};
