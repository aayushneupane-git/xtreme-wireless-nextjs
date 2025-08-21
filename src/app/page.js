import HeroLandingPage from "@/components/HeroLandingPage";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import AboutPage from "@/components/AboutUs";

export default function Home() {
  return (
    <ThemeProvider>
      <ContentWrapper>
        <HeroLandingPage />
        <AboutPage/>
      </ContentWrapper>
    </ThemeProvider>
  );
}
