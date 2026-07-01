'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Zap,
  MapPin,
  Shield,
  Clock,
  Navigation,
  Brain,
  Package,
  Star,
  Smartphone,
} from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const features = [
  {
    icon: Zap,
    title: 'Instant Match',
    description: 'Our algorithm finds the best delivery partner travelling your route in seconds.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    gradient: 'from-yellow-400 to-orange-500',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: MapPin,
    title: 'Live Tracking',
    description: 'Track your package in real-time with GPS accuracy. Know exactly where it is.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-400 to-indigo-500',
    image: 'https://images.pexels.com/photos/4651251/pexels-photo-4651251.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Shield,
    title: 'Verified Users',
    description: 'Every partner goes through KYC verification. Your packages are in safe hands.',
    color: 'text-primary',
    bgColor: 'bg-primary-50',
    gradient: 'from-primary to-primary-600',
    image: 'https://images.pexels.com/photos/4651252/pexels-photo-4651252.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Same-route means same-day. Often within hours, not days.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://images.pexels.com/photos/4651253/pexels-photo-4651253.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Navigation,
    title: 'Background Location',
    description: 'Partners share location even when app is in background for continuous tracking.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://images.pexels.com/photos/4651254/pexels-photo-4651254.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Brain,
    title: 'Smart Matching',
    description: 'AI-powered matching considers route efficiency, ratings, and delivery history.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    gradient: 'from-indigo-400 to-violet-500',
    image: 'https://images.pexels.com/photos/4651255/pexels-photo-4651255.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Package,
    title: 'Secure Delivery',
    description: 'Package verification photos at pickup and delivery. Proof of delivery included.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    gradient: 'from-orange-400 to-red-500',
    image: 'https://images.pexels.com/photos/4651257/pexels-photo-4651257.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Star,
    title: 'Ratings & Trust Score',
    description: 'Two-way ratings build trust. Highly-rated partners get priority matching.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    gradient: 'from-amber-400 to-yellow-500',
    image: 'https://images.pexels.com/photos/4651258/pexels-photo-4651258.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-surface overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4 sm:mb-6">
            Features
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
            Built for <span className="text-primary">Speed & Trust</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Every feature designed to make package delivery seamless, safe, and reliable for both senders and delivery partners.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                {/* Hover background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.color}`} />
                  </motion.div>
                  {/* Decorative blur */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-base sm:text-lg font-semibold text-secondary-900 mb-2 sm:mb-3 relative">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed relative">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-b-2xl sm:rounded-b-3xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 sm:mt-12 lg:mt-16"
        >
          <div className="relative bg-gradient-to-r from-primary to-primary-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-sm"
                >
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
              </div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  Everything you need in one app
                </h3>
                <p className="text-primary-100 text-base sm:text-lg max-w-xl">
                  From requesting a pickup to tracking your package to rating your delivery partner, all features are just a tap away.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0"
              >
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Download Now
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
