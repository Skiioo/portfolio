import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Projets() {
  return (
    <>
      <div className="mt-110 text-sidebar-foreground mb-100">
        <div id="Projets"></div>
        <h2 className="ml-35 text-4xl mb-50 max-sm:ml-4 max-sm:mb-25">Projets</h2>
        {/* Version Mobile */}
        <div className="hidden max-sm:grid max-sm:grid-cols-1 max-sm:gap-6 max-sm:w-full max-sm:px-2">
          <div className="relative w-full h-fit border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-xl max-sm:text-lg">Site 3D - Peuple Dogon</span> <br />
            <p className="text-sm">
              L'objectif de ce projet était de documenter une population très
              peu connu, le peuple Dogon. Le site est une vitrine de ce peuple
              et de sa culture avec un article et l'intégration 3D d'un objet
              culte des Dogon.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 mb-2">
              <Badge variant="default" className="text-xs">Angular</Badge>
              <Badge variant="default" className="text-xs">Tailwind</Badge>
              <Badge variant="default" className="text-xs">Three JS</Badge>
              <Badge variant="default" className="text-xs">Blender</Badge>
            </div>
            <Link href="../../pages/Project/3D_Site/">
              <Button variant="default" className="w-full mt-2">
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-full h-fit border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-xl max-sm:text-lg">Foliode</span> <br />
            <p className="text-sm">
              Ce projets avait pour ambition de développer un outils qui permet
              à des créatifs de générer son propre portfolio web sans avoir
              besoins de compétence en informatique.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 mb-2">
              <Badge variant="default" className="text-xs">Next JS</Badge>
              <Badge variant="default" className="text-xs">React</Badge>
              <Badge variant="default" className="text-xs">Docker</Badge>
              <Badge variant="default" className="text-xs">Three JS</Badge>
              <Badge variant="default" className="text-xs">Symfony</Badge>
              <Badge variant="default" className="text-xs">Next UI</Badge>
              <Badge variant="default" className="text-xs">Tailwind</Badge>
            </div>
            <Link href="../../pages/Project/Foliode">
              <Button variant="default" className="w-full mt-2">
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-full h-fit border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-xl max-sm:text-lg">Treesushi</span> <br />
            <p className="text-sm">
              Ce projet a pour but de créer un site de vente de sushi en ligne
              avec un système de commande. C'était le premier projet qui
              utilisait une base de donnée MySQL relationnelle.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 mb-2">
              <Badge variant="default" className="text-xs">Angular</Badge>
              <Badge variant="default" className="text-xs">PHP</Badge>
              <Badge variant="default" className="text-xs">Tailwind</Badge>
            </div>
            <Link href="../../pages/Project/TreeSushi">
              <Button variant="default" className="w-full mt-2">
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-full h-fit border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-xl max-sm:text-lg">Ce Portfolio</span> <br />
            <p className="text-sm">
              Ce projet m'a permis de renforcer mes compétences avec Next JS
              tous en découvrant Shad CN, une librairie de composants React.
            </p>
            <div className="flex flex-wrap gap-2 mt-3 mb-2">
              <Badge variant="default" className="text-xs">Next JS</Badge>
              <Badge variant="default" className="text-xs">Shad CN</Badge>
            </div>
          </div>
        </div>

        {/* Version Desktop */}
        <div className="grid grid-cols-2 grid-rows-2 w-fit mx-auto gap-9 max-sm:hidden">
          <div className="relative w-125 h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Site 3D - Peuple Dogon</span> <br />
            <p className="text-md">
              L'objectif de ce projet était de documenter une population très
              peu connu, le peuple Dogon. Le site est une vitrine de ce peuple
              et de sa culture avec un article et l'intégration 3D d'un objet
              culte des Dogon.
            </p>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Angular</Badge>
              <Badge variant="default">Tailwind</Badge>
              <Badge variant="default">Three JS</Badge>
              <Badge variant="default">Blender</Badge>
            </div>
            <Link href="../../pages/Project/3D_Site/">
              <Button
                variant="default"
                className="absolute inset-x-0 bottom-3 ml-80 right-3"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-125 col-start-2 h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Foliode</span> <br />
            <p className="text-md">
              Ce projets avait pour ambition de développer un outils qui permet
              à des créatifs de générer son propre portfolio web sans avoir
              besoins de compétence en informatique.
            </p>
            <span className="text-xl"></span>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Next JS</Badge>
              <Badge variant="default">React</Badge>
              <Badge variant="default">Docker</Badge>
              <Badge variant="default">Three JS</Badge>
              <Badge variant="default">Symfony</Badge>
              <Badge variant="default">Next UI</Badge>
              <Badge variant="default">Tailwind</Badge>
            </div>
            <Link href="../../pages/Project/Foliode">
              <Button
                variant="default"
                className="absolute inset-x-0 bottom-3 ml-80 right-3"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-125 h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Treesushi</span> <br />
            <p className="text-md">
              Ce projet a pour but de créer un site de vente de sushi en ligne
              avec un système de commande. C'était le premier projet qui
              utilisait une base de donnée MySQL relationnelle.
            </p>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Angular</Badge>
              <Badge variant="default">PHP</Badge>
              <Badge variant="default">Tailwind</Badge>
            </div>
            <Link href="../../pages/Project/TreeSushi">
              <Button
                variant="default"
                className="absolute inset-x-0 bottom-3 ml-80 right-3"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative w-125 h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Ce Portfolio</span> <br />
            <p className="text-md">
              Ce projet m'a permis de renforcer mes compétences avec Next JS
              tous en découvrant Shad CN, une librairie de composants React.
            </p>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Next JS</Badge>
              <Badge variant="default">Shad CN</Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
