import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router";

interface FormData {
  name: string;
  email: string;
  jobTitle: string;
  company: string;
  skills: string[];
}

const popularSkills = [
  "JavaScript",
  "Python",
  "React",
  "TypeScript",
  "Node.js",
  "AWS",
  "Docker",
  "SQL",
  "Git",
  "Figma",
  "UI/UX Design",
  "Project Management",
];

export function Registration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    skills: [],
  });

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission — navigate to dashboard
      console.log("Form submitted:", formData);
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.jobTitle.trim() !== "" && formData.company.trim() !== "";
      case 3:
        return formData.skills.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 mb-8 text-[#94A3B8] hover:text-[#1E2A4A] transition-colors"
            aria-label="Go to home"
          >
            <img src="/images/logo.svg" alt="BadgeFlow logo" className="h-10 w-auto" />
            <span className="font-headline text-lg text-[#1E2A4A]">BadgeFlow</span>
          </button>
          <h1 className="text-4xl font-bold text-[#1E2A4A] mb-3">
            Create your account
          </h1>
          <p className="text-[#94A3B8]">
            Step {currentStep} of 3 - Let's get you started
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full flex-1 transition-colors ${
                step === currentStep
                  ? "bg-[#4F6DF5]"
                  : step < currentStep
                  ? "bg-[#DCE5FF]"
                  : "bg-[#E2E8F0]"
              }`}
            />
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-[#F5F7FA] rounded-3xl p-8 md:p-12 mb-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E2A4A] mb-2">
                  Personal Information
                </h2>
                <p className="text-[#94A3B8] text-sm">
                  Tell us a bit about yourself
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="mt-2 bg-white border-[#94A3B8]/35 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="mt-2 bg-white border-[#94A3B8]/35 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E2A4A] mb-2">
                  Career Information
                </h2>
                <p className="text-[#94A3B8] text-sm">
                  What do you do professionally?
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    type="text"
                    placeholder="e.g., Senior Product Designer"
                    value={formData.jobTitle}
                    onChange={(e) => updateFormData("jobTitle", e.target.value)}
                    className="mt-2 bg-white border-[#94A3B8]/35 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="e.g., Acme Corporation"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    className="mt-2 bg-white border-[#94A3B8]/35 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E2A4A] mb-2">
                  Your Skills
                </h2>
                <p className="text-[#94A3B8] text-sm">
                  Select your areas of expertise (choose at least one)
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {popularSkills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.skills.includes(skill)
                        ? "bg-[#4F6DF5] text-white"
                        : "bg-white text-[#1E2A4A] hover:bg-[#EDF2F7] border border-[#94A3B8]/35"
                    }`}
                  >
                    {formData.skills.includes(skill) && (
                      <Check className="inline-block h-4 w-4 mr-1" />
                    )}
                    {skill}
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <Label htmlFor="customSkill" className="text-[#94A3B8] text-sm">
                  Don't see your skill? Type it below
                </Label>
                <Input
                  id="customSkill"
                  type="text"
                  placeholder="Add a custom skill"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value.trim()) {
                      toggleSkill(e.currentTarget.value.trim());
                      e.currentTarget.value = "";
                    }
                  }}
                  className="mt-2 bg-white border-[#94A3B8]/35 rounded-xl"
                />
                <p className="text-xs text-[#94A3B8] mt-1">
                  Press Enter to add
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleBack}
            variant="outline"
            size="lg"
            className="rounded-full px-6 border-[#94A3B8]/35"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            size="lg"
            className="flex-1 bg-[#4F6DF5] hover:bg-[#FF6B6B] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === 3 ? "Complete" : "Continue"}
            {currentStep < 3 && <ArrowRight className="h-5 w-5 ml-2" />}
          </Button>
        </div>

        {/* Step Labels */}
        <div className="flex justify-center gap-8 mt-8 text-sm">
          <span
            className={currentStep === 1 ? "text-[#4F6DF5] font-medium" : "text-[#94A3B8]"}
          >
            Personal
          </span>
          <span
            className={currentStep === 2 ? "text-[#4F6DF5] font-medium" : "text-[#94A3B8]"}
          >
            Career
          </span>
          <span
            className={currentStep === 3 ? "text-[#4F6DF5] font-medium" : "text-[#94A3B8]"}
          >
            Skills
          </span>
        </div>
      </div>
    </div>
  );
}
