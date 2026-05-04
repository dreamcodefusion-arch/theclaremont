import { hotelInfo } from "@/data/content";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Explore Kasauli", href: "#explore" },
  { label: "Contact Us", href: "#contact" },
];

const nearbyLinks = [
  "Manki Point",
  "Gilbert Nature Trail",
  "Shirdi Sai Baba Mandir",
  "Central Research Institute",
  "Krishna Bhavan Mandir",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111916] text-white" role="contentinfo">
      {/* Top section */}
      <div className="section-max section-padding py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-display text-xl font-semibold text-white">
                The Claremont
              </p>
              <p className="font-body text-[0.6rem] text-claremont-beige/50 tracking-[0.25em] uppercase mt-1">
                Kasauli, Himachal Pradesh
              </p>
            </div>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-8 max-w-xs">
              A boutique hill retreat in the pine forests of Kasauli. Where quiet
              mornings, scenic balconies, and warm hospitality define the stay.
            </p>

            {/* Social links — placeholder */}
            <div className="flex gap-3">
              {["Instagram", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-claremont-gold hover:text-claremont-gold transition-all duration-200"
                  aria-label={`Follow The Claremont on ${platform}`}
                >
                  {platform === "Instagram" ? (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-widest">
              Navigate
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/45 hover:text-claremont-beige link-underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-widest">
              Nearby Kasauli
            </h3>
            <ul className="space-y-3">
              {nearbyLinks.map((place) => (
                <li key={place}>
                  <span className="font-body text-sm text-white/45">{place}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-widest">
              Get in Touch
            </h3>
            <div className="space-y-4 font-body text-sm text-white/45">
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Address</p>
                <address className="not-italic leading-snug">
                  {hotelInfo.address}
                </address>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Phone</p>
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="hover:text-claremont-beige transition-colors duration-200"
                >
                  {hotelInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Email</p>
                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="hover:text-claremont-beige transition-colors duration-200 break-all"
                >
                  {hotelInfo.email}
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Check-in / Check-out</p>
                <p>{hotelInfo.checkIn} / {hotelInfo.checkOut}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="section-max section-padding py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/25">
            &copy; {year} The Claremont, Kasauli. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-white/25 hover:text-white/50 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
