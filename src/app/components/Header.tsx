import { Award, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { LoginModal } from "./LoginModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-16 items-center justify-center rounded-full bg-[#4F6DF5]">
              <div className="h-5 w-5 rounded-full bg-white ml-2"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            <a href="#features" className="text-sm text-[#4F6DF5] font-medium hover:text-[#FF6B6B] transition-colors">
              Solutions
            </a>
            <a href="#how-it-works" className="text-sm text-[#94A3B8] hover:text-[#1E2A4A] transition-colors">
              Lorem
            </a>
            <a href="#about" className="text-sm text-[#94A3B8] hover:text-[#1E2A4A] transition-colors">
              About
            </a>
          </div>

          <div className="hidden lg:flex">
            <Button
              onClick={() => setLoginModalOpen(true)}
              className="bg-[#4F6DF5] hover:bg-[#FF6B6B] text-white rounded-full px-6"
            >
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1E2A4A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1E2A4A]" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="space-y-1 px-6 py-4">
              <a
                href="#features"
                className="block rounded-lg px-3 py-2 text-base font-medium text-[#4F6DF5]"
              >
                Solutions
              </a>
              <a
                href="#how-it-works"
                className="block rounded-lg px-3 py-2 text-base text-[#94A3B8]"
              >
                Lorem
              </a>
              <a
                href="#about"
                className="block rounded-lg px-3 py-2 text-base text-[#94A3B8]"
              >
                About
              </a>
            </div>
            <div className="pt-4 space-y-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
                className="w-full bg-[#4F6DF5] hover:bg-[#FF6B6B] text-white rounded-full"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </header>

      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </>
  );
}