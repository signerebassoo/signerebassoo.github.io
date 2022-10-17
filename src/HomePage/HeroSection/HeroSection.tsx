import React from 'react';
import Socials from './Socials/Socials';
import avatar from '../../assets/self_avatar.jpg'
import HeroText from './HeroText/HeroText';

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
