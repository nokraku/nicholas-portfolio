import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full bg-white px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
        <h1 className="text-[40px] md:text-[52px] font-bold text-black leading-tight uppercase" style={{ fontFamily: 'var(--font-candal)' }}>
  Nicholas<br />Osorio-Okraku
</h1>
          <button className="p-2 mt-2">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>
      </nav>

      <ScrollReveal>
      <section className="pt-4 md:pt-6 px-4 md:px-8">
      {/* Hero Section */}
      <section className="pt-2 md:pt-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - Image */}
            <div className="w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
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
            <div className="flex flex-col justify-between h-full">
              <p className="text-[24px] leading-relaxed text-black">
                Nicholas is an independent freelancer offering a personal 1-on-1 founder consultation that specialises in strategic direction, product launches and growth of small-to-medium businesses.
              </p>
              
              <div className="space-y-1 mt-8">
                <p className="text-[24px] text-black">London</p>
                <a href="mailto:n.okraku@gmail.com" className="text-[24px] text-black hover:underline block">
                  n.okraku@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/nicholas-osorio-okraku-5a184277/" className="text-[24px] text-black hover:underline block">
                  Find me on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
</ScrollReveal>

<ScrollReveal delay={0.2}>
  <section className="py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Logo Section - Sliding Carousel */}
      <section className="py-4 md:py-6 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
          <div className="flex animate-scroll gap-24 md:gap-32">
              {/* First set of logos */}
              <div className="flex gap-24 md:gap-32 items-center justify-center min-w-full opacity-40">
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
              <div className="flex gap-24 md:gap-32 items-center justify-center min-w-full opacity-40">
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
      </section>
</ScrollReveal>

<ScrollReveal delay={0.3}>
  <section className="py-16 px-4 md:px-8">
      {/* Frameworks Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[24px] text-black mb-2">
              <span className="font-bold">Frameworks</span> proven with global leaders.
            </h2>
            <p className="text-[24px] text-black">
              These are the fundamentals you need to find your fit, find your loyal user base, and find lasting impact.
            </p>
          </div>

          {/* Framework Items */}
          <div className="space-y-8">
            {/* Vision & The Mission */}
            <div className="border-t border-black pt-6">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Vision & The Mission (&quot;Why&quot;)
              </h3>
              <p className="text-[16px] text-black">
                Create the future and values that form the driving force for your organisation.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="border-t border-black pt-6">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Value Proposition (&quot;What&quot;)
              </h3>
              <p className="text-[16px] text-black">
                Define what makes you unmissable. The reason customers choose you over everyone else.
              </p>
            </div>

            {/* Personas & Segments */}
            <div className="border-t border-black pt-6">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Personas & Segments (&quot;Who&quot;)
              </h3>
              <p className="text-[16px] text-black">
                Define your customers. From the &quot;day ones&quot; to the influencers.
              </p>
            </div>

            {/* Horizon Roadmap */}
            <div className="border-t border-black pt-6">
              <h3 className="text-[24px] font-bold text-black mb-2">
                Horizon Roadmap (&quot;How&quot;)
              </h3>
              <p className="text-[16px] text-black">
                Build a 1-3-5 year plan to launch and achieve &apos;The Mission&apos;. Turn vision into action.
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>
</ScrollReveal>


      {/* Find Your Voice Section */}
      <ScrollReveal delay={0.2}>
  <section className="py-24 px-4 md:px-8">
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[56px] md:text-[56px] font-bold text-black leading-tight mb-16">
            Find your voice. Build your vision.
          </h2>
        </div>
      </section>
      </section>
</ScrollReveal>

      {/* Case Studies Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Sainsbury's */}
            <ScrollReveal delay={0}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">Sainsbury&apos;s</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-sainsburys.png" 
                    alt="Sainsbury's"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Crafted the vision and roadmap of their grocery app to increase market share.
                </p>
              </div>
            </ScrollReveal>

            {/* Paramount */}
            <ScrollReveal delay={0.1}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">Paramount</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-paramount.png" 
                    alt="Paramount"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Crafted a new era strategy for the UK streaming service to compete with ITV, BBC, C4.
                </p>
              </div>
            </ScrollReveal>

            {/* Chanel */}
            <ScrollReveal delay={0.2}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">Chanel</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-chanel.png" 
                    alt="Chanel"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Defined their AI automation practices to align across all global regions.
                </p>
              </div>
            </ScrollReveal>

            {/* EasyJet */}
            <ScrollReveal delay={0.3}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">EasyJet</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-easyjet.png" 
                    alt="easyJet"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Re-defined the communications strategy to improve network control efficiencies.
                </p>
              </div>
            </ScrollReveal>

            {/* Sony PlayStation */}
            <ScrollReveal delay={0.4}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">Sony PlayStation</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-playstation.png" 
                    alt="PlayStation"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Captured the vision and roadmap for their next-gen digital gaming platform.
                </p>
              </div>
            </ScrollReveal>

            {/* Deloitte */}
            <ScrollReveal delay={0.5}>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-black font-bold mb-4">Deloitte</h3>
                <div className="relative w-32 h-16 mb-4 opacity-30">
                  <Image 
                    src="/logo-deloitte.png" 
                    alt="Deloitte"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-[16px] text-black">
                  Defined the value proposition for a financial service product launched across the EU.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2">
            <p className="text-[24px] text-black">London</p>
            <a href="mailto:n.okraku@gmail.com" className="text-[24px] text-black hover:underline block">
              n.okraku@gmail.com
            </a>
            <a href="#" className="text-[24px] text-black hover:underline block">
              Find me on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
