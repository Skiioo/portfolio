import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Projets() {
  return (
    <>
      <div className="mt-110 text-sidebar-foreground ">
        <div id="Projets"></div>
        <h2 className="ml-35 text-4xl mb-50">Projets</h2>
        <div className="grid grid-col-2 grid-row-2 w-fit mx-auto gap-9 ">
          <div className="relative w-125  h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">Site 3D - Peuple Dogon</span> <br />
            <p className="text-md">
              L'objectif de ce projet était de documenter une population très
              peu connu, le peuple Dogon. Le site est une vitrine de ce peuple
              et de sa culture avec un article et l'intégration 3D d'un objet
              culte des Dogon.
            </p>
            <div className="absolute flex flex-wrap gap-3 inset-x-0 bottom-3 left-3 w-80">
              <Badge variant="default">Angular</Badge>
              <Badge variant="default">Three JS</Badge>
              <Badge variant="default">Tailwind</Badge>
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
