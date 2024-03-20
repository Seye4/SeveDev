import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HireMe = () => {
  return (
    <div className='py-20 align-element' >
        <h2 className='text-center'>Hire Me</h2>
        <div className='flex justify-center gap-5 pt-5'>           
            
            <a href=""  className='block flex px-6 py-2 justify-center items-center gap-2  bg-purple-950 text-white rounded-full hover:bg-purple-200 text-black duration-300' >
                <MdEmail />
                <p>Email Me</p>
            </a>
            <a href=""  className='block flex px-6 py-2 justify-center items-center gap-2  bg-purple-950 text-white rounded-full hover:bg-purple-200 text-black duration-300' >
                <FaLinkedin />
                <p>Linkledn</p>
            </a>
        </div>
    </div>
  )
}

export default HireMe