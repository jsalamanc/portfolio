import { motion, AnimatePresence } from 'framer-motion';

export const AboutMe = () => {
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
        </div>
      </div>
    </div>
  );
};
