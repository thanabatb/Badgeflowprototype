import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { useNavigate } from "react-router";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login — navigate to dashboard
    onOpenChange(false);
    navigate("/dashboard");
  };

  const handleGoogleSignIn = () => {
    // Mock Google sign in — navigate to dashboard
    onOpenChange(false);
    navigate("/dashboard");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto px-6 py-8 sm:max-w-md sm:px-8"
      >
        <SheetHeader className="mb-6 p-0 pr-10 text-left">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-16 items-center justify-center rounded-full bg-amber-400">
              <div className="h-5 w-5 rounded-full bg-white ml-2"></div>
            </div>
          </div>
          <SheetTitle className="text-2xl font-bold">Welcome back</SheetTitle>
          <SheetDescription>
            Sign in to your account to continue
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col">
          {/* Google Sign In Button */}
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="h-12 w-full rounded-xl border-gray-200 hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="h-12 rounded-xl border-gray-200 bg-white"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="login-password">Password</Label>
                <button
                  type="button"
                  className="text-xs font-medium text-amber-700 hover:text-amber-800"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="h-12 rounded-xl border-gray-200 bg-white"
              />
            </div>

            <Button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-amber-400 text-amber-950 hover:bg-amber-500"
            >
              Sign in
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => {
                onOpenChange(false);
                window.location.href = "/register";
              }}
              className="text-amber-700 hover:text-amber-800 font-medium"
            >
              Sign up
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
