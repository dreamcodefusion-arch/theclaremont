"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelInfo } from "@/data/content";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set([imageRef.current, textRef.current, accentRef.current], {
          opacity: 0,
          y: 40,
        });

        ScrollTrigger.batch([imageRef.current, textRef.current], {
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 1.1,
              stagger: 0.2,
              ease: "power3.out",
            });
          },
          start: "top 80%",
          once: true,
        });

        gsap.to(accentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accentRef.current,
            start: "top 85%",
            once: true,
          },
        });

        // Subtle parallax on image
        gsap.to(imageRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-py bg-claremont-white overflow-hidden"
      aria-label="About The Claremont"
    >
      <div className="section-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Block */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              {/*
                REPLACE WITH:
                <Image
                  src="/images/about-claremont-exterior.jpg"
                  alt="The Claremont hotel exterior surrounded by pine trees in Kasauli"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              */}
              <div className="absolute inset-0 bg-gradient-to-br from-claremont-pine via-claremont-sage to-claremont-charcoal img-placeholder" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(180,130,80,0.15)_0%,transparent_60%)]" />

              {/* Overlaid label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-claremont-charcoal/80 to-transparent">
                <span className="font-body text-xs text-claremont-beige/80 tracking-widest uppercase">
                  {/* Replace with actual caption */}
                  The Claremont, Kasauli — Kimmughat Area
                </span>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              ref={accentRef}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-claremont-gold text-white p-6 w-44"
            >
              <p className="font-display text-3xl font-bold leading-none mb-1">
                3+
              </p>
              <p className="font-body text-xs tracking-wide leading-snug opacity-90">
                Room types crafted for every kind of stay
              </p>
            </div>
          </div>

          {/* Text Block */}
          <div ref={textRef} className="lg:pl-4">
            <p className="section-label mb-4">Our Story</p>
            <div className="divider-gold mb-8" />

            <h2 className="font-display text-display-md text-claremont-charcoal mb-6 text-balance">
              A Retreat Built Around
              <br />
              <em className="text-claremont-pine italic">Stillness & Views</em>
            </h2>

            <div className="space-y-5 font-body text-claremont-warm-gray text-base leading-relaxed">
              <p>
                The Claremont sits quietly in the Kimmughat area of Kasauli —
                a place where the hills are unhurried, the pine trees grow tall,
                and mornings feel like they belong entirely to you.
              </p>
              <p>
                We built The Claremont with one simple belief: that the right
                room, in the right setting, can genuinely change how a stay
                feels. Here, that means private balconies facing the Kasauli
                hills, rooms designed for comfort rather than clutter, and a
                team that genuinely enjoys being helpful.
              </p>
              <p>
                Whether you come to trek Manki Point, walk the Gilbert Trail,
                or simply sit with a cup of chai and watch the mist move — The
                Claremont is ready when you are.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-claremont-border grid grid-cols-3 gap-6">
              {[
                { stat: "3", label: "Room Categories" },
                { stat: "24h", label: "Front Desk Support" },
                { stat: "5+", label: "Nearby Attractions" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-semibold text-claremont-charcoal mb-1">
                    {stat}
                  </p>
                  <p className="font-body text-xs text-claremont-warm-gray leading-snug">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <blockquote className="border-l-2 border-claremont-gold pl-5">
                <p className="font-display text-lg italic text-claremont-charcoal/80 leading-relaxed">
                  &ldquo;{hotelInfo.brandStatement}&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
