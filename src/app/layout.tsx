import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Allen  個人網站",
    template: "%s | Allen",
  },
  description: "Allen 的個人網站：里程碑、價值觀、工作案例、興趣、生活風格與近期關注。",
  keywords: [
    "Allen",
    "個人網站",
    "產品經理",
    "工作案例",
    "里程碑",
    "價值觀",
    "興趣",
    "生活風格",
    "近期關注",
    "Portfolio",
    "About"
  ],
  authors: [{ name: "Allen" }],
  creator: "Allen",
  publisher: "Allen",
  openGraph: {
    type: "website",
    locale: "zh_Hant_TW",
    url: "https://aboutallen.com",
    title: "Allen  個人網站",
    description: "Allen 的個人網站：里程碑、價值觀、工作案例、興趣、生活風格與近期關注。",
    siteName: "Allen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allen 個人網站",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allen  個人網站",
    description: "Allen 的個人網站：里程碑、價值觀、工作案例、興趣、生活風格與近期關注。",
    creator: "@allen",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// JSON-LD Schema for Person
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allen",
  description: "Allen 的個人網站：里程碑、價值觀、工作案例、興趣、生活風格與近期關注。",
  url: "https://aboutallen.com",
  sameAs: [
    "https://github.com/allen",
    "https://linkedin.com/in/allen"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className={inter.className}>
      <head>
        {/* JSON-LD Schema */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteNav />
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
