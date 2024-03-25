import React from 'react'

const PortfolioCard = ({img, title, text}) => {
  return (
    <article className='max-w-[800px] mx-auto rounded-b-md shadow-lg hover:shadow-xl duration-300'>
            <img className='rounded-t-md object-cover' src={img} alt="" />
            <div className='capitalize p-8'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
    </article>
  )
}

export default PortfolioCard