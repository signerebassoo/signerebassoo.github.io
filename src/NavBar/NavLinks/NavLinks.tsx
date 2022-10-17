import React from 'react';
import NavButton from './NavButton/NavButton';

export default function NavLinks() {
  return (
    <nav>
      <ul className='flex items-center'>
        <li>
          <NavButton link={'/'} name={'Resume'} />
        </li>
        <li>
          <NavButton link={'mailto:signe.rebassoo@gmail.com'} name={'Contact'} />
        </li>
      </ul>
    </nav>
  );
}
