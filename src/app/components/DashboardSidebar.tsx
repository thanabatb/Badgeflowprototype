import {
  Award,
  BarChart3,
  ChevronRightIcon,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Send,
  Settings,
  Sparkles,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";

export type ActivePage =
  | "dashboard"
  | "my-badges"
  | "create-badge"
  | "issue-badge"
  | "recipients"
  | "analytics"
  | "settings";

const sidebarMenuItems: { id: ActivePage; label: string; icon: LucideIcon }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "my-badges", label: "My Badges", icon: Award },
  { id: "issue-badge", label: "Issue Badge", icon: Send },
  { id: "recipients", label: "Recipients", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

type DashboardSidebarProps = {
  activePage: ActivePage;
  isNewUser: boolean;
  onLogout: () => void;
  onPageChange: (page: ActivePage) => void;
  onSidebarOpenChange: (isOpen: boolean) => void;
  onViewPlans: () => void;
  sidebarOpen: boolean;
};

export function DashboardSidebar({
  activePage,
  isNewUser,
  onLogout,
  onPageChange,
  onSidebarOpenChange,
  onViewPlans,
  sidebarOpen,
}: DashboardSidebarProps) {
  const closeSidebar = () => onSidebarOpenChange(false);
  const handlePageChange = (page: ActivePage) => {
    onPageChange(page);
    closeSidebar();
  };

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={closeSidebar} />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[var(--sidebar-surface)] border-r border-[#94A3B8]/35 flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-4 pt-6 pb-4 lg:pt-10">
          <div className="mb-2 flex justify-end lg:hidden">
            <button className="text-[#94A3B8] hover:text-[#1E2A4A]" onClick={closeSidebar}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <Button
            onClick={() => handlePageChange("create-badge")}
            className="h-14 w-full rounded-3xl bg-[#4F6DF5] text-base text-white hover:bg-[#FF6B6B]"
            style={{ fontWeight: 600 }}
          >
            <PlusCircle className="h-5 w-5" />
            New Badge
          </Button>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-2 overflow-y-auto">
          {sidebarMenuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-colors ${
                  isActive
                    ? "bg-[#FFF5CC] border-l-[3px] border-l-[#FFB902]"
                    : "hover:bg-[#FFFAE5]"
                }`}
                style={{ fontWeight: isActive ? 600 : 500 }}
              >
                <item.icon className={`h-6 w-6 ${isActive ? "text-[#B8960C]" : "text-[#6B7280] group-hover:text-[#1E2A4A]"}`} />
                <span className={isActive ? "text-[#B8960C]" : "text-[#1E2A4A]"}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-4 pb-4">
          <div className="bg-[#EEF2FF] rounded-2xl p-4 border border-[#94A3B8]/30">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-[#FFB902]" />
              <span className="text-base text-[#B8960C]" style={{ fontWeight: 500 }}>
                Free Plan
              </span>
            </div>
            <p className="mb-3 text-sm text-[#94A3B8]">
              {isNewUser ? "0 of 5 badges used" : "3 of 5 badges used this month"}
            </p>
            <div className="w-full bg-[rgba(148,163,184,0.2)] rounded-full h-1.5 mb-3">
              <div
                className="bg-[#FFB902] h-1.5 rounded-full transition-all"
                style={{ width: isNewUser ? "0%" : "60%" }}
              ></div>
            </div>
            <button onClick={onViewPlans} className="flex items-center gap-1 text-base text-support transition-colors hover:text-[#1E40AF]">
              View plans
              <ChevronRightIcon className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-4 border-t border-[#94A3B8]/25 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#FFF5CC] flex items-center justify-center overflow-hidden">
              <span className="text-base text-[#1E2A4A]" style={{ fontWeight: 600 }}>
                JD
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base text-[#1E2A4A] truncate" style={{ fontWeight: 500 }}>
                John Doe
              </p>
              <p className="text-sm text-[#94A3B8] truncate">john@example.com</p>
            </div>
            <button
              onClick={onLogout}
              className="text-[#94A3B8] hover:text-[#1E2A4A] transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
