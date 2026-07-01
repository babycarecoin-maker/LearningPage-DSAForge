'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Smartphone,
  Search,
  UserCheck,
  Package,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Request Pickup',
    description: 'Enter pickup and drop locations. Describe your package size and type.',
    icon: Smartphone,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '02',
    title: 'Instant Matching',
    description: 'Our algorithm matches you with verified partners travelling the same route.',
    icon: Search,
    color: 'bg-indigo-500',
    bgColor: 'bg-indigo-50',
    image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '03',
    title: 'Partner Accepts',
    description: 'Review profiles, ratings, and choose your delivery partner.',
    icon: UserCheck,
    color: 'bg-violet-500',
    bgColor: 'bg-violet-50',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '04',
    title: 'Package Pickup',
    description: 'Partner arrives at your location. Quick handoff with package verification.',
    icon: Package,
    color: 'bg-primary',
    bgColor: 'bg-primary-50',
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '05',
    title: 'Live Tracking',
    description: 'Track your package in real-time. Get instant updates at every checkpoint.',
    icon: MapPin,
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '06',
    title: 'Delivered',
    description: 'Package delivered safely. Rate your experience and earn trust points.',
    icon: CheckCircle2,
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    image: 'https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] sm:w-96 sm:h-96 bg-primary-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl mb-4 sm:mb-6"
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
            How Raahico Works
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            From pickup to delivery in just a few taps. Here&apos;s your package&apos;s journey with Raahico.
          </p>
        </motion.div>

        {/* Mobile & Tablet View - Card Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300">
                {/* Step Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Step Number */}
                  <div className={`absolute top-3 left-3 w-10 h-10 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-medium text-primary mb-1 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full" />
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-x-0 top-0 bg-primary rounded-full"
              style={{ originY: 0 }}
            />
          </div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-0"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className={`relative flex items-center min-h-[280px] ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-1/2 ${
                    idx % 2 === 0
                      ? 'pr-16 text-right'
                      : 'pl-16 text-left'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="inline-block bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 hover:shadow-card-hover transition-all max-w-md"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-sm font-medium text-primary mb-2 block">
                        Step {step.number}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-secondary-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.3 + idx * 0.15,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 ring-4 ring-white`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-primary-50 rounded-2xl border border-primary/10">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm sm:text-base text-secondary-700 font-medium">
              Average delivery time:{' '}
              <span className="text-primary font-bold">Under 2 hours</span> for same-route packages
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
