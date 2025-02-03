import Link from "next/link";
import Meteors from "@/components/ui/meteors"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Linkedin, Mail, Send, Twitter } from "lucide-react";
import { PROJECTS } from "./_components/mock";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-transparent via-transparent to-slate-900 ">
      <div className="absolute overflow-hidden w-full h-screen z-10 bg-transparent ">
        <Meteors />
      </div>
      <div className="w-full left-4 top-4 flex justify-between items-center mb-8 p-2 md:p-4 z-20">
        <span className="font-mono">@boldrack</span>

        <div className="socials flex items-center gap-4">
          <RainbowButton className="mr-2 md:mr-4 sm:px-4 sm:py-2"><a className="text-white text-xs md:text-md" href="#" download>Resume</a></RainbowButton>
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
      <main className="flex flex-col p-4 md:p-8 ">
        <section className="font-mono flex flex-col gap-4">
            <p>I'm Taiwo -– a software developer who loves building bridges between ideas and technology. I specialize in turning complex problems into streamlined, user-friendly solutions, crafting code that’s both efficient and adaptable.</p>

            <p>My <Link href="https://s3.us-east-1.amazonaws.com/boldrack.dev/Taiwo+Ajiboye+Resume+25.pdf" download>
            resume</Link> offers a deeper look into my skills, experience, and the value I can add to your team.</p>

            <p>Check out some of my work below – each project is a step in my journey toward mastering the art of software development. Let’s build something amazing together! 🚀</p>
        </section>
        

        <section className="mt-8">
          <h4 className="text-lg underline-offset-8 underline decoration-dashed">Recent Projects</h4>
          <div className="projects flex flex-col gap-4 mt-8">
            {PROJECTS.map(project => 
            <div key={project.title} className="project-item flex border border-slate-300 rounded-md w-full md:h-48 overflow-hidden">
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
