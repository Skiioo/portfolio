"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SiteCulture() {
  const router = useRouter();

  // Fonction pour gérer le défilement vers une section spécifique
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const scrollableDiv = document.querySelector(".overflow-scroll");

    if (section && scrollableDiv) {
      const sectionTop = section.offsetTop;
      scrollableDiv.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Fonction pour naviguer vers une page et scroller après la navigation
  const handleNavigationAndScroll = async (url: string, id: string) => {
    await router.push(url, { scroll: false }); // Naviguer vers la page sans scroll automatique
    setTimeout(() => scrollToSection(id), 100); // Scroller manuellement après un délai
  };

  return (
    <>
      <Button
        variant="default"
        className="inset-x-0 top-3 left-3"
        onClick={(e) => {
          e.preventDefault(); // Empêche le comportement par défaut
          handleNavigationAndScroll("/", "Projets"); // Navigue vers "/" et scrolle vers "Projets"
        }}
      >
        <ArrowLeftFromLine />
      </Button>
      <div className="mt-20 text-sidebar-foreground">
        <div id="Foliode"></div>
        <h2 className="ml-35 text-3xl mb-50">Dogon</h2>
        <div className="grid grid-col-2 grid-row-2 w-fit mx-auto gap-9 ">
          <div className="relative w-125 h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Peuple dogon </span> <br />
            <span className="text-xl">Baccalauréat Technologique</span>
            <span className="text-md">Spécialité gestion finance</span>
            <span className="text-xl"></span>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Next JS</Badge>
              <Badge variant="default">React</Badge>
              <Badge variant="default">Docker</Badge>
              <Badge variant="default">Symfony</Badge>
              <Badge variant="default">Next UI</Badge>
              <Badge variant="default">Tailwind</Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
