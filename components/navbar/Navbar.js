import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../../public/images/medium.png';
const links = [
  {
    id: 1,
    name: 'Our story',
    href: '/',
    accentedButton: false,
  },
  {
    id: 3,
    name: 'Write',
    href: '/',
    accentedButton: false,
  },
  {
    id: 4,
    name: 'Membership',
    href: '/',
    accentedButton: false,
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 22) setNav(true);
    else setNav(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let color = !nav ? ' bg-[#FCC017]' : 'bg-white';

  return (
    <div className={`wrapper min-w-lg w-full ${color} sticky top-0 left-0`}>
      <div className="content mx-auto w-[80%] flex justify-between items-center h-[75px] py-[25px]">
        <div className="logo">
          <Image
            className="cursor-pointer object-contain"
            src={Logo}
            height={40}
            width={200}
            alt="image logo"
          />
        </div>{' '}
        <ul className="links flex items-center md:space-x-4">
          {' '}
          {links.map((link) => (
            <li
              className={
                'font-Helvetica md:flex hidden text-base cursor-pointer'
              }
              key={link.id}
            >
              {' '}
              {link.name}{' '}
            </li>
          ))}{' '}
          <li className="font-Helvetica sm:flex md:px-1 px-4 hidden text-base cursor-pointer">
            {' '}
            Sign In{' '}
          </li>{' '}
          <li
            className={
              !nav
                ? 'font-Helvetica transition-colors duration-100 text-sm h-[37px] cursor-pointer  bg-black text-white px-[1rem] pt-[7px] pb-[9px] inline-block  text-center rounded-full'
                : 'font-Helvetica  transition-colors duration-100 text-sm h-[37px] cursor-pointer  bg-[#1A8917] text-white px-[1rem] pt-[7px] pb-[9px] inline-block  text-center rounded-full'
            }
          >
            {' '}
            Get started{' '}
          </li>{' '}
        </ul>{' '}
      </div>{' '}
    </div>
  );
};

export default Navbar;
