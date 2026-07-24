import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { siteName, siteTagline } from "@/content/navigation";

export const metadata: Metadata = {
  title: {
    default: `${siteName} — REEF Ocean Conservation`,
    template: `%s — ${siteName}`,
  },
  description:
    "ONE DESCENT is a REEF conservation story: dive a living reef, witness its bleaching, meet the hands restoring it, and resurface with a reason to act.",
  applicationName: siteName,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} — REEF Ocean Conservation`,
    description: siteTagline,
  },
  twitter: {
    card: "summary",
    title: `${siteName} — REEF Ocean Conservation`,
    description: siteTagline,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061C2D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
