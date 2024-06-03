import {links} from '../data'



const Navbar = () => {
  return (
    <nav className='bg-purple-50 dark:bg-slate-900'>
        <div className="align-element py-4 flex flex-col sm:flex-row  sm:gap-x-16 sm:justify-between sm:items-center sm:py-8">
            <div className="">
                <h2 className="text-3xl font-bold dark:text-white">Seve<span className="text-purple-950 dark:text-purple-400">Dev</span> </h2>
            </div>
            <div className="flex gap-x-3">
              {links.map((link) => {
                const {id, href, text} = link

                return (
                  <a 
                    key={id}
                    href={href}
                    className="capitalize tex-lg tracking-wide hover:text-purple-950 duration-300 dark:text-gray-100"
                  > {text}</a>
                )

              })}
                
            </div>        
        </div>        
    </nav>
  )
}

export default Navbar