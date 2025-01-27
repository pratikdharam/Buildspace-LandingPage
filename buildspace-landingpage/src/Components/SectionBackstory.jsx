const SectionBackstory = () => {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center">Backstory?</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Dummy text about the origin of the project and its goals.
        </p>
        <h3 className="mt-6 font-semibold">Fine Print:</h3>
        <ul className="mt-2 list-disc max-w-xl mx-auto text-gray-600">
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index}>Dummy bullet point text here.</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default SectionBackstory;
  