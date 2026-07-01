'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  Download,
  Play,
  Apple,
  QrCode,
  ArrowRight,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { scrollReveal } from '@/lib/animations';

export default function DownloadCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      id="download"
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>
        </div>
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={scrollReveal}
            initial="offscreen"
            animate={isInView ? 'onscreen' : 'offscreen'}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-white/20 text-white font-medium rounded-full text-sm mb-4 sm:mb-6 backdrop-blur-sm">
              Get the App
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Start Delivering
              <br />
              <span className="text-primary-200">Smarter Today</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Download the Raahico app and experience the future of hyperlocal delivery. Send packages, earn on your route, and join the community.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-secondary-900 font-semibold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-secondary-500">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 text-white font-semibold rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
              >
                <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <p className="text-xs text-white/70">COMING SOON</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm font-medium">50K+ Downloads</span>
              </div>
            </div>

            {/* Features list */}
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-3">
              {[
                'Free to download',
                'No ads, ever',
                'Instant matching',
                'Real-time tracking',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-200" />
                  <span className="text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone mockup + QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="w-64 sm:w-72 h-[480px] sm:h-[580px] bg-secondary-900 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-secondary-900 rounded-b-xl sm:rounded-b-2xl z-20" />
                  {/* Screen */}
                  <div className="relative w-full h-full bg-surface rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* App UI preview */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white">
                      {/* Header */}
                      <div className="p-4 sm:p-6 pt-8 sm:pt-10">
                        <div className="flex items-center justify-between mb-6 sm:mb-8">
                          <div>
                            <p className="text-xs text-secondary-500">Welcome back</p>
                            <p className="font-bold text-secondary-900">Rahul</p>
                          </div>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary text-sm">R</span>
                          </div>
                        </div>
                        {/* Send package button */}
                        <div className="bg-primary text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg shadow-primary/30">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <span className="font-semibold text-sm sm:text-base">Send a Package</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                            <span>Faster</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Cheaper</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Verified</span>
                          </div>
                        </div>
                      </div>
                      {/* Recent deliveries */}
                      <div className="px-4 sm:px-6 mt-2 sm:mt-4">
                        <p className="text-xs sm:text-sm font-semibold text-secondary-700 mb-3 sm:mb-4">Recent</p>
                        <div className="space-y-2 sm:space-y-3">
                          {[
                            { to: 'Indiranagar', status: 'Delivered' },
                            { to: 'HSR Layout', status: 'In Transit' },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-sm">
                              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                                item.status === 'Delivered' ? 'bg-green-100' : 'bg-blue-100'
                              }`}>
                                <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                  item.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs sm:text-sm font-medium text-secondary-900">{item.to}</p>
                                <p className="text-[10px] sm:text-xs text-secondary-500">{item.status}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR Code - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-2 sm:-right-4 bottom-16 sm:bottom-20 z-20 hidden lg:block"
              >
                <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
                  <QrCode className="w-20 sm:w-24 h-20 sm:h-24 text-secondary-900" />
                  <p className="text-xs text-center text-secondary-500 mt-2">Scan to download</p>
                </div>
              </motion.div>

              {/* Decorative blurs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
