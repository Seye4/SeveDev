import { projects } from '../data'
import PortfolioCard from './PortfolioCard'
import SectionTitle from './SectionTitle'


const Portfolio = () => {
  return (
    <section className='align-element pt-20 border-b border-clr-border pb-5 scroll-mt-24' id='portfolio'>
      <SectionTitle text='Portfolio' />
      <div className='py-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {
          projects.map((project) => {
            return <PortfolioCard key={project.id} {...project} />
          })
        }
      </div>
    </section>
  )
}

export default Portfolio