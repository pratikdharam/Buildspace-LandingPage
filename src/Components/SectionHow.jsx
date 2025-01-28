const SectionHow = () => {
    return (
      <div className="bg-gradient-to-b from-gray-900 via-[#18163D] to-[#27244D] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-800 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                {/* 🔹 AI-Related Image */}
                <img
                  alt="AI answering a question"
                  src="https://images.unsplash.com/photo-1581090120031-30ac43404441?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80"
                  className="absolute inset-0 size-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gray-900 mix-blend-multiply opacity-70" />
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                    <p>
                      “AI isn't just about using ChatGPT—it’s about understanding
                      how it works behind the scenes.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm/6 text-gray-300">
                    <strong className="font-semibold text-white">
                      Buildspace AI Program
                    </strong>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <div className="text-base/7 text-gray-200 lg:max-w-lg">
                <p className="text-lg font-semibold text-indigo-300 sm:text-xl">
                  Tell me how?
                </p>
                <h2 className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-4xl">
                  Learn AI by building, not just prompting.
                </h2>
                <div className="max-w-xl">
                  <p className="mt-6">
                    This program is designed to take you from AI enthusiast to AI
                    builder. Over 7 weeks, you’ll go beyond just using AI prompts
                    and actually develop, fine-tune, and deploy your own
                    AI-powered products.
                  </p>
                  <p className="mt-8">
                    Through 1:1 mentorship, structured guidance, and hands-on
                    coding, you’ll gain experience in AI architecture, model
                    integration, and product deployment—without worrying about
                    infrastructure.
                  </p>
                  <p className="mt-8">
                    You bring the idea. We provide the tools, mentorship, and
                    infrastructure to make it happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionHow;
  