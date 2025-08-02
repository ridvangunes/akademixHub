import { Card, CardTitle, CardContent } from "../ui/card";

const SuccessStories = () => {
  return (
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
                "Thanks to AkademixHub's comprehensive Full-Stack Web
                Development course, I went from zero to landing my dream job at
                a tech company. The project-based learning model was invaluable
                for turning theoretical knowledge into practical skills. This
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
                portfolio in a short time and started getting my first freelance
                gigs. Many thanks to everyone on the team!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
