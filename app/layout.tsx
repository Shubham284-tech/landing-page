import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import Footer from "@/components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export const metadata: Metadata = {
  title: "Pitch Perfect",
  description:
    "Practice and perfect your sales pitch by speaking directly with an AI customer. Get real-time feedback, refine your messaging, and become a more confident communicator.",
  keywords: [
    "sales pitch",
    "AI sales practice",
    "sales training",
    "pitching",
    "AI feedback",
    "sales simulator",
  ],
  authors: [{ name: "Shubham", url: "https://dev.pperfectai.com" }],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://dev.pperfectai.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      // 'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Pitch Perfect – Practice Sales Pitches with AI",
    description:
      "Talk to an AI customer and sharpen your pitch. Instant feedback and practice for real-world sales success.",
    url: "https://dev.pperfectai.com",
    siteName: "Pitch Perfect",
    images: [
      {
        url: "/logo.png", // should be 1200x630 for best results
        width: 1200,
        height: 630,
        alt: "Pitch Perfect AI Sales Practice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitch Perfect – Practice Sales Pitches with AI",
    description: "Improve your sales pitch with real-time AI feedback.",
    images: ["/logo.png"],
    // creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       suppressHydrationWarning
        className={`min-h-screen min-w-full
         antialiased`}
        style={{ fontFamily: "Acumin, sans-serif" }}
      >
        <SiteHeader />
        <main className="pt-[0px] md:pt-[90px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
