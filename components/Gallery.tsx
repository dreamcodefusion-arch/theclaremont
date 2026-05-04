"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gallery } from "@/data/content";

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const aspectRatioClasses: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

type GalleryItem = {
  id: number;
  label: string;
  aspect: string;
  gradient: string;
};

function GalleryItem({ item, index }: { item: GalleryItem; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(itemRef.current, { opacity: 0, clipPath: "inset(100% 0 0 0)" });

      gsap.to(itemRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.1,
        ease: "power3.out",
        delay: (index % 3) * 0.12,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden cursor-pointer group ${
        aspectClasses[item.aspect] || ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label={item.label}
    >
      <div
        className={`relative overflow-hidden ${aspectRatioClasses[item.aspect] || "aspect-square"} ${
          item.aspect === "tall" ? "h-full" : ""
        }`}
        style={item.aspect === "tall" ? { aspectRatio: "unset" } : {}}
      >
        {/*
          REPLACE THIS DIV WITH:
          <Image
            src={`/images/gallery-${item.id}.jpg`}
            alt={item.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Atmospheric texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-claremont-charcoal/60 flex items-end p-5 transition-opacity duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`transition-all duration-400 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="font-display text-white text-base font-medium leading-tight">
              {item.label}
            </p>
            <p className="font-body text-white/50 text-xs mt-1 tracking-wide">
              The Claremont, Kasauli
            </p>
          </div>
        </div>

        {/* Expand icon on hover */}
        <div
          className={`absolute top-4 right-4 w-8 h-8 border border-white/60 flex items-center justify-center transition-all duration-300 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section-py bg-claremont-charcoal overflow-hidden"
      aria-label="Gallery — Views and Spaces at The Claremont"
    >
      <div className="section-max section-padding">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="section-label text-claremont-beige/70 mb-4">Visual Story</p>
            <div className="w-12 h-px bg-claremont-gold mb-8" />
            <h2 className="font-display text-display-md text-white">
              The Views That
              <br />
              <em className="text-claremont-beige italic">Bring Guests Back</em>
            </h2>
          </div>
          <p className="font-body text-white/50 text-sm max-w-xs leading-relaxed md:text-right">
            Balcony mornings, pine canopy walks, mist over the Kasauli
            hills — these are the moments The Claremont was built around.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-white/40 text-sm mb-6">
            Every image tells a different story of Kasauli.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-body text-sm px-8 py-4 hover:bg-white/10 transition-all duration-300"
          >
            Enquire About a Stay
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
