"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

export default function CanonicalHead() {
    const pathname = usePathname();
    const canonicalUrl = `https://www.barmajah-academy.com${pathname.replace(/\/$/, "")}`;

    return (
        <Head>
            <link rel="canonical" href={canonicalUrl} />
        </Head>
    );
}
