import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { site } from "./seo.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter", // Enables use as a CSS variable
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s | LASC SCV",
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: "LASC SCV",
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  // keywords is supported but not important for Google
  keywords: site.keywords,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          suppressHydrationWarning
          enableSystem
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
