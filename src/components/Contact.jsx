/* eslint-disable no-unused-vars */
import {useState, useRef} from 'react';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from '../utils/motion';

const initalState = {
  name: "",
  email: "",
  message: ""
}
const Contact = () => {

  const [form, setForm] = useState(initalState) 
  const formRef = useRef();
  const [loading, setLoading] = useState(false);  

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_3avs7xc', 'template_lwypdro', 
      {
        from_name: form.name,
        to_name: 'Chaitanya',
        from_email: form.email,
        to_email: 'gellachaitanyavenkatasai@gmail.com',
        message: form.message,  
      },'6ikU6B34x4QFgP-hO'
    ).then(() => {
      setLoading(false),
      alert('Thank you. I will get back to you as soon as possible.')
      setForm(initalState)
    })
    .catch(err => {
      setLoading(false)

      console.error(err)
      alert('Something went wrong.')
    });
  }

  return (
    <div className={`xl:mt-1 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>

      <motion.div variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-6 rounded-xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-8 h-[580px]'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input type='text' name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className='bg-tertiary py-4 px-6
                 placeholder:text-secondary
                 text-white rounded-lg outlined-none
                 border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input type='email' name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className='bg-tertiary py-4 px-6
                 placeholder:text-secondary
                 text-white rounded-lg outlined-none
                 border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea rows='7' 
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className='bg-tertiary py-4 px-6
                 placeholder:text-secondary
                 text-white rounded-lg outlined-none
                 border-none font-medium'
              />
            </label>

            <button type='submit'
              className='bg-tertiary text-white 
                px-8 py-3 w-fit font-bold shadow-md shadow-primary
                outline-none rounded-xl'>
              {
                loading ? 'Sending...' : 'Send'
              }
            </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]'
        >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact,"contact")
WrappedContact.displayName = "contact";
export default WrappedContact;