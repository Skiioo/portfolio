import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SectionText() {
  return (
    <>
      <div className="flex mx-auto border border-gray-600 rounded-md p-4 items-center justify-center mb-50 mt-50 text-sidebar-foreground w-fit max-sm:w-full max-sm:h-fit max-sm:mt-10 max-sm:px-2">
        <p className="text-justify text-sidebar-foreground w-200 text-center text-xl max-sm:text-lg ">
          Je suis un développeur full - stack passionné par la création de sites
          et d'applications web. J'ai acquis des compétences solides en HTML,
          CSS et JavaScript, ainsi qu'une expérience pratique dans le
          développement front-end et back-end avec des technologies telles que
          React, Next.js, Node.js, etc. Je suis enthousiaste à l'idée de relever
          de nouveaux défis et de contribuer à des projets innovants.
        </p>
      </div>
      <div className="flex justify-center mt-25 text-sidebar-foreground">
        <Link href="img/CV/CV_Merletti_Sacha.pdf" target="_blank">
          <Button className="px-10 text-lg p-7">Mon CV</Button>
        </Link>
      </div>
    </>
  );
}
