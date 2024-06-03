import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../autotyping'

const Hero = () => {
  return (
    <div className=''>
        <div className='align-element flex flex-col items-center justify-center gap-y-8	mt-20'>
            <h1 id="autoText" className='text-4xl text-center'>
                Building Digital products, brands and experiences
            </h1>
            <div className="flex items-center gap-x-2.5">
                <FaLinkedin className="h-8 w-8 fill-purple-950" />
                <FaGithub className="h-8 w-8 fill-purple-950" />            
            </div>
            {/* <button className='bg-purple-950 text-white px-6 py-2 rounded-full hover:bg-purple-200 text-black duration-300 '>Latest Shots</button> */}
            <div className="m-auto border-b border-purple-200 pb-5">
              <h1 className="text-4xl text-center font-bold text-purple-900">Hi, I'm Oluseye</h1>
              <p className="w-1/2 mx-auto py-4 text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium reprehenderit distinctio, dignissimos cumque accusantium quod numquam error explicabo voluptatem incidunt veritatis quisquam molestiae voluptatum deserunt sequi harum ea id nihil? Soluta veniam laborum suscipit molestias aliquam optio, fugiat quod!</p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero