import React, { MouseEventHandler, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavItem } from '../NavBar';

interface MobileNavMenuProps {
  navItems: NavItem[]
}

export default function MobileNavMenu(props: MobileNavMenuProps) {
  const [mobileMenuIsShown, setIsMobileMenuShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuShown(state => !state);
  }

  return (
    <>
      <NavBurger onClick={toggleMobileMenu} />
      {mobileMenuIsShown && 
      // Fixme: Remove `hidden` to carry on work
        <div className='absolute hidden'>
          <ul>
            {props.navItems.map(
              item => <li><MobileNavButton label={item.label} link={item.link} /></li>
            )}
          </ul>
        </div>
      }
    </>
  );
}

interface NavBurgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

function NavBurger(props: NavBurgerProps) {
  return (
    <div className='md:hidden flex items-center'>
      <button className='text-xl' onClick={props.onClick}>
        <AiOutlineMenu />
      </button>
    </div>
  )
}

interface MobileNavButtonProps {
  label: string,
  link: string
}

function MobileNavButton(props: MobileNavButtonProps) {
  return (
    <a href={props.link} className="block text-md px-2 py-4 hover:bg-teal-500 hover:text-white transition duration-300">{props.label}</a>
  )
}