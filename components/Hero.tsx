"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trustItems } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  car: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h10l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </svg>
  ),
  wifi: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),
  restaurant: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  ),
  mountain: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M8 3l-5 18h18L14 3l-3 6-3-6z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // Set initial states
        gsap.set(
          [eyebrowRef.current, headlineRef.current, subRef.current, ctaRef.current, trustRef.current, scrollIndicatorRef.current],
          { opacity: 0, y: 30 }
        );

        // Entrance timeline
        const tl = gsap.timeline({ delay: 0.5 });

        tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.6")
          .to(subRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
          .to(trustRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.3")
          .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

        // Parallax on background
        gsap.to(bgRef.current, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero — The Claremont, Kasauli"
    >
      {/* Background — Replace with real image */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-[1.15] origin-top"
        aria-hidden="true"
      >
        {/*
          REPLACE THIS DIV WITH:
          <Image
            src="/images/hero-kasauli-hills.jpg"
            alt="Panoramic view of Kasauli hills from The Claremont"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f0a] via-[#1a3312] to-[#101c1c]" />

        {/* Atmospheric overlay layers for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(44,74,30,0.4)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(180,130,80,0.12)_0%,transparent_50%)]" />

        {/* Mist at horizon */}
        <div className="absolute top-1/3 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

        {/* Ground fog suggestion */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center section-padding pt-28 pb-8">
        <div className="section-max w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <p
              ref={eyebrowRef}
              className="font-body text-claremont-beige/80 text-xs tracking-[0.3em] uppercase mb-5"
            >
              Kasauli, Himachal Pradesh — Est. in the Pines
            </p>

            <h1
              ref={headlineRef}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.04] mb-7 text-balance"
            >
              Where the Hills
              <br />
              <em className="text-claremont-beige italic">Hold Still</em>
            </h1>

            <p
              ref={subRef}
              className="font-body text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              A boutique mountain retreat in the pine forests of Kasauli. Balcony
              rooms, scenic mornings, and the kind of quiet that reminds you why
              you came.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#rooms")}
                className="btn-primary"
              >
                Explore Rooms
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center gap-2 border border-white/50 text-white font-body font-medium px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div
        ref={trustRef}
        className="relative border-t border-white/10 bg-black/25 backdrop-blur-sm"
      >
        <div className="section-max section-padding py-4">
          <div className="flex flex-wrap gap-5 md:gap-10">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/60"
              >
                {iconMap[item.icon]}
                <span className="font-body text-xs tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute right-8 md:right-12 bottom-32 hidden md:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white/60 animate-[scrollDown_2s_ease-in-out_infinite]" style={{ height: "40%", animation: "scrollDown 2s ease-in-out infinite" }} />
        </div>
        <span className="font-body text-[0.6rem] text-white/30 tracking-[0.25em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
