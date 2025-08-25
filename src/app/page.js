import HeroLandingPage from "@/components/HeroLandingPage";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import AboutPage from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Location from "./locations/page";
import Team from "@/components/OurTeam";
import LocationsPage from "../components/Locations";

export default function Home() {
  return (
    <ThemeProvider>
      <ContentWrapper>
        <HeroLandingPage />

        <section id="about">
          <AboutPage />
        </section>

        <section id="locations">
          <LocationsPage />
        </section>

        <section id="team">
          <Team />
        </section>
        <Footer />
      </ContentWrapper>
    </ThemeProvider>
  );
}
