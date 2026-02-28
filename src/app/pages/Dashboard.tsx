import { useState } from "react";
import { useNavigate } from "react-router";
import {
  LayoutDashboard,
  Award,
  PlusCircle,
  Send,
  Users,
  BarChart3,
  Settings,
  Sparkles,
  ChevronRight,
  Search,
  Bell,
  LogOut,
  Menu,
  X,
  Eye,
  MoreHorizontal,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  ArrowRight,
  Palette,
  MousePointerClick,
  CircleDot,
  ToggleLeft,
  ToggleRight,
  Tag,
  Share2,
  Linkedin,
  ChevronLeft,
  Check,
  ImageIcon,
  FileText,
  Mail,
  ClipboardList,
  Fingerprint,
  GraduationCap,
  Trophy,
  Cpu,
  Plus,
  Trash2,
  Link,
  Upload,
  ChevronDown,
  BookOpen,
  Target,
  CalendarCheck,
  FileCheck,
  Download,
  AlertCircle,
  Globe,
  MessageSquare,
  UserPlus,
  FileSpreadsheet,
  AtSign,
  Info,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type ActivePage =
  | "dashboard"
  | "my-badges"
  | "create-badge"
  | "issue-badge"
  | "recipients"
  | "analytics"
  | "settings";

const sidebarMenuItems = [
  { id: "dashboard" as ActivePage, label: "Dashboard", icon: LayoutDashboard },
  { id: "my-badges" as ActivePage, label: "My Badges", icon: Award },
  { id: "create-badge" as ActivePage, label: "Create Badge", icon: PlusCircle },
  { id: "issue-badge" as ActivePage, label: "Issue Badge", icon: Send },
  { id: "recipients" as ActivePage, label: "Recipients", icon: Users },
  { id: "analytics" as ActivePage, label: "Analytics", icon: BarChart3 },
  { id: "settings" as ActivePage, label: "Settings", icon: Settings },
];

const recentBadges = [
  { id: 1, name: "React Advanced", issued: 24, status: "Active", icon: "⚛️", createdAt: "2 days ago" },
  { id: 2, name: "Cloud Architecture", issued: 18, status: "Active", icon: "☁️", createdAt: "5 days ago" },
  { id: 3, name: "UX Certification", issued: 42, status: "Active", icon: "🎨", createdAt: "1 week ago" },
  { id: 4, name: "Data Science Fundamentals", issued: 8, status: "Draft", icon: "📊", createdAt: "1 week ago" },
];

const recentActivity = [
  { id: 1, action: "Badge issued", detail: "React Advanced → Sarah Johnson", time: "10 min ago", icon: Send },
  { id: 2, action: "Badge created", detail: "Cloud Architecture certification", time: "2 hours ago", icon: PlusCircle },
  { id: 3, action: "Recipient accepted", detail: "James Lee accepted UX Certification", time: "5 hours ago", icon: CheckCircle2 },
  { id: 4, action: "Badge viewed", detail: "Data Science badge viewed 12 times", time: "1 day ago", icon: Eye },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<ActivePage>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-14 items-center justify-center rounded-full bg-amber-400">
              <div className="h-4 w-4 rounded-full bg-white ml-2"></div>
            </div>
            <span className="text-gray-900" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              BadgeFlow
            </span>
          </div>
          <button
            className="lg:hidden text-gray-400 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Create */}
        <div className="px-4 py-4">
          <Button
            onClick={() => setActivePage("create-badge")}
            className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-11 gap-2"
          >
            <PlusCircle className="h-4 w-4" />
            Create Badge
          </Button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {sidebarMenuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  isActive
                    ? "bg-amber-50 text-amber-700"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
                style={{ fontWeight: isActive ? 600 : 400 }}
              >
                <item.icon className="h-[18px] w-[18px]" />
                {item.label}
                {item.id === "my-badges" && !isNewUser && (
                  <span className="ml-auto bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                    4
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Subtle Upgrade Nudge */}
        <div className="px-4 pb-4">
          <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-100/50">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-amber-700" style={{ fontWeight: 500 }}>
                Free Plan
              </span>
            </div>
            <p className="text-xs text-amber-600/70 mb-3">
              {isNewUser ? "0 of 5 badges used" : "3 of 5 badges used this month"}
            </p>
            <div className="w-full bg-amber-100 rounded-full h-1.5 mb-3">
              <div
                className="bg-amber-400 h-1.5 rounded-full transition-all"
                style={{ width: isNewUser ? "0%" : "60%" }}
              ></div>
            </div>
            <button className="text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors">
              View plans
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="px-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
              <span className="text-sm text-amber-700" style={{ fontWeight: 600 }}>
                JD
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate" style={{ fontWeight: 500 }}>
                John Doe
              </p>
              <p className="text-xs text-gray-400 truncate">john@example.com</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search badges, recipients..."
                className="pl-10 bg-gray-50 border-gray-100 rounded-xl h-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            {/* Demo toggle */}
            <button
              onClick={() => setIsNewUser(!isNewUser)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 transition-colors"
              title="Toggle between new user and existing user view"
            >
              {isNewUser ? (
                <ToggleLeft className="h-4 w-4" />
              ) : (
                <ToggleRight className="h-4 w-4 text-amber-500" />
              )}
              {isNewUser ? "New user" : "Has data"}
            </button>
            <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
              {!isNewUser && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-amber-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {activePage === "dashboard" && (
            <DashboardOverview onNavigate={setActivePage} isNewUser={isNewUser} />
          )}
          {activePage === "my-badges" && (
            <MyBadgesPage onNavigate={setActivePage} isNewUser={isNewUser} />
          )}
          {activePage === "create-badge" && <CreateBadgePage />}
          {activePage === "issue-badge" && (
            <IssueBadgePage onNavigate={setActivePage} isNewUser={isNewUser} />
          )}
          {activePage === "recipients" && (
            <RecipientsPage onNavigate={setActivePage} isNewUser={isNewUser} />
          )}
          {activePage === "analytics" && (
            <AnalyticsPage onNavigate={setActivePage} isNewUser={isNewUser} />
          )}
          {activePage === "settings" && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}

/* ===================================================
   EMPTY STATE — Dashboard Overview (New User)
   =================================================== */
function EmptyDashboard({ onNavigate }: { onNavigate: (page: ActivePage) => void }) {
  const steps = [
    {
      step: 1,
      title: "Create your first badge",
      description: "Design a badge template with a name, image, and criteria",
      icon: Palette,
      color: "bg-amber-50 text-amber-600",
      action: "create-badge" as ActivePage,
      actionLabel: "Create Badge",
      highlight: true,
    },
    {
      step: 2,
      title: "Issue it to someone",
      description: "Send the badge to a recipient via email",
      icon: Send,
      color: "bg-green-50 text-green-600",
      action: "issue-badge" as ActivePage,
      actionLabel: "Issue Badge",
      highlight: false,
    },
    {
      step: 3,
      title: "Track engagement",
      description: "See who viewed and accepted your badges",
      icon: BarChart3,
      color: "bg-purple-50 text-purple-600",
      action: "analytics" as ActivePage,
      actionLabel: "View Analytics",
      highlight: false,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Welcome Hero */}
      <div className="text-center mb-10 pt-4">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-50 mb-5">
          <Award className="h-8 w-8 text-amber-500" />
        </div>
        <h1 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
          Welcome to BadgeFlow, John!
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          You're all set up. Let's create your first digital badge in just a few steps.
        </p>
      </div>

      {/* Getting Started Steps */}
      <div className="space-y-4 mb-10">
        {steps.map((item, idx) => (
          <button
            key={item.step}
            onClick={() => onNavigate(item.action)}
            className={`w-full text-left flex items-center gap-5 bg-white rounded-2xl p-5 border transition-all group ${
              item.highlight
                ? "border-amber-200 shadow-sm hover:shadow-md"
                : "border-gray-100 hover:border-gray-200 hover:shadow-sm"
            }`}
          >
            {/* Step number */}
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} transition-colors`}>
              <item.icon className="h-6 w-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] text-gray-400" style={{ fontWeight: 500 }}>
                  STEP {item.step}
                </span>
                {item.highlight && (
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>
                    START HERE
                  </span>
                )}
              </div>
              <p className="text-gray-900" style={{ fontWeight: 600 }}>
                {item.title}
              </p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>

            {/* Arrow */}
            <ArrowRight
              className={`h-5 w-5 shrink-0 transition-all ${
                item.highlight
                  ? "text-amber-400 group-hover:text-amber-600 group-hover:translate-x-1"
                  : "text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Primary CTA */}
      <div className="text-center mb-10">
        <Button
          onClick={() => onNavigate("create-badge")}
          className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-12 px-8 gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          Create Your First Badge
        </Button>
        <p className="text-xs text-gray-400 mt-3">
          It only takes a minute — no credit card required
        </p>
      </div>

      {/* Quick tips */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-gray-700 mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
          <Zap className="h-4 w-4 text-amber-500" />
          Quick Tips
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
              <MousePointerClick className="h-4 w-4 text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                Use the sidebar
              </p>
              <p className="text-xs text-gray-400">
                Navigate between creating, issuing, and tracking badges
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
              <CircleDot className="h-4 w-4 text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                Add your logo
              </p>
              <p className="text-xs text-gray-400">
                Go to Settings to brand your badges with your organization's identity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================================================
   Dashboard Overview (Populated)
   =================================================== */
function DashboardOverview({
  onNavigate,
  isNewUser,
}: {
  onNavigate: (page: ActivePage) => void;
  isNewUser: boolean;
}) {
  if (isNewUser) return <EmptyDashboard onNavigate={onNavigate} />;

  const stats = [
    { label: "Total Badges", value: "4", change: "+2 this month", icon: Award, color: "text-amber-600 bg-amber-50" },
    { label: "Issued", value: "92", change: "+12 this week", icon: Send, color: "text-green-600 bg-green-50" },
    { label: "Recipients", value: "78", change: "+8 this week", icon: Users, color: "text-purple-600 bg-purple-50" },
    { label: "Views", value: "1.2K", change: "+24% vs last month", icon: Eye, color: "text-amber-600 bg-amber-50" },
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900 mb-1" style={{ fontWeight: 700 }}>
          Welcome back, John 👋
        </h1>
        <p className="text-gray-500">Here's what's happening with your badges today.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => onNavigate("create-badge")}
          className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all text-left"
        >
          <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
            <PlusCircle className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-gray-900" style={{ fontWeight: 600 }}>Create a new badge</p>
            <p className="text-sm text-gray-400">Design and configure a badge template</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-300 ml-auto group-hover:text-amber-500 transition-colors" />
        </button>
        <button
          onClick={() => onNavigate("issue-badge")}
          className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all text-left"
        >
          <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
            <Send className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-900" style={{ fontWeight: 600 }}>Issue a badge</p>
            <p className="text-sm text-gray-400">Send a badge to one or more recipients</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-300 ml-auto group-hover:text-green-500 transition-colors" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-2xl text-gray-900 mb-1" style={{ fontWeight: 700 }}>{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Badges & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Recent Badges</h2>
            <button
              onClick={() => onNavigate("my-badges")}
              className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            {recentBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-gray-50 flex items-center justify-center text-xl">{badge.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate" style={{ fontWeight: 500 }}>{badge.name}</p>
                  <p className="text-xs text-gray-400">{badge.issued} issued · {badge.createdAt}</p>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    badge.status === "Active" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {badge.status}
                </span>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-gray-900 mb-5" style={{ fontWeight: 600 }}>Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <activity.icon className="h-4 w-4 text-gray-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{activity.action}</p>
                  <p className="text-xs text-gray-400 truncate">{activity.detail}</p>
                  <p className="text-xs text-gray-300 mt-0.5 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
          <Zap className="h-5 w-5 text-amber-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
            Pro tip: Add your organization logo to make badges more recognizable
          </p>
          <p className="text-xs text-gray-400">Go to Settings → Organization to upload your logo</p>
        </div>
        <button
          onClick={() => onNavigate("settings")}
          className="text-sm text-amber-600 hover:text-amber-700 hidden sm:block whitespace-nowrap"
        >
          Go to Settings →
        </button>
      </div>
    </div>
  );
}

/* ===================================================
   My Badges Page
   =================================================== */
function MyBadgesPage({
  onNavigate,
  isNewUser,
}: {
  onNavigate: (page: ActivePage) => void;
  isNewUser: boolean;
}) {
  if (isNewUser) {
    return (
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-50 mb-5">
            <Award className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
            No badges yet
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto">
            Badges are digital credentials you create and issue to recognize achievements, skills, or completions.
          </p>
        </div>

        {/* Visual guide */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <p className="text-sm text-gray-500 mb-4" style={{ fontWeight: 500 }}>
            A badge includes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Image & Name", desc: "Visual identity for the badge", icon: "🎨" },
              { label: "Criteria", desc: "What it takes to earn it", icon: "📋" },
              { label: "Skills", desc: "Related competencies", icon: "⚡" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onNavigate("create-badge")}
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-12 px-8 gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            Create Your First Badge
          </Button>
          <p className="text-xs text-gray-400 mt-3">
            Free plan includes up to 5 badge templates
          </p>
        </div>
      </div>
    );
  }

  const allBadges = [
    ...recentBadges,
    { id: 5, name: "Leadership Excellence", issued: 3, status: "Draft", icon: "🏆", createdAt: "2 weeks ago" },
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>My Badges</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and organize all your badge templates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allBadges.map((badge) => (
          <div key={badge.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl">{badge.icon}</div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full ${
                  badge.status === "Active" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                }`}
                style={{ fontWeight: 500 }}
              >
                {badge.status}
              </span>
            </div>
            <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>{badge.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{badge.issued} issued · {badge.createdAt}</p>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="outline" size="sm" className="rounded-lg text-xs flex-1">Edit</Button>
              <Button size="sm" className="rounded-lg text-xs flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950">Issue</Button>
            </div>
          </div>
        ))}
        <button
          onClick={() => onNavigate("create-badge")}
          className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-amber-300 hover:text-amber-500 transition-colors min-h-[200px]"
        >
          <PlusCircle className="h-8 w-8" />
          <span className="text-sm" style={{ fontWeight: 500 }}>Create new badge</span>
        </button>
      </div>
    </div>
  );
}

/* ===================================================
   Create Badge Page — 4-Step Wizard
   =================================================== */
const wizardSteps = [
  { id: 1, label: "Identity", icon: Fingerprint },
  { id: 2, label: "Criteria", icon: ClipboardList },
  { id: 3, label: "Delivery", icon: Mail },
  { id: 4, label: "Review", icon: FileText },
];

const purposeOptions = [
  { value: "completion", label: "Completion", desc: "Awarded for completing a course or program", icon: GraduationCap },
  { value: "achievement", label: "Achievement", desc: "Recognizes outstanding accomplishment", icon: Trophy },
  { value: "participation", label: "Participation", desc: "Acknowledges active involvement", icon: Users },
  { value: "skill", label: "Skill-based", desc: "Validates a specific competency", icon: Cpu },
];


function CreateBadgePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [badgeName, setBadgeName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [purpose, setPurpose] = useState("");
  const [badgeImage, setBadgeImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [showPublishModal, setShowPublishModal] = useState(false);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() && !tags.includes(tagInput.trim())) {
      e.preventDefault();
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((s) => s + 1);
    else {
      setShowPublishModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  return (
    <div className="max-w-6xl mx-auto pb-40">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center">
            <PlusCircle className="h-4 w-4 text-amber-600" />
          </div>
          <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>Create Badge</h1>
        </div>
        <p className="text-gray-400 text-sm ml-11">Design and configure a new digital credential</p>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 mb-6">
        <div className="flex items-center justify-between">
          {wizardSteps.map((step, idx) => {
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;
            return (
              <div key={step.id} className="flex items-center flex-1 last:flex-none">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className="flex items-center gap-2.5 group transition-all cursor-pointer"
                >
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isCompleted
                        ? "bg-amber-400 text-amber-950"
                        : isCurrent
                        ? "bg-amber-50 text-amber-600 ring-2 ring-amber-200"
                        : "bg-gray-50 text-gray-300"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <step.icon className="h-4 w-4" />
                    )}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p
                      className={`text-xs transition-colors ${
                        isCurrent ? "text-amber-700" : isCompleted ? "text-gray-700" : "text-gray-300"
                      }`}
                      style={{ fontWeight: isCurrent ? 600 : 500 }}
                    >
                      {step.label}
                    </p>
                    <p className={`text-[10px] ${isCurrent ? "text-amber-500" : "text-gray-300"}`}>
                      Step {step.id}
                    </p>
                  </div>
                </button>
                {idx < wizardSteps.length - 1 && (
                  <div className="flex-1 mx-3 hidden sm:block">
                    <div className="h-px bg-gray-100 relative">
                      <div
                        className="absolute inset-y-0 left-0 bg-amber-300 transition-all duration-500"
                        style={{ width: isCompleted ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Banner */}
      {/* Step Content */}
      {currentStep === 1 && (
        <StepIdentity
          badgeName={badgeName}
          setBadgeName={setBadgeName}
          shortDesc={shortDesc}
          setShortDesc={setShortDesc}
          purpose={purpose}
          setPurpose={setPurpose}
          badgeImage={badgeImage}
          setBadgeImage={setBadgeImage}
          tags={tags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          handleAddTag={handleAddTag}
          handleRemoveTag={handleRemoveTag}
        />
      )}
      {currentStep === 2 && <StepCriteria />}
      {currentStep === 3 && <StepDelivery />}
      {currentStep === 4 && (
        <StepReview
          badgeName={badgeName}
          shortDesc={shortDesc}
          purpose={purpose}
          badgeImage={badgeImage}
          tags={tags}
          onEditStep={(step: number) => setCurrentStep(step)}
        />
      )}

      {/* Publish Confirmation Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowPublishModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center z-10">
            {/* Confetti / celebration icon */}
            <div className="mx-auto h-20 w-20 rounded-full bg-lime-50 flex items-center justify-center mb-6 ring-8 ring-lime-100/50">
              <Award className="h-10 w-10 text-lime-500" />
            </div>
            <h2 className="text-xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
              Badge is now live!
            </h2>
            <p className="text-sm text-gray-400 mb-8 max-w-xs mx-auto">
              Your badge "<span className="text-gray-600" style={{ fontWeight: 500 }}>{badgeName || "Untitled Badge"}</span>" has been published and is ready to be issued.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => setShowPublishModal(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-lime-950 text-sm transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Send className="h-4 w-4" />
                Issue Now
              </button>
              <button
                onClick={() => setShowPublishModal(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors"
                style={{ fontWeight: 500 }}
              >
                <Eye className="h-4 w-4" />
                View Badge Page
              </button>
              <button
                onClick={() => {
                  setShowPublishModal(false);
                  setCurrentStep(1);
                  setBadgeName("");
                  setShortDesc("");
                  setPurpose("");
                  setBadgeImage(null);
                  setTags([]);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-gray-400 hover:text-gray-600 text-sm transition-colors"
                style={{ fontWeight: 500 }}
              >
                <PlusCircle className="h-4 w-4" />
                Create Another Badge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-64 z-30 border-t border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="px-6 lg:px-8 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`rounded-xl px-5 h-11 gap-2 border-gray-200 ${currentStep === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>

              <div className="flex items-center gap-3">
                <button className="text-sm text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
                  Save Draft
                </button>

                <Button
                  onClick={handleNext}
                  className="rounded-xl px-6 h-11 gap-2 bg-amber-400 hover:bg-amber-500 text-amber-950"
                >
                  {currentStep === 4 ? "Publish Badge" : "Continue"}
                  {currentStep < 4 && <ChevronRight className="h-4 w-4" />}
                  {currentStep === 4 && <Check className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Subtle plan note */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-300">
                Free plan allows up to 5 badge templates.{" "}
                <button className="text-amber-500 hover:text-amber-600 transition-colors">Upgrade for unlimited →</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 1 — Badge Identity */
function StepIdentity({
  badgeName, setBadgeName, shortDesc, setShortDesc,
  purpose, setPurpose, badgeImage, setBadgeImage,
  tags, tagInput, setTagInput, handleAddTag, handleRemoveTag,
}: {
  badgeName: string; setBadgeName: (v: string) => void;
  shortDesc: string; setShortDesc: (v: string) => void;
  purpose: string; setPurpose: (v: string) => void;
  badgeImage: string | null; setBadgeImage: (v: string | null) => void;
  tags: string[]; tagInput: string; setTagInput: (v: string) => void;
  handleAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemoveTag: (tag: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left — Form (3/5 ≈ 60%) */}
      <div className="lg:col-span-3 space-y-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 space-y-6">
          <div>
            <h2 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Badge Identity</h2>
            <p className="text-sm text-gray-400">Start with the basics — name, purpose, and description.</p>
          </div>

          {/* Badge Name */}
          <div>
            <label className="text-sm text-gray-700 mb-1.5 block" style={{ fontWeight: 500 }}>
              Badge Name <span className="text-amber-500">*</span>
            </label>
            <Input
              placeholder="e.g., React Developer Certification"
              value={badgeName}
              onChange={(e) => setBadgeName(e.target.value)}
              className="rounded-xl bg-gray-50/80 border-gray-100 h-11 focus-visible:ring-amber-200"
            />
            <p className="text-xs text-gray-300 mt-1.5">Choose a clear, descriptive name. This will appear on the badge.</p>
          </div>

          {/* Short Description */}
          <div>
            <label className="text-sm text-gray-700 mb-1.5 block" style={{ fontWeight: 500 }}>
              Short Description
            </label>
            <textarea
              placeholder="Briefly describe what this badge represents..."
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              rows={2}
              maxLength={160}
              className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-200 resize-none transition-all placeholder:text-gray-300"
            />
            <div className="flex justify-between mt-1.5">
              <p className="text-xs text-gray-300">Appears in previews and shared links</p>
              <p className={`text-xs ${shortDesc.length > 140 ? "text-amber-500" : "text-gray-300"}`}>
                {shortDesc.length}/160
              </p>
            </div>
          </div>

          {/* Badge Image Upload */}
          <div>
            <label className="text-sm text-gray-700 mb-3 block" style={{ fontWeight: 500 }}>
              Badge Image
            </label>
            {badgeImage ? (
              <div className="relative inline-block group">
                <img
                  src={badgeImage}
                  alt="Badge"
                  className="h-36 w-36 rounded-2xl object-cover border border-gray-100"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <label className="h-9 w-9 rounded-lg bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <ImageIcon className="h-4 w-4 text-gray-700" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (ev) => setBadgeImage(ev.target?.result as string);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  <button
                    onClick={() => setBadgeImage(null)}
                    className="h-9 w-9 rounded-lg bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-40 w-full max-w-xs rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:border-amber-300 hover:bg-amber-50/30 transition-all cursor-pointer group">
                <div className="h-12 w-12 rounded-xl bg-amber-100/60 flex items-center justify-center mb-3 group-hover:bg-amber-200/60 transition-colors">
                  <ImageIcon className="h-6 w-6 text-amber-400" />
                </div>
                <p className="text-sm text-gray-500" style={{ fontWeight: 500 }}>Click to upload</p>
                <p className="text-xs text-gray-300 mt-1">PNG, JPG or SVG · Max 2MB</p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (ev) => setBadgeImage(ev.target?.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            )}
            <p className="text-xs text-gray-300 mt-1.5">Recommended: 512×512px square image for best display</p>
          </div>

          {/* Badge Purpose — Radio Cards */}
          <div>
            <label className="text-sm text-gray-700 mb-3 block" style={{ fontWeight: 500 }}>
              Badge Purpose
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {purposeOptions.map((opt) => {
                const isSelected = purpose === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPurpose(opt.value)}
                    className={`relative flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? "border-amber-300 bg-amber-50/60"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/50"
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-amber-400 text-amber-950" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <opt.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm ${isSelected ? "text-amber-900" : "text-gray-700"}`}
                        style={{ fontWeight: 600 }}
                      >
                        {opt.label}
                      </p>
                      <p className={`text-xs mt-0.5 ${isSelected ? "text-amber-600/70" : "text-gray-400"}`}>
                        {opt.desc}
                      </p>
                    </div>
                    {/* Selection indicator */}
                    <div
                      className={`absolute top-3 right-3 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? "border-amber-400 bg-amber-400" : "border-gray-200"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 text-amber-950" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm text-gray-700 mb-1.5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <Tag className="h-3.5 w-3.5 text-gray-400" />
              Tags
              <span className="text-xs text-gray-300" style={{ fontWeight: 400 }}>Optional</span>
            </label>
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-gray-50/80 border border-gray-100 min-h-[44px] focus-within:ring-2 focus-within:ring-amber-200 transition-all">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs"
                  style={{ fontWeight: 500 }}
                >
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="hover:text-amber-950 transition-colors">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder={tags.length === 0 ? "Type a tag and press Enter..." : "Add more..."}
                className="flex-1 min-w-[120px] bg-transparent text-sm text-gray-700 focus:outline-none placeholder:text-gray-300"
              />
            </div>
            <p className="text-xs text-gray-300 mt-1.5">Press Enter to add. Tags help recipients discover your badge.</p>
          </div>
        </div>
      </div>

      {/* Right — Live Preview (2/5 ≈ 40%) */}
      <div className="lg:col-span-2 space-y-5">
        {/* Badge Preview Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.03)" }}>
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs text-gray-400" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>LIVE PREVIEW</p>
            <div className="flex items-center gap-1 text-xs text-amber-500">
              <Eye className="h-3 w-3" />
              <span style={{ fontWeight: 500 }}>Auto-updating</span>
            </div>
          </div>

          {/* Badge Visual */}
          <div className="flex flex-col items-center mb-6">
            {badgeImage ? (
              <img src={badgeImage} alt="Badge" className="h-28 w-28 rounded-2xl object-cover border border-gray-100 mb-4" />
            ) : (
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-dashed border-amber-200/60 flex flex-col items-center justify-center gap-2 mb-4">
                <ImageIcon className="h-8 w-8 text-amber-300" />
                <span className="text-[10px] text-amber-400" style={{ fontWeight: 500 }}>Badge Image</span>
              </div>
            )}
            <h3
              className={`text-center text-lg ${badgeName ? "text-gray-900" : "text-gray-300"}`}
              style={{ fontWeight: 700 }}
            >
              {badgeName || "Badge Name"}
            </h3>
            <p className={`text-center text-sm mt-1 max-w-[240px] ${shortDesc ? "text-gray-500" : "text-gray-300"}`}>
              {shortDesc || "Short description will appear here"}
            </p>
          </div>

          {/* Meta Info */}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-[10px] text-amber-700" style={{ fontWeight: 600 }}>JD</span>
              </div>
              <div>
                <p className="text-xs text-gray-700" style={{ fontWeight: 500 }}>John Doe</p>
                <p className="text-[10px] text-gray-400">Issuer · BadgeFlow</p>
              </div>
            </div>
            {purpose && (
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-amber-50 flex items-center justify-center">
                  {purposeOptions.find((p) => p.value === purpose)?.icon &&
                    (() => {
                      const Icon = purposeOptions.find((p) => p.value === purpose)!.icon;
                      return <Icon className="h-3 w-3 text-amber-500" />;
                    })()
                  }
                </div>
                <span className="text-xs text-gray-500" style={{ fontWeight: 500 }}>
                  {purposeOptions.find((p) => p.value === purpose)?.label}
                </span>
              </div>
            )}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
                    style={{ fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* LinkedIn Share Preview */}
          <div className="mt-5 pt-5 border-t border-gray-100">
            <div className="flex items-center gap-1.5 mb-3">
              <Share2 className="h-3 w-3 text-gray-400" />
              <p className="text-[10px] text-gray-400" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>SHARE PREVIEW</p>
            </div>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 h-16 flex items-center justify-center overflow-hidden">
                {badgeImage ? (
                  <img src={badgeImage} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-gray-200" />
                )}
              </div>
              <div className="p-3 bg-white">
                <p className={`text-xs truncate ${badgeName ? "text-gray-800" : "text-gray-300"}`} style={{ fontWeight: 600 }}>
                  {badgeName ? `${badgeName} — Issued by John Doe` : "Badge Name — Issued by John Doe"}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  {shortDesc || "Badge description preview"}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <Linkedin className="h-3 w-3 text-[#0A66C2]" />
                  <span className="text-[10px] text-gray-400">badgeflow.io</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 2 — Criteria */
const issuingMethods = [
  { value: "manual", label: "Manual Approval", desc: "Review and approve each recipient individually", icon: MousePointerClick },
  { value: "auto", label: "Auto from Connected Course", desc: "Automatically issue when learners complete a course", icon: Zap },
];

const defaultRuleTemplates = [
  { id: "course", label: "Course Completed", icon: BookOpen, hasThreshold: false },
  { id: "quiz", label: "Quiz Score", icon: Target, hasThreshold: true, unit: "%", defaultThreshold: 80 },
  { id: "attendance", label: "Attendance", icon: CalendarCheck, hasThreshold: true, unit: "%", defaultThreshold: 90 },
  { id: "assignment", label: "Assignment Approved", icon: FileCheck, hasThreshold: false },
  { id: "custom", label: "Custom Requirement", icon: FileText, hasThreshold: false, isCustomText: true },
];

interface CriteriaRule {
  id: string;
  templateId: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hasThreshold: boolean;
  unit?: string;
  threshold?: number;
  isCustomText?: boolean;
  customText?: string;
}

const platformOptions = ["Moodle", "Canvas LMS", "Google Classroom", "Coursera", "Thinkific", "Teachable"];
const courseOptions: Record<string, string[]> = {
  "Moodle": ["Introduction to Python", "Data Science Basics", "Web Development 101"],
  "Canvas LMS": ["UX Design Fundamentals", "Advanced JavaScript", "Project Management"],
  "Google Classroom": ["Digital Marketing", "AI & Machine Learning", "Cloud Computing"],
  "Coursera": ["Deep Learning Specialization", "Business Analytics", "Cybersecurity"],
  "Thinkific": ["Photography Masterclass", "Creative Writing", "Music Production"],
  "Teachable": ["Yoga Instructor Certification", "Graphic Design Bootcamp", "SEO Essentials"],
};

function StepCriteria() {
  const [issuingMethod, setIssuingMethod] = useState("manual");
  const [platform, setPlatform] = useState("");
  const [course, setCourse] = useState("");
  const [platformConnected, setPlatformConnected] = useState(false);
  const [rules, setRules] = useState<CriteriaRule[]>([]);
  const [requireEvidence, setRequireEvidence] = useState(false);
  const [allowFileUpload, setAllowFileUpload] = useState(true);
  const [allowUrlLink, setAllowUrlLink] = useState(true);
  const [notes, setNotes] = useState("");
  const [showRuleMenu, setShowRuleMenu] = useState(false);

  const addRule = (template: typeof defaultRuleTemplates[0]) => {
    const newRule: CriteriaRule = {
      id: `${template.id}-${Date.now()}`,
      templateId: template.id,
      label: template.label,
      icon: template.icon,
      hasThreshold: template.hasThreshold,
      unit: template.unit,
      threshold: template.defaultThreshold,
      isCustomText: !!(template as any).isCustomText,
      customText: "",
    };
    setRules((prev) => [...prev, newRule]);
    setShowRuleMenu(false);
  };

  const removeRule = (id: string) => setRules((prev) => prev.filter((r) => r.id !== id));

  const updateThreshold = (id: string, value: number) =>
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, threshold: value } : r)));

  const updateCustomText = (id: string, text: string) =>
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, customText: text } : r)));

  const availableTemplates = defaultRuleTemplates.filter(
    (t) => (t as any).isCustomText || !rules.some((r) => r.templateId === t.id)
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Section 1: Issuing Method */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Issuing Method</h3>
        <p className="text-sm text-gray-400 mb-5">How will this badge be issued to recipients?</p>
        <div className="space-y-3">
          {issuingMethods.map((method) => {
            const selected = issuingMethod === method.value;
            return (
              <button
                key={method.value}
                type="button"
                onClick={() => {
                  setIssuingMethod(method.value);
                  if (method.value !== "auto") {
                    setPlatform("");
                    setCourse("");
                    setPlatformConnected(false);
                  }
                }}
                className={`relative w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  selected
                    ? "border-lime-300 bg-lime-50/60"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  selected ? "bg-lime-400 text-lime-950" : "bg-gray-100 text-gray-400"
                }`}>
                  <method.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${selected ? "text-lime-900" : "text-gray-700"}`} style={{ fontWeight: 600 }}>
                    {method.label}
                  </p>
                  <p className={`text-xs mt-0.5 ${selected ? "text-lime-600/70" : "text-gray-400"}`}>
                    {method.desc}
                  </p>
                </div>
                <div className={`absolute top-4 right-4 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected ? "border-lime-400 bg-lime-400" : "border-gray-200"
                }`}>
                  {selected && <Check className="h-3 w-3 text-lime-950" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Conditional: Auto from course */}
        {issuingMethod === "auto" && (
          <div className="mt-5 p-4 rounded-xl bg-lime-50/40 border border-lime-100 space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block" style={{ fontWeight: 500 }}>Connected Platform</label>
              <div className="relative">
                <select
                  value={platform}
                  onChange={(e) => {
                    setPlatform(e.target.value);
                    setCourse("");
                    setPlatformConnected(false);
                  }}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                >
                  <option value="">Select platform...</option>
                  {platformOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {platform && !platformConnected && (
              <button
                onClick={() => setPlatformConnected(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lime-400 text-lime-950 text-sm hover:bg-lime-500 transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Zap className="h-3.5 w-3.5" />
                Connect to {platform}
              </button>
            )}

            {platform && platformConnected && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-600" style={{ fontWeight: 500 }}>Connected to {platform}</span>
                </div>
                <label className="text-sm text-gray-600 mb-1.5 block" style={{ fontWeight: 500 }}>Select Course</label>
                <div className="relative">
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                  >
                    <option value="">Select course...</option>
                    {(courseOptions[platform] || []).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Helper note */}
        <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50/60 border border-amber-100">
          <ArrowRight className="h-3.5 w-3.5 text-amber-400 shrink-0" />
          <p className="text-xs text-amber-600/80">Recipients will be added in Step 3 (Delivery).</p>
        </div>
      </div>

      {/* Section 2: Criteria Rules */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Criteria Rules</h3>
        <p className="text-sm text-gray-400 mb-5">Define what learners need to achieve to earn this badge</p>

        {rules.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 py-10 flex flex-col items-center justify-center">
            <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
              <ClipboardList className="h-6 w-6 text-gray-300" />
            </div>
            <p className="text-sm text-gray-400" style={{ fontWeight: 500 }}>No rules added yet</p>
            <p className="text-xs text-gray-300 mt-1">Add rules to define earning criteria</p>
          </div>
        ) : (
          <div className="space-y-3">
            {rules.map((rule, idx) => (
              <div
                key={rule.id}
                className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                    <rule.icon className="h-4 w-4 text-lime-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800" style={{ fontWeight: 600 }}>{rule.label}</p>
                    {rule.hasThreshold ? (
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs text-gray-400">Minimum:</span>
                        <input
                          type="number"
                          value={rule.threshold ?? 0}
                          onChange={(e) => updateThreshold(rule.id, Number(e.target.value))}
                          className="w-16 px-2 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 text-center"
                        />
                        <span className="text-xs text-gray-400">{rule.unit}</span>
                      </div>
                    ) : !rule.isCustomText ? (
                      <p className="text-xs text-gray-400 mt-0.5">Required to complete</p>
                    ) : null}
                  </div>
                  <span className="text-[10px] text-gray-300 bg-gray-50 px-2 py-0.5 rounded-full" style={{ fontWeight: 500 }}>
                    Rule {idx + 1}
                  </span>
                  <button
                    onClick={() => removeRule(rule.id)}
                    className="h-8 w-8 rounded-lg hover:bg-red-50 flex items-center justify-center transition-colors group"
                  >
                    <Trash2 className="h-4 w-4 text-gray-300 group-hover:text-red-400 transition-colors" />
                  </button>
                </div>
                {rule.isCustomText && (
                  <div className="mt-3 pl-12">
                    <input
                      type="text"
                      placeholder="Describe the requirement, e.g. 'Submit a portfolio project'"
                      value={rule.customText || ""}
                      onChange={(e) => updateCustomText(rule.id, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all placeholder:text-gray-300"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="relative mt-4">
          <button
            onClick={() => setShowRuleMenu(!showRuleMenu)}
            disabled={availableTemplates.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-500 hover:border-lime-300 hover:text-lime-700 hover:bg-lime-50/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ fontWeight: 500 }}
          >
            <Plus className="h-4 w-4" />
            Add Rule
          </button>
          {showRuleMenu && availableTemplates.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-lg z-20 py-1.5 overflow-hidden">
              {availableTemplates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => addRule(t)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-lime-50 transition-colors text-left"
                >
                  <div className="h-7 w-7 rounded-lg bg-gray-100 flex items-center justify-center">
                    <t.icon className="h-3.5 w-3.5 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{t.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Section 3: Evidence Requirement */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-gray-900" style={{ fontWeight: 600 }}>Evidence Requirement</h3>
          <button
            onClick={() => setRequireEvidence(!requireEvidence)}
            className="relative h-7 w-12 rounded-full transition-colors"
            style={{ backgroundColor: requireEvidence ? "#a3e635" : "#e5e7eb" }}
          >
            <div
              className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all"
              style={{ left: requireEvidence ? "calc(100% - 1.625rem)" : "0.125rem" }}
            />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-4">Require learners to attach evidence before earning</p>

        {requireEvidence && (
          <div className="space-y-3 p-4 rounded-xl bg-lime-50/40 border border-lime-100">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setAllowFileUpload(!allowFileUpload)}
                className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  allowFileUpload ? "border-lime-400 bg-lime-400" : "border-gray-300"
                }`}
              >
                {allowFileUpload && <Check className="h-3 w-3 text-lime-950" />}
              </div>
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Allow file upload</span>
              </div>
              <span className="text-xs text-gray-300 ml-auto">PDF, PNG, JPG</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setAllowUrlLink(!allowUrlLink)}
                className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  allowUrlLink ? "border-lime-400 bg-lime-400" : "border-gray-300"
                }`}
              >
                {allowUrlLink && <Check className="h-3 w-3 text-lime-950" />}
              </div>
              <div className="flex items-center gap-2">
                <Link className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Allow URL link</span>
              </div>
              <span className="text-xs text-gray-300 ml-auto">Portfolio, GitHub, etc.</span>
            </label>
          </div>
        )}
      </div>

      {/* Section 4: Notes to Learners */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Notes to Learners</h3>
        <p className="text-sm text-gray-400 mb-4">
          Add optional instructions or context for learners
          <span className="ml-2 text-xs text-gray-300" style={{ fontWeight: 400 }}>Optional</span>
        </p>
        <textarea
          placeholder="e.g. Please complete all modules before requesting this badge..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          maxLength={500}
          className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 resize-none transition-all placeholder:text-gray-300"
        />
        <div className="flex justify-end mt-1.5">
          <p className={`text-xs ${notes.length > 400 ? "text-amber-500" : "text-gray-300"}`}>
            {notes.length}/500
          </p>
        </div>
      </div>
    </div>
  );
}

/* Step 3 — Delivery */
type CsvRowStatus = "valid" | "invalid_email" | "missing_name" | "duplicate";
interface CsvRow {
  email: string;
  name: string;
  status: CsvRowStatus;
}
const csvMockRows: CsvRow[] = [
  { email: "alice@company.com", name: "Alice Johnson", status: "valid" },
  { email: "bob@acme.org", name: "Bob Smith", status: "valid" },
  { email: "charlie@invalid", name: "Charlie Brown", status: "invalid_email" },
  { email: "diana@example.com", name: "Diana Prince", status: "valid" },
  { email: "eve@broken..com", name: "Eve Wilson", status: "invalid_email" },
  { email: "frank@company.com", name: "", status: "missing_name" },
  { email: "grace@example.com", name: "Grace Lee", status: "valid" },
  { email: "alice@company.com", name: "Alice Johnson", status: "duplicate" },
  { email: "henry@tech.io", name: "Henry Park", status: "valid" },
  { email: "ivy@startup.co", name: "Ivy Chen", status: "valid" },
];

const csvStatusConfig: Record<CsvRowStatus, { label: string; color: string; bg: string; icon: typeof CheckCircle2 }> = {
  valid: { label: "Valid", color: "text-green-600", bg: "bg-green-50", icon: CheckCircle2 },
  invalid_email: { label: "Invalid email", color: "text-red-500", bg: "bg-red-50", icon: AlertCircle },
  missing_name: { label: "Missing name", color: "text-amber-600", bg: "bg-amber-50", icon: AlertCircle },
  duplicate: { label: "Duplicate", color: "text-orange-500", bg: "bg-orange-50", icon: AlertCircle },
};

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function StepDelivery() {
  const [issueMode, setIssueMode] = useState<"later" | "now">("later");
  const [recipientMethod, setRecipientMethod] = useState<"csv" | "paste" | "manual">("csv");
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [pasteEmails, setPasteEmails] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [manualName, setManualName] = useState("");
  const [manualList, setManualList] = useState<{ email: string; name: string; valid: boolean }[]>([]);
  const [channelEmail, setChannelEmail] = useState(true);
  const [channelPublic, setChannelPublic] = useState(true);
  const [subject, setSubject] = useState("You've earned a badge!");
  const [message, setMessage] = useState("Congratulations! You have been awarded a digital badge for your achievement. Click below to view and share your credential.");
  const [shareLinkedIn, setShareLinkedIn] = useState(true);
  const [sharePublicPage, setSharePublicPage] = useState(true);

  const validCsvCount = csvMockRows.filter((r) => r.status === "valid").length;
  const invalidCsvCount = csvMockRows.length - validCsvCount;

  const parsedPasteLines = pasteEmails.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsedPasteValid = parsedPasteLines.filter(isValidEmail);
  const parsedPasteInvalid = parsedPasteLines.filter((l) => !isValidEmail(l));

  const addManualRecipient = () => {
    if (manualEmail.trim()) {
      const valid = isValidEmail(manualEmail.trim());
      setManualList((prev) => [...prev, { email: manualEmail.trim(), name: manualName.trim() || "", valid }]);
      setManualEmail("");
      setManualName("");
    }
  };

  const isIssueNow = issueMode === "now";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Section 1: Issue Mode */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Issue Mode</h3>
        <p className="text-sm text-gray-400 mb-5">When do you want to issue this badge?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { value: "later" as const, label: "Issue Later", desc: "Publish badge now, send to learners later", icon: Clock },
            { value: "now" as const, label: "Issue Now", desc: "Send to recipients immediately on publish", icon: Send },
          ].map((opt) => {
            const selected = issueMode === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setIssueMode(opt.value)}
                className={`relative flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                  selected ? "border-lime-300 bg-lime-50/60 shadow-sm" : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                }`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  selected ? "bg-lime-400 text-lime-950" : "bg-gray-100 text-gray-400"
                }`}>
                  <opt.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm ${selected ? "text-lime-900" : "text-gray-700"}`} style={{ fontWeight: 600 }}>{opt.label}</p>
                  <p className={`text-xs mt-0.5 ${selected ? "text-lime-600/70" : "text-gray-400"}`}>{opt.desc}</p>
                </div>
                <div className={`absolute top-4 right-4 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected ? "border-lime-400 bg-lime-400" : "border-gray-200"
                }`}>
                  {selected && <Check className="h-3 w-3 text-lime-950" />}
                </div>
              </button>
            );
          })}
        </div>
        {/* Helper text */}
        <div className="mt-4 flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
          <Info className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-500">
            <span style={{ fontWeight: 600 }}>Issue later</span> = publish badge now and send to learners later.
            You can always add more recipients after publishing.
          </p>
        </div>
      </div>

      {/* Section 2: Recipients — always visible */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-gray-900" style={{ fontWeight: 600 }}>Recipients</h3>
          {!isIssueNow && (
            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] text-gray-400" style={{ fontWeight: 600 }}>Optional for now</span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-5">Add learners who will receive this badge.</p>

        {/* Method Tabs */}
        <div className="flex gap-1 p-1 bg-gray-100 rounded-xl mb-5">
          {[
            { value: "csv" as const, label: "Upload CSV", icon: FileSpreadsheet },
            { value: "paste" as const, label: "Paste Emails", icon: AtSign },
            { value: "manual" as const, label: "Add Manually", icon: UserPlus },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setRecipientMethod(tab.value)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs transition-all ${
                recipientMethod === tab.value
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ fontWeight: recipientMethod === tab.value ? 600 : 400 }}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── CSV Upload ── */}
        {recipientMethod === "csv" && (
          <div className="space-y-4">
            {!csvUploaded ? (
              <>
                <button
                  onClick={() => setCsvUploaded(true)}
                  className="w-full rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 py-10 flex flex-col items-center justify-center hover:border-lime-300 hover:bg-lime-50/30 transition-all group"
                >
                  <div className="h-12 w-12 rounded-xl bg-gray-100 group-hover:bg-lime-100 flex items-center justify-center mb-3 transition-colors">
                    <Upload className="h-6 w-6 text-gray-300 group-hover:text-lime-500 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-lime-700" style={{ fontWeight: 500 }}>
                    Drag & drop your CSV file here
                  </p>
                  <p className="text-xs text-gray-300 mt-1">or click to browse · .csv only · Max 5 MB</p>
                </button>
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-xs text-lime-600 hover:text-lime-700 transition-colors" style={{ fontWeight: 500 }}>
                    <Download className="h-3.5 w-3.5" />
                    Download CSV template
                  </button>
                  <p className="text-[11px] text-gray-300">Required columns: <span style={{ fontWeight: 600 }}>Email, Full name</span></p>
                </div>
              </>
            ) : (
              <>
                {/* Uploaded file bar */}
                <div className="rounded-xl border border-lime-200 bg-lime-50/40 px-4 py-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="h-4 w-4 text-lime-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate" style={{ fontWeight: 500 }}>recipients_batch_01.csv</p>
                    <p className="text-xs text-gray-400">{csvMockRows.length} rows · 18 KB</p>
                  </div>
                  <button onClick={() => setCsvUploaded(false)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all" style={{ fontWeight: 500 }}>
                    <Trash2 className="h-3 w-3" />
                    Remove
                  </button>
                </div>

                {/* Summary counters */}
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-green-50 border border-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="text-sm text-green-700" style={{ fontWeight: 700 }}>{validCsvCount}</p>
                      <p className="text-[10px] text-green-500">Valid</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle className="h-4 w-4 text-red-400" />
                    <div>
                      <p className="text-sm text-red-600" style={{ fontWeight: 700 }}>{invalidCsvCount}</p>
                      <p className="text-[10px] text-red-400">Need attention</p>
                    </div>
                  </div>
                </div>

                {/* Error banner */}
                {invalidCsvCount > 0 && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-red-600" style={{ fontWeight: 600 }}>
                        {invalidCsvCount} row{invalidCsvCount > 1 ? "s" : ""} need fixing
                      </p>
                      <p className="text-[11px] text-red-400 mt-0.5">Fix errors in your CSV and re-upload to continue.</p>
                    </div>
                    <button
                      onClick={() => setCsvUploaded(false)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-red-200 text-xs text-red-500 hover:bg-red-50 transition-colors shrink-0"
                      style={{ fontWeight: 600 }}
                    >
                      Re-upload
                    </button>
                  </div>
                )}

                {/* Preview table */}
                <div className="rounded-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2.5 flex items-center justify-between">
                    <p className="text-xs text-gray-500" style={{ fontWeight: 600 }}>Validation Preview</p>
                    <p className="text-[10px] text-gray-400">
                      Showing {csvMockRows.length} of {csvMockRows.length} rows
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="px-4 py-2.5 text-left text-[11px] text-gray-400 w-8" style={{ fontWeight: 500 }}>#</th>
                          <th className="px-4 py-2.5 text-left text-[11px] text-gray-400" style={{ fontWeight: 500 }}>Email</th>
                          <th className="px-4 py-2.5 text-left text-[11px] text-gray-400" style={{ fontWeight: 500 }}>Name</th>
                          <th className="px-4 py-2.5 text-right text-[11px] text-gray-400" style={{ fontWeight: 500 }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {csvMockRows.map((row, i) => {
                          const cfg = csvStatusConfig[row.status];
                          const StatusIcon = cfg.icon;
                          const isErr = row.status !== "valid";
                          return (
                            <tr key={i} className={`border-b border-gray-50 transition-colors ${isErr ? "bg-red-50/30" : "hover:bg-gray-50/50"}`}>
                              <td className="px-4 py-2.5 text-[10px] text-gray-300">{i + 1}</td>
                              <td className="px-4 py-2.5">
                                <div className="flex items-center gap-2">
                                  {isErr && <AlertCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />}
                                  <span className={`text-xs ${isErr ? "text-red-500" : "text-gray-700"}`} style={{ fontWeight: isErr ? 500 : 400 }}>{row.email}</span>
                                </div>
                              </td>
                              <td className="px-4 py-2.5 text-xs text-gray-500">
                                {row.name || <span className="text-gray-300 italic">—</span>}
                              </td>
                              <td className="px-4 py-2.5 text-right">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${cfg.bg} text-[10px] ${cfg.color}`} style={{ fontWeight: 600 }}>
                                  <StatusIcon className="h-3 w-3" /> {cfg.label}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Paste Emails ── */}
        {recipientMethod === "paste" && (
          <div className="space-y-3">
            <textarea
              value={pasteEmails}
              onChange={(e) => setPasteEmails(e.target.value)}
              placeholder={"alice@company.com\nbob@acme.org\ncharlie@example.com"}
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 resize-none transition-all placeholder:text-gray-300 font-mono"
            />
            <p className="text-xs text-gray-300">One email per line</p>

            {parsedPasteLines.length > 0 && (
              <div className="space-y-2">
                {/* Summary */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 border border-green-100">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span className="text-[11px] text-green-600" style={{ fontWeight: 600 }}>{parsedPasteValid.length} valid</span>
                  </div>
                  {parsedPasteInvalid.length > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100">
                      <AlertCircle className="h-3 w-3 text-red-400" />
                      <span className="text-[11px] text-red-500" style={{ fontWeight: 600 }}>{parsedPasteInvalid.length} invalid</span>
                    </div>
                  )}
                </div>

                {/* Invalid email highlights */}
                {parsedPasteInvalid.length > 0 && (
                  <div className="rounded-xl border border-red-100 bg-red-50/40 p-3 space-y-1.5">
                    <p className="text-[11px] text-red-500" style={{ fontWeight: 600 }}>Invalid emails found:</p>
                    {parsedPasteInvalid.map((e, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span className="font-mono">{e}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Parsed list preview */}
                {parsedPasteValid.length > 0 && (
                  <div className="rounded-xl border border-gray-100 p-3">
                    <p className="text-[11px] text-gray-400 mb-2" style={{ fontWeight: 600 }}>Ready to import:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {parsedPasteValid.slice(0, 12).map((e, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-lime-50 border border-lime-100 text-[11px] text-lime-700">
                          <CheckCircle2 className="h-2.5 w-2.5" />
                          {e}
                        </span>
                      ))}
                      {parsedPasteValid.length > 12 && (
                        <span className="px-2.5 py-1 rounded-lg bg-gray-50 text-[11px] text-gray-400" style={{ fontWeight: 500 }}>
                          +{parsedPasteValid.length - 12} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Manual Add ── */}
        {recipientMethod === "manual" && (
          <div className="space-y-4">
            {/* Input row */}
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email address *"
                  value={manualEmail}
                  onChange={(e) => setManualEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addManualRecipient()}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Full name"
                  value={manualName}
                  onChange={(e) => setManualName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addManualRecipient()}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all placeholder:text-gray-300"
                />
              </div>
              <button
                onClick={addManualRecipient}
                disabled={!manualEmail.trim()}
                className="h-[42px] px-4 rounded-xl bg-lime-400 text-lime-950 text-sm hover:bg-lime-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 shrink-0"
                style={{ fontWeight: 600 }}
              >
                <Plus className="h-4 w-4" />
                Add
              </button>
            </div>

            {/* Recipient table */}
            {manualList.length > 0 ? (
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 flex items-center justify-between">
                  <p className="text-[11px] text-gray-500" style={{ fontWeight: 600 }}>{manualList.length} recipient{manualList.length > 1 ? "s" : ""}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] text-green-500" style={{ fontWeight: 600 }}>{manualList.filter((r) => r.valid).length} valid</span>
                    {manualList.some((r) => !r.valid) && (
                      <span className="text-[10px] text-red-400" style={{ fontWeight: 600 }}>{manualList.filter((r) => !r.valid).length} invalid</span>
                    )}
                  </div>
                </div>
                <div className="divide-y divide-gray-50">
                  {manualList.map((r, i) => (
                    <div key={i} className={`flex items-center gap-3 px-4 py-2.5 ${!r.valid ? "bg-red-50/30" : ""}`}>
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 ${r.valid ? "bg-lime-100" : "bg-red-100"}`}>
                        <span className={`text-[10px] ${r.valid ? "text-lime-700" : "text-red-500"}`} style={{ fontWeight: 700 }}>
                          {(r.name || r.email)[0]?.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            {!r.valid && <AlertCircle className="h-3 w-3 text-red-400 shrink-0" />}
                            <p className={`text-xs truncate ${r.valid ? "text-gray-700" : "text-red-500"}`} style={{ fontWeight: 500 }}>{r.email}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 truncate w-28">{r.name || <span className="text-gray-300 italic">No name</span>}</p>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${r.valid ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`} style={{ fontWeight: 600 }}>
                        {r.valid ? "Valid" : "Invalid"}
                      </span>
                      <button
                        onClick={() => setManualList((prev) => prev.filter((_, idx) => idx !== i))}
                        className="h-7 w-7 rounded-lg hover:bg-red-50 flex items-center justify-center transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5 text-gray-300 hover:text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 py-8 flex flex-col items-center">
                <UserPlus className="h-6 w-6 text-gray-300 mb-2" />
                <p className="text-xs text-gray-400" style={{ fontWeight: 500 }}>No recipients added yet</p>
                <p className="text-[11px] text-gray-300 mt-1">Type an email above and press Enter or click Add</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Section 3: Delivery Channel */}
      <div className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-opacity ${!isIssueNow ? "opacity-60" : ""}`}>
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-gray-900" style={{ fontWeight: 600 }}>Delivery Channel</h3>
          {!isIssueNow && (
            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] text-gray-400 shrink-0" style={{ fontWeight: 600 }}>Configured on issue</span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-5">How will recipients receive their badge?</p>

        {!isIssueNow && (
          <div className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-amber-50/60 border border-amber-100 mb-5">
            <Info className="h-4 w-4 text-amber-400 shrink-0" />
            <p className="text-xs text-amber-600">Notification settings will be configured when you issue the badge.</p>
          </div>
        )}

        <div className={`space-y-3 ${!isIssueNow ? "pointer-events-none" : ""}`}>
          {/* Email */}
          <label className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"
            style={{ borderColor: channelEmail && isIssueNow ? "#bef264" : "#f3f4f6", backgroundColor: channelEmail && isIssueNow ? "rgba(190,242,100,0.08)" : "transparent" }}
          >
            <div
              onClick={(e) => { e.preventDefault(); if (isIssueNow) setChannelEmail(!channelEmail); }}
              className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                channelEmail ? "border-lime-400 bg-lime-400" : "border-gray-300"
              }`}
            >
              {channelEmail && <Check className="h-3 w-3 text-lime-950" />}
            </div>
            <div className="h-9 w-9 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4 text-lime-600" />
            </div>
            <div>
              <p className="text-sm text-gray-800" style={{ fontWeight: 600 }}>Email Notification</p>
              <p className="text-xs text-gray-400 mt-0.5">Send badge via email with a claim link</p>
            </div>
          </label>

          {/* Public Link */}
          <label className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"
            style={{ borderColor: channelPublic && isIssueNow ? "#bef264" : "#f3f4f6", backgroundColor: channelPublic && isIssueNow ? "rgba(190,242,100,0.08)" : "transparent" }}
          >
            <div
              onClick={(e) => { e.preventDefault(); if (isIssueNow) setChannelPublic(!channelPublic); }}
              className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                channelPublic ? "border-lime-400 bg-lime-400" : "border-gray-300"
              }`}
            >
              {channelPublic && <Check className="h-3 w-3 text-lime-950" />}
            </div>
            <div className="h-9 w-9 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
              <Globe className="h-4 w-4 text-lime-600" />
            </div>
            <div>
              <p className="text-sm text-gray-800" style={{ fontWeight: 600 }}>Public Badge Link</p>
              <p className="text-xs text-gray-400 mt-0.5">Generate a shareable public URL for the badge</p>
            </div>
          </label>
        </div>
      </div>

      {/* Section 4: Learner Message — only active if Issue Now */}
      <div className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-opacity ${!isIssueNow ? "opacity-60" : ""}`}>
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-gray-900" style={{ fontWeight: 600 }}>Learner Message</h3>
          {!isIssueNow && (
            <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] text-gray-400 shrink-0" style={{ fontWeight: 600 }}>Configured on issue</span>
          )}
        </div>
        <p className="text-sm text-gray-400 mb-5">Customize the notification your recipients will receive</p>

        {!isIssueNow && (
          <div className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-amber-50/60 border border-amber-100">
            <Info className="h-4 w-4 text-amber-400 shrink-0" />
            <p className="text-xs text-amber-600">Notifications will be configured when you issue the badge.</p>
          </div>
        )}

        {isIssueNow && (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block" style={{ fontWeight: 500 }}>Subject Line</label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block" style={{ fontWeight: 500 }}>Message Body</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-200 resize-none transition-all placeholder:text-gray-300"
              />
              <div className="flex justify-end mt-1">
                <p className={`text-xs ${message.length > 800 ? "text-amber-500" : "text-gray-300"}`}>
                  {message.length}/1000
                </p>
              </div>
            </div>
            {/* Mini preview */}
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>EMAIL PREVIEW</span>
              </div>
              <div className="rounded-lg bg-white border border-gray-100 p-4">
                <p className="text-xs text-gray-800 mb-2" style={{ fontWeight: 600 }}>{subject || "No subject"}</p>
                <p className="text-[11px] text-gray-500 whitespace-pre-line">{message || "No message content"}</p>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-lime-100 flex items-center justify-center">
                    <Award className="h-3 w-3 text-lime-600" />
                  </div>
                  <span className="text-[10px] text-gray-400">View your badge on BadgeFlow</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5: Sharing Options */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="text-gray-900 mb-1" style={{ fontWeight: 600 }}>Sharing Options</h3>
        <p className="text-sm text-gray-400 mb-5">Control how recipients can share their badge</p>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div
              onClick={() => setShareLinkedIn(!shareLinkedIn)}
              className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                shareLinkedIn ? "border-lime-400 bg-lime-400" : "border-gray-300"
              }`}
            >
              {shareLinkedIn && <Check className="h-3 w-3 text-lime-950" />}
            </div>
            <Linkedin className="h-4 w-4 text-gray-400 shrink-0" />
            <div>
              <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Enable LinkedIn Share Button</p>
              <p className="text-xs text-gray-400 mt-0.5">Recipients can share their badge directly to LinkedIn</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div
              onClick={() => setSharePublicPage(!sharePublicPage)}
              className={`h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                sharePublicPage ? "border-lime-400 bg-lime-400" : "border-gray-300"
              }`}
            >
              {sharePublicPage && <Check className="h-3 w-3 text-lime-950" />}
            </div>
            <Globe className="h-4 w-4 text-gray-400 shrink-0" />
            <div>
              <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Public Badge Page Visible</p>
              <p className="text-xs text-gray-400 mt-0.5">Badge details visible to anyone with the link</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

/* Step 4 — Review */
function StepReview({
  badgeName,
  shortDesc,
  purpose,
  badgeImage,
  tags,
  onEditStep,
}: {
  badgeName: string;
  shortDesc: string;
  purpose: string;
  badgeImage: string | null;
  tags: string[];
  onEditStep: (step: number) => void;
}) {
  const purposeLabel =
    purpose === "completion" ? "Completion" :
    purpose === "achievement" ? "Achievement" :
    purpose === "participation" ? "Participation" :
    purpose === "skill" ? "Skill-based" : "Not set";

  const SummaryCard = ({
    title,
    icon: Icon,
    step,
    children,
  }: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    step: number;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center">
            <Icon className="h-4 w-4 text-gray-400" />
          </div>
          <h4 className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{title}</h4>
        </div>
        <button
          onClick={() => onEditStep(step)}
          className="text-[11px] text-lime-600 hover:text-lime-700 transition-colors px-2.5 py-1 rounded-lg hover:bg-lime-50"
          style={{ fontWeight: 600 }}
        >
          Edit
        </button>
      </div>
      {children}
    </div>
  );

  const DetailRow = ({ label, value, muted }: { label: string; value: React.ReactNode; muted?: boolean }) => (
    <div className="flex items-start justify-between py-2 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400 shrink-0 w-28" style={{ fontWeight: 500 }}>{label}</span>
      <span className={`text-xs text-right ${muted ? "text-gray-300 italic" : "text-gray-700"}`} style={{ fontWeight: muted ? 400 : 500 }}>{value}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left Column — Summary Cards */}
      <div className="lg:col-span-3 space-y-4">
        {/* Readiness banner */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-lime-50 border border-lime-100">
          <CheckCircle2 className="h-4 w-4 text-lime-500 shrink-0" />
          <p className="text-xs text-lime-700" style={{ fontWeight: 500 }}>
            All steps complete — your badge is ready to publish.
          </p>
        </div>

        {/* Identity Card */}
        <SummaryCard title="Badge Identity" icon={Fingerprint} step={1}>
          <div className="space-y-0">
            <DetailRow label="Badge Name" value={badgeName || "Untitled"} muted={!badgeName} />
            <DetailRow label="Description" value={shortDesc || "No description"} muted={!shortDesc} />
            <DetailRow label="Purpose" value={purposeLabel} muted={!purpose} />
            <DetailRow
              label="Tags"
              value={
                tags.length > 0 ? (
                  <div className="flex flex-wrap gap-1 justify-end">
                    {tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] text-gray-500" style={{ fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : "No tags"
              }
              muted={tags.length === 0}
            />
            <DetailRow
              label="Badge Image"
              value={badgeImage ? (
                <span className="inline-flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="h-3 w-3" /> Uploaded
                </span>
              ) : "Default"}
              muted={!badgeImage}
            />
          </div>
        </SummaryCard>

        {/* Criteria Card */}
        <SummaryCard title="Criteria & Rules" icon={ClipboardList} step={2}>
          <div className="space-y-0">
            <DetailRow label="Issuing Method" value="Manual Approval" />
            <DetailRow
              label="Rules"
              value={
                <div className="space-y-1 text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <BookOpen className="h-3 w-3 text-lime-500" />
                    <span>Course Completed</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <Target className="h-3 w-3 text-lime-500" />
                    <span>Quiz Score ≥ 80%</span>
                  </div>
                </div>
              }
            />
            <DetailRow label="Evidence Required" value="Yes — file upload" />
          </div>
        </SummaryCard>

        {/* Delivery Card */}
        <SummaryCard title="Delivery Settings" icon={Send} step={3}>
          <div className="space-y-0">
            <DetailRow label="Issue Mode" value="Issue Later" />
            <DetailRow label="Recipients" value="0 added" muted />
            <DetailRow
              label="Channels"
              value={
                <div className="flex items-center gap-1.5 justify-end">
                  <Mail className="h-3 w-3 text-gray-400" />
                  <span>Email</span>
                  <span className="text-gray-300 mx-0.5">·</span>
                  <Globe className="h-3 w-3 text-gray-400" />
                  <span>Public Link</span>
                </div>
              }
            />
            <DetailRow
              label="Sharing"
              value={
                <div className="flex items-center gap-1.5 justify-end">
                  <Linkedin className="h-3 w-3 text-gray-400" />
                  <span>LinkedIn</span>
                  <span className="text-gray-300 mx-0.5">·</span>
                  <Globe className="h-3 w-3 text-gray-400" />
                  <span>Public page</span>
                </div>
              }
            />
          </div>
        </SummaryCard>
      </div>

      {/* Right Column — Previews */}
      <div className="lg:col-span-2 space-y-4">
        {/* Badge Preview Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>BADGE PREVIEW</span>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-100 p-6 text-center">
            {/* Badge visual */}
            <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 shadow-lg shadow-amber-100/50 ring-4 ring-white">
              {badgeImage ? (
                <img src={badgeImage} alt="Badge" className="h-full w-full rounded-2xl object-cover" />
              ) : (
                <Award className="h-12 w-12 text-amber-500" />
              )}
            </div>
            <h3 className="text-sm text-gray-900 mb-1" style={{ fontWeight: 700 }}>
              {badgeName || "Untitled Badge"}
            </h3>
            <p className="text-[11px] text-gray-400 mb-3 line-clamp-2">
              {shortDesc || "No description provided"}
            </p>
            {purpose && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-[10px] text-amber-600" style={{ fontWeight: 600 }}>
                {purposeLabel}
              </span>
            )}
            <div className="mt-4 pt-4 border-t border-gray-200/50 flex items-center justify-center gap-1.5">
              <div className="h-4 w-4 rounded bg-amber-100 flex items-center justify-center">
                <Award className="h-2.5 w-2.5 text-amber-600" />
              </div>
              <span className="text-[9px] text-gray-300" style={{ fontWeight: 500 }}>Issued by BadgeFlow</span>
            </div>
          </div>
        </div>

        {/* Public Badge Page Preview */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>PUBLIC PAGE PREVIEW</span>
          </div>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-gray-50 px-3 py-2 flex items-center gap-2 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-gray-200" />
                <div className="h-2 w-2 rounded-full bg-gray-200" />
                <div className="h-2 w-2 rounded-full bg-gray-200" />
              </div>
              <div className="flex-1 bg-white rounded px-2.5 py-0.5 text-[9px] text-gray-300 truncate border border-gray-100">
                badgeflow.io/badge/{(badgeName || "untitled").toLowerCase().replace(/\s+/g, "-").slice(0, 20)}
              </div>
            </div>
            {/* Page content mock */}
            <div className="p-4 bg-white">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-gray-800 truncate" style={{ fontWeight: 600 }}>{badgeName || "Untitled Badge"}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-2">{shortDesc || "No description"}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="h-1.5 rounded-full bg-gray-100 flex-1" />
                <div className="h-1.5 rounded-full bg-gray-100 w-2/5" />
              </div>
              <div className="mt-2 flex gap-2">
                <div className="h-1.5 rounded-full bg-gray-100 w-3/5" />
                <div className="h-1.5 rounded-full bg-gray-100 flex-1" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-6 px-3 rounded bg-lime-100 flex items-center">
                  <span className="text-[9px] text-lime-700" style={{ fontWeight: 600 }}>Claim Badge</span>
                </div>
                <div className="h-6 px-3 rounded bg-gray-50 flex items-center">
                  <span className="text-[9px] text-gray-400" style={{ fontWeight: 500 }}>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Share Preview */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Linkedin className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>LINKEDIN SHARE PREVIEW</span>
          </div>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            {/* LinkedIn post mock */}
            <div className="bg-gradient-to-r from-amber-50 to-lime-50 h-16 flex items-center justify-center">
              <Award className="h-8 w-8 text-amber-400" />
            </div>
            <div className="p-3 bg-white border-t border-gray-100">
              <p className="text-[10px] text-gray-800 truncate" style={{ fontWeight: 600 }}>
                I just earned "{badgeName || "Untitled Badge"}"!
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5">badgeflow.io · Issued via BadgeFlow</p>
              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-4">
                <span className="text-[9px] text-gray-300">👍 Like</span>
                <span className="text-[9px] text-gray-300">💬 Comment</span>
                <span className="text-[9px] text-gray-300">🔄 Repost</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final confidence note */}
        <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
          <Info className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-400">
            After publishing, you can still edit badge details and add recipients at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===================================================
   Issue Badge Page
   =================================================== */
function IssueBadgePage({
  onNavigate,
  isNewUser,
}: {
  onNavigate: (page: ActivePage) => void;
  isNewUser: boolean;
}) {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [selectedBadge, setSelectedBadge] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleIssue = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (isNewUser) {
    return (
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 mb-5">
            <Send className="h-8 w-8 text-green-400" />
          </div>
          <h1 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
            No badges to issue yet
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto">
            Before issuing a badge, you'll need to create one first. It only takes a minute!
          </p>
        </div>

        {/* Visual flow */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center">
                <Palette className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-gray-500" style={{ fontWeight: 500 }}>Create</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-300 mt-[-18px]" />
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center">
                <Send className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-xs text-gray-500" style={{ fontWeight: 500 }}>Issue</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-300 mt-[-18px]" />
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-xs text-gray-500" style={{ fontWeight: 500 }}>Accepted</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onNavigate("create-badge")}
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-12 px-8 gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            Create a Badge First
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>Issue Badge</h1>
        <p className="text-gray-500 text-sm mt-1">Send a badge to recognize someone's achievement</p>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <p className="text-sm text-green-700" style={{ fontWeight: 500 }}>
            Badge issued successfully! The recipient will receive an email notification.
          </p>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 space-y-6">
        <div>
          <label className="text-sm text-gray-600 mb-1.5 block">Select Badge</label>
          <select
            value={selectedBadge}
            onChange={(e) => setSelectedBadge(e.target.value)}
            className="w-full h-10 px-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-200"
          >
            <option value="">Choose a badge to issue...</option>
            {recentBadges.filter((b) => b.status === "Active").map((badge) => (
              <option key={badge.id} value={badge.id}>{badge.icon} {badge.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-1.5 block">Recipient Email</label>
          <Input
            type="email"
            placeholder="recipient@example.com"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="rounded-xl bg-gray-50 border-gray-100"
          />
          <p className="text-xs text-gray-400 mt-1.5">You can add multiple recipients separated by commas</p>
        </div>

        <div>
          <label className="text-sm text-gray-600 mb-1.5 block">Personal Message (Optional)</label>
          <textarea
            placeholder="Congratulations on completing the certification..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-200 resize-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-600">Issue Date</label>
          <Input type="date" defaultValue="2026-02-24" className="rounded-lg bg-gray-50 border-gray-100 w-auto" />
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <Button variant="outline" className="rounded-xl px-6 border-gray-200">Preview</Button>
          <Button onClick={handleIssue} className="rounded-xl px-6 bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none gap-2">
            <Send className="h-4 w-4" />
            Issue Badge
          </Button>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
          <Users className="h-5 w-5 text-purple-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>Need to issue badges in bulk?</p>
          <p className="text-xs text-gray-400">Upload a CSV file to issue badges to multiple recipients at once. Available on Pro plan.</p>
        </div>
      </div>
    </div>
  );
}

/* ===================================================
   Recipients Page
   =================================================== */
function RecipientsPage({
  onNavigate,
  isNewUser,
}: {
  onNavigate: (page: ActivePage) => void;
  isNewUser: boolean;
}) {
  if (isNewUser) {
    return (
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-purple-50 mb-5">
            <Users className="h-8 w-8 text-purple-400" />
          </div>
          <h1 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
            No recipients yet
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto">
            Recipients will appear here after you issue your first badge. Start by creating a badge, then issue it to someone.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="h-3 w-32 bg-gray-200 rounded-full mb-2"></div>
              <div className="h-2.5 w-48 bg-gray-100 rounded-full"></div>
            </div>
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl opacity-60">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-300" />
            </div>
            <div className="flex-1">
              <div className="h-3 w-28 bg-gray-100 rounded-full mb-2"></div>
              <div className="h-2.5 w-40 bg-gray-50 rounded-full"></div>
            </div>
            <div className="h-6 w-14 bg-gray-100 rounded-full"></div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl opacity-30">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-200" />
            </div>
            <div className="flex-1">
              <div className="h-3 w-36 bg-gray-50 rounded-full mb-2"></div>
              <div className="h-2.5 w-44 bg-gray-50 rounded-full"></div>
            </div>
            <div className="h-6 w-14 bg-gray-50 rounded-full"></div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onNavigate("create-badge")}
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-12 px-8 gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            Create a Badge to Get Started
          </Button>
        </div>
      </div>
    );
  }

  const recipients = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", badges: 3, lastIssued: "2 days ago", avatar: "SJ" },
    { id: 2, name: "James Lee", email: "james@example.com", badges: 2, lastIssued: "5 days ago", avatar: "JL" },
    { id: 3, name: "Maria Garcia", email: "maria@example.com", badges: 4, lastIssued: "1 week ago", avatar: "MG" },
    { id: 4, name: "Alex Chen", email: "alex@example.com", badges: 1, lastIssued: "2 weeks ago", avatar: "AC" },
    { id: 5, name: "Emma Wilson", email: "emma@example.com", badges: 2, lastIssued: "3 weeks ago", avatar: "EW" },
  ];

  const avatarColors = [
    "bg-amber-100 text-amber-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700",
    "bg-amber-100 text-amber-700", "bg-rose-100 text-rose-700",
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>Recipients</h1>
          <p className="text-gray-500 text-sm mt-1">People who have received your badges</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Recipient</th>
                <th className="text-left px-6 py-4 text-xs text-gray-400 hidden sm:table-cell" style={{ fontWeight: 500 }}>Email</th>
                <th className="text-left px-6 py-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Badges</th>
                <th className="text-left px-6 py-4 text-xs text-gray-400 hidden md:table-cell" style={{ fontWeight: 500 }}>Last Issued</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((r, i) => (
                <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center text-xs ${avatarColors[i % avatarColors.length]}`}
                        style={{ fontWeight: 600 }}
                      >
                        {r.avatar}
                      </div>
                      <span className="text-sm text-gray-900" style={{ fontWeight: 500 }}>{r.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">{r.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">{r.badges}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">{r.lastIssued}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-300 hover:text-gray-500">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ===================================================
   Analytics Page
   =================================================== */
function AnalyticsPage({
  onNavigate,
  isNewUser,
}: {
  onNavigate: (page: ActivePage) => void;
  isNewUser: boolean;
}) {
  if (isNewUser) {
    return (
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-50 mb-5">
            <BarChart3 className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>
            No analytics data yet
          </h1>
          <p className="text-gray-500 max-w-sm mx-auto">
            Once you start issuing badges, you'll see data on views, acceptance rates, and engagement trends right here.
          </p>
        </div>

        {/* Preview of what analytics looks like */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <p className="text-xs text-gray-400 mb-4" style={{ fontWeight: 500 }}>PREVIEW</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["Issued", "Views", "Accepted"].map((label) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-2xl text-gray-200" style={{ fontWeight: 700 }}>—</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-3 h-24">
            {[20, 35, 25, 45, 55, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gray-100 rounded-t-lg" style={{ height: `${h}%` }}></div>
                <span className="text-[10px] text-gray-300">—</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => onNavigate("create-badge")}
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl h-12 px-8 gap-2"
          >
            <PlusCircle className="h-5 w-5" />
            Create a Badge to Start Tracking
          </Button>
        </div>
      </div>
    );
  }

  const monthlyData = [
    { month: "Sep", issued: 8 }, { month: "Oct", issued: 15 }, { month: "Nov", issued: 12 },
    { month: "Dec", issued: 22 }, { month: "Jan", issued: 28 }, { month: "Feb", issued: 18 },
  ];
  const maxIssued = Math.max(...monthlyData.map((d) => d.issued));

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Track how your badges are performing</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <p className="text-xs text-gray-400 mb-1">Total Issued (6 mo)</p>
          <p className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>103</p>
          <p className="text-xs text-green-600 mt-1">+42% vs previous period</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <p className="text-xs text-gray-400 mb-1">Total Views</p>
          <p className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>1,630</p>
          <p className="text-xs text-green-600 mt-1">+28% vs previous period</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <p className="text-xs text-gray-400 mb-1">Acceptance Rate</p>
          <p className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>94%</p>
          <p className="text-xs text-green-600 mt-1">+3% vs previous period</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-gray-900 mb-6" style={{ fontWeight: 600 }}>Badges Issued Per Month</h2>
        <div className="flex items-end gap-3 h-48">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-gray-500" style={{ fontWeight: 500 }}>{d.issued}</span>
              <div
                className="w-full bg-amber-400 rounded-t-lg transition-all hover:bg-amber-500"
                style={{ height: `${(d.issued / maxIssued) * 100}%`, minHeight: "8px" }}
              />
              <span className="text-xs text-gray-400">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400">
          Want detailed analytics with custom reports?{" "}
          <button className="text-amber-600 hover:text-amber-700">Explore Pro features →</button>
        </p>
      </div>
    </div>
  );
}

/* ===================================================
   Settings Page
   =================================================== */
function SettingsPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account and organization settings</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-lg text-amber-700" style={{ fontWeight: 600 }}>JD</span>
            </div>
            <div>
              <p className="text-gray-900" style={{ fontWeight: 500 }}>John Doe</p>
              <p className="text-sm text-gray-400">john@example.com</p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto rounded-lg border-gray-200">Edit</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block">Full Name</label>
              <Input defaultValue="John Doe" className="rounded-xl bg-gray-50 border-gray-100" />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block">Email</label>
              <Input defaultValue="john@example.com" className="rounded-xl bg-gray-50 border-gray-100" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Organization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block">Organization Name</label>
              <Input defaultValue="Acme Corp" className="rounded-xl bg-gray-50 border-gray-100" />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1.5 block">Website</label>
              <Input defaultValue="https://acme.com" className="rounded-xl bg-gray-50 border-gray-100" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Your Plan</h2>
            <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full" style={{ fontWeight: 500 }}>Free</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Badges</p>
              <p className="text-lg text-gray-900" style={{ fontWeight: 600 }}>3 / 5</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Issues / month</p>
              <p className="text-lg text-gray-900" style={{ fontWeight: 600 }}>92 / 100</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Team Members</p>
              <p className="text-lg text-gray-900" style={{ fontWeight: 600 }}>1 / 1</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-amber-50/50 rounded-xl p-4 border border-amber-100/50">
            <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                Unlock unlimited badges, bulk issuing, and custom branding
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Plans start at $29/month</p>
            </div>
            <Button size="sm" className="rounded-lg bg-amber-400 hover:bg-amber-500 text-amber-950 whitespace-nowrap">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
