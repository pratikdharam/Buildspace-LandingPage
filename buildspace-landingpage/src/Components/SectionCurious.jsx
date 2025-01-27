const SectionCurious = () => {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Curious about?</h2>
        <ul className="mt-6 space-y-4 max-w-4xl mx-auto text-gray-700">
          {[
            "How prompts are baked inside GenAI Apps?",
            "What it takes to get that perfect Output?",
            "How will you evaluate Output at Scale?",
            "Boundaries between Product & Engineering?",
            "How to use your Own Data for LLM Answers?",
            "Understanding pricing and business cases.",
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default SectionCurious;
  