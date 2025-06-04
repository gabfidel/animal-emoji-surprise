
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      id: "about",
      question: "About Our Random Animal Generator",
      answer: "🌍 Discover Wildlife with Our Random Animal Generator. Our random animal generator features creatures from every corner of the globe. From the depths of the ocean to the highest mountains, explore the incredible diversity of animal life on Earth with our free random animal generator tool."
    },
    {
      id: "educational",
      question: "Is this an Educational Random Animal Generator?",
      answer: "📚 Educational Random Animal Generator. Each random animal generated comes with fascinating facts that will expand your knowledge of the natural world. Our random animal generator is perfect for students, educators, and animal enthusiasts of all ages."
    },
    {
      id: "free",
      question: "Is this a Free Random Animal Generator?",
      answer: "🎲 Free Random Animal Generator. With dozens of unique animals in our database, you'll never run out of surprises. Use our random animal generator for games, creative writing prompts, educational activities, or just to satisfy your curiosity about wildlife."
    },
    {
      id: "mobile",
      question: "Does the Random Animal Generator work on mobile devices?",
      answer: "📱 Mobile-Friendly Random Animal Generator. Our random animal generator works perfectly on any device. Whether you're on your phone, tablet, or computer, you can access our random animal generator anytime, anywhere to discover amazing wildlife facts."
    },
    {
      id: "features",
      question: "Why Use Our Random Animal Generator?",
      answer: "• Instantly generate random animals with authentic photos\n• Learn fascinating facts about wildlife from around the world\n• Perfect for educational purposes and animal discovery\n• Free random animal generator with no registration required\n• Mobile-responsive design works on all devices"
    },
    {
      id: "wheel",
      question: "How does the Random Animal Generator Wheel work?",
      answer: "Our random animal generator wheel uses advanced algorithms to randomly select from our extensive database of animals. Simply click the generate button and watch as our random animal generator wheel spins to reveal a fascinating creature with detailed information and beautiful imagery."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions - Random Animal Generator
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 whitespace-pre-line">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
