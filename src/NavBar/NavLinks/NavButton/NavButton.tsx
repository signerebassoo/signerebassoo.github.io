import React from 'react';

interface NavButtonProps {
  link: string,
  name: string
}

export default function NavButton(props: NavButtonProps) {
  return (
    <a className='bg-gradient-to-br from-teal-500 to-cyan-500 text-white px-4 pt-2 pb-1 ml-8 rounded-lg' 
      href={props.link}>
      {props.name}
    </a>
  );
}
