import '@/app/style.css';
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Lock, Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "./nav-links";

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  submenu?: NavItem[];
  requiredPlan?: ("BASIC" | "INTERMEDIATE" | "ADVANCED")[];
  isMainMenu?: boolean;
  progress?: number;
}

function NavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = item.href ? pathname === item.href : false;

  const handleToggle = () => setIsOpen((prev) => !prev);

  const canAccess = !item.requiredPlan || (session?.user.plan && item.requiredPlan.includes(session.user.plan as "BASIC" | "INTERMEDIATE" | "ADVANCED"));
  const isLocked = item.requiredPlan && !canAccess;

  const submenuClass = "ml-8 space-y-2 transition-all ease-in-out duration-300";

  return (
    <div className="space-y-2">
      {item.submenu ? (
        <button
          onClick={handleToggle}
          disabled={isLocked}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md",
            "hover:bg-accent hover:text-accent-foreground",
            item.isMainMenu ? "bg-main-menu" : "bg-submenu",
            isOpen && "bg-accent",
            isLocked && "text-gray-500 cursor-not-allowed",
          )}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <span>{item.title}</span>
            {isLocked && <Lock className="h-4 w-4 text-gray-500" />}
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 transition-transform" />
          ) : (
            <ChevronDown className="h-4 w-4 transition-transform" />
          )}
        </button>
      ) : (
        < Link
          href={item.href || "#"}
          className={cn(
            "flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground ",
            item.isMainMenu ? "text-main-menu" : "text-submenu",
            isActive && "bg-accent text-accent-foreground",
            isLocked && "text-gray-500 cursor-not-allowed",
          )}
        >
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span>{item.title}</span>
          {isLocked && <Lock className="h-4 w-4 text-gray-500 ml-2" />}
        </Link>
      )
      }

      {
        isOpen && item.submenu && (
          <div className={submenuClass}>
            {item.submenu.map((subItem) => (
              <div key={subItem.title}>
                <NavItem item={subItem} />
              </div>
            ))}
          </div>
        )
      }
    </div >
  );
}

export function SidebarEn() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className={`lg:w-1/4 bg-card rounded-lg shadow-2xl top-0 left-0 h-full ${!isSidebarOpen ? 'lg:hidden' : ''}`}>
      <h2 className="text-lg font-semibold text-center mt-4">Learning path</h2>
      <div className="p-2 flex justify-between items-center">
        <button onClick={toggleSidebar} className="lg:hidden">
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={`${isSidebarOpen ? '' : 'lg:hidden'} p-2`}>
        <nav className="px-1 space-y-1 mb-2">
          {navigationItems.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
}