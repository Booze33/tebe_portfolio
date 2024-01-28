import BallCanvas from '../features/ball';
import { SectionWrapper } from '../hoc';
import technologies from '../features/img'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-10 bg-gold w-screen sm:w-feature ml-ball sm:ml-flex2">
      {technologies.map((technology) => (
        <div className="w-logo h-logo sm:w-24 sm:h-24" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '');