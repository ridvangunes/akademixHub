import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-purple-500 pt-20"
      style={{ height: "100vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="text-center md:text-left md:w-1/2 my-auto">
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
              <p className="text-sm text-gray-500 mb-1">Instructor: John Doe</p>
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
  );
};

export default Hero;
