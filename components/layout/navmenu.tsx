"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { NavItem } from "../SideNavEn/types";

interface SubmenuItemProps {
  item: NavItem;
}

export function SubmenuItem({ item }: SubmenuItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (!hasSubmenu && item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          "block py-2 text-sm transition-colors hover:text-primary",
          pathname === item.href && "text-primary font-medium"
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:text-primary">
        {item.title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1">
        {item.submenu?.map((subItem) => (
          <SubmenuItem key={subItem.title} item={subItem} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}