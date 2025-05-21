"use client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, learnMoreUrl = "#" }) => {
  const handleClick = () => {
    window.location.href = learnMoreUrl;
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="h-full cursor-pointer"
      onClick={handleClick}
    >
      <Card className="h-full flex flex-col rounded-none border">
        <CardHeader className="pb-2 border-b">
          <CardTitle className="text-base font-medium uppercase text-gray-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="border-t">
          <span className="text-blue-600 hover:underline text-sm">
            Learn more
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ProgramBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'COMPARE PROGRAMS',
      description: 'Explore RWA partner programs and choose the one that\'s right for your business.',
    },
    {
      title: 'SOLUTIONS PARTNER DESIGNATIONS',
      description: 'See how new designations aligned to the RWA Cloud demonstrate success to customers.',
    },
    {
      title: 'RWA ACTION PACK',
      description: 'Gain access to an ecosystem of resources—plus opportunities to enhance your membership.',
    },
    {
      title: 'TRAINING CENTER',
      description: 'Access role-specific learning and build your skills on RWA products and solutions.',
    },
    {
      title: 'GO TO MARKET',
      description: 'Partners access resources ranging from co-branded content to solution-specific sales collateral.',
    },
    {
      title: 'SELL WITH RWA',
      description: 'Collaborate with us to build demand and plan a profitable, results-driven sales strategy.',
    },
    {
      title: 'GROW THROUGH PARTNERSHIP',
      description: 'Explore different pathways designed to help you grow with RWA.',
    },
    {
      title: 'ISV GROWTH',
      description: 'Check out how we\'re investing in tools and resources designed to accelerate ISV growth.',
    },
  ];

  return (
    <div className="w-full max-w-[95%] mx-auto  py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-navy-800 mb-4"
          >
            Explore program benefits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-6xl mx-auto"
          >
            Once you've enrolled as a RWA Partner Program member and leveraged benefits, keep growing with programs and resources that can help your organization build, sell, and go to market.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12"></div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {benefits.slice(4, 8).map((benefit, index) => (
            <motion.div
              key={index + 4}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgramBenefits;