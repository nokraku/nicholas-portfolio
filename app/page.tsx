import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#B3050A]">
            Nicholas<br className="md:hidden" /> Osorio-Okraku
          </h1>
          <button className="p-2">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - Image */}
            <div className="w-full">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                <Image 
                  src="/hero-image.png" 
                  alt="Nicholas Osorio-Okraku"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="space-y-6">
              <p className="text-[24px] leading-relaxed text-[#B3050A]">
                Nicholas is an independent freelancer offering a personal 1-on-1 founder consultation that specialises in strategic direction, product launches and growth of small-to-medium businesses.
              </p>
              
              <div className="space-y-2 pt-4">
                <p className="text-[24px] text-[#B3050A]">London</p>
                <a href="mailto:n.okraku@gmail.com" className="text-[24px] text-[#B3050A] hover:underline block">
                  n.okraku@gmail.com
                </a>
                <a href="#" className="text-[24px] text-[#B3050A] hover:underline block">
                  Find me on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section - Sliding Carousel */}
      <section className="py-8 md:py-12 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="flex animate-scroll gap-16 md:gap-24">
              {/* First set of logos */}
              <div className="flex gap-12 md:gap-16 items-center justify-center opacity-40 flex-shrink-0">
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-playstation.png" 
                    alt="PlayStation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-paramount.png" 
                    alt="Paramount"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-chanel.png" 
                    alt="Chanel"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-sainsburys.png" 
                    alt="Sainsbury's"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-deloitte.png" 
                    alt="Deloitte"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-easyjet.png" 
                    alt="easyJet"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-12 md:gap-16 items-center justify-center opacity-40 flex-shrink-0">
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-playstation.png" 
                    alt="PlayStation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-paramount.png" 
                    alt="Paramount"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-chanel.png" 
                    alt="Chanel"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-sainsburys.png" 
                    alt="Sainsbury's"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-deloitte.png" 
                    alt="Deloitte"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 h-12 flex-shrink-0">
                  <Image 
                    src="/logo-easyjet.png" 
                    alt="easyJet"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[24px] text-[#B3050A] mb-2">
              <span className="font-bold">Frameworks</span> proven with global leaders.
            </h2>
            <p className="text-[24px] text-[#B3050A]">
              These are the fundamentals you need to find your fit, find your loyal user base, and find lasting impact.
            </p>
          </div>

          {/* Framework Items */}
          <div className="space-y-8">
            {/* Vision & The Mission */}
            <div className="border-t border-[#B3050A] pt-6">
              <h3 className="text-[24px] font-bold text-[#B3050A] mb-2">
                Vision & The Mission (&quot;Why&quot;)
              </h3>
              <p className="text-[16px] text-[#B3050A]">
                Create the future and values that form the driving force for your organisation.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="border-t border-[#B3050A] pt-6">
              <h3 className="text-[24px] font-bold text-[#B3050A] mb-2">
                Value Proposition (&quot;What&quot;)
              </h3>
              <p className="text-[16px] text-[#B3050A]">
                Define what makes you unmissable. The reason customers choose you over everyone else.
              </p>
            </div>

            {/* Personas & Segments */}
            <div className="border-t border-[#B3050A] pt-6">
              <h3 className="text-[24px] font-bold text-[#B3050A] mb-2">
                Personas & Segments (&quot;Who&quot;)
              </h3>
              <p className="text-[16px] text-[#B3050A]">
                Define your customers. From the &quot;day ones&quot; to the influencers.
              </p>
            </div>

            {/* Horizon Roadmap */}
            <div className="border-t border-[#B3050A] pt-6">
              <h3 className="text-[24px] font-bold text-[#B3050A] mb-2">
                Horizon Roadmap (&quot;How&quot;)
              </h3>
              <p className="text-[16px] text-[#B3050A]">
                Build a 1-3-5 year plan to launch and achieve &apos;The Mission&apos;. Turn vision into action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Voice Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[56px] md:text-[56px] font-bold text-[#B3050A] leading-tight mb-16">
            Find your voice. Build your vision.
          </h2>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sainsbury's */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">Sainsbury&apos;s</h3>
              <div className="text-4xl text-gray-300 mb-4">Sainsbury&apos;s</div>
              <p className="text-[16px] text-[#B3050A]">
                Crafted the vision and roadmap of their grocery app to increase market share.
              </p>
            </div>

            {/* Paramount */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">Paramount</h3>
              <div className="text-4xl text-gray-300 mb-4">⛰</div>
              <p className="text-[16px] text-[#B3050A]">
                Crafted a new era strategy for the UK streaming service to compete with ITV, BBC, C4.
              </p>
            </div>

            {/* Chanel */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">Chanel</h3>
              <div className="text-4xl text-gray-300 mb-4">CC</div>
              <p className="text-[16px] text-[#B3050A]">
                Defined their AI automation practices to align across all global regions.
              </p>
            </div>

            {/* EasyJet */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">EasyJet</h3>
              <div className="text-4xl text-gray-300 mb-4">easyJet</div>
              <p className="text-[16px] text-[#B3050A]">
                Re-defined the communications strategy to improve network control efficiencies.
              </p>
            </div>

            {/* Sony PlayStation */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">Sony PlayStation</h3>
              <div className="text-4xl text-gray-300 mb-4">PS</div>
              <p className="text-[16px] text-[#B3050A]">
                Captured the vision and roadmap for their next-gen digital gaming platform.
              </p>
            </div>

            {/* Deloitte */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-[#B3050A] font-bold mb-2">Deloitte</h3>
              <div className="text-4xl text-gray-300 mb-4">Deloitte.</div>
              <p className="text-[16px] text-[#B3050A]">
                Defined the value proposition for a financial service product launched across the EU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2">
            <p className="text-[24px] text-[#B3050A]">London</p>
            <a href="mailto:n.okraku@gmail.com" className="text-[24px] text-[#B3050A] hover:underline block">
              n.okraku@gmail.com
            </a>
            <a href="#" className="text-[24px] text-[#B3050A] hover:underline block">
              Find me on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
