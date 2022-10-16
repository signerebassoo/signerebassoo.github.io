import React from 'react';
import NavButton from './NavButton/NavButton';

export default function NavLinks() {
  return (
    <nav>
      <ul className='flex items-center'>
        <li>
          <NavButton link={'/'} name={'Resume'} />
          <NavButton link={'/contact'} name={'Contact'} />
        </li>
      </ul>
    </nav>
  );
}
