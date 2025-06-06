"use client";
import TopPage from "./components/TopPage/page";
import SectionText from "./components/SectionText/page";
import Parcours from "./components/Parcours/page";
import Projets from "./components/Projets/page";
import Skills from "./components/Skills/page";
import ContactPage from "./components/Contact/page";

export default function Home() {
  return (
    <>
      <TopPage />
      <SectionText />
      <Parcours />
      <Skills />
      <Projets />
      <ContactPage />
    </>
  );
}
