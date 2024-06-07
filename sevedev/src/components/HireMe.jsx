import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HireMe = () => {
  return (
    <section id="contact" className='py-20 align-element' >
        <h1 className='text-clr-text-dark text-center text-6xl'>Hire Me</h1>
        <div className='flex justify-center gap-5 pt-5'>           
            
            <a href=""  className='block flex px-6 py-2 justify-center items-center gap-2  bg-clr-pry text-clr-white rounded-full hover:bg-clr-pry-400 text-clr-dark duration-300' >
                <MdEmail />
                <p>Email Me</p>
            </a>
            <a href=""  className='block flex px-6 py-2 justify-center items-center gap-2  bg-clr-pry text-clr-white rounded-full hover:bg-clr-pry-400 text-black duration-300' >
                <FaLinkedin />
                <p className="">Linkledn</p>
            </a>
        </div>
    </section>
  )
}

export default HireMe