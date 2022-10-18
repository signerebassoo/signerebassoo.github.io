import React from 'react';
import { NavItem } from '../NavBar';
import NavButton from './NavButton/NavButton';

interface NavMenuProps {
  navItems: NavItem[]
}

export default function NavMenu(props: NavMenuProps) {
  return (
    <nav>
      <ul className='md:flex hidden items-center'>
        {props.navItems.map(
          item => <li><NavButton label={item.label} link={item.link} /></li>
        )}
      </ul>
    </nav>
  );
}