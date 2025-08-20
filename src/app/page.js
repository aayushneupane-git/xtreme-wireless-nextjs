import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider>
        <Navbar/>
    </ThemeProvider>
  );
}
