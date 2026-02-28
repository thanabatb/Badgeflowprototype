import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const palette = [
  {
    name: "Flow Blue",
    role: "Primary",
    hex: "#4F6DF5",
    usage: "CTAs, logo, headings, links",
    textClass: "text-white",
  },
  {
    name: "Deep Ink",
    role: "Primary Dark",
    hex: "#1E2A4A",
    usage: "Body text, dark backgrounds",
    textClass: "text-white",
  },
  {
    name: "Spark Coral",
    role: "Accent",
    hex: "#FF6B6B",
    usage: "Badges, notifications, highlights, hovers",
    textClass: "text-white",
  },
  {
    name: "Mint Fresh",
    role: "Secondary",
    hex: "#34D399",
    usage: "Success states, checkmarks, earned indicators",
    textClass: "text-[#1E2A4A]",
  },
  {
    name: "Cloud",
    role: "Neutral Light",
    hex: "#F5F7FA",
    usage: "Page backgrounds, card fills",
    textClass: "text-[#1E2A4A]",
  },
  {
    name: "Slate",
    role: "Neutral Mid",
    hex: "#94A3B8",
    usage: "Captions, secondary text, borders",
    textClass: "text-white",
  },
  {
    name: "Sunny Gold",
    role: "Pop",
    hex: "#FBBF24",
    usage: "Stars, premium badges, occasional accents",
    textClass: "text-[#1E2A4A]",
  },
];

const usageRules = [
  "Flow Blue is the hero. Use it for 60% of brand-colored elements.",
  "Spark Coral is your attention-grabber. Never more than 15% of any composition.",
  "Use Deep Ink for all body text. Never use pure black #000.",
  "Cloud is the default background. Prefer it over pure white.",
  "Sunny Gold is seasoning, not a main course. Use for stars and badges only.",
  "Always pair Flow Blue + Cloud for the safest on-brand combo.",
  "Never place Coral text on blue backgrounds (accessibility fail).",
];

const brandStoryArc = [
  {
    title: "The Origin - The Problem Everyone Faces",
    body:
      "You're an instructor who pours your heart into workshops, courses, and events. Every time a session ends, your attendees walk away with knowledge - but nothing tangible to prove it. Traditional certificates feel too formal, too hard to design, and impossible to share digitally. So most instructors just... skip it.",
  },
  {
    title: "The Tension - What's Missing",
    body:
      "Your attendees want proof they can showcase on LinkedIn or in their portfolio. But you, the instructor, don't have a tool simple enough to make it happen. The tools that exist feel enterprise-grade - overpriced, over-engineered, and built for organizations, not for solopreneurs who need speed and flexibility.",
  },
  {
    title: "The Turning Point - Badgeflow Enters",
    body:
      "Badgeflow was born from one belief: issuing credentials should never be harder than teaching. If you can teach it, you should be able to badge it - as easily as posting to Instagram.",
  },
  {
    title: "The Transformation - What Changes",
    body:
      "With Badgeflow, instructors go from 'someone who runs workshops' to 'a brand that certifies.' Attendees feel their learning is valued, share their badges with pride, and come back for more. Meanwhile, the instructor looks credible, professional, and a step ahead of every competitor still handing out generic PDFs.",
  },
  {
    title: "The Vision - The Future",
    body:
      "A world where every solopreneur can build their own credential system - no institutions needed, no design team required, no complex tools to learn. Just teach well, and issue beautiful, trustworthy badges instantly.",
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Header />

      <main className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="mb-12 rounded-2xl border border-[#94A3B8]/25 bg-white p-6 lg:p-8">
            <h2 className="text-3xl text-[#1E2A4A] mb-6" style={{ fontWeight: 700 }}>
              Brand Story Arc
            </h2>
            <div className="space-y-5">
              {brandStoryArc.map((item) => (
                <article key={item.title}>
                  <h3 className="text-lg text-[#1E2A4A] mb-1.5" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8]">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-[#94A3B8]/25 bg-[#F5F7FA] p-5">
                <p className="text-sm text-[#4F6DF5] mb-2" style={{ fontWeight: 600 }}>
                  One-Liner (Use in every Bio / About)
                </p>
                <p className="text-lg text-[#1E2A4A]" style={{ fontWeight: 600 }}>
                  "Make every learning moment count - badge it in seconds."
                </p>
              </div>

              <div className="rounded-xl border border-[#94A3B8]/25 bg-[#F5F7FA] p-5">
                <p className="text-sm text-[#4F6DF5] mb-2" style={{ fontWeight: 600 }}>
                  Elevator Pitch (30 seconds)
                </p>
                <p className="text-[#1E2A4A]">
                  "Badgeflow lets instructors and event hosts create stunning digital badges for their attendees in
                  minutes. No design skills needed, no complex setup. Your learners get shareable proof of achievement
                  instantly. You get a brand that looks professional and stands out."
                </p>
              </div>
            </div>
          </section>

          <div className="mb-12">
            <p className="text-sm text-[#4F6DF5] mb-2" style={{ fontWeight: 600 }}>
              Brand System
            </p>
            <h1 className="text-4xl text-[#1E2A4A] mb-4" style={{ fontWeight: 700 }}>
              About BadgeFlow Brand Guidelines
            </h1>
            <p className="max-w-3xl text-[#94A3B8]">
              This page is the single source of truth for our visual identity. Use these colors and rules
              consistently across product UI, marketing pages, and communication materials.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl text-[#1E2A4A] mb-5" style={{ fontWeight: 700 }}>
              Color Design System
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {palette.map((color) => (
                <article key={color.hex} className="rounded-2xl border border-[#94A3B8]/25 bg-white p-4">
                  <div
                    className={`mb-3 h-24 w-full rounded-xl border border-[#94A3B8]/20 ${color.textClass} flex items-end p-3`}
                    style={{ backgroundColor: color.hex, fontWeight: 600 }}
                  >
                    {color.hex}
                  </div>
                  <p className="text-sm text-[#94A3B8]">{color.role}</p>
                  <h3 className="text-lg text-[#1E2A4A]" style={{ fontWeight: 600 }}>
                    {color.name}
                  </h3>
                  <p className="text-sm text-[#94A3B8] mt-1">{color.usage}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-[#1E2A4A] mb-5" style={{ fontWeight: 700 }}>
              Usage Rules
            </h2>
            <div className="rounded-2xl border border-[#94A3B8]/25 bg-white p-6">
              <ol className="space-y-3 text-[#1E2A4A]">
                {usageRules.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4F6DF5]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="rounded-2xl border border-[#94A3B8]/25 bg-white p-6">
            <h2 className="text-2xl text-[#1E2A4A] mb-3" style={{ fontWeight: 700 }}>
              Brand Assets
            </h2>
            <p className="text-[#94A3B8] mb-5">
              Detailed rules also live in this project guideline file:
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl border border-[#94A3B8]/25 bg-[#F5F7FA] px-4 py-3 text-[#1E2A4A]">
                <code>guidelines/BrandGuidelines.md</code>
              </div>
              <Link to="/">
                <Button className="rounded-xl bg-[#4F6DF5] px-5 py-3 text-white hover:bg-[#FF6B6B]">
                  Back to Landing Page
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
