import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Templates", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "Case Studies", "Webinars"],
  Legal: ["Privacy", "Terms", "Security", "Compliance", "Cookies"],
};

export function Footer() {
  return (
    <footer className="bg-white text-[#94A3B8] border-t border-[#94A3B8]/35">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-14 items-center justify-center rounded-full bg-[#4F6DF5]">
                <div className="h-4 w-4 rounded-full bg-white ml-2"></div>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] mb-6">
              Making achievement recognition simple and verifiable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#94A3B8] hover:text-[#FF6B6B] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#FF6B6B] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#FF6B6B] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#FF6B6B] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[#1E2A4A] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#94A3B8] hover:text-[#FF6B6B] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#94A3B8]/35 pt-8">
          <p className="text-sm text-[#94A3B8] text-center">
            © 2026 BadgeFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
