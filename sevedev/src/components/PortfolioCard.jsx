import React from 'react'

const PortfolioCard = ({img, title, text}) => {
  { /* <article className='max-w-[800px] mx-auto rounded-b-md shadow-lg hover:shadow-xl duration-300'>
            <img className='rounded-t-md object-cover' src={img} alt="" />
            <div className='capitalize p-8'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
  </article> */}
  return (
    
    <article className='rounded-xl shadow-xl hover:shadow-2xl duration-300'>
      <div className='p-5 flex flex-col'>
        <div className='rounded-xl overflow-hidden'>
          <img className='rounded-t-md object-cover' src={img} alt="" />
        </div>
        <div className='capitalize'>
          <h5 className='font-medium text-lg mt-3'>{title}</h5>
          <p className='text-gray-400 text-sm mt-3'>{text}</p>
        </div>
          <a className='w-full text-center bg-purple-800 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-purple-400 focus:scale-95 transition-all duration-200 ease-out' href="">Explore</a>
      </div>
    </article>
  )
}

export default PortfolioCard