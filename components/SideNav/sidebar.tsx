"use client";

// import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems } from "./nav-links";
import './style.css';

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  submenu?: NavItem[];
  progress?: number;
  isMainMenu?: boolean;
}

function NavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = item.href ? pathname === item.href : false;

  const handleToggle = () => setIsOpen((prev) => !prev);

  if (item.submenu) {
    return (
      <div className="space-y-2">
        <button
          onClick={handleToggle}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md",
            "hover:bg-accent hover:text-accent-foreground",
            item.isMainMenu ? "bg-main-menu" : "bg-submenu",
            isOpen && "bg-accent"
          )}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span>{item.title}</span>
          </div>
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
          />
        </button>
        {/* <div className="px-3 py-1">
          <Progress value={item.progress} className="h-1" />
        </div> */}
        {/* Lorsque isOpen est vrai, afficher les sous-menus */}
        {isOpen && (
          <div className="pl-6 space-y-2">
            {item.submenu.map((subItem) => (
              <div key={subItem.title} className="text-slate-600">
                <NavItem item={subItem} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground",
        item.isMainMenu ? "text-main-menu" : "text-submenu",
        isActive && "bg-accent text-accent-foreground"
      )}
    >
      <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
      <span>{item.title}</span>
    </Link>
  );

}

export function Sidebar() {
  return (
    <div className="w-1/4 bg-card rounded-lg shadow-2xl top-0 left-0 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Parcours d&apos;apprentissage</h2>
      </div>
      <nav className="px-3 space-y-1 max-h-[calc(100vh-12rem)]">
        {navigationItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </nav>
    </div>
  );
}

