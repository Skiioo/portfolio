export default function Skills() {
  return (
    <>
      <div id="Skills"></div>
      <div className="flex items-center mt-10 text-sidebar-foreground">
        <h2 className="ml-35 text-4xl mb-20 max-sm:ml-4 max-sm:mb-10">Skills</h2>
      </div>
      {/* Version Mobile */}
      <div className="hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:px-4 max-sm:mb-30 max-sm:mt-25">
        <div className="text-sidebar-foreground">
          <ul>
            <li className="text-xl max-sm:text-lg font-bold">Language</li>
            <br />
            <li className="text-sm">HTML</li>
            <li className="text-sm">CSS</li>
            <li className="text-sm">PHP</li>
            <li className="text-sm">SQL</li>
            <li className="text-sm">JavaScript</li>
            <li className="text-sm">TypeScript</li>
            <li className="text-sm">Java</li>
          </ul>
        </div>
        <div className="text-sidebar-foreground">
          <ul>
            <li className="text-xl max-sm:text-lg font-bold">Framework</li>
            <br />
            <li className="text-sm">React</li>
            <li className="text-sm">Next.js</li>
            <li className="text-sm">Angular</li>
            <li className="text-sm">Vue.js</li>
            <li className="text-sm">Express</li>
            <li className="text-sm">Symfony</li>
            <li className="text-sm">Tailwind CSS</li>
            <li className="text-sm">Bootstrap</li>
            <li className="text-sm">Next UI</li>
            <li className="text-sm">Shad CN</li>
          </ul>
        </div>
        <div className="text-sidebar-foreground">
          <ul>
            <li className="text-xl max-sm:text-lg font-bold">Outils</li>
            <br />
            <li className="text-sm">Git</li>
            <li className="text-sm">Webpack</li>
            <li className="text-sm">Docker</li>
            <li className="text-sm">Postman</li>
            <li className="text-sm">Figma</li>
          </ul>
        </div>
        <div className="text-sidebar-foreground">
          <ul>
            <li className="text-xl max-sm:text-lg font-bold">Database</li>
            <br />
            <li className="text-sm">PostgreSQL</li>
            <li className="text-sm">MySQL</li>
          </ul>
        </div>
      </div>

      {/* Version Desktop */}
      <div className="flex justify-center mb-30 mt-25 text-sidebar-foreground gap-30 max-sm:hidden">
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
