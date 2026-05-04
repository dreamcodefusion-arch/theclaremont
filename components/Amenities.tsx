"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { amenities } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <path d="M5 17H3a2 2 0 01-2-2v-5a2 2 0 012-2h1l2.5-4h9L16 8h1a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 18l.75 2.25L8 21l-2.25.75L5 24l-.75-2.25L2 21l2.25-.75L5 18z" />
      <path d="M19 2l.5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5L19 2z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
      <path d="M8 3L2 21h20L15 3l-3.5 7L8 3z" />
      <path d="M2 21h20" />
    </svg>
  ),
};

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            once: true,
          },
        });

        const cards = cardsRef.current?.children;
        if (cards) {
          gsap.set(Array.from(cards), { opacity: 0, y: 30 });
          gsap.to(Array.from(cards), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
              once: true,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="amenities"
      className="section-py bg-claremont-white overflow-hidden"
      aria-label="Hotel Amenities"
    >
      <div className="section-max section-padding">
        {/* Heading */}
        <div ref={headingRef} className="grid md:grid-cols-2 gap-8 mb-14 items-end">
          <div>
            <p className="section-label mb-4">What We Offer</p>
            <div className="divider-gold mb-8" />
            <h2 className="font-display text-display-md text-claremont-charcoal">
              Everything You Need.
              <br />
              <em className="text-claremont-pine italic">Nothing You Don&rsquo;t.</em>
            </h2>
          </div>
          <p className="font-body text-claremont-warm-gray text-base leading-relaxed md:pb-2">
            At The Claremont, amenities are chosen with intention — not to impress with a long list, but to make your stay genuinely comfortable in the hills.
          </p>
        </div>

        {/* Amenity Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group relative p-7 border border-claremont-border bg-claremont-cream hover:bg-white hover:border-claremont-gold hover:shadow-md transition-all duration-400 cursor-default"
            >
              {/* Icon */}
              <div className="text-claremont-gold mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
                {icons[amenity.icon]}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-claremont-charcoal mb-3">
                {amenity.name}
              </h3>
              <p className="font-body text-sm text-claremont-warm-gray leading-relaxed">
                {amenity.microcopy}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-claremont-gold transition-all duration-400 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Feature bar */}
        <div className="mt-14 p-8 bg-claremont-charcoal grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {[
            { label: "Free Self-Parking", sub: "On-site, always available" },
            { label: "Free Wi-Fi", sub: "High-speed, all areas" },
            { label: "In-House Restaurant", sub: "Breakfast, lunch & dinner" },
            { label: "24/7 Front Desk", sub: "Always here to help" },
          ].map(({ label, sub }) => (
            <div key={label} className="md:px-8 text-center md:text-left">
              <p className="font-display text-white text-base font-medium">{label}</p>
              <p className="font-body text-white/40 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
