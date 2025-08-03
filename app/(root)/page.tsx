"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import About from "@/components/landing/About";
import CtaAndInstructorSection from "@/components/landing/CtaAndInstructorSection";
import FAQ from "@/components/landing/FAQ";
import FeaturedCourses from "@/components/landing/FeaturedCourses";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import SuccessStories from "@/components/landing/SuccessStories";
import Testimnonials from "@/components/landing/Testimnonials";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}

      <Hero />

      {/* FEATURED COURSES */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <FeaturedCourses />
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>

      {/* STATS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <Stats />
      </motion.div>

      {/* TESTIMONIALS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <Testimnonials />
      </motion.div>

      {/* SUCCESS STORIES SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <SuccessStories />
      </motion.div>

      {/* COMBINED INSTRUCTOR & CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <CtaAndInstructorSection />
      </motion.div>

      {/* FAQ SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <FAQ />
      </motion.div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
