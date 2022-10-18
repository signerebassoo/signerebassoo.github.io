import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavItem } from '../NavBar';

interface MobileNavMenuProps {
  navItems: NavItem[]
}

export default function MobileNavMenu(props: MobileNavMenuProps) {
  const [mobileMenu, setMobileMenuShown] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuShown(!mobileMenu);
  }

  return (
    <>
      <div className='md:hidden flex items-center'>
        <button className='text-xl z-10' onClick={toggleMobileMenu}>
          {!mobileMenu ? <AiOutlineMenu /> : <AiOutlineClose className='text-white' />}
        </button>
      </div>
      {mobileMenu && 
        <ul className='absolute top-0 left-0 w-full h-screen bg-zinc-800 text-white text-2xl font-medium flex flex-col justify-center items-center'>
          {props.navItems.map(
            item => <MobileNavButton label={item.label} link={item.link} />
          )}
        </ul>
      }
    </>
  );
}

interface MobileNavButtonProps {
  label: string,
  link: string
}

function MobileNavButton(props: MobileNavButtonProps) {
  return (
    <li className='block hover:text-3xl px-2 pt-4 py-3 hover:text-teal-500 text-white transition duration-300'>
      <a href={props.link}>{props.label}</a>
    </li>
  )
}