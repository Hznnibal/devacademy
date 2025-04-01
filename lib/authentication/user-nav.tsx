"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    Settings
} from "lucide-react";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname } from "next/navigation";
interface UserNavProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export function UserNav({ user }: UserNavProps) {
    const t = useTranslations();
    const pathname = usePathname();

    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    return (
        <>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            {user.image && (
                                <AvatarImage
                                    src={user.image}
                                    alt={user.name ?? ""}
                                />
                            )}
                            <AvatarFallback>
                                {user.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium leading-none">
                                {user.name}
                            </p>
                            <p className="text-xs leading-none text-muted-foreground mt-1">
                                {user.email}
                            </p>
                        </div>
                    </div>
                    {/* <div className="flex items-center gap-2 rounded-md bg-secondary p-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                            <Trophy className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs font-medium leading-none">
                                {t('profile.currentCourse')}
                            </p>
                            <div className="h-1.5 w-full rounded-full bg-primary/20">
                                <div className="h-1.5 w-[45%] rounded-full bg-primary" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                {/* <DropdownMenuItem asChild>
                    <Link href={`/${lang}/dashboard`} className="flex w-full cursor-pointer items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        {t('navigation.dashboard')}
                    </Link>
                </DropdownMenuItem> */}
                {/* <DropdownMenuItem asChild>
                    <Link href={`/${lang}/mycourses`} className="flex w-full cursor-pointer items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        {t('navigation.courses')}
                    </Link>
                </DropdownMenuItem> */}
                {/* <DropdownMenuItem asChild>
                    <Link href={`/${lang}/messages`} className="flex w-full cursor-pointer items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {t('navigation.messages')}
                        <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                            <span className="text-xs text-primary-foreground">3</span>
                        </span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={`/${lang}/notifications`} className="flex w-full cursor-pointer items-center">
                        <Bell className="mr-2 h-4 w-4" />
                        {t('navigation.notifications')}
                        <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                            <span className="text-xs text-primary-foreground">5</span>
                        </span>
                    </Link>
                </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link href={`/${lang}/settings`} className="flex w-full cursor-pointer items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        {t('navigation.settings')}
                    </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                    <Link href={`/${lang}/billing`} className="flex w-full cursor-pointer items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        {t('navigation.billing')}
                    </Link>
                </DropdownMenuItem> */}
            </DropdownMenuGroup>
        </>
    );
}
