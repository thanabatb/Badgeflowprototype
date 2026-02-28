import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, Sparkles, Zap, Building2, ArrowRight, ChevronLeft } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free",
    icon: Sparkles,
    price: { monthly: 0, yearly: 0 },
    description: "Get started with digital badges at no cost.",
    badgeLimit: "5 badges",
    cta: "Current Plan",
    current: true,
    highlight: false,
    features: [
      "Up to 5 badge templates",
      "Manual approval issuance",
      "Email delivery",
      "Public badge page",
      "Basic analytics",
    ],
    notIncluded: [
      "LinkedIn share button",
      "CSV recipient upload",
      "LMS integration",
      "Custom branding",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Zap,
    price: { monthly: 29, yearly: 23 },
    description: "For educators and creators issuing badges at scale.",
    badgeLimit: "Unlimited badges",
    cta: "Upgrade to Pro",
    current: false,
    highlight: true,
    features: [
      "Unlimited badge templates",
      "Manual & auto issuance",
      "Email + public link delivery",
      "LinkedIn share button",
      "CSV recipient upload",
      "Advanced analytics",
      "Custom branding",
      "Evidence requirements",
    ],
    notIncluded: [
      "LMS integration",
      "Team collaboration",
      "Priority support",
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: Building2,
    price: { monthly: 79, yearly: 63 },
    description: "For teams and organizations managing credentials at scale.",
    badgeLimit: "Unlimited + team seats",
    cta: "Contact Sales",
    current: false,
    highlight: false,
    features: [
      "Everything in Pro",
      "Team collaboration seats",
      "LMS integration",
      "SSO / SAML",
      "API access",
      "Custom domains",
      "Dedicated onboarding",
      "Priority support",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. You can change your plan at any time. Upgrades take effect immediately; downgrades apply at the end of your billing cycle.",
  },
  {
    q: "What counts as a badge template?",
    a: "Each unique badge design you create counts as one template. Issuing the same badge to multiple recipients does not consume additional templates.",
  },
  {
    q: "Do recipients need a BadgeFlow account?",
    a: "No. Recipients receive a claim link via email and can view and share their badge without creating an account.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Yes — Pro comes with a 14-day free trial. No credit card required to start.",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FA] relative font-body">

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 inline-flex items-center gap-1 text-sm text-[#94A3B8] hover:text-[#4F6DF5] transition-colors z-10"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </button>

      {/* Hero */}
      <section className="pt-16 pb-12 px-4 text-center bg-[#F5F7FA]">
        <h1 className="font-headline text-[40px] font-bold text-[#1E2A4A] mb-4 leading-[48px]">
          Simple, transparent pricing
        </h1>
        <p className="text-[18px] text-[#94A3B8] max-w-xl mx-auto mb-8 leading-[28px]">
          Start free, scale when you're ready. No hidden fees.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-white border border-[rgba(148,163,184,0.3)] rounded-full px-2 py-1.5">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${
              billing === "monthly"
                ? "bg-[#4F6DF5] text-white font-normal"
                : "text-[#94A3B8] hover:text-[#1E2A4A]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${
              billing === "yearly"
                ? "bg-[#4F6DF5] text-white font-normal"
                : "text-[#94A3B8] hover:text-[#1E2A4A]"
            }`}
          >
            Yearly
            <span className="ml-1.5 text-xs text-[#34D399] font-accent">–20%</span>
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = plan.price[billing];
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-7 flex flex-col bg-white ${
                  plan.highlight
                    ? "border-[#4F6DF5] shadow-[0px_10px_15px_0px_rgba(79,109,245,0.1),0px_4px_6px_0px_rgba(79,109,245,0.1)] bg-[#EEF2FF]"
                    : "border-[rgba(148,163,184,0.3)]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#4F6DF5] text-white text-xs font-accent px-3 py-1 rounded-full whitespace-nowrap">
                      Most popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className={`h-8 w-8 rounded-[10px] flex items-center justify-center shrink-0 ${
                      plan.highlight ? "bg-[#4F6DF5]" : "bg-[#F5F7FA]"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${plan.highlight ? "text-white" : "text-[#4F6DF5]"}`} />
                  </div>
                  <h3 className="font-headline text-[18px] font-bold text-[#1E2A4A] leading-[28px]">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-headline text-[36px] font-bold text-[#1E2A4A] leading-[40px]">
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-[14px] text-[#94A3B8] font-accent leading-[20px] ml-1">/mo</span>
                  )}
                </div>

                <p className="text-[14px] text-[#94A3B8] leading-[20px] mb-1">{plan.description}</p>
                <p className="text-[12px] text-[#4F6DF5] font-accent leading-[16px] mb-6">{plan.badgeLimit}</p>

                {/* CTA */}
                {plan.current ? (
                  <button
                    disabled
                    className="w-full mb-6 h-9 rounded-[8px] bg-[#F5F7FA] border border-[rgba(148,163,184,0.35)] text-[14px] text-[#1E2A4A] opacity-50 cursor-default flex items-center justify-center"
                  >
                    Current Plan
                  </button>
                ) : plan.highlight ? (
                  <button className="w-full mb-6 h-9 rounded-[8px] bg-[#4F6DF5] hover:bg-[#3a5ae0] text-white text-[14px] flex items-center justify-center gap-2 transition-colors">
                    Upgrade to Pro
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="w-full mb-6 h-9 rounded-[8px] bg-[#F5F7FA] border border-[rgba(148,163,184,0.35)] hover:bg-[#eef2ff] text-[#1E2A4A] text-[14px] flex items-center justify-center gap-2 transition-colors">
                    Contact Sales
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                {/* Features */}
                <ul className="space-y-[10px] flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px] text-[#1E2A4A] leading-[20px]">
                      <Check className="h-4 w-4 text-[#34D399] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px] text-[#94A3B8] leading-[20px]">
                      <span className="h-4 w-4 mt-0.5 shrink-0 flex items-center justify-center">
                        <span className="h-px w-3 bg-[rgba(148,163,184,0.5)] block" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Usage summary */}
      <section className="py-12 px-4 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-headline text-[28px] font-bold text-[#1E2A4A] leading-[36px] mb-2">Your current usage</h2>
          <p className="text-[14px] text-[#94A3B8] leading-[20px]">Free plan · Resets monthly</p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Badge Templates", used: 0, limit: 5 },
            { label: "Badges Issued", used: 0, limit: "Unlimited" },
            { label: "Recipients", used: 0, limit: "Unlimited" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-[14px] border border-[rgba(148,163,184,0.3)] p-5">
              <p className="text-[14px] text-[#94A3B8] leading-[20px] mb-1">{item.label}</p>
              <p className="font-headline text-[28px] font-bold text-[#1E2A4A] leading-[36px] mb-3">
                {item.used}
                <span className="text-[14px] font-accent text-[#94A3B8] leading-[20px] ml-1">
                  / {item.limit}
                </span>
              </p>
              {typeof item.limit === "number" && (
                <div className="w-full bg-[#E5ECFF] rounded-full h-1.5">
                  <div
                    className="bg-[#4F6DF5] h-1.5 rounded-full"
                    style={{ width: `${(item.used / item.limit) * 100}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-[28px] font-bold text-[#1E2A4A] leading-[36px] mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-[rgba(148,163,184,0.3)] rounded-[14px] px-5 pt-5 pb-4 flex flex-col gap-2"
              >
                <p className="text-[16px] text-[#1E2A4A] leading-[24px]">{faq.q}</p>
                <p className="text-[14px] text-[#94A3B8] leading-[22.75px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
