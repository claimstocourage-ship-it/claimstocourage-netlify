/**
 * Article: Five Pillars of Resilience for Personal Injury Clients
 * Kintsugi Modernism — warm charcoal, stone, burnished gold.
 * Long-form article layout with proper typography and reading experience.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ArticleResilience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    { number: "I", title: "The Anchor of Connection" },
    { number: "II", title: "The Practice of Self-Compassion" },
    { number: "III", title: "Meaning-Making and Purpose" },
    { number: "IV", title: "Mindful Engagement Over Avoidance" },
    { number: "V", title: "Narrative Reconstruction" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Article Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal text-white">
        <div className="container max-w-3xl">
          <Link href="/#insights">
            <span
              className="inline-flex items-center gap-2 text-stone/60 hover:text-gold transition-colors duration-300 text-sm mb-8 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <ArrowLeft size={14} />
              Back to Insights
            </span>
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs tracking-wider uppercase text-gold font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Resilience
            </span>
            <span className="text-xs text-stone/50" style={{ fontFamily: "var(--font-body)" }}>
              January 2026
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Five Pillars of{" "}
            <span className="text-gold italic">Resilience</span>
          </h1>
          <p
            className="text-stone/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            By Edward A. Smith &mdash; Sacramento Personal Injury Attorney and Author of{" "}
            <em>Claims to Courage</em>
          </p>
        </div>
      </header>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Pillar Overview Strip */}
      <div className="bg-cream py-8 border-b border-gold/20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pillars.map((p) => (
              <div key={p.number} className="text-center">
                <span
                  className="text-2xl text-gold block mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.number}
                </span>
                <span
                  className="text-xs text-charcoal-light uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <article className="py-16 md:py-24">
        <div
          className="container max-w-3xl text-charcoal-light text-lg leading-[1.85] space-y-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p>
            When a serious injury upends your life, the path forward can feel impossibly dark. The
            physical pain is relentless. The financial pressure mounts. The legal process grinds on.
            And somewhere beneath all of it, you may begin to wonder whether you will ever feel like
            yourself again. The answer, according to decades of psychological research, is not only
            yes — but that you may emerge from this experience stronger, wiser, and more deeply
            connected to what matters most.
          </p>
          <p>
            Resilience is not a personality trait that you either have or you don't. The American
            Psychological Association defines it as "the process and outcome of successfully adapting
            to difficult or challenging life experiences, especially through mental, emotional, and
            behavioral flexibility." <sup className="text-gold">[1]</sup> It is a capacity that can
            be developed, strengthened, and practiced — even in the middle of a personal injury case,
            when everything feels like it is falling apart.
          </p>
          <p>
            What follows are five evidence-based pillars of resilience, each one adapted specifically
            for people navigating the unique pressures of injury, recovery, and litigation. These are
            not abstract principles. They are practical, actionable strategies drawn from the research
            of psychologists, trauma specialists, and clinicians who have spent their careers studying
            how human beings endure — and grow through — the worst experiences of their lives.
          </p>

          {/* Pillar One */}
          <div className="border-l-4 border-gold pl-6 md:pl-8 my-10">
            <span
              className="text-sm text-gold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pillar I
            </span>
            <h2
              className="text-2xl md:text-3xl text-charcoal mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Anchor of Connection
            </h2>
          </div>
          <p>
            Of all the factors that predict resilience after trauma, social connection is the most
            consistently supported by research. A landmark review by Zarzaur and colleagues found
            that patient resiliency — driven in large part by the quality of social support — is one
            of the strongest predictors of quality of life after injury, with over 25 percent of
            trauma patients following poor mental health trajectories when that support is absent.{" "}
            <sup className="text-gold">[2]</sup> The International Society for Traumatic Stress
            Studies identifies strong support networks as a primary factor in both posttraumatic
            resilience and growth. <sup className="text-gold">[3]</sup>
          </p>
          <p>
            For personal injury clients, connection takes on a particular urgency. The litigation
            process is isolating by nature. You may feel that no one understands what you are going
            through. You may withdraw from friends and family because you are exhausted, in pain, or
            embarrassed by your limitations. You may stop attending the activities that once gave your
            life structure and joy.
          </p>
          <p>
            Resist that pull. Connection does not require grand gestures. It means accepting help when
            it is offered. It means telling one trusted person the truth about how you are feeling. It
            means joining a support group — in person or online — where others who have been through
            similar experiences can normalize your struggle. And it means building a genuine
            relationship with your attorney, who in a personal injury case functions as something
            closer to an ally than a technician. Research consistently shows that the attorney-client
            relationship, when characterized by trust and clear communication, can itself serve as a
            stabilizing force during litigation. <sup className="text-gold">[4]</sup>
          </p>

          {/* Pillar Two */}
          <div className="border-l-4 border-gold pl-6 md:pl-8 my-10">
            <span
              className="text-sm text-gold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pillar II
            </span>
            <h2
              className="text-2xl md:text-3xl text-charcoal mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Practice of Self-Compassion
            </h2>
          </div>
          <p>
            When you are injured, it is remarkably easy to turn against yourself. You may blame
            yourself for the accident. You may feel ashamed that you cannot work, cannot care for your
            family, cannot do the things you used to do. You may push through pain because you believe
            that asking for help is a sign of weakness. This internal harshness is not only
            unnecessary — it is actively harmful.
          </p>
          <p>
            Self-compassion, as defined by researcher Kristin Neff, involves treating yourself with
            the same kindness you would offer a close friend who was suffering.{" "}
            <sup className="text-gold">[5]</sup> A 2025 study published in <em>BMC Psychology</em>{" "}
            found that self-compassion significantly moderates the relationship between post-traumatic
            symptoms and post-traumatic growth, meaning that individuals who practice self-compassion
            are more likely to experience positive psychological change after trauma.{" "}
            <sup className="text-gold">[6]</sup> A separate systematic review found that
            self-compassion is consistently associated with lower PTSD symptoms and greater resilience
            across a wide range of trauma populations. <sup className="text-gold">[7]</sup>
          </p>
          <p>
            For personal injury clients, self-compassion means acknowledging that your suffering is
            real and that your limitations are not moral failures. It means allowing yourself to
            grieve what you have lost — your health, your independence, your sense of safety — without
            judgment. It means recognizing that recovery is not linear, that bad days do not erase
            good ones, and that the pace of your healing is not a measure of your worth.
          </p>

          {/* Pillar Three */}
          <div className="border-l-4 border-gold pl-6 md:pl-8 my-10">
            <span
              className="text-sm text-gold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pillar III
            </span>
            <h2
              className="text-2xl md:text-3xl text-charcoal mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meaning-Making and Purpose
            </h2>
          </div>
          <p>
            One of the most robust findings in trauma psychology is that the search for meaning — the
            effort to understand why something happened and what it means for your life going forward
            — is a central mechanism of recovery. Crystal Park's influential research on
            meaning-making following trauma demonstrates that when a traumatic event violates a
            person's core beliefs about the world, the process of restoring or revising those beliefs
            is what drives adaptation. <sup className="text-gold">[8]</sup> People who engage in
            active meaning-making tend to experience less distress and more growth than those who do
            not.
          </p>
          <p>
            For someone going through a personal injury case, meaning-making might take many forms. It
            might mean recognizing that the accident, while devastating, has clarified what truly
            matters to you. It might mean discovering a capacity for endurance that you did not know
            you possessed. It might mean deciding to use your experience to help others — by sharing
            your story, by advocating for safer conditions, or simply by being present for someone
            else who is going through something similar.
          </p>
          <p>
            The APA's resilience framework emphasizes that finding purpose — through helping others,
            setting goals, and being proactive — is one of the most powerful ways to build resilience
            during adversity. <sup className="text-gold">[1]</sup> You do not need to find a grand
            cosmic reason for your suffering. You need to find something worth moving toward.
          </p>

          {/* Pillar Four */}
          <div className="border-l-4 border-gold pl-6 md:pl-8 my-10">
            <span
              className="text-sm text-gold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pillar IV
            </span>
            <h2
              className="text-2xl md:text-3xl text-charcoal mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Mindful Engagement Over Avoidance
            </h2>
          </div>
          <p>
            After a traumatic injury, the instinct to avoid is powerful. You may avoid driving past
            the intersection where the accident happened. You may avoid thinking about the lawsuit.
            You may avoid medical appointments because they remind you of what you have lost. You may
            numb yourself with alcohol, overwork, or endless distraction. These responses are
            understandable — but they are also among the strongest predictors of poor long-term
            outcomes after trauma.
          </p>
          <p>
            The alternative is not to force yourself to relive your worst moments. It is to practice
            what psychologists call mindful engagement — a deliberate, present-tense awareness of your
            thoughts, feelings, and physical sensations without trying to suppress or escape them. The
            APA identifies mindfulness as a core component of resilience, noting that practices such
            as journaling, meditation, and yoga can help people "build connections and restore hope"
            while reducing the physiological toll of chronic stress.{" "}
            <sup className="text-gold">[1]</sup>
          </p>
          <p>
            For personal injury clients, mindful engagement has a specific and practical application.
            When you are preparing for a deposition, mindfulness can help you stay grounded rather
            than dissociating. When you are waiting for a court date, it can help you tolerate
            uncertainty without catastrophizing. When you are in pain, it can help you observe the
            sensation without being consumed by it. Research by Tedeschi and Calhoun found that
            deliberate, reflective rumination — as opposed to intrusive, repetitive rumination — is
            one of the strongest predictors of post-traumatic growth.{" "}
            <sup className="text-gold">[9]</sup> The difference between the two is the difference
            between being dragged through your memories and choosing to walk through them with
            intention.
          </p>

          {/* Pillar Five */}
          <div className="border-l-4 border-gold pl-6 md:pl-8 my-10">
            <span
              className="text-sm text-gold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pillar V
            </span>
            <h2
              className="text-2xl md:text-3xl text-charcoal mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Narrative Reconstruction
            </h2>
          </div>
          <p>
            Human beings are storytelling creatures. We make sense of our lives by organizing our
            experiences into narratives — stories with beginnings, middles, and ends; with
            protagonists, obstacles, and resolutions. When a traumatic injury occurs, it shatters the
            story you were telling yourself about your life. The person you were before the accident,
            the future you had planned, the identity you had built — all of it is disrupted. Recovery,
            at its deepest level, is the process of constructing a new narrative that incorporates the
            trauma without being defined by it.
          </p>
          <p>
            This is not a metaphor. Narrative reconstruction is a well-documented therapeutic process.
            A 2025 review found that narrative reconstruction is "often thought of as a key task in
            recovery from PTSD and other trauma-related disorders."{" "}
            <sup className="text-gold">[10]</sup> Jirek's research on narrative and post-traumatic
            growth found that trauma survivors who were able to reconstruct coherent life narratives —
            stories that acknowledged the pain but also identified growth, meaning, and agency —
            reported significantly higher levels of psychological well-being.{" "}
            <sup className="text-gold">[11]</sup>
          </p>
          <p>
            For personal injury clients, narrative reconstruction can begin with something as simple
            as journaling. Write about what happened to you — not just the facts, but the feelings.
            Write about who you were before the injury and who you are becoming. Write about what you
            have lost and what you have discovered. Over time, the story you tell yourself about your
            experience will shift. The accident will always be part of your story. But it does not
            have to be the whole story, and it does not have to be the ending.
          </p>

          {/* Closing Section */}
          <h2
            className="text-2xl md:text-3xl text-charcoal pt-8 pb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building the Pillars Together
          </h2>
          <p>
            These five pillars — connection, self-compassion, meaning-making, mindful engagement, and
            narrative reconstruction — are not independent strategies. They reinforce one another.
            Connection provides the social context in which self-compassion can flourish.
            Meaning-making gives direction to mindful engagement. Narrative reconstruction weaves all
            of the other pillars into a coherent story of survival and growth.
          </p>
          <p>
            If you are in the middle of a personal injury case right now, you do not need to master
            all five at once. Start with one. Call someone you trust. Write one page in a journal. Sit
            quietly for five minutes and notice what you feel. These small acts are not trivial. They
            are the foundation of resilience — and resilience, as the research consistently shows, is
            not about being unbreakable. It is about learning to carry your fractures with grace, with
            purpose, and with the quiet knowledge that you are stronger than you think.
          </p>
          <p>
            That is the promise at the heart of <em>Claims to Courage</em>. Not that the journey will
            be easy. But that the journey itself — with all its pain, its uncertainty, and its
            unexpected moments of clarity — can become the path to a life more deeply and courageously
            lived.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />

          {/* References */}
          <div className="text-sm text-charcoal-light/70 space-y-3">
            <h3
              className="text-lg text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              References
            </h3>
            <p>
              <span className="text-gold">[1]</span> American Psychological Association. (2020).
              Building Your Resilience.
            </p>
            <p>
              <span className="text-gold">[2]</span> Zarzaur, B. L., et al. (2017). Resiliency and
              Quality of Life Trajectories After Injury.{" "}
              <em>Journal of Trauma and Acute Care Surgery</em>, 83(4), 675–681.
            </p>
            <p>
              <span className="text-gold">[3]</span> International Society for Traumatic Stress
              Studies. Posttraumatic Resilience and Growth.
            </p>
            <p>
              <span className="text-gold">[4]</span> Strasburger, L. H. (1999). The
              Litigant-Patient: Mental Health Consequences of Civil Litigation.{" "}
              <em>Journal of the American Academy of Psychiatry and the Law</em>, 27(2), 203–211.
            </p>
            <p>
              <span className="text-gold">[5]</span> Neff, K. D. (2003). Self-Compassion: An
              Alternative Conceptualization of a Healthy Attitude Toward Oneself.{" "}
              <em>Self and Identity</em>, 2(2), 85–101.
            </p>
            <p>
              <span className="text-gold">[6]</span> Adonis, M., et al. (2025). The Protective Role
              of Self-Compassion in Trauma Recovery. <em>BMC Psychology</em>, 13, 218.
            </p>
            <p>
              <span className="text-gold">[7]</span> Winders, S. J., et al. (2020).
              Self-Compassion, Trauma, and Posttraumatic Stress Disorder: A Systematic Review.{" "}
              <em>Clinical Psychology & Psychotherapy</em>, 27(6), 855–870.
            </p>
            <p>
              <span className="text-gold">[8]</span> Park, C. L. (2022). Meaning Making Following
              Trauma. <em>Frontiers in Psychology</em>, 13, 844891.
            </p>
            <p>
              <span className="text-gold">[9]</span> Tedeschi, R. G., & Calhoun, L. G. (2004).
              Posttraumatic Growth: Conceptual Foundations and Empirical Evidence.{" "}
              <em>Psychological Inquiry</em>, 15(1), 1–18.
            </p>
            <p>
              <span className="text-gold">[10]</span> Wiesepape, C. N., et al. (2025). Personal
              Narratives in Trauma-Related Disorders. <em>PMC</em>.
            </p>
            <p>
              <span className="text-gold">[11]</span> Jirek, S. L. (2017). Narrative Reconstruction
              and Post-Traumatic Growth Among Trauma Survivors.{" "}
              <em>Qualitative Social Work</em>, 16(2), 166–188.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-charcoal text-white p-8 md:p-12 rounded-sm mt-12 text-center">
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Fractures Can Become Your Strength
            </h3>
            <p
              className="text-stone/70 text-base leading-relaxed mb-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <em>Claims to Courage</em> tells the stories of real people who built these pillars
              of resilience through the most difficult legal journeys of their lives.
            </p>
            <a
              href="/#free-book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal font-semibold tracking-wider uppercase text-sm rounded-sm hover:bg-gold-light transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Your Free Copy
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
