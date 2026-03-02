import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { LoginModal } from "./LoginModal";
import { PaletteModeToggle } from "./PaletteModeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="BadgeFlow home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/images/logo.svg" alt="BadgeFlow logo" className="h-10 w-auto" />
            <span className="font-headline text-xl text-[#1E2A4A]">BadgeFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            <a href="#features" className="text-sm text-[#4F6DF5] font-medium hover:text-[#FF6B6B] transition-colors">
              Solutions
            </a>
            <a href="#how-it-works" className="text-sm text-[#94A3B8] hover:text-[#1E2A4A] transition-colors">
              Lorem
            </a>
            <Link to="/about" className="text-sm text-[#94A3B8] hover:text-[#1E2A4A] transition-colors">
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {isLandingPage && <PaletteModeToggle />}
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
              <Link
                to="/about"
                className="block rounded-lg px-3 py-2 text-base text-[#94A3B8]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
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
