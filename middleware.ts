import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["en", "fr", "ar"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const VALID_PLANS = ["BASIC", "INTERMEDIATE", "ADVANCED"] as const;
type SubscriptionPlan = (typeof VALID_PLANS)[number];

type CourseAccess = {
  [key: string]: readonly SubscriptionPlan[];
};

const COURSE_ACCESS: CourseAccess = {
  "/courses/*/intro": ["BASIC", "INTERMEDIATE", "ADVANCED"] as const,
  "/courses/*/basics": ["BASIC", "INTERMEDIATE", "ADVANCED"] as const,
  "/courses/*/backend": ["INTERMEDIATE", "ADVANCED"] as const,
  "/courses/*/MVC": ["ADVANCED"] as const,
  "/courses/*/deployment": ["ADVANCED"] as const,
};

function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

function isValidPlan(plan: string): plan is SubscriptionPlan {
  return VALID_PLANS.includes(plan as SubscriptionPlan);
}

function hasAccessToCourse(path: string, userPlan: SubscriptionPlan): boolean {
  const pathSegments = path.split("/");
  const coursePattern = pathSegments.slice(0, 4).join("/");

  for (const [pattern, allowedPlans] of Object.entries(COURSE_ACCESS)) {
    if (coursePattern.startsWith(pattern.replace("*", pathSegments[2]))) {
      return allowedPlans.includes(userPlan);
    }
  }

  return false;
}

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: true,
  });

  console.log("TOKEN: ", token);
  const { pathname } = req.nextUrl;
  const pathSegments = pathname.split("/");
  const url = req.nextUrl;
  const lang = pathSegments[2];

  if (url.pathname === "/") {
    return NextResponse.redirect(new URL("/en", req.url));
  }

  if (!isValidLanguage(lang)) {
    const newUrl = new URL(pathname.replace(`/${lang}`, "/en"), req.url);
    return NextResponse.redirect(newUrl);
  }

  if (!token) {
    console.log("Redirection vers sign-in car token absent");
    const signInUrl = new URL(`/${lang}/sign-in`, req.url);
    signInUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(signInUrl);
  }

  if (!token.plan || !isValidPlan(token.plan as string)) {
    console.log("Plan introuvable dans le token : ", token);
    return NextResponse.redirect(new URL(`/${lang}/pricing`, req.url));
  }

  if (!hasAccessToCourse(pathname, token.plan as SubscriptionPlan)) {
    return NextResponse.redirect(new URL(`/${lang}/pricing`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/courses/:path*"],
};
