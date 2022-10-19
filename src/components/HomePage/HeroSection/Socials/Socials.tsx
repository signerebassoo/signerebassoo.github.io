import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

export default function Socials() {
  return (
    <div className='sm:text-5xl text-4xl flex justify-center gap-16 py-3 text-zinc-600'>
      <a href='https://www.linkedin.com/in/signe-rebassoo/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
      <a href='https://github.com/signerebassoo' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
      <a href='/'><AiFillTwitterCircle /></a>
    </div>
  );
}
