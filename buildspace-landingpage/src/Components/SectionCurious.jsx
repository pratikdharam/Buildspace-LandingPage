const questions = [
    "How prompts are baked inside GenAI Apps? (Hint: don’t expect your user to paste it)",
    "What it takes to get that perfect Output? (Hint: it’s hard)",
    "And btw, how will you evaluate Output at Scale? (Hint: you can’t do it manually)",
    "With everything so Fluid, where to draw boundaries b/w Product & Engineering?",
    "How to use your Own Data for LLM Answers?",
    "Understanding the pricing, and building a business case for your AI Apps?",
    "And a lot more based on your project idea… Vision, Speech, RAG, and more",
  ];
  
  const SectionCurious = () => {
    return (
      <div className="bg-gray-100 py-24 sm:py-32 text-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl text-black">Curious about?</h2>
          </div>
          <div className="mt-10 max-w-3xl mx-auto space-y-6">
            {questions.map((question, index) => (
              <div
                key={index}
                className="group relative border-l-4 border-indigo-500 pl-6 py-3 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <p className="text-lg text-gray-700 transition duration-300 group-hover:text-black">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionCurious;
  