/**
 * Navigation — Kintsugi Modernism
 * Warm charcoal with gold accents. Transparent on hero, solid on scroll.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "The Book", href: "#book" },
    { label: "The Journey", href: "#journey" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-display)] text-lg md:text-xl tracking-wide text-white hover:text-gold transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Claims to Courage
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#free-book"
            className="ml-2 px-5 py-2 text-sm tracking-widest uppercase bg-gold text-charcoal font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Free Copy
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-white/10">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300 py-2"
                style={{ fontFamily: "var(--font-body)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#free-book"
              className="mt-2 px-5 py-3 text-sm tracking-widest uppercase bg-gold text-charcoal font-semibold rounded-sm text-center hover:bg-gold-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Your Free Copy
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
