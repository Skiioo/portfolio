"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import CarouselFoliode from "@/app/components/Carousel/page";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";

export default function Foliode() {
  const router = useRouter();

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

  const handleNavigationAndScroll = async (url: string, id: string) => {
    await router.push(url, { scroll: false });
    setTimeout(() => scrollToSection(id), 100);
  };

  return (
    <>
      <Button
        variant="default"
        className="inset-x-0 top-3 left-3"
        onClick={(e) => {
          e.preventDefault();
          handleNavigationAndScroll("/", "Projets");
        }}
      >
        <ArrowLeftFromLine />
      </Button>
      <div className="mt-20 text-sidebar-foreground">
        <h2 className="ml-35 text-3xl mb-25">Foliode</h2>

        <div id="Foliode"></div>
        <div className="w-200 mx-auto">
          <p className="mb-10 text-md">
            Ce projet a pour ambition de permettre à des utilisateurs qui n'ont
            aucune compétences en développement informatique d'avoir un
            portfolio web depuis un formulaire. Lorsqu'un nouvel utilisateur
            arrive sur le site, un formulaire lui est soumis pour inscrire toute
            ces information pour ensuite lui générer son portfolio.{" "}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 inset-x-0  w-fit mb-15 mx-auto">
          <Badge variant="default">Next JS</Badge>
          <Badge variant="default">React</Badge>
          <Badge variant="default">Docker</Badge>
          <Badge variant="default">Three JS</Badge>
          <Badge variant="default">Symfony</Badge>
          <Badge variant="default">Next UI</Badge>
          <Badge variant="default">Tailwind</Badge>
        </div>

        <CarouselFoliode />
      </div>
    </>
  );
}
