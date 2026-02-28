import { Shield, Zap, Share2, BarChart3, Palette, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Create your first badge in under 5 minutes. Our intuitive design tools make it easy for anyone to get started.",
  },
  {
    icon: Shield,
    title: "Blockchain Verified",
    description:
      "Every badge is cryptographically secured and verifiable on the blockchain. No more fake credentials.",
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description:
      "Choose from hundreds of professionally designed templates or create your own with our drag-and-drop editor.",
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description:
      "Recipients can instantly share their achievements to LinkedIn, Twitter, email, and more with a single click.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description:
      "Track engagement, view rates, and share metrics. Understand how your badges perform in real-time.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Compatible with Open Badges 3.0 and industry standards. Your badges work everywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm text-[#4F6DF5] font-medium mb-3 tracking-wide">
            POWERFUL FEATURES
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1E2A4A]">
            Everything you need to recognize achievement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FF] mb-6 group-hover:bg-[#E5ECFF] transition-colors">
                  <Icon className="h-6 w-6 text-[#4F6DF5]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E2A4A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
