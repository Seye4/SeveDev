import React from 'react'

const PortfolioCard = ({img, title, text}) => {
  return (
    <section className='py-20' id='skills'>        
        <article className='mt-16 rounded-b-md shadow-lg hover:shadow-xl duration-300'>
            <img className='rounded-t-md object-cover' src={img} alt="" />
            <div className='p-8'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    </section>
  )
}

export default PortfolioCard