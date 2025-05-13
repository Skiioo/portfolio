import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftFromLine } from "lucide-react";
export default function TreeSushi() {
  return (
    <>
      <Link href="/">
        <Button variant="default" className="inset-x-0 top-3 left-3">
          <ArrowLeftFromLine />
        </Button>
      </Link>
      <div className="mt-20 text-sidebar-foreground">
        <h2 className="ml-35 text-3xl mb-50">TreeSushi</h2>
        <div className="grid grid-col-2 grid-row-2 w-fit mx-auto gap-9 ">
          <div className="relative w-125  h-75 border border-gray-600 rounded-md flex flex-col p-3">
            <span className="text-2xl">TreeSushi</span> <br />
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
