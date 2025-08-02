import { Badge } from "../ui/badge";
import { Card, CardTitle, CardContent, CardFooter } from "../ui/card";

const FeaturedCourses = () => {
  return (
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
                Start your data science journey with Python and real-world data.
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
  );
};

export default FeaturedCourses;
