import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { auth } from "./auth";
import { LoginButton, SignOut } from "./auth-components";
import { UserNav } from "./user-nav";

export default async function UserButton() {
    const session = await auth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/10 transition-all hover:ring-primary/30 bg-pink-500 text-white">
                    {session?.user && (
                        <span className="absolute -top-1 -right-1 h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                        </span>
                    )}
                    <Avatar className="h-10 w-10 transition-all">
                        {session?.user?.image && (
                            <AvatarImage
                                src={session.user.image}
                                alt={session.user.name ?? ""}
                                className="object-cover"
                            />
                        )}
                        <AvatarFallback className="bg-primary/5">
                            {session?.user?.name
                                ? session.user.name.charAt(0).toUpperCase()
                                : <User className="h-6 w-6" />}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72" align="end" forceMount>
                {session?.user ? (
                    <>
                        <UserNav user={session.user} />
                        <SignOut />
                    </>
                ) : (
                    <LoginButton />
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
