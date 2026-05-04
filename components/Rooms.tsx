"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rooms } from "@/data/content";

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function RoomCard({ room, index }: { room: typeof rooms[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(imageRef.current, {
        scale: 1.04,
        x: x * 8,
        y: y * 8,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`relative group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${
        room.featured ? "ring-1 ring-claremont-gold" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={`${room.name}${room.subtitle ? " " + room.subtitle : ""}`}
    >
      {/* Featured badge */}
      {room.featured && (
        <div className="absolute top-4 left-4 z-10 bg-claremont-gold text-white font-body text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-60 md:h-72 overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          {/*
            REPLACE WITH:
            <Image
              src={`/images/room-${room.id}.jpg`}
              alt={`${room.name}${room.subtitle ? " " + room.subtitle : ""} at The Claremont Kasauli`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          */}
          <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} opacity-90`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        </div>

        {/* Occupancy pill */}
        <div className="absolute bottom-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white font-body text-xs px-3 py-1.5">
          {room.occupancy}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="mb-4">
          <h3 className="font-display text-xl font-semibold text-claremont-charcoal leading-tight">
            {room.name}
            {room.subtitle && (
              <span className="block text-base font-normal text-claremont-warm-gray italic">
                {room.subtitle}
              </span>
            )}
          </h3>
          <p className="font-body text-claremont-gold text-xs tracking-widest uppercase mt-1.5">
            {room.tagline}
          </p>
        </div>

        <p className="font-body text-sm text-claremont-warm-gray leading-relaxed mb-5">
          {room.description}
        </p>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-6 mt-auto">
          {room.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-1.5 font-body text-xs text-claremont-charcoal/80"
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-t border-claremont-border pt-5 flex gap-3">
          <button className="flex-1 btn-primary text-xs py-3 px-4 justify-center">
            {room.cta}
          </button>
          <button className="border border-claremont-border text-claremont-charcoal font-body text-xs px-4 py-3 hover:border-claremont-gold hover:text-claremont-gold transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Rooms() {
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
          gsap.set(Array.from(cards), { opacity: 0, y: 50 });
          gsap.to(Array.from(cards), {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
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
      id="rooms"
      className="section-py bg-claremont-cream"
      aria-label="Room Types"
    >
      <div className="section-max section-padding">
        {/* Section heading */}
        <div ref={headingRef} className="max-w-2xl mb-14">
          <p className="section-label mb-4">Accommodations</p>
          <div className="divider-gold mb-8" />
          <h2 className="font-display text-display-md text-claremont-charcoal mb-5">
            Rooms Designed for
            <br />
            <em className="text-claremont-pine italic">the Way You Rest</em>
          </h2>
          <p className="font-body text-claremont-warm-gray text-base leading-relaxed">
            Three room categories, each crafted with a different kind of stay in mind. All
            offer the quiet, comfort, and character that Kasauli deserves.
          </p>
        </div>

        {/* Room Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-body text-sm text-claremont-warm-gray mt-10 text-center">
          All rooms include free Wi-Fi, daily housekeeping, and access to the in-house restaurant.
          <br />
          <span className="text-claremont-gold">Contact us</span> to check availability and current rates.
        </p>
      </div>
    </section>
  );
}
