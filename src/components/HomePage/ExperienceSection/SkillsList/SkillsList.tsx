import React from 'react';

export interface Skill {
  name: string
  imagePath: string
}

interface SkillsListProps {
  skills: Skill[]
}

export const SkillsList: React.FC<SkillsListProps> = ({skills}) => {
  return (
    <ul className='flex justify-center p-10 gap-8'>
      {skills.map((skill: Skill) => 
        <SkillItem name={skill.name} imagePath={skill.imagePath} />
      )}
    </ul>
  )
}

function SkillItem(skill: Skill) {
  return (
    <li key={skill.name} className='bg-white rounded-full p-4 shadow-lg text-center
    hover:scale-110 hover:mx-4 hover:shadow-2xl transition-all duration-500'>
      <img src={skill.imagePath} alt={skill.name} className='sm:w-16 w-14'></img>
    </li>
  )
}
