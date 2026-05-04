"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqs } from "@/data/content";

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`border-b border-claremont-border ${
        index === 0 ? "border-t" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span
          className={`font-display text-base md:text-lg font-medium transition-colors duration-200 ${
            isOpen ? "text-claremont-pine" : "text-claremont-charcoal group-hover:text-claremont-pine"
          }`}
        >
          {item.q}
        </span>

        {/* Icon */}
        <span
          className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-claremont-gold bg-claremont-gold text-white rotate-45"
              : "border-claremont-border text-claremont-warm-gray group-hover:border-claremont-gold group-hover:text-claremont-gold"
          }`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        className={`faq-content ${isOpen ? "open" : ""}`}
        role="region"
        aria-label={item.q}
      >
        <p className="font-body text-sm md:text-base text-claremont-warm-gray leading-relaxed pb-6 pr-12">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set([headingRef.current, listRef.current], { opacity: 0, y: 30 });

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

        gsap.to(listRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-py bg-claremont-white"
      aria-label="Frequently Asked Questions"
    >
      <div className="section-max section-padding">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div ref={headingRef} className="lg:col-span-2">
            <p className="section-label mb-4">FAQs</p>
            <div className="divider-gold mb-8" />
            <h2 className="font-display text-display-md text-claremont-charcoal mb-6">
              Everything You
              <br />
              <em className="text-claremont-pine italic">Want to Know</em>
            </h2>
            <p className="font-body text-claremont-warm-gray text-base leading-relaxed">
              Planning a stay at The Claremont? Here are the answers to the questions we hear
              most often. Have something else in mind? Just reach out.
            </p>

            {/* Contact nudge */}
            <div className="mt-10 p-6 bg-claremont-cream border border-claremont-border">
              <p className="font-display text-base font-semibold text-claremont-charcoal mb-2">
                Still have questions?
              </p>
              <p className="font-body text-sm text-claremont-warm-gray mb-4">
                Our team is happy to help. Call, WhatsApp, or drop us an email.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-claremont-gold hover:text-claremont-gold-light transition-colors"
              >
                Get in Touch
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div
            ref={listRef}
            className="lg:col-span-3"
            role="list"
            aria-label="FAQ items"
          >
            {faqs.map((faq, i) => (
              <div key={i} role="listitem">
                <FAQItem
                  item={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
