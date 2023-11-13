'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <header className='fixed z-10 top-0 left-0 w-full p-[1rem] bg-gray-800 bg-opacity-30 backdrop-blur-xl backdrop-filter'>
      Header
      <nav>
        <ul>
          <li>
            <div
              className={`w-[3rem] h-[2rem] bg-opacity-40 bg-white flex ${
                isOn ? 'justify-end' : 'justify-start'
              } rounded-full p-[0.2rem] cursor-pointer`}
              data-isOn={isOn}
              onClick={toggleSwitch}
            >
              <motion.div
                className='w-[1rem] h-[1rem] bg-white rounded-full'
                layout
                transition={spring}
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
