"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hotelInfo } from "@/data/content";

type FormData = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  message: "",
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set([headingRef.current, formRef.current, infoRef.current], {
          opacity: 0,
          y: 30,
        });

        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%", once: true },
        });

        gsap.to([formRef.current, infoRef.current], {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — wire up to a form handler (Formspree, Netlify Forms, etc.)
    // Example: POST to /api/contact or use mailto: fallback
    console.log("Enquiry submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-py bg-claremont-charcoal overflow-hidden"
      aria-label="Contact and Booking Enquiry"
    >
      <div className="section-max section-padding">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14 max-w-2xl mx-auto">
          <p className="section-label text-claremont-beige/60 mb-4">Reserve Your Stay</p>
          <div className="w-12 h-px bg-claremont-gold mx-auto mb-8" />
          <h2 className="font-display text-display-md text-white mb-5">
            The Hills Are Waiting.
            <br />
            <em className="text-claremont-beige italic">Your Balcony Is Ready.</em>
          </h2>
          <p className="font-body text-white/55 text-base leading-relaxed">
            Send us a message and our team will confirm availability and rates within 24 hours.
            Prefer a call? We&rsquo;re available around the clock.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enquiry Form */}
          <div ref={formRef} className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-claremont-gold/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-claremont-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  Enquiry Received
                </h3>
                <p className="font-body text-white/55 text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours to confirm availability and details.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData(initialForm); }}
                  className="mt-8 font-body text-sm text-claremont-gold hover:text-claremont-beige transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 p-8 md:p-10"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-claremont-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-claremont-gold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-claremont-gold"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="checkIn">
                      Check-in Date *
                    </label>
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="form-input bg-white/5 border-white/20 text-white focus:border-claremont-gold [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="checkOut">
                      Check-out Date *
                    </label>
                    <input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="form-input bg-white/5 border-white/20 text-white focus:border-claremont-gold [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="roomType">
                    Room Preference
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="form-input bg-claremont-charcoal border-white/20 text-white focus:border-claremont-gold"
                  >
                    <option value="">Select a room type</option>
                    <option value="luxury">Luxury Room</option>
                    <option value="royal-balcony">Royal Room with Balcony</option>
                    <option value="business-balcony">Business Room with Balcony</option>
                    <option value="any">Any Available Room</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="font-body text-white/50 text-xs tracking-wide block mb-2" htmlFor="message">
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-claremont-gold resize-none"
                    placeholder="Any special occasions, accessibility needs, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-5"
                >
                  Send Enquiry
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="font-body text-white/30 text-xs text-center mt-4">
                  No payment required. We&rsquo;ll confirm availability and share rates within 24 hours.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="flex flex-col gap-6">
            {/* Direct actions */}
            <div className="bg-claremont-gold/10 border border-claremont-gold/30 p-7">
              <h3 className="font-display text-lg text-white mb-5">Prefer to Talk?</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="flex items-center gap-4 group"
                  aria-label={`Call us at ${hotelInfo.phone}`}
                >
                  <div className="w-10 h-10 bg-claremont-gold/20 flex items-center justify-center shrink-0 group-hover:bg-claremont-gold transition-colors duration-200">
                    <svg className="w-4 h-4 text-claremont-gold group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.73A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-[0.6rem] text-white/40 uppercase tracking-widest">Call Us</p>
                    <p className="font-body text-white text-sm font-medium">{hotelInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${hotelInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  aria-label="WhatsApp us"
                >
                  <div className="w-10 h-10 bg-green-900/30 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-200">
                    <svg className="w-4 h-4 text-green-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.513 5.838L.059 23.25l5.563-1.41A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.359-.213-3.305.838.886-3.209-.234-.372A9.818 9.818 0 1112 21.818z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-[0.6rem] text-white/40 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-body text-white text-sm font-medium">Message Us Directly</p>
                  </div>
                </a>

                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="flex items-center gap-4 group"
                  aria-label={`Email us at ${hotelInfo.email}`}
                >
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-[0.6rem] text-white/40 uppercase tracking-widest">Email</p>
                    <p className="font-body text-white text-sm font-medium break-all">{hotelInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Property info */}
            <div className="border border-white/10 p-7">
              <h3 className="font-display text-base text-white mb-5">Property Details</h3>
              <div className="space-y-4 font-body text-sm">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-claremont-gold mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Address</p>
                    <p className="text-white/80 leading-snug">{hotelInfo.address}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-claremont-gold mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Check-in / Check-out</p>
                    <p className="text-white/80">{hotelInfo.checkIn} / {hotelInfo.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-claremont-pine p-7 text-center">
              <p className="font-display text-white text-lg mb-2">
                Last-minute plans?
              </p>
              <p className="font-body text-white/60 text-sm mb-5">
                Call directly for instant availability.
              </p>
              <a
                href={`tel:${hotelInfo.phone}`}
                className="inline-flex items-center gap-2 bg-white text-claremont-pine font-body font-semibold text-sm px-6 py-3 hover:bg-claremont-cream transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.73A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l.62-.62a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
