import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselThreeSushi() {
  const picture = [
    "/img/TreeSushi/TreeSushi.png",
    "/img/TreeSushi/treesushi2.png",
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {picture.map((src, index) => (
              <CarouselItem key={index} className="md:basis-130 lg:basis-225">
                <Card>
                  <CardContent className="flex items-center justify-center p-2 ">
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
