const SectionProjects = () => {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">What Projects are Built</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-gray-200 h-60 flex items-center justify-center text-gray-400">
              Project Screenshot {index + 1}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SectionProjects;
  