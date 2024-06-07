import { useGlobalContext } from '../context'
import {links} from '../data'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'



const Navbar = () => { 
  const {isDarkTheme, toggleDarkTheme } = useGlobalContext()


  return (
    <nav className='bg-clr-pry-l dark:bg-clr-dark fixed top-0 w-full'>
        <div className="align-element py-4 flex sm:gap-x-16 justify-between items-center sm:py-8">
            <div className="">
                <h2 className="text-clr-text-dark text-3xl font-bold">Seve<span className="text-clr-pry">Dev</span> </h2>
            </div>
            <div className="md:flex hidden gap-x-3">
              {links.map((link) => {
                const {id, href, text} = link

                return (
                  <a 
                    key={id}
                    href={href}
                    className="text-clr-text-dark capitalize tex-lg tracking-wide hover:text-clr-pry-dark duration-300 "
                  > {text}</a>
                )

              })}
                
            </div>
            <button className='hidden shrink-0 md:flex w-14 h-7 rounded-full bg-clr-white border-2 border-clr-border relative justify-around items-center'  onClick={toggleDarkTheme}>
              <BsFillMoonFill className='fill-clr-dark' />
              <BsFillSunFill className='fill-clr-dark' />
              <div className='w-6 h-6 bg-clr-pry-400 cursor-pointer rounded-full absolute left-7 dark:left-0' ></div>
            </button>
            <div className='block md:hidden cursor-pointer z-10'>
              <FaBars className='dark:text-clr-pry-400' />
            </div>
            
            <div id='menu' className="absolute hidden sm:hidden flex flex-col gap-x-3  bg-clr-pry-500 left-0 top-0 w-full p-10 rounded-b-3xl space-y-10">
              {links.map((link) => {
                const {id, href, text} = link

                return (
                  <a 
                    key={id}
                    href={href}
                    className="capitalize tex-lg tracking-wide hover:text-purple-950 duration-300 dark:text-gray-100 text-center"
                  > {text}</a>
                )

              })}
                
            </div>        
        </div>        
    </nav>
  )
}

export default Navbar