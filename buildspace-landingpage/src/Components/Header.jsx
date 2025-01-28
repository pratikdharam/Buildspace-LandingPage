export default function Header() {
    return (
      <div className="bg-gray-900 relative">
        <main>
          <div className="relative isolate overflow-hidden">
            {/* Background Pattern */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 -z-10 w-full h-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
              <defs>
                <pattern x="50%" y={-1} id="pattern-bg" width={200} height={200} patternUnits="userSpaceOnUse">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect fill="url(#pattern-bg)" width="100%" height="100%" strokeWidth={0} />
            </svg>
  
            {/* Gradient Light Effect */}
            <div
              aria-hidden="true"
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              />
            </div>
  
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
              {/* Left Side Content */}
              <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
                {/* Logo and BuildSpace Name */}
                <div className="flex items-center space-x-4">
                  <img alt="BuildSpace Logo" src="../src/assets/buildspace-logo2.webp" className="h-14" />
                  <h1 className="text-3xl font-semibold text-indigo-400 transition duration-300">BuildSpace</h1>
                </div>
  
                {/* Main Heading */}
                <h2 className="mt-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Learn AI by Building a Product from Scratch.
                </h2>
  
                {/* Description */}
                <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
                  Your AI expertise should go beyond just Prompts. Understand what goes behind the scenes from Product Planning, Architecting, Coding, Deploying to Shipping a working Product. Be among the rare professionals who understand AI.
                </p>
  
                {/* CTA Buttons */}
                <div className="mt-10 flex items-center gap-x-6">
                  <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition duration-300">
                    Get started
                  </a>
                </div>
              </div>
  
              {/* Right Side - App Screenshot Restored */}
              <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                <img
                  src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                  alt="App Screenshot"
                  className="w-[600px] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
  
            </div>
          </div>
        </main>
      </div>
    );
  }
  