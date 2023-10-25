'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { icon: '🍅', label: 'Education' },
  { icon: '🥬', label: 'Certifications' }
];
export const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="w-full px-4 py-14 bg-gray-900">
      <div className="m-auto container flex flex-wrap">
        <div className="w-full lg:w-[50%]"></div>
        <div className="w-full lg:w-[50%]">
          <h1 className="capitalize text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l  from-[#5A32A3] to-[#D03592]">
            About Me
          </h1>
          <p className="mt-4 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta est
            quos voluptate similique aperiam commodi tempore maxime
            exercitationem molestias esse quis magnam libero, fugit vitae sequi
            velit dolores fuga!
          </p>
          <div className="mt-4">
            <nav>
              <ul className="flex">
                {tabs.map((item, index) => (
                  <li
                    key={index}
                    className={item === selectedTab ? 'selected' : ''}
                    onClick={() => setSelectedTab(item)}
                  >
                    <div className="p-3 cursor-pointer">
                      <p
                        className={`${
                          item === selectedTab
                            ? 'text-slate-500'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.label}
                      </p>
                    </div>
                    {item === selectedTab ? (
                      <motion.div
                        className="border border-sky-500"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                className="p-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? selectedTab.icon : ''}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
