import { Button } from "./ui/button";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8 min-h-[600px] flex items-center">
      {/* Soft organic shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[#E5ECFF] rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#EEF2FF] rounded-[60%_40%_30%_70%/40%_70%_30%_60%]"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#DCE5FF] rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-white rounded-full opacity-80 blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#EEF2FF] rounded-full opacity-50"></div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tight text-[#1E2A4A] mb-6">
            digital<br />
            <span className="text-6xl font-bold">BADGES</span>
          </h1>

          <p className="text-[#94A3B8] mb-10 max-w-md leading-relaxed">
            Create, issue, and manage verifiable digital credentials that inspire achievement. Build recognition programs that motivate and celebrate success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-[#4F6DF5] hover:bg-[#FF6B6B] text-white rounded-full px-8"
              >
                Get started
              </Button>
            </Link>
            <button className="text-[#94A3B8] hover:text-[#1E2A4A] text-left">
              Read more
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full border-2 border-[#94A3B8]"></div>
            <div className="w-2 h-2 rounded-full bg-[#4F6DF5]"></div>
            <div className="w-2 h-2 rounded-full border-2 border-[#94A3B8]"></div>
            <div className="w-2 h-2 rounded-full border-2 border-[#94A3B8]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
