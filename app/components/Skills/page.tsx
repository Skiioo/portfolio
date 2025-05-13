export default function Skills() {
  return (
    <>
      <div id="Skills"></div>
      <div className="flex items-center mt-10 text-sidebar-foreground">
        <h2 className="ml-35 text-4xl mb-20">Skills</h2>
      </div>
      <div className="flex justify-center mb-30 mt-25 text-sidebar-foreground gap-30">
        <div>
          <ul>
            <li className="text-2xl">Language</li>
            <br />
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-2xl">Framework</li>
            <br />
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>Express</li>
            <li>Symfony</li>

            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Next UI</li>
            <li>Shad CN</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-2xl">Outils</li>
            <br />
            <li>Git</li>
            <li>Webpack</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-2xl">Database</li>
            <br />
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}
