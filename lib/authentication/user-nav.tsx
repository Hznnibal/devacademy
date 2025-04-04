"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    Bell,
    BookOpen,
    CreditCard,
    Hourglass,
    LayoutDashboard,
    MessageSquare,
    Settings,
    Trophy,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserNavProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    disabled?: boolean;
}

function NavItem({
    href,
    icon: Icon,
    children,
    disabled,
    badge,
}: {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
    disabled?: boolean;
    badge?: number;
}) {
    const t = useTranslations();
    if (disabled) {
        return (
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DropdownMenuItem className="flex w-full items-center opacity-50 cursor-not-allowed">
                            <Icon className="mr-2 h-4 w-4" />
                            <span className="flex-1">{children}</span>
                            <Hourglass className="ml-2 h-4 w-4 animate-pulse text-muted-foreground" />
                        </DropdownMenuItem>
                    </TooltipTrigger>
                    <TooltipContent className="ml-10">
                        {t("profile.underdevelopment")}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    return (
        <DropdownMenuItem asChild>
            <Link href={href} className="flex w-full cursor-pointer items-center">
                <Icon className="mr-2 h-4 w-4" />
                {children}
                {badge && (
                    <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                        <span className="text-xs text-primary-foreground">{badge}</span>
                    </span>
                )}
            </Link>
        </DropdownMenuItem>
    );
}

export function UserNav({ user }: UserNavProps) {
    const t = useTranslations();
    const pathname = usePathname();
    const lang = pathname.includes("/ar")
        ? "ar"
        : pathname.includes("/en")
            ? "en"
            : "fr";

    return (
        <>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            {user.image && (
                                <AvatarImage src={user.image} alt={user.name ?? ""} />
                            )}
                            <AvatarFallback>
                                {user.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-xs leading-none text-muted-foreground mt-1">
                                {user.email}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-md bg-secondary p-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                            <Trophy className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium leading-none">
                                {t("profile.currentCourse")}
                            </p>
                            <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-[45%] rounded-full bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <NavItem
                    href={`/${lang}/dashboard`}
                    icon={LayoutDashboard}
                    disabled={true}
                >
                    {t("navigation.dashboard")}
                </NavItem>
                <NavItem
                    href={`/${lang}/mycourses`}
                    icon={BookOpen}
                    disabled={true}
                >
                    {t("navigation.courses")}
                </NavItem>
                <NavItem
                    href={`/${lang}/messages`}
                    icon={MessageSquare}
                    // badge={3}
                    disabled={true}
                >
                    {t("navigation.messages")}
                </NavItem>
                <NavItem
                    href={`/${lang}/notifications`}
                    icon={Bell}
                    // badge={5}
                    disabled={true}
                >
                    {t("navigation.notifications")}
                </NavItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
                <NavItem
                    href={`/${lang}/settings`}
                    icon={Settings}
                    disabled={true}
                >
                    {t("navigation.settings")}
                </NavItem>
                <NavItem
                    href={`/${lang}/billing`}
                    icon={CreditCard}
                    disabled={true}
                >
                    {t("navigation.billing")}
                </NavItem>
            </DropdownMenuGroup>
        </>
    );
}