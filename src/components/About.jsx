import React from 'react';
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';

  const ServiceCard=({index,title,icon})=>{
    return(
     <Tilt className="xs:w-[250px] w-full">
     <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} 
     className='w-full green-pink-gradient p-[1px] rounded-[8px] shadow-card'>
    
     <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
     items-center flex-col'>
      <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
     </div>

     </motion.div>
     </Tilt>
    )
  }

const About = () => {
  return (
    
   <>
   <motion.div variants={textVariant()}>
    {/* <p className={styles.sectionSubText}>
      Introduction
      </p> */}
     <h2 className={styles.sectionHeadText}>
     About
      </h2>  
   </motion.div>

   <motion.p variants={fadeIn("", "", 0.1, 1)}  style={{ width: '100%',  wordBreak:'break-word', whiteSpace: 'normal'}}  className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] ' >
   Welcome to ORCAT: OmniResource for Creative Application Technologies. We are a team of experienced and versatile professionals dedicated to designing and developing high-quality websites tailored to meet the unique needs of our clients. With a solid background in web development, our team possesses the technical skills and knowledge required to create responsive, user-friendly, and visually appealing websites.
<br/><br/>
At ORCAT, we specialize in crafting digital experiences that go beyond just attractive designs. Our expertise lies in transforming complex problems into elegant solutions, ensuring that each project we undertake is both functional and aesthetically pleasing. We are passionate about innovation and constantly seek new challenges to tackle, aiming to deliver exceptional results that exceed expectations.
<br/><br/>
Whether you need a simple website or a complex web application, ORCAT is your go-to partner for creative application technologies. Let us help you bring your vision to life with our comprehensive web development services.
   </motion.p>
   <div className='mt-20 flex flex-wrap gap-10 '>
    {services.map((service, index) => (
      <ServiceCard key={service.title} 
      index={index}{...service}/>
    ))}
   </div>
   </>
   
  )
}

export default SectionWrapper(About, "about");

