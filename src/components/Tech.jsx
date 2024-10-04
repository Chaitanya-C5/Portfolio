import { BallCanvas } from './canvas';
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useEffect, useState } from "react"; // Import useState and useEffect

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='mt-5'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {
          technologies.map(tech => (
            <div className='w-28 h-28' key={tech.name}>
              {isMobile ? (
                // Display image when on mobile
                <img src={tech.icon} alt={tech.name} className='w-full h-full object-contain' />
              ) : (
                // Display 3D ball when not on mobile
                <BallCanvas icon={tech.icon} />
              )}
            </div>
          ))
        }
      </div>
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
WrappedTech.displayName = "";

export default WrappedTech;
