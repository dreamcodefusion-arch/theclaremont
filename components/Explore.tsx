"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { attractions, hotelInfo } from "@/data/content";

function AttractionCard({
  attraction,
  index,
}: {
  attraction: (typeof attractions)[0];
  index: number;
}) {
  return (
    <article
      className="group relative overflow-hidden bg-white border border-claremont-border hover:border-claremont-gold hover:shadow-lg transition-all duration-400 flex flex-col"
      aria-label={attraction.name}
    >
      {/* Image / gradient header */}
      <div className="relative h-36 overflow-hidden">
        {/*
          REPLACE WITH:
          <Image
            src={`/images/attraction-${attraction.id}.jpg`}
            alt={attraction.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-600"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
        */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${attraction.gradient} group-hover:scale-105 transition-transform duration-600`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white font-body text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1">
          {attraction.type}
        </div>

        {/* Distance */}
        <div className="absolute bottom-3 right-3 bg-claremont-gold text-white font-body text-xs font-medium px-2.5 py-1">
          {attraction.distance}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-base font-semibold text-claremont-charcoal mb-2 leading-tight">
          {attraction.name}
        </h3>
        <p className="font-body text-xs text-claremont-warm-gray leading-relaxed flex-1">
          {attraction.description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 font-body text-xs text-claremont-gold font-medium group-hover:gap-2.5 transition-all duration-200">
          <span>Plan a visit</span>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default function Explore() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set([headingRef.current, mapRef.current], { opacity: 0, y: 30 });

        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%", once: true },
        });

        const cards = cardsRef.current?.children;
        if (cards) {
          gsap.set(Array.from(cards), { opacity: 0, y: 40 });
          gsap.to(Array.from(cards), {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 78%", once: true },
          });
        }

        gsap.to(mapRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="section-py bg-claremont-cream"
      aria-label="Explore Nearby Attractions in Kasauli"
    >
      <div className="section-max section-padding">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="section-label mb-4">Discover Kasauli</p>
            <div className="divider-gold mb-8" />
            <h2 className="font-display text-display-md text-claremont-charcoal">
              Your Base for
              <br />
              <em className="text-claremont-pine italic">Everything Kasauli Offers</em>
            </h2>
          </div>
          <div>
            <p className="font-body text-claremont-warm-gray text-base leading-relaxed">
              Kasauli is a quiet town with trails, temples, viewpoints, and colonial heritage
              within a short drive. The Claremont sits at the right center of it all.
            </p>
            <div className="mt-6 flex items-center gap-3 font-body text-sm text-claremont-charcoal">
              <svg className="w-4 h-4 text-claremont-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{hotelInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Attraction cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14"
        >
          {attractions.map((attraction, i) => (
            <AttractionCard key={attraction.id} attraction={attraction} index={i} />
          ))}
        </div>

        {/* Map placeholder + location block */}
        <div
          ref={mapRef}
          className="grid lg:grid-cols-5 gap-0 overflow-hidden border border-claremont-border"
        >
          {/* Map embed placeholder */}
          <div className="lg:col-span-3 relative min-h-[300px] bg-claremont-charcoal/5 overflow-hidden">
            {/*
              REPLACE WITH GOOGLE MAPS EMBED:
              <iframe
                src="https://www.google.com/maps/embed?pb=[YOUR_EMBED_CODE]"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Claremont location on Google Maps"
              />
            */}
            <div className="absolute inset-0 bg-gradient-to-br from-claremont-sage/20 via-claremont-mist/10 to-claremont-pine/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-claremont-gold/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-claremont-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="font-display text-claremont-charcoal text-lg font-semibold mb-2">
                  The Claremont
                </p>
                <p className="font-body text-claremont-warm-gray text-sm">
                  Kimmughat, Kasauli, HP
                </p>
                <div className="mt-4 inline-block border border-claremont-gold text-claremont-gold font-body text-xs px-4 py-2 hover:bg-claremont-gold hover:text-white transition-colors duration-200 cursor-pointer">
                  {/* Replace with actual maps link when available */}
                  Open in Google Maps
                </div>
              </div>
            </div>
          </div>

          {/* Location info */}
          <div className="lg:col-span-2 bg-claremont-charcoal p-8 md:p-10 flex flex-col justify-center">
            <p className="section-label text-claremont-beige/60 mb-4">Getting Here</p>
            <h3 className="font-display text-2xl text-white mb-6">
              Kasauli is Closer
              <br />
              <em className="text-claremont-beige">Than You Think</em>
            </h3>

            <div className="space-y-5">
              {[
                { from: "Chandigarh", distance: "~65 km", time: "~2 hours by road" },
                { from: "Delhi (NH-44)", distance: "~305 km", time: "~6 hours by road" },
                { from: "Shimla", distance: "~68 km", time: "~2.5 hours by road" },
                { from: "Kalka Railway Station", distance: "~40 km", time: "~1.5 hours by road" },
              ].map(({ from, distance, time }) => (
                <div key={from} className="flex items-start justify-between gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0">
                  <div>
                    <p className="font-body text-white text-sm font-medium">{from}</p>
                    <p className="font-body text-white/40 text-xs mt-0.5">{time}</p>
                  </div>
                  <span className="font-body text-claremont-gold text-sm font-medium shrink-0">
                    {distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
