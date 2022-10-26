import React from 'react';
import Avatar from '../../../assets/images/self_avatar.png'

export default function HeroSection() {
  return (
    <div className='lg:flex justify-center'>
      <div>
        <HeroText />
        <CTAButton label={"Let's Connect"} link={'https://www.linkedin.com/in/signe-rebassoo/'} />
      </div>
      <div className='px-10 flex justify-center py-14'>
        <img src={Avatar} alt='avatar' className='sm:w-72 sm:h-72 w-64 h-64 object-contain rounded-full'></img>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className='text-center p-10'>
      <h3 className='sm:text-6xl text-4xl py-2 text-teal-500 font-medium'>{'<Signe Rebassoo />'}</h3>
      <h4 className='sm:text-3xl text-xl py-2 sm:font-normal font-medium'>Software developer, product engineer.</h4>
      <p className='sm:text-lg text-base py-5 leading-8 text-zinc-800 max-w-xl mx-auto'>Full-time back-end developer in fintech. Open to join forces for innovative and challenging side-projects.</p>
    </div>
  );
}

interface CTAButtonProps {
  label: string,
  link: string
}

function CTAButton(props: CTAButtonProps) {
  return (
    <div className='flex justify-center py-3'>
      <div className='bg-gradient-to-br from-teal-500 to-cyan-500 text-white sm:text-lg text-center w-fit px-4 pt-2 pb-1 rounded-lg shadow-lg'>
        <a href={props.link}>{props.label}</a>
      </div>
    </div>
  );
}
