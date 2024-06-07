import React from 'react'
import myImage from '../assets/img/cod.png';


const Services = () => {
  return (
    <section id='services' className='py-20 align-element border-b border-purple-200 pb-16'  >
        <div className='flex flex-col gap-3 items-center' >

            <h1 className='text-clr-text-pry text-center font-bold'>SERVICES</h1>
            <h1 className='text-clr-text-dark'>What do I offer?</h1>
            <p className='w-1/2 text-center text-clr-text-grey'>I design practical and easy-to-use user interfaces for websites and applications. I create and manage application user interfaces, as well as optimize user experiences on application across all device platforms. I handle data flow between the frontend and backend. I can debug, patch issues, and test apps for usability. 
            </p>

        </div>

         <div className='flex items-center justify-center p-5 sm:p-0'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-8' >

                    {/* card */}
                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>Front End Developer</h1>
                    <p className='text-clr-text-grey'>I develop websites and applications in web languages such as HTML, CSS, and JavaScript, as well as frameworks and libraries that allow users to access and interact with the website or app.
                    </p>
                </div>

                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>WinForm / WPF Application Design</h1>
                    <p className='text-clr-text-grey'>I create application interface for tablets and PC using WinForm and Wpf, I utilize visual studio, XAML and c# to create interesting and interactive applications </p>
                </div>

                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>Virtual Reality Developer</h1>
                    <p className='text-clr-text-grey'>I develop virtual immersive worlds for games and educational applications using game engines like Unity and Unreal engines, as well as programming languages like C# and C++.
                    </p>
                </div>
                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>Augmented Reality Developer</h1>
                    <p className='text-clr-text-grey'>I create Augmented Reality games and educational applications using game engines such as Unity and Unreal engines, as well as programming languages like C# and C++.
                    </p>
                </div>
                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>Game Developer</h1>
                    <p className='text-clr-text-grey'>I make 2D and 3D educational games for iOS, Android, and tablet platforms. I use programming languages like C# and C++ in addition to gaming engines like Unity and Unreal Engines.
                    </p>
                </div>
                <div className='bg-clr-card-bg w-full md:w-full shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
                    <img className='w-10' src={myImage} alt="" />
                    <h1 className='font-medium text-lg text-clr-text-dark'>3d Artist</h1>
                    <p className='text-clr-text-grey'>Using 3d technologies such as Blender, 3ds Max, and Maya, I design and model 3D objects for usage in games, architectural visualization, and product design. In addition, I provide concepts and videos for architectural and product visualization.
                    </p>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Services