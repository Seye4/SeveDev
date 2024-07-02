import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className='scroll-mt-24'>
        <div className='align-element flex flex-col items-center justify-center gap-y-8	mt-20 border-b border-clr-border py-20'>
           
            <div className="m-auto">
              <h1 className="text-4xl pb-5 text-center font-bold text-clr-text-pry">Hi, I'm Oluseye</h1>
              <div className="h-12 overflow-hidden">
                <div className=" h-full animate-move">
                  <h1 id="autoText" className='text-clr-text-dark h-12 flex items-center justify-center text-3xl text-center'>Full Stack  Engineer </h1>
                  <h1 id="autoText" className='text-clr-text-dark h-12 flex items-center justify-center text-3xl text-center'>VR Developer </h1>
                  <h1 id="autoText" className='text-clr-text-dark h-12 flex items-center justify-center text-3xl text-center'>AR Developer </h1>
                  <h1 id="autoText" className='text-clr-text-dark h-12 flex items-center justify-center text-3xl text-center'>Game Developer </h1>
                  <h1 id="autoText" className='text-clr-text-dark h-12 flex items-center justify-center text-3xl text-center'>3d Artist </h1>
                </div>
              </div>
              
                
              <p className="w-1/2 mx-auto py-4 text-center text-clr-text-grey">Am a Full Stack  Engineer with expertise in HTML, CSS, JavaScript, React, Next Js, Angular, Express  and other third-party frameworks such as jQuery, React and database systems like MongoDB and MySQL. I want to use my programming skills and expertise to add value to the employer and contribute to successful projects. Am looking forward to taking on new challenges.  </p>
            </div>
            <div className="flex items-center gap-x-2.5 pb-16">
              <a href="https://github.com/Seye4" target="_blank" rel="noopener noreferrer"><FaLinkedin className="h-8 w-8 fill-clr-pry" /></a>
              <a href="https://www.linkedin.com/in/oluseye-ekerin-41653042/" target="_blank" rel="noopener noreferrer"><FaGithub className="h-8 w-8 fill-clr-pry" /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Hero