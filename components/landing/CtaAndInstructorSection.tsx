import { Button } from "../ui/button";

const CtaAndInstructorSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-0">
      <section className="py-16 sm:py-20 bg-orange-500 text-white text-center md:w-1/2 md:rounded-l-xl">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Share Your Knowledge, Teach on AkademixHub
          </h2>
          <p className="mb-6">
            Join our community of expert instructors. Share your passion, reach
            a global audience, and earn money while making an impact.
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
  );
};

export default CtaAndInstructorSection;
