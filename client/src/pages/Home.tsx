/**
 * Home — Claims to Courage
 * Design: Kintsugi Modernism
 * Warm charcoal + stone + burnished gold. Playfair Display + Source Sans 3.
 * Vertical storytelling that mirrors the journey from trauma to growth.
 */
import { useState } from "react";
import { ArrowDown, BookOpen, Mail, Phone, MapPin, Quote, ChevronRight, Heart, Shield, Lightbulb, Users, Download, Truck, Headphones, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Link } from "wouter";

const PDF_URL = "https://pub-650ec695e808480cb5eb866dc2b5f537.r2.dev/ClaimsToCourage_9977a535.pdf";
const AUDIO_URL = "https://pub-650ec695e808480cb5eb866dc2b5f537.r2.dev/ClaimsToCourage_Audiobook_f621565c.mp3";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414877813/QrEtQVCJ2AY7uh46dV7DSH/butterfly-steering-notext-7kpPnVPtPdfMycYgcvK7Mq.webp";
const BOOK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414877813/QrEtQVCJ2AY7uh46dV7DSH/claimstocourage_76d1fc40.png";
const AUTHOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414877813/QrEtQVCJ2AY7uh46dV7DSH/edsmith_0f944fcf.png";
const JOURNEY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414877813/QrEtQVCJ2AY7uh46dV7DSH/growth-journey-KU75RxZ5k7PYyrMEy5XAoA.webp";
const TESTIMONIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414877813/QrEtQVCJ2AY7uh46dV7DSH/testimonial-bg-m6A64cEcAr9WCdvrT9McKq.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Butterfly background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${HERO_IMG}")` }} />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Content */}
        <div className="relative z-10 container flex flex-col items-center justify-center min-h-screen py-20 text-center">
          <AnimatedSection>
            <h1 className="flex flex-col items-center" style={{ fontFamily: "var(--font-display)" }}>
              <span className="block uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.15em] leading-[1.1]" style={{ color: "rgb(232, 224, 212)", textShadow: "0px 2px 4px rgba(0,0,0,0.5), 0px 0px 40px rgba(0,0,0,0.3)" }}>Claims To</span>
              <span className="block uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] tracking-[0.05em] leading-[0.9] font-normal" style={{ color: "rgb(232, 224, 212)", textShadow: "0px 3px 6px rgba(0,0,0,0.6), 0px 0px 60px rgba(0,0,0,0.3)" }}>Courage</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide mt-4 mb-auto italic font-medium" style={{ fontFamily: "var(--font-display)", color: "rgb(232, 224, 212)", textShadow: "0px 3px 8px rgba(0,0,0,0.7), 0px 0px 30px rgba(0,0,0,0.5)" }}>Reclaiming life after the crash</p>
          </AnimatedSection>

          <div className="flex-1" />

          <AnimatedSection delay={400}>
            <a href="#free-book" className="inline-block px-10 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 mb-6" style={{ fontFamily: "var(--font-body)" }}>Get Your Free Copy</a>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <p className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.12em] font-normal" style={{ fontFamily: "var(--font-display)", color: "rgb(232, 224, 212)", textShadow: "0px 2px 6px rgba(0,0,0,0.6)" }}>Edward A. Smith</p>
            <p className="text-base sm:text-lg md:text-xl tracking-wide mt-1 italic" style={{ fontFamily: "var(--font-display)", color: "rgb(232, 224, 212)", opacity: 0.85, textShadow: "0px 1px 4px rgba(0,0,0,0.5)" }}>Founder of AutoAccident.com</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          KINTSUGI PHILOSOPHY INTRO
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container max-w-4xl text-center">
          <AnimatedSection>
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Philosophy
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2
              className="text-3xl md:text-5xl text-charcoal leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In Japan, broken pottery is repaired with gold &mdash;
              <span className="text-gold italic"> making it more beautiful than before.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p
              className="text-charcoal-light text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              This ancient art of <em>Kintsugi</em> teaches us that our fractures
              are not something to hide, but something to illuminate. <em>Claims to Courage</em> applies
              this same philosophy to the personal injury journey &mdash; showing how the cracks
              from trauma, when filled with resilience, can become the strongest and most
              beautiful parts of who we are.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="mt-12 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE BOOK SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="book" className="py-24 md:py-32 bg-charcoal text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book image */}
            <AnimatedSection className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-sm blur-2xl" />
                <img
                  src={BOOK_IMG}
                  alt="Claims to Courage book"
                  className="relative w-72 md:w-80 lg:w-96 shadow-2xl rounded-sm"
                />
              </div>
            </AnimatedSection>

            {/* Book description */}
            <div>
              <AnimatedSection>
                <p
                  className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  The Book
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h2
                  className="text-3xl md:text-5xl leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Claims to <span className="text-gold italic">Courage</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p
                  className="text-stone/80 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Inspired by Oliver Sacks' <em>An Anthropologist on Mars</em>,
                  this book takes you through every stage of a personal injury case &mdash;
                  from the initial trauma and the overwhelming anxiety of litigation,
                  to the moments of resilience that can spark profound personal transformation.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p
                  className="text-stone/80 text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Through real stories and compassionate insight, <em>Claims to Courage</em> reveals
                  how the legal journey &mdash; often seen as purely adversarial &mdash; can become
                  a path toward post-traumatic growth, deeper self-understanding, and a
                  more meaningful life.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#free-book"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-gold-light transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <BookOpen size={18} />
                    Get Your Free Copy
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU'LL DISCOVER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Inside the Book
            </p>
            <h2
              className="text-3xl md:text-5xl text-charcoal leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What You'll Discover
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "The Anatomy of a Case",
                desc: "A clear, compassionate walkthrough of every stage of a personal injury case, demystifying the process that causes so much anxiety.",
              },
              {
                icon: Heart,
                title: "The Emotional Toll",
                desc: "Honest exploration of the stress, fear, and frustration that litigation inflicts — and why acknowledging it is the first step toward growth.",
              },
              {
                icon: Lightbulb,
                title: "Post-Traumatic Growth",
                desc: "Evidence-based insights into how adversity can catalyze personal transformation, deeper relationships, and a renewed sense of purpose.",
              },
              {
                icon: Users,
                title: "Stories of Resilience",
                desc: "Real narratives of individuals who turned their legal battles into turning points — emerging stronger, braver, and more whole.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-stone/10">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <item.icon className="text-gold" size={22} />
                  </div>
                  <h3
                    className="text-xl text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-charcoal-light text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE JOURNEY — Full-width parallax image
      ═══════════════════════════════════════════════════════ */}
      <section id="journey" className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={JOURNEY_IMG}
            alt="A path from storm to sunlight — the journey of growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 container text-center">
          <AnimatedSection>
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Journey
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From the storm of trauma to the sunlight of
              <span className="text-gold italic"> growth</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p
              className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every personal injury case is a journey. It begins in darkness &mdash;
              with pain, confusion, and fear. But within that journey lies the
              possibility of transformation. The path is not easy, but it is real,
              and it is yours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS / QUOTES
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={TESTIMONIAL_BG}
            alt="Kintsugi texture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        <div className="relative z-10 container max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Voices of Growth
            </p>
            <h2
              className="text-3xl md:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Readers Are Saying
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "This is not a book about lawsuits; it is a book about what it means to reconstruct a life after it has been disrupted. It offers a powerful framework for understanding how individuals can move forward—finding meaning, light, and value in everyday life.",
                author: "Dr. Topher Stephenson, MD",
                role: "",
              },
              {
                quote: "There’s a wealth of experience behind the Claims to Courage: Reclaiming Life After the Crash, a wealth, one could only hope to have in the most successful of careers. This book encourages understanding and empathy for difficult situations with the ultimate conclusion: you can’t change what happens to you only how you respond.",
                author: "Dr. John Kelada, MD",
                role: "",
              },
              {
                quote: "Ed Smith’s ‘Claims to Courage’ is more than a book about injury or legal recovery. It’s about resilience, perspective, and the possibility that life’s worst moments can become the beginning of growth, healing, and a completely new chapter.",
                author: "Dr. Darrick Lawson",
                role: "Owner, The Healing Touch Chiropractic",
              },
              {
                quote: "I have treated personal injury patients for 35 years….I’ve known Mr. Smith for 20 years. Ed’s integrity and ethics are demonstrated his entire career. My patients who he has represented would whole heartedly agree. This book should be given to anyone who is involved in any type of personal injury trauma…. The book is spot on in both medical and legal manifestations…",
                author: "Ron Rudometkin",
                role: "Chiropractor",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-sm border border-gold/10 p-8 rounded-sm h-full">
                  <Quote className="text-gold/40 mb-4" size={28} />
                  <p
                    className="text-white/90 text-base leading-relaxed mb-6 italic"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    "{item.quote}"
                  </p>
                  <div>
                    <p
                      className="text-gold text-sm font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.author}
                    </p>
                    <p
                      className="text-white/50 text-xs"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT THE AUTHOR
      ═══════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Author photo */}
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-gold/15 to-sage/10 rounded-sm blur-xl" />
                <img
                  src={AUTHOR_IMG}
                  alt="The author — Sacramento personal injury attorney"
                  className="relative w-full max-w-md mx-auto rounded-sm shadow-xl"
                />
              </div>
            </AnimatedSection>

            {/* Author bio */}
            <div className="order-1 lg:order-2">
              <AnimatedSection>
                <p
                  className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About the Author
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h2
                  className="text-3xl md:text-5xl text-charcoal leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Edward A. Smith:
                  <span className="text-gold italic"> A Sacramento Attorney Who Sees the Whole Person</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p
                  className="text-charcoal-light text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I've been practicing personal injury law since 1982, and in that time
                  I've walked alongside thousands of clients through some of the most
                  difficult chapters of their lives. I've seen the toll that litigation
                  takes &mdash; the sleepless nights, the anxiety, the feeling of being
                  reduced to a case number. But I've also witnessed something remarkable:
                  clients who, through the crucible of their legal journey, discovered
                  reserves of strength they never knew they had.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p
                  className="text-charcoal-light text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  As a Vietnam veteran who survived six near-death experiences, I understand
                  the lasting effects of trauma in a deeply personal way. Those experiences
                  shaped my conviction that healing is not just possible &mdash; it is a
                  path that can lead to profound personal growth. That understanding is at
                  the heart of everything I do for my clients.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <p
                  className="text-charcoal-light text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I founded <a href="https://www.autoaccident.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">AutoAccident.com</a> with
                  a simple but important realization: lawyers have a responsibility not only
                  to maximize their clients' economic recovery, but also to help them address
                  the emotional and psychological trauma that an accident leaves behind.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <p
                  className="text-charcoal-light text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <em>Claims to Courage</em> is my attempt to share the stories and wisdom
                  I've gathered over four decades &mdash; to help those facing adversity
                  use the obstacles their accident created as a catalyst for personal growth
                  and a more meaningful future.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={600}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gold" size={18} />
                    <span
                      className="text-charcoal-light text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Law Offices of Edward A. Smith
                    </span>
                  </div>
                  <p
                    className="text-charcoal-light text-sm ml-[30px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    1610 Arden Way, Suite 280, Sacramento, CA 95815
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <Phone className="text-gold" size={18} />
                    <a
                      href="tel:9169216400"
                      className="text-charcoal-light text-sm hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      (916) 921-6400
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INSIGHTS / BLOG PREVIEW
      ═══════════════════════════════════════════════════════ */}
      <section id="insights" className="py-24 md:py-32 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Insights
            </p>
            <h2
              className="text-3xl md:text-5xl text-charcoal leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resilience in Practice
            </h2>
            <p
              className="text-charcoal-light text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Exploring the science of post-traumatic growth and the human side of the legal journey.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "Post-Traumatic Growth",
                title: "What the Research Says About Growing Through Adversity",
                excerpt: "Psychologists Tedeschi and Calhoun discovered that up to 89% of trauma survivors report significant positive change. Here's what that means for injury victims.",
                date: "March 2026",
                href: "/insights/growing-through-adversity",
              },
              {
                tag: "The Legal Journey",
                title: "Why Litigation Feels Like a Second Injury — And How to Cope",
                excerpt: "The adversarial nature of the legal system can re-traumatize plaintiffs. Understanding this dynamic is the first step toward reclaiming your power.",
                date: "February 2026",
                href: "/insights/litigation-second-injury",
              },
              {
                tag: "Resilience",
                title: "Five Pillars of Resilience for Personal Injury Clients",
                excerpt: "From building a support network to finding meaning in your experience, these evidence-based strategies can transform your recovery journey.",
                date: "January 2026",
                href: "/insights/five-pillars-resilience",
              },
            ].map((post, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                {post.href ? (
                  <Link href={post.href}>
                    <div className="group bg-cream border border-stone/10 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer">
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="text-xs tracking-wider uppercase text-gold font-semibold"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {post.tag}
                          </span>
                          <span className="text-xs text-charcoal-light/50" style={{ fontFamily: "var(--font-body)" }}>
                            {post.date}
                          </span>
                        </div>
                        <h3
                          className="text-xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {post.title}
                        </h3>
                        <p
                          className="text-charcoal-light text-sm leading-relaxed flex-1"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {post.excerpt}
                        </p>
                        <div className="mt-6">
                          <span
                            className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all duration-300"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Read More <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="group bg-cream border border-stone/10 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer" onClick={() => toast.info("Full article coming soon. Sign up for our newsletter to be notified!")}>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-xs tracking-wider uppercase text-gold font-semibold"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {post.tag}
                        </span>
                        <span className="text-xs text-charcoal-light/50" style={{ fontFamily: "var(--font-body)" }}>
                          {post.date}
                        </span>
                      </div>
                      <h3
                        className="text-xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-charcoal-light text-sm leading-relaxed flex-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="mt-6">
                        <span
                          className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all duration-300"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Read More <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          FREE BOOK CTA
      ═══════════════════════════════════════════════════════ */}
      <FreeBookSection />

      {/* ═══════════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════════ */}
      <ContactSection />

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FREE BOOK SECTION
───────────────────────────────────────────────────────────── */
function FreeBookSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [delivery, setDelivery] = useState<"pdf" | "physical" | "audio" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email address.");
      return;
    }
    if (!delivery) {
      toast.error("Please select how you'd like to receive your copy.");
      return;
    }
    if (delivery === "physical" && (!form.street.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim())) {
      toast.error("Please fill in your complete mailing address.");
      return;
    }

    setSubmitting(true);

    // Send to server first (confirmation email to person + office notification)
    try {
      const RAILWAY_URL = "https://claimstocourage-netlify-production.up.railway.app";
      await fetch(`${RAILWAY_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, delivery }),
      });
    } catch (err) {
      console.error("Failed to send notification:", err);
    }

    // Trigger immediate delivery in browser
    if (delivery === "pdf") {
      const link = document.createElement("a");
      link.href = PDF_URL;
      link.download = "ClaimsToCourage.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (delivery === "audio") {
      window.open(AUDIO_URL, "_blank");
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-stone/20 rounded-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 text-sm";

  const deliveryOptions = [
    {
      id: "pdf" as const,
      icon: Download,
      title: "Download PDF",
      description: "Instant digital download",
    },
    {
      id: "physical" as const,
      icon: Truck,
      title: "Mail Me a Copy",
      description: "Free physical book by mail",
    },
    {
      id: "audio" as const,
      icon: Headphones,
      title: "Listen to Audio",
      description: "Narrated audio version",
    },
  ];

  if (submitted) {
    return (
      <section id="free-book" className="py-24 md:py-32 bg-cream">
        <div className="container max-w-2xl text-center">
          <AnimatedSection>
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
              <Check size={36} className="text-gold" />
            </div>
            <h2
              className="text-3xl md:text-4xl text-charcoal leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thank You, {form.firstName}!
            </h2>
            <p
              className="text-charcoal-light text-lg leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {delivery === "pdf" && "Your PDF should be downloading now. If it didn't start, check your downloads folder. Your journey from setback to strength starts now."}
              {delivery === "physical" && "Your copy of Claims to Courage is on its way. Allow 5\u201310 business days for delivery."}
              {delivery === "audio" && "Your audiobook is opening in a new tab. Listen at your own pace."}
            </p>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="free-book" className="py-24 md:py-32 bg-cream">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <AnimatedSection>
            <p
              className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Free Book Offer
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2
              className="text-3xl md:text-5xl text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Your Free Copy of
              <br />
              <span className="text-gold italic">Claims to Courage</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p
              className="text-charcoal-light text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Fill out the form below and choose how you'd like to receive your
              complimentary copy. No strings attached &mdash; just a gift from
              someone who believes that your setback can become your greatest
              strength.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-stone/15 rounded-sm p-8 md:p-10 shadow-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-charcoal-light uppercase tracking-wider mb-2">First Name *</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs text-charcoal-light uppercase tracking-wider mb-2">Last Name *</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-xs text-charcoal-light uppercase tracking-wider mb-2">Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClasses}
              />
            </div>

            {/* Delivery Options */}
            <div className="mb-6">
              <label className="block text-xs text-charcoal-light uppercase tracking-wider mb-4">How Would You Like Your Copy? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {deliveryOptions.map((option) => {
                  const isSelected = delivery === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setDelivery(option.id)}
                      className={`relative flex flex-col items-center gap-2 p-5 border rounded-sm transition-all duration-300 ${
                        isSelected
                          ? "border-gold bg-gold/5 shadow-sm"
                          : "border-stone/20 hover:border-gold/40 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <Check size={14} className="text-gold" />
                        </div>
                      )}
                      <option.icon
                        size={28}
                        className={isSelected ? "text-gold" : "text-charcoal-light/50"}
                      />
                      <span
                        className={`text-sm font-semibold tracking-wide ${
                          isSelected ? "text-charcoal" : "text-charcoal-light"
                        }`}
                      >
                        {option.title}
                      </span>
                      <span className="text-xs text-charcoal-light/60">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mailing Address — only for physical copy */}
            {delivery === "physical" && (
            <div className="mb-6">
              <label className="block text-xs text-charcoal-light uppercase tracking-wider mb-2">Mailing Address *</label>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Street address"
                  value={form.street}
                  onChange={(e) => updateField("street", e.target.value)}
                  className={inputClasses}
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="City"
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="State"
                    value={form.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    value={form.zip}
                    onChange={(e) => updateField("zip", e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              {submitting ? "Sending..." : delivery === "pdf" ? "Get My PDF" : delivery === "physical" ? "Mail My Free Copy" : delivery === "audio" ? "Listen Now" : "Choose a Format Above"}
            </button>

            <p className="text-charcoal-light/50 text-xs mt-4 text-center">
              We respect your privacy. Your information is never shared or sold.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      const RAILWAY_URL = "https://claimstocourage-netlify-production.up.railway.app";
      const res = await fetch(`${RAILWAY_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success("Thank you for reaching out! We'll be in touch soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Unable to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <AnimatedSection>
              <p
                className="text-gold tracking-[0.3em] uppercase text-xs mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Contact
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2
                className="text-3xl md:text-5xl text-charcoal leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Start a <span className="text-gold italic">Conversation</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p
                className="text-charcoal-light text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Whether you're interested in the book
                or a consultation about your personal injury case, I'd love to
                hear from you.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Location
                    </p>
                    <p className="text-charcoal-light text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Law Offices of Edward A. Smith
                    </p>
                    <p className="text-charcoal-light text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      1610 Arden Way, Suite 280
                    </p>
                    <p className="text-charcoal-light text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Sacramento, CA 95815
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Email
                    </p>
                    <p className="text-charcoal-light text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      info@claimstocourage.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Phone
                    </p>
                    <a href="tel:9169216400" className="text-charcoal-light text-sm hover:text-gold transition-colors duration-300" style={{ fontFamily: "var(--font-body)" }}>
                      (916) 921-6400
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <AnimatedSection delay={200}>
            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="bg-cream p-8 md:p-10 rounded-sm border border-stone/10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    className="block text-charcoal text-sm font-semibold mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone/20 rounded-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-charcoal text-sm font-semibold mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone/20 rounded-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-charcoal text-sm font-semibold mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone/20 rounded-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Tell me about your interest in the book or your case..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
