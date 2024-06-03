import React from 'react'
import myImage from '../assets/img/cod.png';


const Services = () => {
  return (
    <section className='py-20 align-element border-b border-purple-200 pb-5'  >
        <div className='flex flex-col gap-3 items-center' >

            <h1 className='text-purple-800 text-center font-bold'>SERVICES</h1>
            <h1 className=''>What do I offer?</h1>
            <p className='w-1/2 text-center text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, facere labore. Optio ea dicta id deleniti quasi ullam autem repellendus ab, alias quae enim aliquam voluptates sit veritatis amet commodi!</p>

        </div>

        <div className='flex flex-wrap justify-between p-5 sm:p-0'>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                <img className='w-10' src={myImage} alt="" />
                <h1 className='font-medium text-lg'>Front End Developer</h1>
                <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero vel quas placeat eaque corporis saepe ipsum officia mollitia, deleniti molestias.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
           
        </div>
    </section>
  )
}

export default Services