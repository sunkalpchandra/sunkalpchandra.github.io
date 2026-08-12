import type { Metadata, Viewport } from "next";
import { inter, newsreader, plexMono } from "@/lib/fonts";
import { site } from "@/data/site";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { KeyboardEggs } from "@/components/KeyboardEggs";
import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunkalp Chandra",
  url: site.url,
  email: `mailto:${site.email}`,
  affiliation: { "@type": "CollegeOrUniversity", name: "The University of Texas at Austin" },
  sameAs: [site.links.github, site.links.linkedin, site.links.scholar],
  knowsAbout: [
    "Computer Science",
    "Computational Neuroscience",
    "Machine Learning",
    "Brain-Computer Interfaces",
    "Neural Decoding",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Sunkalp Chandra",
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#131316" },
  ],
};

/** Applies the stored/system theme before first paint — no flash. */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <KeyboardEggs />
      </body>
    </html>
  );
}
