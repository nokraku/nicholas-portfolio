import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

function IntroText() {
  return (
    <div className="space-y-4">
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">Yo, thanks for stopping by.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">My name is Nick and welcome to my little space on the web.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">Professionally I would describe myself as a strategy guy who loves cool products.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">Think product techie meets East London swag.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">Or in another lifetime: Silicon valley meets 2000&apos;s hip-hop.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">This site is an archive of my career experiences and thought experiments.</p>
      <p className="text-sm md:text-base text-[#B3050A] leading-relaxed">Expect something unfiltered, a lack of buzzwords and fakery, with my own spin on it.</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Header />

      {/* Hero — image left + text right on desktop; image only on mobile.
          Current mission banner spans full width at the bottom of this section. */}
      <section>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src="/hero-image.png"
              alt="Nicholas Osorio-Okraku"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Intro text — desktop only, right column */}
          <div className="hidden md:flex flex-col justify-start px-10 py-8">
            <IntroText />
          </div>
        </div>

        {/* Current mission banner — full width on both viewports */}
        <div className="bg-[#B3050A] px-6 md:px-10 py-4">
          <p className="text-xs font-bold text-white uppercase tracking-wide">Current mission:</p>
          <p className="text-sm md:text-base text-white">Building the Product Craft in Grant Thornton UK</p>
        </div>
      </section>

      {/* Intro text — mobile only, shown below current mission banner */}
      <div className="md:hidden px-6 pt-6 pb-4">
        <IntroText />
      </div>

      {/* Big expertise headings */}
      <section className="px-6 md:px-10 pt-6 pb-2 md:pt-12 md:pb-4">
        <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold text-[#B3050A] leading-tight">Product Strategy</h2>
        <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold text-[#B3050A] leading-tight">Proposition Design</h2>
        <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold text-[#B3050A] leading-tight">0-1 Launch</h2>
      </section>

      {/* Secret sauce */}
      <section className="px-6 md:px-10 pt-4 pb-4 md:pt-6 md:pb-6">
        <p className="text-sm font-bold text-[#B3050A]">My secret sauce:</p>
        <p className="text-sm text-[#B3050A]">I ask the uncomfortable questions and love the awkwardness and unknown.</p>
      </section>

      <hr className="border-[#B3050A] mx-6 md:mx-10" />

      {/* Companies + Track record */}
      <section className="px-6 md:px-10 py-6 md:py-8 grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <p className="text-sm text-[#B3050A] mb-3">The ever growing list of companies I&apos;ve worked with:</p>
          <ul className="text-sm text-[#B3050A] space-y-1.5 list-disc list-inside">
            <li>Grant Thornton UK</li>
            <li>Sony Playstation</li>
            <li>Department of Health &amp; Care Wales</li>
            <li>EasyJet</li>
            <li>Sainsbury&apos;s</li>
            <li>Chanel</li>
            <li>Reply</li>
            <li>Paramount</li>
            <li>My5</li>
            <li>Deloitte</li>
            <li>BT</li>
            <li>NHS Digital</li>
            <li>John Lewis</li>
            <li>UK Home Office</li>
            <li>GlaxoSmithKline</li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-[#B3050A] mb-3">My track record:</p>
          <ul className="text-sm text-[#B3050A] space-y-1.5 list-disc list-inside">
            <li>Grant Thornton 2026 - Present. Head of Product.</li>
            <li>Retail Reply 2023 - 2026. Senior Product Consultant</li>
            <li>Paramount UK 2022-2023. Senior Product Manager</li>
            <li>Deloitte Digital 2017-2022. Senior Consultant</li>
            <li>PortalTech Reply 2015-2017. Consultant.</li>
            <li>GlaxoSmithKline 2012-2015. Finance IT Business Analyst</li>
          </ul>
        </div>
      </section>

      {/* Footer + CTA — side by side on desktop, CTA above links on mobile */}
      <div className="flex flex-col md:flex-row md:items-stretch">

        {/* Footer links — below CTA on mobile, left col on desktop */}
        <div className="order-2 md:order-1 md:w-1/3 px-6 md:px-10 py-6 md:py-8 flex flex-col justify-center gap-0.5">
          <p className="text-sm text-[#B3050A]">London</p>
          <a href="mailto:n.okraku@gmail.com" className="text-sm text-[#B3050A] hover:underline hover:text-[#B3050A]">
            n.okraku@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-osorio-okraku-5a184277/"
            className="text-sm text-[#B3050A] hover:underline hover:text-[#B3050A]"
          >
            Find me on LinkedIn
          </a>
        </div>

        {/* Ideas CTA — above links on mobile, right col on desktop */}
        <Link
          href="/blog"
          className="order-1 md:order-2 md:flex-1 bg-[#B3050A] flex items-center justify-center min-h-[80px] md:min-h-[120px]"
        >
          <span className="text-white font-bold text-base md:text-lg tracking-wide">
            → Ideas
          </span>
        </Link>

      </div>

    </main>
  );
}
