import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ContactData = [
  {
    image: '/icons/twitter.svg',
    alt: 'twitter',
    link: 'https://twitter.com/atadia_io',
  },
  {
    image: '/icons/discord.svg',
    alt: 'discord',
    link: 'https://discord.com/invite/atadia',
  },
  {
    image: '/icons/linktree.svg',
    alt: 'linktree',
    link: 'https://linktr.ee/atadia',
  },
];

export const Contact: FC = () => {
  return (
    <>
      {ContactData.map((data, index) => (
        <Link href={data.link} target='_blank' key={index}>
          <div className='bg-black p-4 rounded-2xl border border-gray cursor-pointer'>
            <Image
              priority
              src={data.image}
              height={22}
              width={22}
              alt={data.alt}
            />
          </div>
        </Link>
      ))}
    </>
  );
};
