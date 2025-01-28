const SectionBackstory = () => {
    return (
      <div className="bg-gray-100 py-24 sm:py-32 text-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Backstory */}
            <div>
              <h2 className="text-4xl font-semibold sm:text-5xl text-black-600">Backstory?</h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt nisl non velit fringilla, 
                at tincidunt elit scelerisque. Ut nec neque vel metus aliquet varius sit amet sed risus. Suspendisse 
                potenti. Integer sit amet lorem vel justo tempor dapibus.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Curabitur id nisi in nulla suscipit vehicula. Donec convallis, est sed feugiat tincidunt, 
                urna odio tristique lacus, at accumsan dolor turpis non lacus.
              </p>
            </div>
  
            {/* Right Column: Fine Print */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-indigo-600">Fine Print</h3>
              <p className="mt-4 text-gray-600">
                ⚠️ This is NOT for building a startup. It’s a hands-on AI learning experience.
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start"><span className="mr-2 text-indigo-600">✅</span> Learn how AI products are actually built, not just theoretical knowledge.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">⚡</span> Work 1:1 with mentors who have built real AI products.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">🚀</span> Focus on building & shipping, not research papers.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">❌</span> Not for those looking for quick hacks to AI without coding.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">🔍</span> Dive into real AI architectures and deployment strategies.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">📚</span> Get AI credits and infrastructure for hands-on practice.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">🛠</span> Build your own AI-powered apps from scratch.</li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">👥</span> Join a community of AI builders and collaborate.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionBackstory;
  