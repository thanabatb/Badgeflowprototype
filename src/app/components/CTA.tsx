import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export function CTA() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1E2A4A] mb-6">
          Ready to inspire achievement?
        </h2>
        <p className="text-lg text-[#94A3B8] mb-10 max-w-2xl mx-auto">
          Join 10,000+ organizations using BadgeFlow to recognize and motivate
          their teams. Start creating beautiful digital badges today.
        </p>

        <Link to="/register">
          <Button
            size="lg"
            className="bg-[#4F6DF5] hover:bg-[#FF6B6B] text-white rounded-full px-10"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        <p className="mt-6 text-sm text-[#94A3B8]">
          No credit card required • 14-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
}
