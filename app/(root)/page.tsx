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

export default function Home() {
  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* FEATURED COURSES */}
      <FeaturedCourses />

      {/* WHY CHOOSE US */}
      <About />

      {/* STATS SECTION */}
      <Stats />

      {/* TESTIMONIALS SECTION */}
      <Testimnonials />

      {/* SUCCESS STORIES SECTION */}
      <SuccessStories />

      {/* COMBINED INSTRUCTOR & CTA SECTION */}
      <CtaAndInstructorSection />

      {/* FAQ SECTION */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
