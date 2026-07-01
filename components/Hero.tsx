'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  MapPin,
  Package,
  Bike,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Shield,
  Truck,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, heroTextItem } from '@/lib/animations';

const stats = [
  { value: '5000+', label: 'Active Partners', icon: TrendingUp },
  { value: '50K+', label: 'Deliveries', icon: Package },
  { value: '4.9', label: 'App Rating', icon: Star },
  { value: '<2h', label: 'Avg. Delivery', icon: Clock },
];

const features = [
  { icon: Shield, label: 'Verified Partners', color: 'text-primary' },
  { icon: Truck, label: 'Fast Delivery', color: 'text-blue-500' },
  { icon: MapPin, label: 'Live Tracking', color: 'text-orange-500' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary-200 to-primary-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-100 to-blue-100 rounded-full blur-3xl"
        />

        {/* Floating morphing blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary-200/40 to-primary-100/30 blur-3xl animate-morph" />

        {/* Animated dots */}
        <div className="absolute inset-0 bg-dots opacity-40" />

        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-10 w-20 h-20 border-2 border-primary/10 rounded-full"
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 pb-16 lg:pt-36 lg:pb-24"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-primary/10"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                India&apos;s Decentralized Logistics Network
              </span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 leading-[1.1] mb-5 sm:mb-6"
            >
              <motion.span variants={heroTextItem} className="block">
                Deliver Smarter.
              </motion.span>
              <motion.span variants={heroTextItem} className="block">
                <span className="text-gradient">Together.</span>
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-secondary-600 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            >
              Raahico connects people already travelling with people who need to send packages
              safely on the same route. Fast, affordable, community-powered delivery.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
            >
              {features.map((feature, idx) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm text-secondary-700">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <motion.div variants={staggerItem} className="w-full sm:w-auto">
                <Link
                  href="#download"
                  className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white font-semibold rounded-2xl shadow-elevated hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div variants={staggerItem} className="w-full sm:w-auto">
                <Link
                  href="/partner"
                  className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-secondary-800 font-semibold rounded-2xl border-2 border-secondary-200 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-card w-full sm:w-auto"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-white">
                        {String.fromCharCode(65 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-secondary-600">
                  <span className="font-semibold text-secondary-800">5,000+</span> partners
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-secondary-600 ml-1">
                  <span className="font-semibold text-secondary-800">4.9</span> rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-100/20 rounded-3xl blur-3xl transform scale-110" />

              {/* Main image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white rounded-3xl shadow-elevated p-3 sm:p-4 border border-gray-100 overflow-hidden"
              >
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/4651251/pexels-photo-4651251.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Package delivery with Raahico"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Overlay badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Package className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-secondary-500">Package picked up</p>
                        <p className="text-sm font-semibold text-secondary-800">2 min ago</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Live tracking badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-sm font-medium text-secondary-800">Live Tracking</span>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom stats */}
                <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: 'Distance', value: '12 km', icon: MapPin },
                    { label: 'Est. Time', value: '35 min', icon: Clock },
                    { label: 'Cost', value: '\u20B945', icon: Package },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="text-center p-2 sm:p-3 bg-primary-50 rounded-xl border border-primary/10"
                    >
                      <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-secondary-500">{stat.label}</p>
                      <p className="text-sm font-semibold text-secondary-800">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating delivery partner card */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -left-4 sm:-left-8 top-1/3 bg-white rounded-2xl p-3 sm:p-4 shadow-elevated border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Delivery Partner"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-800 text-sm">Rahul K.</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-secondary-600">4.9</span>
                    </div>
                  </div>
                  <div className="ml-2">
                    <Bike className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.div>

              {/* Floating route card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute -right-4 sm:-right-8 bottom-20 sm:bottom-28 bg-white rounded-2xl p-3 sm:p-4 shadow-elevated border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500">Route</p>
                    <p className="font-medium text-secondary-800 text-sm">Koramangala</p>
                    <p className="text-xs text-primary">to Indiranagar</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-900">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-secondary-500">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-secondary-300 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
