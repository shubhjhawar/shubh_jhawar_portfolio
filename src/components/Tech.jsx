import React from 'react';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once:false, amount:0.25}}
        >
          <p className={`${styles.sectionSubText}`}>what Technologies do i know</p>
          <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 m-0 p-0'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <p className='flex flex-row justify-center items-center w-full px-2 mt-[30px] text-secondary font-medium text-[20px]'>and more...</p>
    </>
  )
}

export default SectionWrapper(Tech, "");