export default function Parcours() {
  return (
    <>
      <div className="mt-100 mb-100 text-sidebar-foreground">
        <div id="Experiences"></div>

        <h2 className="ml-35 text-4xl">Mon Parcours</h2>

        <div className="flex justify-center mb-30 mt-25 text-sidebar-foreground">
          <div className="grid grid-cols-1 grid-rows-4 gap-4 mb-30 mt-25 text-sidebar-foreground w-125">
            <div className="w-full h-75 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-2xl">2022</span> <br />
              <span className="text-xl">Baccalauréat Technologique</span>
              <span className="text-md">Spécialité gestion finance</span>
              <span className="text-xl"></span>
            </div>
            <div className="w-full h-75 row-start-3 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2024</span> <br />
              <span className="text-xl">
                Deuxième année BUT MMI (développement web)
              </span>
            </div>
          </div>
          <div className="m-10 w-1 h-350 border border-gray-600 rounded-md flex bg-gray-600 "></div>
          <div className="grid grid-cols-1 grid-rows-4 gap-4 mb-30 mt-25 text-sidebar-foreground w-125 text-xl">
            <div className="w-full h-75 row-start-2 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2023</span> <br />
              <span className="text-xl">Première année BUT MMI</span>
            </div>
            <div className="w-full h-75 row-start-4 border border-gray-600 rounded-md flex flex-col p-3">
              <span className="text-xl">2025</span>
              <br />
              <span className="text-xl">
                Troisième année BUT MMI (développement web)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
