"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Explore Kasauli", href: "#explore" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-claremont-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-max section-padding py-0">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex flex-col leading-none group"
              aria-label="The Claremont — Home"
            >
              <span className="font-display text-xl font-semibold text-white tracking-wide group-hover:text-claremont-beige transition-colors duration-300">
                The Claremont
              </span>
              <span className="font-body text-[0.6rem] text-claremont-beige/70 tracking-[0.25em] uppercase">
                Kasauli, Himachal Pradesh
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-sm text-white/80 hover:text-white link-underline transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden md:inline-flex btn-primary text-xs px-6 py-3"
              >
                Book Your Stay
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-px bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-claremont-charcoal transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-3xl text-white hover:text-claremont-beige transition-colors duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 0.07}s` : "0s",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s ease ${i * 0.07}s, opacity 0.4s ease ${i * 0.07}s, color 0.2s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary mt-4"
            style={{
              transitionDelay: menuOpen ? "0.45s" : "0s",
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.4s ease 0.45s`,
            }}
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </>
  );
}
