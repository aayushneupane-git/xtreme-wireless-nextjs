import HeroLandingPage from "@/components/HeroLandingPage";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <ContentWrapper>
        <HeroLandingPage />
      </ContentWrapper>
    </ThemeProvider>
  );
}
