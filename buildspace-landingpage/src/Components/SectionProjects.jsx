import './SectionProjects.css';
const projects = [
    {
      title: "Chatbot AI",
      description:
        "An AI chatbot to automate customer support and provide 24/7 assistance. Improves customer satisfaction and reduces operational costs.",
      link: "#",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    },
    {
      title: "Content AI",
      description:
        "AI-powered tool that generates high-quality articles, summaries, and creative content efficiently in seconds.",
      link: "#",
      image: "https://images.pexels.com/photos/4050425/pexels-photo-4050425.jpeg",
    },
    {
      title: "AI Recommender",
      description:
        "An AI-driven recommendation engine that suggests relevant products, services, or content based on user behavior.",
      link: "#",
      image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg", // New image for 3rd card
    },
    {
      title: "Image Enhancer",
      description:
        "Enhances and upscales low-resolution images, improving clarity and detail using AI-powered enhancements.",
      link: "#",
      image: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg",
    },
    {
      title: "Speech-to-Text",
      description:
        "AI-based speech recognition system that transcribes audio into text with high accuracy for accessibility and analysis.",
      link: "#",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
  ];
  
  const SectionProjects = () => {
    return (
      <div className="bg-gray-900 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl text-indigo-400">What Projects Are Built?</h2>
          </div>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-full mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img src={project.image} alt={project.title} className="card-image" />
                    <div className="title-overlay">
                      <h3 className="title">{project.title}</h3>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <p className="description">{project.description}</p>
                    <a
                      href={project.link}
                      className="visit-btn"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionProjects;
  