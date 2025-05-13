export default function TopPage() {
  return (
    <>
      <div id="Home"></div>
      <div className="flex items-center justify-center mb-30 mt-25 text-sidebar-foreground">
        <div className="mr-60">
          <h1 className="text-tiny">Sacha Merletti</h1>
          <h1 className="text-tiny">Développeur Web Junior</h1>
        </div>
        <div>
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
