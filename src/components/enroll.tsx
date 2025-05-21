"use client";

import React from 'react';
import { UserPlus, ClipboardCheck, UserCog } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Enroll: React.FC = () => {
  return (
    <motion.div
      className="max-w-[95%] mx-auto px-4 py-12 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold text-slate-800 mb-4"
        variants={itemVariants}
      >
        How do I enroll?
      </motion.h1>

      <motion.p
        className="text-lg text-slate-700 mb-16 max-w-6xl mx-auto"
        variants={itemVariants}
      >
        Join the RWA Partner Program to become part of a global community focused on customer growth and success. Here's how to get started.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Step 1 */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <UserPlus className="w-12 h-12 text-slate-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Create a free account</h2>
          <p className="text-slate-600">
            Click "Become a partner" to create a free account and share basic information about your organization and its business goals.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <ClipboardCheck className="w-12 h-12 text-slate-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Confirm your company details</h2>
          <p className="text-slate-600">
            Provide essential business information, such as your organization's address and legal point of contact. Depending on your country, you may also need to share your business registration number.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <UserCog className="w-12 h-12 text-slate-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Validate your credentials</h2>
          <p className="text-slate-600">
            RWA will verify email ownership, employment, and other details, and you'll receive time-sensitive instructions via your business email. Review the video to learn more about this process.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Enroll;