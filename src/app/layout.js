// app/layout.js
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";
import ContentWrapper from "@/components/ContentWrapper";

export const metadata = {
  title: "Xtreme Wireless – Quality Electronics & Wireless Solutions",
  description:
    "Xtreme Wireless offers top-quality electronics, wireless devices, and accessories with exceptional customer service across Columbus, OH.",
  keywords: [
    "Xtreme Wireless",
    "electronics store",
    "wireless devices",
    "mobile accessories",
    "Columbus OH",
  ],
  authors: [{ name: "Xtreme Wireless Team" }],
  openGraph: {
    title: "Xtreme Wireless – Quality Electronics & Wireless Solutions",
    description:
      "Explore Xtreme Wireless for premium electronics, mobile accessories, and wireless solutions with outstanding customer service.",
    url: "https://www.columbusphonetech.com",
    siteName: "Xtreme Wireless",
    images: [
      {
        url: "https://www.columbusphonetech.com/Xtreme.png",
        width: 1200,
        height: 630,
        alt: "Xtreme Wireless Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtreme Wireless – Quality Electronics & Wireless Solutions",
    description:
      "Shop electronics, wireless devices, and mobile accessories with Xtreme Wireless.",
    images: ["https://www.columbusphonetech.com/og-image.jpg"],
    site: "@XtremeWireless",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
