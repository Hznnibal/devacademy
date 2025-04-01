"use client";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface TechCardProps {
    title: string;
    details: string[];
}

export function TechCard({ title, details }: TechCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="p-2 cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center w-24 h-8  ">
                    <h3 className="font-medium text-xs text-center ">{title}</h3>
                </Card>
            </DialogTrigger>
            <DialogContent className=" bg-gray-200 ">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader >
                <div className="mt-4">
                    <ul className="space-y-2">
                        {details.map((detail, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 p-2 rounded-md bg-gray-300 "
                            >
                                <div className="w-1 h-1 rounded-full bg-black" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
}