import React from 'react';
import HeadTitle from './HeadTitle/HeadTitle';
import NavLinks from './NavLinks/NavLinks';

export default function NavBar() {
  return (
    <div className='py-10 mb-12 flex justify-between'>
      <HeadTitle />
      <NavLinks />
    </div>
  );
}
