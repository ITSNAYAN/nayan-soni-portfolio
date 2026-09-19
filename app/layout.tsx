import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

// Resolves to (in order): explicit env var → Vercel preview URL → localhost.
// Set NEXT_PUBLIC_SITE_URL to your production domain on your host.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "Nayan Soni — Flutter Developer",
  description:
    "Flutter Mobile Application Developer with 2+ years of experience building and shipping enterprise-grade Android & iOS apps.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Nayan Soni — Flutter Developer",
    description:
      "Building and shipping enterprise-grade Flutter apps to Play Store and App Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
