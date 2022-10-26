import React from 'react';
import { SkillsList } from './SkillsList'
import JavaLogo from '../../../assets/images/java.png'
import SpringLogo from '../../../assets/images/spring.png'
import KafkaLogo from '../../../assets/images/kafka.png'
import ReactLogo from '../../../assets/images/react.png'


export default function ExperienceSection() {

  let skillsDetails = [
    {
      name: 'Java',
      imagePath: JavaLogo
    },
    {
      name: 'Spring Boot',
      imagePath: SpringLogo
    },
    {
      name: 'Apache Kafka',
      imagePath: KafkaLogo
    },
    {
      name: 'React',
      imagePath: ReactLogo
    }
  ]

  return (
    <div className='text-center'>
      <h3 className='sm:text-4xl text-3xl pt-20 sm:font-normal font-medium'>Skills & Experience.</h3>
      <SkillsList skills={skillsDetails} />
    </div>
  );
}
