import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Drawer>
        <div className="flex justify-center text-sidebar-foreground mb-50 mt-50">
          <DrawerTrigger className="flex items-center border border-gray-600 bg-gray text-primary shadow-xs hover:bg-sidebar px-5 text-lg p-3 rounded-md">
            Contact
          </DrawerTrigger>
        </div>

        <DrawerContent>
          <DrawerHeader className="text-center">
            <DrawerTitle> © Merletti Sacha</DrawerTitle>
            <DrawerDescription>merletti.sacha@gmail.com</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex justify-center gap-4">
            <DrawerClose asChild>
              <Button variant="outline">Retour</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
