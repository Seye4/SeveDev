import {links} from '../data'



const Navbar = () => {
  return (
    <nav className='bg-purple-50'>
        <div className="align-element py-4 flex flex-col sm:flex-row  sm:gap-x-16 sm:justify-between sm:items-center sm:py-8">
            <div className="">
                <h2 className="text-3xl font-bold">Seve<span className="text-purple-950">Dev</span> </h2>
            </div>
            <div className="flex gap-x-3">
              {links.map((link) => {
                const {id, href, text} = link

                return (
                  <a 
                    key={id}
                    href={href}
                    className="capitalize tex-lg tracking-wide hover:text-purple-950 duration-300"
                  > {text}</a>
                )

              })}
                
            </div>        
        </div>        
    </nav>
  )
}

export default Navbar