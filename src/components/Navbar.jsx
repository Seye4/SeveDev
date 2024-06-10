import { useGlobalContext } from '../context'
import {links} from '../data'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'



const Navbar = () => { 
  const {toggleMenuBar, hideMenu, toggleDarkTheme } = useGlobalContext()


  return (
    <nav className='bg-clr-pry-l z-50 dark:bg-clr-dark fixed top-0 w-full'>
        <div className="align-element py-4 flex sm:gap-x-16 justify-between items-center sm:py-8">
            <div className="">
              <a href="/home" rel="noopener noreferrer">  <h2 className="text-clr-text-dark text-3xl font-bold">Seve<span className="text-clr-pry">Dev</span> </h2> </a> 
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
            <div className='block md:hidden cursor-pointer z-20' id='hamburger' onClick={toggleMenuBar} >
              <FaBars className='text-clr-text-pry' />
              
            </div>
            <ul id='menu' className="hidden sm:absolute flex-col gap-x-3 text-center  bg-clr-pry-500 left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 md:hidden">
              {links.map((link) => {
                const {id, href, text} = link

                return (
                  <li key={id} > 
                    <a href={href}
                      className="text-clr-white capitalize text-lg tracking-wide hover:text-purple-950 duration-300" onClick={hideMenu}
                    > {text}</a>
                  </li>
                )

              })}
              </ul>
            
                    
        </div>        
    </nav>
  )
}

export default Navbar