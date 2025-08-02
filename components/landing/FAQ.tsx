import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      value: "item-1",
      question: "How long do I have access to a course?",
      answer: "You get lifetime access to every course you purchase.",
    },
    {
      value: "item-2",
      question: "Do I get a certificate when I complete a course?",
      answer:
        "Yes! We provide a downloadable certificate upon completion of the course.",
    },
    {
      value: "item-3",
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely. All our courses are designed for you to learn at your own pace and are mobile-friendly.",
    },
    {
      value: "item-4",
      question: "What are the payment options?",
      answer:
        "We accept credit cards, debit cards, and other online payment methods. You can shop securely with our secure payment infrastructure.",
    },
    {
      value: "item-5",
      question: "Do you have a refund policy?",
      answer:
        "Yes, we offer a full money-back guarantee if you are not satisfied within 30 days of purchasing the course.",
    },
    {
      value: "item-6",
      question: "How can I reach your support team?",
      answer:
        "You can reach our support team via the contact form on our website or through live chat. You can be sure you'll receive a response within 24 hours.",
    },
  ];
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-6">
          {faqData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-white p-4 rounded-xl shadow-lg border-b-0"
            >
              <AccordionTrigger className="font-semibold text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="mt-2 text-sm text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
