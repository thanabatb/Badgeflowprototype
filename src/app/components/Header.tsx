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
            <div className="flex h-10 w-16 items-center justify-center rounded-full bg-amber-400">
              <div className="h-5 w-5 rounded-full bg-white ml-2"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            <a href="#features" className="text-sm text-amber-700 font-medium hover:text-amber-800 transition-colors">
              Solutions
            </a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Lorem
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              About
            </a>
          </div>

          <div className="hidden lg:flex">
            <Button
              onClick={() => setLoginModalOpen(true)}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full px-6"
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
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="space-y-1 px-6 py-4">
              <a
                href="#features"
                className="block rounded-lg px-3 py-2 text-base font-medium text-amber-700"
              >
                Solutions
              </a>
              <a
                href="#how-it-works"
                className="block rounded-lg px-3 py-2 text-base text-gray-400"
              >
                Lorem
              </a>
              <a
                href="#about"
                className="block rounded-lg px-3 py-2 text-base text-gray-400"
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
                className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full"
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