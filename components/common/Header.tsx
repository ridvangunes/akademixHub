import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
