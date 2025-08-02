import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a
          href="/"
          className={`text-2xl font-extrabold transition-colors duration-300 ${
            scrolled ? "text-blue-500" : "text-white"
          }`}
        >
          AkademixHub
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Home
          </a>
          <a
            href="/courses"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Courses
          </a>
          <a
            href="/about"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            About
          </a>
          <a
            href="/testimonials"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Testimonials
          </a>
          <a
            href="/contact"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className={`md:hidden p-2 rounded-xl focus:outline-none focus:ring-2 transition ${
            scrolled
              ? "text-gray-600 hover:bg-gray-100 focus:ring-blue-500"
              : "text-white hover:bg-white/10 focus:ring-white"
          }`}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
