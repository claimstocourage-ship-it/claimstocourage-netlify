/**
 * Footer — Kintsugi Modernism
 * Dark charcoal ground with gold accents and warm stone text.
 */

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone/70 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Claims to Courage
            </h3>
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body)" }}>
              Exploring how the grueling journey of personal injury litigation
              can become a catalyst for profound post-traumatic growth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm tracking-widest uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "The Book", href: "#book" },
                { label: "The Journey", href: "#journey" },
                { label: "About the Author", href: "#about" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm tracking-widest uppercase text-gold mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <p>Law Offices of Edward A. Smith</p>
              <p>1610 Arden Way, Suite 280</p>
              <p>Sacramento, CA 95815</p>
              <a href="tel:9169216400" className="text-gold hover:text-gold-light transition-colors duration-300">
                (916) 921-6400
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          <p>&copy; {new Date().getFullYear()} Claims to Courage. All rights reserved.</p>
          <p className="text-stone/50">
            Law Offices of Edward A. Smith &mdash; Sacramento Personal Injury Attorney
          </p>
        </div>
      </div>
    </footer>
  );
}
