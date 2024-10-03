import { styles } from '../styles';
import { motion } from "framer-motion";
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  const WrappedComponent = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  WrappedComponent.displayName = `SectionWrapper(${idName})`; // Provide a name for better debugging

  return WrappedComponent;
};

export default SectionWrapper;
