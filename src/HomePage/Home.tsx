import React from 'react';
import Socials from './Socials/Socials';

export default function Home() {
  return (
    <>
      <div className='text-center p-10'>
        <h2 className='text-6xl py-2 text-indigo-600 font-medium'>{'<Signe Rebassoo />'}</h2>
        <h3 className='text-3xl py-2'>Software developer and product engineer.</h3>
        <p className='text-lg py-5 leading-8 text-gray-800'>Full-time employee in fintech. Open to join forces for innovative and challenging side-projects. Let's connect!</p>
      </div>
      <Socials />
      <img src=''></img>
    </>
  );
}
