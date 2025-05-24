"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";

import CarouselThreeSushi from "@/app/components/CarouselTreeSushi/page";
export default function TreeSushi() {
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
        <h2 className="ml-35 text-3xl mb-25">Tree Sushi</h2>

        <div id="Foliode"></div>
        <div className="w-200 mx-auto">
          <p className="mb-10 text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            nobis ea esse fugiat doloremque labore eveniet facilis quaerat alias
            nulla. Exercitationem asperiores dolor esse unde quidem, facilis
            voluptatibus iusto est.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 inset-x-0  w-fit mb-15 mx-auto">
          <Badge variant="default">Angular</Badge>
          <Badge variant="default">Tailwind</Badge>
          <Badge variant="default">Tailwind</Badge>
        </div>

        <CarouselThreeSushi />
      </div>
    </>
  );
}
