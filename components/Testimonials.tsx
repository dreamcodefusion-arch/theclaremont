"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-claremont-gold" : "text-claremont-border"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [activeIndex, isAnimating]
  );

  const goNext = () => goTo((activeIndex + 1) % testimonials.length);
  const goPrev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-py bg-[#F2EDE3] overflow-hidden"
      aria-label="Guest Testimonials"
    >
      <div className="section-max section-padding">
        {/* Heading */}
        <div ref={headingRef} className="mb-14 text-center max-w-xl mx-auto">
          <p className="section-label mb-4">Guest Stories</p>
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="font-display text-display-md text-claremont-charcoal">
            What Our Guests
            <br />
            <em className="text-claremont-pine italic">Remember Most</em>
          </h2>
        </div>

        {/* Large featured testimonial */}
        <div className="mb-10 relative overflow-hidden">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="transition-all duration-600 ease-premium"
              style={{
                display: i === activeIndex ? "block" : "none",
              }}
            >
              <div className="max-w-3xl mx-auto text-center">
                {/* Quote mark */}
                <div className="font-display text-8xl text-claremont-gold/20 leading-none mb-2 select-none" aria-hidden="true">
                  &ldquo;
                </div>

                <StarRating rating={testimonial.rating} />

                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-claremont-charcoal italic leading-relaxed my-8">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                  <p className="font-body text-sm font-semibold text-claremont-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-claremont-warm-gray">
                    {testimonial.origin} &middot; {testimonial.roomType} &middot; {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 border border-claremont-border flex items-center justify-center hover:border-claremont-gold hover:text-claremont-gold transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2.5" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === activeIndex
                    ? "bg-claremont-gold w-8"
                    : "bg-claremont-beige/50 w-3 hover:bg-claremont-beige"
                }`}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 border border-claremont-border flex items-center justify-center hover:border-claremont-gold hover:text-claremont-gold transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* All testimonials - mini cards on desktop */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-14">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              className={`text-left p-5 border transition-all duration-300 ${
                i === activeIndex
                  ? "border-claremont-gold bg-white shadow-sm"
                  : "border-claremont-border bg-transparent hover:border-claremont-beige"
              }`}
            >
              <StarRating rating={t.rating} />
              <p className="font-body text-xs text-claremont-charcoal mt-3 line-clamp-3 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-body text-[0.65rem] text-claremont-warm-gray mt-3">
                — {t.name}, {t.origin}
              </p>
            </button>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-claremont-border">
          {[
            { platform: "Google Reviews", badge: "4.8 / 5.0" },
            { platform: "TripAdvisor", badge: "Excellent" },
            { platform: "Booking.com", badge: "Superb 9+" },
          ].map(({ platform, badge }) => (
            <div key={platform} className="text-center">
              <p className="font-display text-xl font-semibold text-claremont-charcoal">
                {badge}
              </p>
              <p className="font-body text-xs text-claremont-warm-gray mt-0.5">{platform}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
