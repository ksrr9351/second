"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Hero = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6 py-8">
      {/* Info Alert at the top */}
      <motion.div
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <div className="relative border border-gray-200 bg-gray-100 overflow-hidden h-40">
          {/* Left accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800" />

          <div className="flex justify-between p-5 h-full">
            <div className="flex items-start gap-4 pl-2">
              <div className="h-8 w-8 min-w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 mt-0.5 bg-white">
                <span className="text-sm font-semibold">i</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-xl">
                  Now available: Grow with partner benefits packages
                </h3>
                <p className="text-gray-600 mt-2 text-base">
                  Get the new product, support and advisory benefits designed to
                  help build your cloud and AI practice.
                  <br />
                  Explore our three cost-saving packages today.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 ml-4 mt-2">
              <Link
                href="#"
                className="text-base text-gray-600 underline font-medium"
              >
                Start here
              </Link>
              <button className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
                ×
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Section */}
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 mt-12"
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariant}
        >
          <h1 className="text-5xl md:text-4xl lg:text-5xl text-blue-600 mb-6">
            Join the RWA Partner Program
          </h1>
          <p className="text-gray-700 mb-8 text-2xl">
            Enroll at no cost and get access to exclusive tools, benefits, and
            resources to help you drive growth and deliver high-performing,
            customer-centric AI solutions.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-none" size="lg">
            Become a partner
          </Button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={slideInRightVariant}
        >
          <div className="relative rounded-lg overflow-hidden mb-6">
            <AspectRatio ratio={16 / 9} className="bg-gray-100">
              <Image
                src="/hero.jpg"
                alt="RWA Cloud Partner"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </AspectRatio>
          </div>
        </motion.div>
      </div>

      {/* Text Content - Two Column */}
      <motion.div
        className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Why become a RWA?
          </h2>
          <p className="text-lg text-gray-700">
            Reach more customers and accelerate business growth.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-lg text-gray-700">
            The RWA Partner Program is a global community of
            partners, offerings, and resources designed to connect your
            organization with everything it needs to build and deploy
            successful business solutions. Bolstered by our unmatched AI
            technology portfolio and extensive customer reach, this unique
            partner ecosystem will empower your organization with exclusive
            training, support, service, and sales offerings that accelerate
            innovation and drive growth.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;