"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { CarouselSize } from "@/app/components/Carousel/page";
import { useRouter } from "next/navigation";

export default function Foliode() {
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
        <h2 className="ml-35 text-3xl mb-25">Foliode</h2>

        <div id="Foliode"></div>
        <div className="w-200 mx-auto">
          <p className="mb-25 text-md">
            Ce projet a pour ambition de permettre à des utilisateurs qui n'ont
            aucune compétences en développement informatique d'avoir un
            portfolio web depuis un formulaire. Lorsqu'un nouvel utilisateur
            arrive sur le site, un formulaire lui est soumis pour inscrire toute
            ces information pour ensuite lui générer son portfolio.{" "}
          </p>
        </div>

        <CarouselSize />
      </div>
    </>
  );
}
