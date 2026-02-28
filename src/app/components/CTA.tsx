import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          Ready to inspire achievement?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Join 10,000+ organizations using BadgeFlow to recognize and motivate
          their teams. Start creating beautiful digital badges today.
        </p>

        <Link to="/register">
          <Button
            size="lg"
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full px-10"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          No credit card required • 14-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
}
