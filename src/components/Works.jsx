import React from 'react';
import {Tilt}  from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index *0.25, 0.75)}
      viewport={{once:false, amount:0.25}}
      initial="hidden"
      whileInView="show"
    >
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <div className='relative flex flex-row justify-between w-full'>
                  <h3 className="font-bold text-white text-[24px]">{name}</h3>

                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1 my-auto">
                              <div
                                onClick={() => window.open(live_demo_link, '_blank')}
                                className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                              >
                                <img src={link} alt="link" className='w-1/2 h-1/2 object-contain'/>
                              </div>

                              <div
                                onClick={() => window.open(source_code_link, '_blank')}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                              >
                                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                              </div>
                    </div>
          </div>
           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=> (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name} </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once:false, amount:0.25}}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
         <motion.p
          variants={fadeIn("", "",  0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w--3xl leading-[30px]'
         >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with link to code repositories and live demos in it. 
          It reflects my ability to solve complex problems, work with different technologies and manage projects effectively.
         </motion.p>
      </div>
      
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}  
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");