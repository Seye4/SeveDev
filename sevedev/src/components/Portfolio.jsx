import { projects } from '../data'
import PortfolioCard from './PortfolioCard'
import SectionTitle from './SectionTitle'


const Portfolio = () => {
  return (
    <section className='align-element'>
      <SectionTitle text='Portfolio' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
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