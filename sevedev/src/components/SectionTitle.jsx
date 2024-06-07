import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div id='portfolio'>
        <div className='flex flex-col gap-3 items-center' >

          <h1 className='text-clr-text-pry text-center font-bold'>Portfolio</h1>
          <h1 className='text-clr-text-dark'>Check out my portfolio below</h1>
        </div>

    </div>
  )
}

export default SectionTitle