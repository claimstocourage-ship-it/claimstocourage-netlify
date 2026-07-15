/**
 * Article: Why Litigation Feels Like a Second Injury — And How to Cope
 * Kintsugi Modernism — warm charcoal, stone, burnished gold.
 * Long-form article layout with proper typography and reading experience.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ArticleLitigation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              The Legal Journey
            </span>
            <span className="text-xs text-stone/50" style={{ fontFamily: "var(--font-body)" }}>
              February 2026
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Litigation Feels Like a Second{" "}
            <span className="text-gold italic">Injury</span>
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

      {/* Article Body */}
      <article className="py-16 md:py-24">
        <div
          className="container max-w-3xl text-charcoal-light text-lg leading-[1.85] space-y-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <p>
            You survived the accident. You endured the emergency room, the surgery, the weeks of
            pain, the sleepless nights. You thought the worst was behind you. Then you filed a
            lawsuit — and discovered that the legal system can inflict a wound of its own.
          </p>
          <p>
            This is not an exaggeration, and it is not a sign of weakness. Psychiatrist Larry H.
            Strasburger, writing in the <em>Journal of the American Academy of Psychiatry and the
            Law</em>, described civil litigation as a process that "often has profound psychological
            consequences for plaintiffs and defendants alike," one in which "the stress of litigation
            often adds to whatever issues produced the lawsuit." <sup className="text-gold">[1]</sup>{" "}
            In a striking metaphor, he observed that while society may have exchanged swords and
            cudgels for subpoenas and depositions, "an aura of combat continues to hover about the
            judicial process, and combat produces casualties."
          </p>
          <p>
            If you are going through a personal injury case right now and feel like the lawsuit
            itself is hurting you, you are not imagining it. You are experiencing something that
            researchers, therapists, and experienced trial lawyers have documented for decades.
            Understanding why it happens — and what you can do about it — is the first step toward
            reclaiming your sense of control.
          </p>

          {/* Section: The Seven Ways */}
          <h2
            className="text-2xl md:text-3xl text-charcoal pt-8 pb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Seven Ways Litigation Re-Wounds
          </h2>
          <p>
            Personal injury litigation is not a single stressor. It is a constellation of pressures
            that converge over months or years, each one capable of triggering or amplifying the
            psychological effects of the original trauma. While every case is different, the
            mechanisms through which litigation causes harm tend to follow recognizable patterns.
          </p>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Loss of Control
            </h3>
            <p className="text-base leading-relaxed mb-0">
              From the moment you file a claim, the timeline of your life is no longer entirely your
              own. Court dates are set by judges. Discovery deadlines are dictated by rules of
              procedure. Depositions happen on the defense attorney's schedule. For someone who has
              already experienced the terrifying loss of control that accompanies a serious injury,
              this surrender of autonomy can feel unbearable. Research consistently shows that
              perceived loss of control is one of the strongest predictors of psychological distress
              in trauma survivors. <sup className="text-gold">[2]</sup>
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Forced Retelling
            </h3>
            <p className="text-base leading-relaxed mb-0">
              In a personal injury case, you will be asked to describe the worst day of your life —
              repeatedly, in granular detail, under oath. Depositions require you to relive the
              accident, the pain, the fear, the aftermath. Independent medical examinations ask you
              to catalog your suffering for a doctor hired by the insurance company. Maria Armoudian,
              writing in <em>Psychology Today</em>, documented cases in which deposition testimony
              forced survivors to revisit their experiences so intensely that they dissociated — a
              clinical term for a temporary disconnection from reality that the mind uses as a
              protective response to overwhelming stress. <sup className="text-gold">[3]</sup>
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Adversarial Challenge to Your Credibility
            </h3>
            <p className="text-base leading-relaxed mb-0">
              The defense attorney's job is to minimize your claim. That often means questioning
              whether your injuries are as severe as you say, whether you were partly at fault,
              whether you had pre-existing conditions, and whether your suffering is genuine. For a
              person who is already struggling, being told — implicitly or explicitly — that their
              pain is exaggerated or fabricated can be profoundly destabilizing.
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Dehumanization
            </h3>
            <p className="text-base leading-relaxed mb-0">
              In the legal system, your life becomes a case number. Your pain becomes a dollar
              figure. Your medical records are scrutinized by strangers. Your social media is
              monitored. Research on civil plaintiffs in Australia found that only 43 percent felt
              they were treated fairly by the legal process — meaning that a majority of people who
              sought justice through the courts came away feeling the system had failed them on a
              basic human level. <sup className="text-gold">[4]</sup>
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Prolonged Uncertainty
            </h3>
            <p className="text-base leading-relaxed mb-0">
              Personal injury cases can take two, three, even five years to resolve. During that
              entire period, the outcome of your financial future, your medical treatment, and your
              emotional recovery hangs in the balance. Chronic uncertainty is one of the most
              psychologically corrosive experiences a human being can endure. It prevents closure,
              disrupts planning, and keeps the nervous system locked in a state of heightened
              vigilance.
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Invasion of Privacy
            </h3>
            <p className="text-base leading-relaxed mb-0">
              Litigation requires disclosure. Your medical history, your therapy notes, your
              employment records, your daily routines — all of it may become part of the case file.
              For many plaintiffs, this exposure feels like a second violation, particularly when
              deeply personal information is used against them in court.
            </p>
          </div>

          <div className="bg-cream border-l-4 border-gold p-6 md:p-8 my-8 rounded-r-sm">
            <h3
              className="text-lg text-charcoal font-semibold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Power Imbalance
            </h3>
            <p className="text-base leading-relaxed mb-0">
              Insurance companies have teams of lawyers, virtually unlimited budgets for litigation,
              and decades of institutional experience in defending claims. Individual plaintiffs have
              their own pain, a stack of medical bills, and — if they are fortunate — one attorney
              they trust. The asymmetry can feel overwhelming, and the sense of being outmatched
              compounds the stress of every other factor on this list.
            </p>
          </div>

          {/* Section: Research */}
          <h2
            className="text-2xl md:text-3xl text-charcoal pt-8 pb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Research Is Clear: Litigation Makes Symptoms Worse
          </h2>
          <p>
            A landmark study by Blanchard and colleagues found that motor vehicle accident victims
            who initiated litigation had higher levels of post-traumatic stress symptoms than those
            who did not, even after controlling for injury severity.{" "}
            <sup className="text-gold">[5]</sup> Stewart, Wood, and Miller, in their comprehensive
            review of civil plaintiffs and stress, found that litigating accident victims who had not
            yet settled their cases had significantly higher PTSD scores than non-litigating victims.{" "}
            <sup className="text-gold">[4]</sup> The pattern is consistent across studies: the act of
            pursuing a legal claim, however justified, tends to maintain or intensify the very
            symptoms it seeks to compensate.
          </p>
          <p>
            This does not mean that filing a lawsuit is a mistake. It means that litigation is a
            psychologically demanding process, and anyone going through it deserves to understand
            what they are facing — and to have tools for coping.
          </p>

          {/* Section: How to Protect Yourself */}
          <h2
            className="text-2xl md:text-3xl text-charcoal pt-8 pb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How to Protect Yourself
          </h2>
          <p>
            The good news is that research also points toward strategies that can meaningfully reduce
            the psychological toll of litigation. None of them eliminate the stress entirely, but
            together they can transform the experience from one of helpless suffering into one of
            active, intentional navigation.
          </p>
          <p>
            <strong>Educate yourself about the process.</strong> Much of litigation anxiety comes from
            the unknown. When you understand what a deposition is, what discovery involves, and what
            the typical timeline looks like, the process becomes less frightening. Ask your attorney
            to walk you through each stage before it happens. Ryll's research on litigation stress
            found that education about the legal process is one of the most effective ways to reduce
            anxiety. <sup className="text-gold">[6]</sup>
          </p>
          <p>
            <strong>Build a real relationship with your attorney.</strong> Your lawyer is not just a
            legal technician. In a personal injury case, the attorney-client relationship functions as
            something close to a therapeutic alliance. A lawyer who communicates clearly, returns
            calls promptly, explains decisions, and treats you as a whole person — not just a case —
            can be one of the most stabilizing forces in your life during litigation. If your attorney
            does not make you feel heard, that is worth addressing directly.
          </p>
          <p>
            <strong>Maintain your support network.</strong> Do not go through litigation alone.
            Family, friends, support groups, and faith communities all provide the kind of social
            connection that research identifies as one of the strongest buffers against trauma-related
            distress. Talk about what you are going through — not obsessively, but honestly.
          </p>
          <p>
            <strong>Seek professional counseling.</strong> There is no shame in seeing a therapist
            during a lawsuit. In fact, it is one of the most constructive things you can do. A
            skilled therapist can help you process the emotions that litigation stirs up, develop
            coping strategies for depositions and court appearances, and maintain perspective when the
            process feels overwhelming.
          </p>
          <p>
            <strong>Practice deliberate reflection, not rumination.</strong> There is a critical
            difference between replaying your trauma on an endless loop — which psychologists call
            intrusive rumination — and intentionally reflecting on what the experience means to you
            and how you are growing through it. Journaling, mindfulness, and structured conversations
            with a counselor can help shift your thinking from the first pattern to the second.
            Research on post-traumatic growth consistently identifies deliberate reflection as one of
            the strongest predictors of positive psychological change after adversity.{" "}
            <sup className="text-gold">[7]</sup>
          </p>
          <p>
            <strong>Focus on what you can control.</strong> You cannot control the judge's calendar,
            the defense attorney's tactics, or the insurance company's strategy. You can control how
            you prepare for each stage, how you take care of your body and mind, and how you choose
            to interpret the experience. That distinction — between what is in your power and what is
            not — is one of the oldest and most reliable principles in the psychology of resilience.
          </p>

          {/* Section: The Paradox */}
          <h2
            className="text-2xl md:text-3xl text-charcoal pt-8 pb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Paradox
          </h2>
          <p>
            Here is what the research — and the lived experience of thousands of plaintiffs —
            ultimately reveals: litigation can be both a source of profound stress and a vehicle for
            meaningful recovery. The process that forces you to confront your trauma can also be the
            process through which you integrate it. The system that challenges your credibility can
            also be the system that ultimately validates your suffering. The journey that feels like a
            second injury can, with the right support and the right mindset, become part of how you
            heal.
          </p>
          <p>
            That is the paradox at the heart of <em>Claims to Courage</em>. The legal journey is
            brutal. But it does not have to break you. And for many people, it becomes the unexpected
            path to a stronger, more self-aware, more deeply lived life.
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
              <span className="text-gold">[1]</span> Strasburger, L. H. (1999). The
              Litigant-Patient: Mental Health Consequences of Civil Litigation.{" "}
              <em>Journal of the American Academy of Psychiatry and the Law</em>, 27(2), 203–211.
            </p>
            <p>
              <span className="text-gold">[2]</span> Foa, E. B., Zinbarg, R., & Rothbaum, B. O.
              (1992). Uncontrollability and unpredictability in post-traumatic stress disorder.{" "}
              <em>Psychological Bulletin</em>, 112(2), 218–238.
            </p>
            <p>
              <span className="text-gold">[3]</span> Armoudian, M. (2022). Litigation as Recovery.{" "}
              <em>Psychology Today</em>.
            </p>
            <p>
              <span className="text-gold">[4]</span> Stewart, M. W., Wood, S. M., & Miller, M. K.
              (2013). Civil Plaintiffs, Trauma, and Stress in the Legal System. In{" "}
              <em>Stress, Trauma, and Wellbeing in the Legal System</em>. Oxford University Press.
            </p>
            <p>
              <span className="text-gold">[5]</span> Blanchard, E. B., et al. (1998). Effects of
              Litigation Settlements on Posttraumatic Stress Symptoms.{" "}
              <em>Journal of Traumatic Stress</em>, 11(2), 337–354.
            </p>
            <p>
              <span className="text-gold">[6]</span> Ryll, N. A. (2015). Living Through Litigation:
              Malpractice Stress Syndrome. <em>Journal of Radiology Nursing</em>, 34(1), 35–38.
            </p>
            <p>
              <span className="text-gold">[7]</span> Tedeschi, R. G., & Calhoun, L. G. (2004).
              Posttraumatic Growth: Conceptual Foundations and Empirical Evidence.{" "}
              <em>Psychological Inquiry</em>, 15(1), 1–18.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-charcoal text-white p-8 md:p-12 rounded-sm mt-12 text-center">
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You Don't Have to Navigate This Alone
            </h3>
            <p
              className="text-stone/70 text-base leading-relaxed mb-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <em>Claims to Courage</em> tells the stories of real people who found strength,
              meaning, and growth through the most difficult legal journeys of their lives.
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
