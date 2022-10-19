import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export default function Socials() {
  return (
    <div className='sm:text-5xl text-4xl flex justify-center gap-16 py-3 text-zinc-600'>
      <SocialItem icon={<AiFillLinkedin />} link={'https://www.linkedin.com/in/signe-rebassoo/'} />
      <SocialItem icon={<AiFillGithub />} link={'https://github.com/signerebassoo'} />
      <SocialItem icon={<AiFillTwitterCircle />} link={'#twitter'} />
    </div>
  );
}

interface SocialItemProps {
  icon: JSX.Element
  link: string
}

function SocialItem(props: SocialItemProps) {
  return (
    <a href={props.link} className='hover:text-zinc-500 transition duration-500' target="_blank" rel="noopener noreferrer">{props.icon}</a>
  )
}
