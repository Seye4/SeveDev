import React from 'react'

const SkillsCard = ({id, title, icon, text}) => {
  return (
    <div className='flex flex-col gap-3'>
        <span className='text-sm'>{icon}</span>
        <h3>{title}</h3>
        <p className='text-xs'>{text}</p>
    </div>
  )
}

export default SkillsCard