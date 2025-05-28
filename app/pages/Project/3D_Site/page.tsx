"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";
import CarouselThreeJS from "@/app/components/CarouselThreeJS/page";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function SiteCulture() {
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
        <h2 className="ml-35 text-3xl mb-10">Site 3D - Peuple Dogon </h2>
        <Link href="https://sae-402-remifaupinsachamerletti.vercel.app/acceuil">
          <Button variant="default" className="ml-35 mb-30">
            <LogIn />
            Lien vers le site
          </Button>
        </Link>

        <div id="Foliode"></div>
        <div className="w-200 mx-auto">
          <p className="mb-10 text-md">
            Ce projet consistais à mettre en lumière une culture méconnue. Par
            deux nous avons choisi la culture Dogon, une ethnie du Mali. Nous
            avons donc créé un site web constitué d'un article qui parle de
            l'objet 3D qui a été modélisé sur blender et ensuite intégré dans la
            site.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 inset-x-0  w-fit mb-15 mx-auto">
          <Badge variant="default">Angular</Badge>
          <Badge variant="default">Tailwind</Badge>
          <Badge variant="default">Three JS</Badge>
          <Badge variant="default">Blender</Badge>
        </div>

        <CarouselThreeJS />
      </div>
    </>
  );
}
