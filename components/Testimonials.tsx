'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'E-commerce Seller',
    location: 'Koramangala',
    rating: 5,
    text: 'Raahico has transformed how I deliver products to my local customers. What used to take 2 days with courier services now takes just a few hours. My customers are happier, and I save over 60% on delivery costs!',
    image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=150',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    role: 'Delivery Partner',
    location: 'Whitefield',
    rating: 5,
    text: 'I commute from Whitefield to Marathahalli every day for work. Raahico lets me earn extra money by delivering packages on my existing route. Easy \u20B94-5k per month with zero extra effort!',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    gradient: 'from-primary to-primary-600',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Working Professional',
    location: 'HSR Layout',
    rating: 5,
    text: 'Needed to send documents to my lawyer in Indiranagar urgently. Raahico found me a verified partner within 10 minutes traveling the exact route. Package delivered in under an hour. Incredible!',
    image: 'https://images.pexels.com/photos/3756158/pexels-photo-3756158.jpeg?auto=compress&cs=tinysrgb&w=150',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Small Business Owner',
    location: 'Electronic City',
    rating: 5,
    text: 'As a small business, every rupee counts. Raahico has cut our delivery costs dramatically while improving our delivery times. The live tracking feature gives my customers peace of mind.',
    image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=150',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'Student',
    location: 'BTM Layout',
    rating: 5,
    text: 'Left my phone charger at home during exam week! Used Raahico and got it delivered within 2 hours by someone traveling from my hometown. So much better than courier services!',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    gradient: 'from-teal-500 to-cyan-600',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-0 w-[400px] h-[400px] sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={scrollReveal}
          initial="offscreen"
          animate={isInView ? 'onscreen' : 'offscreen'}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4 sm:mb-6">
            Testimonials
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
            Loved by <span className="text-primary">5,000+</span> Users
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Real stories from real people using Raahico to send packages and earn on their routes.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main testimonial card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-elevated border border-gray-100 overflow-hidden">
              {/* Quote icon */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute -top-4 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
              >
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              {/* Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6 justify-center sm:justify-start">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg lg:text-xl text-secondary-700 leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>

                {/* Author */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 text-center sm:text-left">
                  <div className="relative">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white shadow-lg`}>
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 text-base sm:text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-secondary-600">
                      {testimonials[activeIndex].role} <span className="hidden sm:inline">•</span> <span className="sm:hidden block">{testimonials[activeIndex].location}</span><span className="hidden sm:inline">{testimonials[activeIndex].location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation buttons */}
              <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 flex gap-2 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-primary w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-10 sm:mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '50K+', label: 'Deliveries' },
            { value: '5K+', label: 'Happy Users' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-all"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-secondary-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
