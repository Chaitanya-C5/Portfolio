import {BallCanvas} from './canvas';
import {technologies} from "../constants";
import SectionWrapper  from "../hoc/SectionWrapper";
import {motion} from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className='mt-5'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
       </motion.div>

       <div className='mt-20 flex flex-row flex-wrap
    justify-center gap-10'>
      {
        technologies.map(tech => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon}/>
          </div>
        ))
      }
    </div>
    </div>
    
  )
}

const WrappedTech = SectionWrapper(Tech, "");
WrappedTech.displayName = "";

export default WrappedTech;