'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Shield,
  UserCheck,
  FileCheck,
  Camera,
  Star,
  Phone,
  AlertTriangle,
  Lock,
  BadgeCheck,
  Eye,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const safetyFeatures = [
  {
    icon: UserCheck,
    title: 'KYC Verification',
    description: 'Every delivery partner completes government ID verification before onboarding.',
    color: 'bg-blue-500',
    image: 'https://images.pexels.com/photos/4651259/pexels-photo-4651259.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    icon: FileCheck,
    title: 'Background Checks',
    description: 'We verify identity and conduct background checks for all community members.',
    color: 'bg-indigo-500',
    image: 'https://images.pexels.com/photos/4651260/pexels-photo-4651260.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    icon: Camera,
    title: 'Package Verification',
    description: 'Photos taken at pickup and delivery for proof and accountability.',
    color: 'bg-purple-500',
    image: 'https://images.pexels.com/photos/4651261/pexels-photo-4651261.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    icon: Star,
    title: 'Trust Score',
    description: 'Two-way rating system builds trust. Poor performers are automatically flagged.',
    color: 'bg-amber-500',
    image: 'https://images.pexels.com/photos/4651262/pexels-photo-4651262.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Encrypted transactions. Direct bank transfers for partners.',
    color: 'bg-green-500',
    image: 'https://images.pexels.com/photos/4651263/pexels-photo-4651263.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: '24/7 system monitoring for anomalies and safety alerts.',
    color: 'bg-teal-500',
    image: 'https://images.pexels.com/photos/4651264/pexels-photo-4651264.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const safetySteps = [
  {
    step: '01',
    icon: FileCheck,
    title: 'Apply with ID Proof',
    description: 'Submit Aadhaar/PAN for verification',
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Background Check',
    description: 'Automated verification in 24-48 hours',
  },
  {
    step: '03',
    icon: BadgeCheck,
    title: 'Verification Badge',
    description: 'Start delivering once verified',
  },
];

export default function Safety() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="safety"
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl mb-4 sm:mb-6"
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
            Safety First. <span className="text-primary">Always.</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Your trust is our priority. Every package is protected by multiple layers of security and verification.
          </p>
        </motion.div>

        {/* Verification Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.2 }}
          className="mb-10 sm:mb-16 lg:mb-24"
        >
          <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12">
            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 text-center mb-6 sm:mb-8">
              Partner Verification Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {safetySteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="relative"
                >
                  {idx < safetySteps.length - 1 && (
                    <div className="hidden sm:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4 z-0" />
                  )}
                  <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-card border border-gray-100 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-lg sm:rounded-xl font-bold mb-3 sm:mb-4 shadow-lg shadow-primary/30 text-sm">
                      {item.step}
                    </div>
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                    <h4 className="font-semibold text-secondary-900 text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-secondary-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Safety Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {safetyFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-card-hover transition-all overflow-hidden">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1 }}
          className="mt-10 sm:mt-16 lg:mt-24"
        >
          <div className="relative bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                    24/7 Emergency Support
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Report issues anytime. Our safety team responds within minutes.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-secondary-900 font-semibold rounded-xl hover:shadow-lg transition-shadow w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Support
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-x-12 gap-y-4 sm:gap-y-6 text-center"
        >
          {[
            { value: '100%', label: 'Partners Verified' },
            { value: '4.9', label: 'Trust Rating' },
            { value: '\u20B90', label: 'Lost Packages' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs sm:text-sm text-secondary-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
