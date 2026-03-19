export default function Parcours() {
  return (
    <>
      <div className="mt-100 mb-50 text-sidebar-foreground">
        <div id="Experiences"></div>

        <h2 className="ml-35 text-4xl">Mon Parcours</h2>

        <div className="flex justify-center mb-30 mt-25 text-sidebar-foreground">
          <div className="grid grid-cols-1 grid-rows-5 gap-4 mb-30 mt-25 text-sidebar-foreground w-125 ">
            <div className="w-full h-75 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2021 - 2022</span> <br />
              <span className="text-xl">
                Obtention d'un baccalauréat technologique avec mention
              </span>
              <span className="text-lg">Spécialité gestion finance</span>
              <span className="text-base">
                Lycée Bossuet (Enseignement Catholique privé Meldois)
              </span>
            </div>
            <div className="w-full h-75 row-start-3 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2023 - 2024</span> <br />
              <span className="text-xl">Université Gustave Eiffel</span>
              <span className="text-lg">2ème année - BUT MMI</span>
              <br />
              <p className="text-sm text-justify">
                La deuxième année de BUT MMI est plus spécialisée, elle permet
                de se concentrer sur le développement web, la création vidéo et
                l'UX design. J'ai pu découvrir de nombreuses technologies et
                langages comme Angular ou encore Tailwind.
              </p>
            </div>
            <div className="w-full h-75 row-start-5 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2026 - 2028</span> <br />
              <span className="text-xl">ESGI Paris</span>
              <span className="text-md">Master Ingénierie du web</span>
              <br />
              <p className="text-sm text-justify">
                J'ai intégré l'école ESGI Paris pour continuer dans ce domaine
                et devenir développeur full-stack.
              </p>
            </div>
          </div>
          <div className="m-10 w-1 h-440 border border-gray-600 rounded-md flex bg-gray-600 "></div>
          <div className="grid grid-cols-1 grid-rows-5 gap-4 mb-30 mt-25 text-sidebar-foreground w-125 text-xl">
            <div className="w-full h-75 row-start-2 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2022 - 2023</span> <br />
              <span className="text-xl">Université Gustave Eiffel</span>
              <span className="text-lg">1ère année - BUT MMI</span>
              <br />
              <p className="text-sm text-justify">
                La première année de BUT MMI est très large en terme de sujer
                abordé, elle permet de découvrir le développement web, la
                communication, le design, la gestion de projet, le marketing et
                la création graphique.
              </p>
            </div>
            <div className="w-full h-75 row-start-4 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2024 - 2025</span> <br />
              <span className="text-xl">Université Gustave Eiffel</span>
              <span className="text-lg">3ème année - BUT MMI</span>
              <span className="text-base">Entreprise : Urssaf</span>
              <br />
              <p className="text-sm text-justify">
                Cette dernière année de mon bachelor en alternance m'as fais
                montée en compétence sur des framework front-end tels que NextJS
                ou encore React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
