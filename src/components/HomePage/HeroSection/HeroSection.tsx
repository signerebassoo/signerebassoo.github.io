import React from 'react';
import Socials from './Socials/Socials';
import avatar from '../../../assets/self_avatar.jpg'

export default function HeroSection() {
  return (
    <div className='lg:flex justify-center'>
      <div>
        <HeroText />
        <Socials />
      </div>
      <div className='relative overflow-hidden p-10 flex justify-center'>
        <img src={avatar} alt='avatar' className='py-2 w-80 h-80 object-contain'></img>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className='text-center p-10'>
      <h2 className='sm:text-6xl text-4xl py-2 text-teal-600 font-medium'>{'<Signe Rebassoo />'}</h2>
      <h3 className='sm:text-3xl text-xl py-2 sm:font-normal font-medium'>Software developer, product engineer.</h3>
      <p className='sm:text-lg text-base py-5 leading-8 text-gray-800 max-w-xl mx-auto'>Full-time back-end developer in fintech. Open to join forces for innovative and challenging side-projects. Let's connect!</p>
    </div>
  );
}
