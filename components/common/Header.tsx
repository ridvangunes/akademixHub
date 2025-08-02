import {
  Banknote,
  GraduationCap,
  LogOut,
  Menu,
  MessageCircle,
  Settings,
  User,
  UserCircleIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Header = () => {
  const isAuthenticated = true;
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
        <Link
          href="/"
          className={`text-2xl font-extrabold transition-colors duration-300 ${
            scrolled ? "text-blue-500" : "text-white"
          }`}
        >
          AkademixHub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
          >
            Courses
          </Link>
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
          {isAuthenticated ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="rounded-full flex items-center space-x-2 bg-white cursor-pointer"
                >
                  <UserCircleIcon className="h-8 w-8 text-primary-blue" />
                  <span className="font-semibold text-gray-700">Hi, John</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                sideOffset={17}
                align="end"
                alignOffset={2}
                className="w-56 p-4 rounded-xl"
              >
                {/* User Info */}
                <div className="flex flex-col items-center justify-center mb-3">
                  <Image
                    src="/300-14.jpg"
                    alt="User Avatar"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">
                    johndoe@mail.com
                  </div>
                </div>

                <Separator className="my-2" />

                {/* Menu */}
                <div className="flex flex-col gap-1">
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-sm gap-2"
                    asChild
                  >
                    <a href="/profile">
                      <User className="w-4 h-4" />
                      My Profile
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-sm gap-2"
                    asChild
                  >
                    <a href="/courses">
                      <GraduationCap className="w-4 h-4" />
                      Courses
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-sm gap-2"
                    asChild
                  >
                    <a href="/profile">
                      <Banknote className="w-4 h-4" />
                      Earnings
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-sm gap-2"
                    asChild
                  >
                    <a href="/profile">
                      <MessageCircle className="w-4 h-4" />
                      Messages
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-sm gap-2"
                    asChild
                  >
                    <a href="/settings">
                      <Settings className="w-4 h-4" />
                      Settings
                    </a>
                  </Button>
                </div>

                <Separator className="my-2" />

                {/* Dark/Light Mode */}
                {/* <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2 cursor-pointer"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                </div> */}

                {/* Logout */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-1 justify-start gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Button
                variant="outline"
                className={`font-semibold transition-colors duration-300 bg-transparent hover:bg-transparent cursor-pointer ${
                  scrolled
                    ? "border-black  text-gray-800"
                    : "border-white text-white"
                }`}
              >
                Giriş Yap
              </Button>
              <Button
                variant="outline"
                className={`font-semibold transition-colors duration-300 bg-transparent hover:bg-transparent cursor-pointer border ${
                  scrolled
                    ? "border-black text-gray-800"
                    : "border-white text-white"
                }`}
              >
                Kayıt Ol
              </Button>
            </>
          )}
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
