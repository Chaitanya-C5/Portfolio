/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper  from "../hoc/SectionWrapper";

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full"> 
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex justify-evenly items-center
        flex-col'
      >
      
        <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
       </motion.div>

       <motion.p variants={fadeIn("","",0.1,1)}
          className='mt-4 text-secondary text-[17px]
          max-w-3xl leading-[30px]'
        >
            I'm a dedicated software developer with expertise in C, C++, Python, Java, and web technologies like Servlets, JSP, HTML, CSS, JavaScript, jQuery, React.js, and ExpressJS.
            From developing efficient web applications to creating robust software systems, I’m passionate about solving complex problems with code. I'm a fast learner and enjoy collaborating with teams to deliver scalable and user-friendly digital solutions. Let’s work together to turn your ideas into reality!
       </motion.p>

       <div className='flex flex-wrap gap-10' style={{ marginTop: '2.5rem' }}>
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
          ))}
       </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about");
WrappedAbout.displayName = "about";

export default WrappedAbout;