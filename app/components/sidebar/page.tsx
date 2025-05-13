"use client";
import Link from "next/link";
import {
  Github,
  Home,
  CircleUserRound,
  Atom,
  BookPlus,
  NotebookTabs,
  Linkedin,
  FolderOpenDot,
} from "lucide-react";
import { usePathname } from "next/navigation";
import ModeToggle from "../ToggleDarkMod/ToggleDarkMod";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    id: "Home",
    icon: Home,
    url: "/",
  },
  {
    title: "About",
    id: "About",
    icon: CircleUserRound,
    url: "/",
  },
  {
    title: "Experiences",
    id: "Experiences",
    icon: Atom,
    url: "/#Experiences",
  },
  {
    title: "Skills",
    id: "Skills",
    icon: BookPlus,
    url: "/#Skills",
  },
  {
    title: "Projets",
    id: "Projets",
    icon: FolderOpenDot,
    url: "/#Projets",
  },
];

const itemsFooter = [
  {
    title: "Contact",
    id: "Search",
    icon: NotebookTabs,
  },
  {
    title: "Github",
    id: "Github",
    url: "https://github.com/Skiioo",
    icon: Github,
  },
  {
    title: "Linkedin",
    id: "Linkedin",
    url: "https://www.linkedin.com/in/sacha-merletti-840644256/",
    icon: Linkedin,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  // Fonction pour gérer le défilement vers une section spécifique
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const scrollableDiv = document.querySelector(".overflow-scroll");

    if (section && scrollableDiv) {
      const sectionTop = section.offsetTop - 100;
      scrollableDiv.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Fonction pour gérer les liens avec scroll
  const handleLinkClick = (url: string, id?: string) => {
    if (pathname !== url.split("#")[0]) {
      // Naviguer vers une autre page
      window.location.href = url;
    } else if (id) {
      // Empêcher le comportement par défaut et scroller manuellement
      scrollToSection(id);
    }
  };
  return (
    <Sidebar className="h-screen p-2">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between text-base">
            Portfolio
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarTrigger className="flex items-center justify-center w-8 h-8" />
              </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.url!, item.id);
                      }}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <ModeToggle />
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {itemsFooter.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
