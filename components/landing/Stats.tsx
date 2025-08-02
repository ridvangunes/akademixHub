const Stats = () => {
  return (
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
  );
};

export default Stats;
