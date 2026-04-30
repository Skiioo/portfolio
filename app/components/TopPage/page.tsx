export default function TopPage() {
  return (
    <>
      <div id="Home"></div>
      <div className="flex items-center justify-center mb-30 mt-25 text-sidebar-foreground max-sm:gap-20 max-sm:flex-col max-sm:mt-10">
        <div className="mr-60 max-sm:mr-0 ">
          <h1 className="text-tiny">Sacha Merletti</h1>
          <h1 className="text-tiny">Développeur full - stack</h1>
        </div>
        <div className="max-sm:flex justify-center">
          <img
            className="rounded-4xl w-[200px] h-auto"
            src="/img/photo/Photo_Merletti_Sacha.jpg"
            alt="Photo"
          />
        </div>
      </div>
    </>
  );
}
