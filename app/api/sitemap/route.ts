import { navigationItems as arabicNav } from "@/components/sidenav/SideNavAr/nav-links"; // Import des formations en arabe
import { navigationItems as englishNav } from "@/components/sidenav/SideNavEn/nav-links"; // Import des formations en anglais
import { NextResponse } from "next/server";

const baseUrl = "https://barmajahacademy.com";

// Fonction pour extraire toutes les URLs des formations
const getCourseUrls = (navItems: typeof arabicNav) => {
  let urls: string[] = [];

  navItems.forEach((course) => {
    course.submenu?.forEach((sub) => {
      sub.submenu?.forEach((lesson) => {
        urls.push(`
          <url>
            <loc>${baseUrl}${lesson.href}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>
        `);
      });
    });
  });

  return urls;
};

export async function GET() {
  let urls: string[] = [];

  // Pages principales (statiques)
  const staticPages = [
    "",
    "pricing",
    "contact",
    "programme",
    "sign-in",
    "sign-up",
  ];
  ["ar", "en"].forEach((lang) => {
    staticPages.forEach((page) => {
      urls.push(`
        <url>
          <loc>${baseUrl}/${lang}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    });
  });

  // Ajouter les URLs des formations en arabe et en anglais
  urls = urls.concat(getCourseUrls(arabicNav));
  urls = urls.concat(getCourseUrls(englishNav));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
