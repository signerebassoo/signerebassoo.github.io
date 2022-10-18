import React from 'react';
import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import NavMenu from './NavMenu/NavMenu';

export default function NavBar() {
  return (
    <div className='py-10 mb-12 flex justify-between'>
      <NavBarTitle />
      <NavMenu navItems={getNavItems()} />
      <MobileNavMenu navItems={getNavItems()} />
    </div>
  );
}

function NavBarTitle() {
  return (
    <h1 className='sm:text-2xl text-xl'>
      @signerebassoo
    </h1>
  );
}

export interface NavItem {
  label: string,
  link: string
}

function getNavItems() {
  let navItems: NavItem[] = [
    {'label': 'Resume', 'link': '/'},
    {'label': 'Contact', 'link': 'mailto:signe.rebassoo@gmail.com'}
  ]
  return navItems;
}
