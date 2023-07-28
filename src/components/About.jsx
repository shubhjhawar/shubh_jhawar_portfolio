import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain '/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('left', "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am versatile full-stack web developer specializing in building cutting-edge applications. 
        With a strong foundation in Django for backend development and React for frontend design, 
        I create seamless and intuitive user experiences. 
        Proficient in C++, Python, and JavaScript, 
        I thrive on tackling complex challenges and adapting to new technologies swiftly. 
        As a quick learner and a collaborative team player, 
        I embrace every opportunity to expand my skill set and contribute to innovative projects. 
        My dedication to excellence drives me to craft fast, scalable, and reliable solutions that address real-world problems. 
        Additionally, I have a strong background in machine learning and all the aspects related to it, 
        leveraging data-driven insights to create intelligent and transformative solutions. 
        Alongside my technical expertise, 
        I possess a keen interest in competitive coding, honing my problem-solving abilities and 
        fostering a solution-oriented mindset. 
        Let's embark on a journey to build remarkable digital experiences together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")