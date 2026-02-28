import { Pencil, Upload, Send, Star } from "lucide-react";

const steps = [
  {
    icon: Pencil,
    title: "Design Your Badge",
    description:
      "Use our intuitive badge designer or choose from hundreds of templates.",
  },
  {
    icon: Upload,
    title: "Set Criteria",
    description:
      "Define who earns the badge and when. Set up automatic issuance workflows.",
  },
  {
    icon: Send,
    title: "Issue & Celebrate",
    description:
      "Send badges via email or integrate with your LMS. Beautiful notifications.",
  },
  {
    icon: Star,
    title: "Track & Grow",
    description:
      "Monitor engagement and impact. Watch badges get shared across networks.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm text-[#4F6DF5] font-medium mb-3 tracking-wide">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1E2A4A]">
            From idea to impact in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="relative inline-flex mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white border border-[#94A3B8]/35">
                    <Icon className="h-8 w-8 text-[#4F6DF5]" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#4F6DF5] text-white text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1E2A4A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
