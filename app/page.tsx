"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const faqData = [
    {
      value: "item-1",
      question: "How long do I have access to a course?",
      answer: "You get lifetime access to every course you purchase.",
    },
    {
      value: "item-2",
      question: "Do I get a certificate when I complete a course?",
      answer:
        "Yes! We provide a downloadable certificate upon completion of the course.",
    },
    {
      value: "item-3",
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely. All our courses are designed for you to learn at your own pace and are mobile-friendly.",
    },
    {
      value: "item-4",
      question: "What are the payment options?",
      answer:
        "We accept credit cards, debit cards, and other online payment methods. You can shop securely with our secure payment infrastructure.",
    },
    {
      value: "item-5",
      question: "Do you have a refund policy?",
      answer:
        "Yes, we offer a full money-back guarantee if you are not satisfied within 30 days of purchasing the course.",
    },
    {
      value: "item-6",
      question: "How can I reach your support team?",
      answer:
        "You can reach our support team via the contact form on our website or through live chat. You can be sure you'll receive a response within 24 hours.",
    },
  ];
  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-extrabold text-blue-500">
            AkademixHub
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-blue-500 transition"
            >
              Home
            </a>
            <a
              href="#courses"
              className="font-semibold text-gray-600 hover:text-blue-500 transition"
            >
              Courses
            </a>
            <a
              href="#about"
              className="font-semibold text-gray-600 hover:text-blue-500 transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="font-semibold text-gray-600 hover:text-blue-500 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-semibold text-gray-600 hover:text-blue-500 transition"
            >
              Contact
            </a>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue transition text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {/* Mobile menu is static and hidden */}
        <nav className="md:hidden bg-white shadow-lg pb-4 hidden">
          <div className="flex flex-col space-y-2 px-4">
            <a
              href="#"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
            >
              Home
            </a>
            <a
              href="#courses"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
            >
              Courses
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-purple-500 pt-20"
        style={{ height: "100vh" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Learn Anytime, Anywhere with AkademixHub
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto md:mx-0">
              Empower your future with expert-led education tailored for your
              success.
            </p>
            <Button
              asChild
              className="bg-white text-blue-500 font-semibold px-8 sm:px-8 py-6 sm:py-4 rounded-full hover:bg-gray-100 transition text-base sm:text-lg shadow-lg"
            >
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:mt-16">
            <Card className="p-6 text-center transform transition-transform duration-500 hover:scale-105 min-w-[280px] shadow-2xl">
              <Image
                src="/icon-black.png"
                alt="Course Offer"
                className="rounded-lg mb-4 w-full"
                width={100}
                height={50}
              />
              <CardTitle className="text-xl font-semibold mb-2">
                Full-Stack Web Dev
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600 mb-2">
                  Learn to build modern web applications.
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Instructor: John Doe
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Duration: 18 hours | Level: Intermediate
                </p>
                <p className="text-3xl font-extrabold text-orange-500 mb-4">
                  -45% OFF
                </p>
                <Button
                  asChild
                  className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition w-full"
                >
                  <a href={"#courses"}>View Offer</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section id="courses" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 relative">
              <Badge className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 shadow-lg">
                Bestseller
              </Badge>
              <div className="bg-blue-700 h-40 rounded-xl mb-4"></div>
              <CardTitle className="text-xl font-semibold mb-2">
                JavaScript for Beginners
              </CardTitle>
              <CardContent className="p-0 mb-4">
                <p className="text-sm text-gray-600">
                  Learn JavaScript from scratch with practical examples and mini
                  projects.
                </p>
              </CardContent>
              <CardFooter className="p-0 text-sm text-gray-500">
                <span className="mr-2">⏱ 12 hours</span>
                <span className="mr-2">💰 $49</span>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 font-semibold px-2"
                >
                  Beginner
                </Badge>
              </CardFooter>
            </Card>
            <Card className="p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <div className="bg-purple-500 h-40 rounded-xl mb-4"></div>
              <CardTitle className="text-xl font-semibold mb-2">
                UI/UX Design Bootcamp
              </CardTitle>
              <CardContent className="p-0 mb-4">
                <p className="text-sm text-gray-600">
                  Master user interface and experience design.
                </p>
              </CardContent>
              <CardFooter className="p-0 text-sm text-gray-500">
                <span className="mr-2">⏱ 18 hours</span>
                <span className="mr-2">💰 $79</span>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 font-semibold px-2"
                >
                  Intermediate
                </Badge>
              </CardFooter>
            </Card>
            <Card className="p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <div className="bg-orange-500 h-40 rounded-xl mb-4"></div>
              <CardTitle className="text-xl font-semibold mb-2">
                Data Science & Python
              </CardTitle>
              <CardContent className="p-0 mb-4">
                <p className="text-sm text-gray-600">
                  Start your data science journey with Python and real-world
                  data.
                </p>
              </CardContent>
              <CardFooter className="p-0 text-sm text-gray-500">
                <span className="mr-2">⏱ 25 hours</span>
                <span className="mr-2">💰 $99</span>
                <Badge
                  variant="secondary"
                  className="bg-red-100 text-red-800 font-semibold px-2"
                >
                  Advanced
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="about" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12">
            Why Choose AkademixHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 text-center shadow-lg">
              <div className="text-4xl text-blue-500 mb-4">🎓</div>
              <CardTitle className="text-xl font-semibold mb-2">
                Expert Instructors
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600">
                  All our courses are taught by industry experts.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center shadow-lg">
              <div className="text-4xl text-purple-500 mb-4">📱</div>
              <CardTitle className="text-xl font-semibold mb-2">
                Flexible Learning
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600">
                  Learn at your own pace, on any device you want.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center shadow-lg">
              <div className="text-4xl text-orange-500 mb-4">✅</div>
              <CardTitle className="text-xl font-semibold mb-2">
                Certification
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600">
                  Get a certificate upon completion to boost your CV.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 sm:py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12">
            Take a Step Towards the Future with AkademixHub
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">📚</div>
              <p className="text-4xl sm:text-5xl font-extrabold mb-1">50+</p>
              <p className="text-lg font-semibold">Total Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">👨‍🏫</div>
              <p className="text-4xl sm:text-5xl font-extrabold mb-1">10+</p>
              <p className="text-lg font-semibold">Expert Instructors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-2">🧑‍🎓</div>
              <p className="text-4xl sm:text-5xl font-extrabold mb-1">2000+</p>
              <p className="text-lg font-semibold">Satisfied Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center flex flex-col items-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-700 mb-4"></div>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600 italic mb-4">
                  "AkademixHub's JavaScript course helped me change my career. The
                  instructors are very supportive and the content is fantastic!"
                </p>
                <p className="font-semibold">- Aisha Khan</p>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center flex flex-col items-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-purple-500 mb-4"></div>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600 italic mb-4">
                  "The UI/UX design training I received helped me strengthen my
                  portfolio. Thanks to the AkademixHub team."
                </p>
                <p className="font-semibold">- Carlos Rivera</p>
                <p className="text-sm text-gray-500">UX Designer</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center flex flex-col items-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-orange-500 mb-4"></div>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600 italic mb-4">
                  "Thanks to the data science courses, I understood Python and
                  analysis much better. I highly recommend it."
                </p>
                <p className="font-semibold">- Emily Chen</p>
                <p className="text-sm text-gray-500">Data Analyst</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section id="success-stories" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-100 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://placehold.co/120x120/a855f7/ffffff?text=Maria"
                alt="Maria Diaz's photo"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <CardTitle className="text-2xl font-bold mb-1">
                Maria Diaz
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-blue-500 font-semibold mb-4">
                  Junior Software Developer
                </p>
                <p className="text-gray-600 text-base italic leading-relaxed">
                  "Thanks to AkademixHub's comprehensive Full-Stack Web Development
                  course, I went from zero to landing my dream job at a tech
                  company. The project-based learning model was invaluable for
                  turning theoretical knowledge into practical skills. This
                  course was the best step I ever took for my career!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://placehold.co/120x120/2563eb/ffffff?text=Kenji"
                alt="Kenji Tanaka's photo"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <CardTitle className="text-2xl font-bold mb-1">
                Kenji Tanaka
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-blue-500 font-semibold mb-4">
                  UX/UI Design Specialist
                </p>
                <p className="text-gray-600 text-base italic leading-relaxed">
                  "I was looking for the right starting point to enter the world
                  of design, and AkademixHub's UI/UX course was exactly what I
                  needed. By working on real projects, I built a professional
                  portfolio in a short time and started getting my first
                  freelance gigs. Many thanks to everyone on the team!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMBINED INSTRUCTOR & CTA SECTION */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-0">
        <section className="py-16 sm:py-20 bg-orange-500 text-white text-center md:w-1/2 md:rounded-l-xl">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Share Your Knowledge, Teach on AkademixHub
            </h2>
            <p className="mb-6">
              Join our community of expert instructors. Share your passion,
              reach a global audience, and earn money while making an impact.
            </p>
            <Button
              asChild
              className="bg-white text-orange-500 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              <a href="#">Start Teaching Now</a>
            </Button>
          </div>
        </section>
        <section
          id="contact"
          className="py-16 sm:py-20 bg-blue-700 text-white text-center md:w-1/2 md:rounded-r-xl"
        >
          <div className="max-w-xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="mb-6">
              Join thousands of students now. Get lifetime access to premium
              content and career support.
            </p>
            <Button
              asChild
              className="bg-white text-blue-500 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              <a href="#">Start Learning Now</a>
            </Button>
          </div>
        </section>
      </div>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-6">
            {faqData.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="bg-white p-4 rounded-xl shadow-lg border-b-0"
              >
                <AccordionTrigger className="font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-sm text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">AkademixHub</h4>
            <p className="text-sm">
              Your future starts here. Learn from the best, at your own pace.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Subscribe</h4>
            <form className="flex flex-col gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white border-gray-600 placeholder:text-gray-400"
                required
              />
              <Button
                type="submit"
                className="bg-orange-500 text-white font-semibold hover:bg-orange-500 transition shadow"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2025 AkademixHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
