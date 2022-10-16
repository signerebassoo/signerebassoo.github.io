import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export default function Socials() {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillLinkedin />
      <AiFillGithub />
      <AiFillTwitterCircle />
    </div>
  );
}
