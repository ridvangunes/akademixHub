import React from "react";
import { Card, CardContent } from "../ui/card";

const Testimnonials = () => {
  return (
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
  );
};

export default Testimnonials;
