import Meteors from "@/components/ui/meteors"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Linkedin, Mail, Send, Twitter } from "lucide-react";

const PROJECTS = [
  {
    image: '', 
    url: 'https://foodmenu.ng',
    title: 'Foodmenu',
    description: 'A digital food menu platform for restaurants and food cafeterai. Not only does it replace an actual food menu but also serves as a listing, indexer platform for diners to find meals and foods around their current location. '
  },
  {
    image: '', 
    url: 'https://houz.ng',
    title: 'Houz',
    description: 'A user-friendly and innovative marketplace designed to simplify your apartment search. You  can Browse a wide range of listings and access detailed insights to make your search effortless'
  },
  {
    image: '', 
    url: 'https://tablebin.app',
    title: 'Tablebin',
    description: 'An api based table dump platform for application output. its like pastebin but for tables. Allows you to programmatically create tables with rich features and formatting. Can also download, embed and share tables  and its underlying data'
  }
]
export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-transparent via-transparent to-slate-900 ">
      <div className="absolute overflow-hidden w-full h-screen z-10 bg-transparent ">
        <Meteors />
      </div>
      <div className="w-full left-4 top-4 flex justify-between mb-8 p-4 z-20">
        <span>@boldrack</span>

        <div className="socials flex items-center gap-4">
          <RainbowButton className="mr-4"><a className="text-white text-sm" href="#" download>my Resume</a></RainbowButton>
          <a href="https://twitter.com/boldrack" target="_blank">
            <span><Twitter className="stroke-1"/></span>
          </a>
          <a href="https://www.linkedin.com/in/taiwo-ajiboye/" target="_blank">
            <span><Linkedin className="stroke-1"/></span>
          </a>
          <a href="mailto:boldrackdev@gmail.com" target="_blank">
            <span><Mail className="stroke-1"/></span>
          </a>
          <a href="https://t.me/boldrack" target="_blank">
            <span><Send className="stroke-1"/></span>
          </a>
        </div>
      </div>
      <main className="flex flex-col p-8 ">
        <section className="font-mono flex flex-col gap-2">
          <p>I'm a fullstack engineer with over 7 years professional experience in the field </p>
          <p> I always say I'm a core Pythonista <img src="https://cdn3.emoji.gg/emojis/1887_python.png" width="16px" height="16px" alt="python" className="inline"/>
          &nbsp;and a very good Rusticean 🦀 </p>
          <p>I play Call Of Duty as I previously aspired to be a Marine. I love sprinting and still weighs 216 pounds 😁</p>
          <p>Lastly, I love vim. You'd love it as well, Give it a shot</p>
        </section>

        <section className="mt-8">
          <h4 className="text-lg underline-offset-8 underline decoration-dashed">Recent Projects</h4>
          <div className="projects flex flex-col gap-4 mt-8">
            {PROJECTS.map(project => 
            <div key={project.title} className="project-item flex border border-slate-300 rounded-md w-full h-48 overflow-hidden">
              <div className="logo basis-1/2 border flex items-center justify-center">{project.title}</div>
              <div className="details basis-1/2 p-4 space-y-4">
              <p>
                <a href={`${project.url}`} className="underline underline-offset-2" target="_blank">
                  {project.title}<span> </span>
                </a>
              </p>
              <p className="text-sm text-slate-400">{project.description}</p>
              </div>
            </div>
            )}
          </div>
        </section>

      </main>
      <div className="grow"></div>
      <footer className="">
        <div className="flex bg-slate-900 w-full">
          <div className="bg-cyan-900 text-slate-200 p-1 text-sm mr-2">NORMAL</div>
          <div>
            <span>
              <span className="text-green-500 mr-1">:</span>
              <span className="text-slate-100 mr-2">recording</span>
              <span className="text-red-400">@q</span>
            </span>
          </div>
        </div>

      </footer>
    </div>
  );
}
