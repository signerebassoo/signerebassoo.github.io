import React from 'react';

interface NavButtonProps {
  label: string,
  link: string
}

export default function NavButton(props: NavButtonProps) {
  return (
    <li className='bg-gradient-to-br from-teal-500 to-cyan-500 text-white px-4 pt-2 pb-1 ml-8 rounded-lg'>
      <a href={props.link}>{props.label}</a>
    </li>
  );
}
