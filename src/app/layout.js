// app/layout.js
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";
import ContentWrapper from "@/components/ContentWrapper";

export const metadata = {
  title: "Xtreme Wireless",
  description: "A company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <link
          href="https://fonts.googleapis.com/css2?family=Andada+Pro:ital,wght@0,400..840;1,400..840&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
