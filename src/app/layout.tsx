import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const DOMAIN = 'https://www.mlbbcounters.com';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "MLBB Counters | Mobile Legends Counter Picker",
    template: "%s | MLBB Counters"
  },
  description: "Find the perfect counter picks for all Mobile Legends: Bang Bang heroes. Improve your win rate with our comprehensive counter guide and hero matchup analysis.",
  keywords: "MLBB counters, Mobile Legends counter picker, MLBB hero counters, Mobile Legends Bang Bang counters, MLBB counter guide",
  authors: [{ name: "MLBB Counters" }],
  creator: "MLBB Counters",
  publisher: "MLBB Counters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MLBB Counters | Mobile Legends Counter Picker",
    description: "Find the perfect counter picks for all Mobile Legends: Bang Bang heroes. Improve your win rate with our comprehensive counter guide.",
    url: DOMAIN,
    siteName: 'MLBB Counters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLBB Counters | Mobile Legends Counter Picker',
    description: 'Find the perfect counter picks for all Mobile Legends: Bang Bang heroes',
    creator: '@pitbosspat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'google-adsense-account': 'ca-pub-3489095111043969',
  },
  alternates: {
    canonical: DOMAIN
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3489095111043969" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={DOMAIN} />
        <Script 
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3489095111043969"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}