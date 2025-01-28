import { CloudCog, BrainCircuit, LayoutDashboard } from "lucide-react";

const infrastructure = [
  {
    name: "AI Credits to Run Your App",
    description: "Includes compute power on Azure and Gemini for running AI workloads.",
    icon: CloudCog,
  },
  {
    name: "Claude Pro, ChatGPT Plus",
    description: "Access advanced AI models to build and optimize your applications.",
    icon: BrainCircuit,
  },
  {
    name: "Balsamiq",
    description: "Rapidly create wireframes for AI-powered product design.",
    icon: LayoutDashboard,
  },
];

const SectionInfrastructure = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32 text-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title Section */}
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl text-black-600">Infrastructure</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to build, run, and scale AI applications.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {infrastructure.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-transform hover:scale-105"
            >
              <item.icon className="h-14 w-14 text-indigo-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionInfrastructure;
