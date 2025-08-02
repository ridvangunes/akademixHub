import { Card, CardTitle, CardContent } from "../ui/card";

const About = () => {
  return (
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
  );
};

export default About;
