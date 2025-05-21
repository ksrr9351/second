"use client";

import React from 'react';
import { motion } from 'framer-motion';

const StepToday: React.FC = () => {
  return (
    <div className="w-full max-w-[95%] mx-auto py-8 md:py-16 px-4">
      <div className="
      max-w-8xl
      mx-auto
      relative
      h-[600px] md:h-[450px]
      /* mobile only: round top corners + clip */
      rounded-tl-3xl rounded-tr-3xl overflow-hidden
      /* from md up: remove rounding + allow overflow */
      md:rounded-none md:overflow-visible
    ">
        {/* Blue background panel */}
        <motion.div
          className="absolute right-0 top-0 h-full w-full md:w-[80%] bg-[#1a2e4d] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Photo card that overhangs */}
        <motion.div
          className="
            absolute
            left-0
            top-0
            md:-top-15
            h-[200px]
            md:h-[420px]
            w-full
            md:w-1/2
            rounded-3xl
            shadow-xl
            overflow-hidden
            z-10
          "
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/overlayimage.jpg"
            alt="Smiling business partner"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Content area aligned to the right half */}
        <motion.div
          className="absolute top-[220px] md:top-0 left-0 md:left-1/2 h-auto md:h-full w-full md:w-1/2 flex flex-col justify-center p-4 md:pl-8 md:pr-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step today
          </motion.h2>

          <motion.p
            className="text-sm md:text-base lg:text-lg mb-6 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Partner with us to find the solutions and resources you need to grow your business and demonstrate your proven expertise.
          </motion.p>

          <motion.button
            className="border-2 border-white hover:bg-white hover:text-[#1a2e4d] transition-colors duration-300 py-2 md:py-3 px-4 md:px-6 font-medium w-fit cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a partner
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default StepToday;