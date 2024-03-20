import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
        <SectionTitle text='FullStack' />
        <div className='py-16 grid grid-cols-2 gap-8 lg:grid-cols-3' >
            {skills.map((skill) => {
                return <SkillsCard key={skill.id} {...skill} />
            })}
        </div>
        
    </section>
  )
}

export default Skills