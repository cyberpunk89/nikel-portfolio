import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import WorkFilter from "@/components/WorkFilter";

export const metadata = {
  title: "Work | Nikel - UX/UI Designer",
  description: "Browse my portfolio of UX/UI design projects and case studies.",
};

export default async function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link 
            href="/#work" 
            className="text-sm font-mono text-foreground/60 hover:text-accent transition-colors mb-4 inline-block"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text-bold">Selected Work</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl mb-8">
            A collection of projects that showcase my approach to design problems. Each one taught me something new about users, systems, and the messy middle where great design happens.
          </p>

          <div className="mt-8 mb-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <p className="text-foreground/80 mb-4">
              More projects coming soon. I'm currently porting older case studies. In the meantime, you can see my full portfolio on Medium and Behance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://medium.com/@nikel_design"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Medium
              </a>
              <a
                href="https://www.behance.net/nikeldesign"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.970c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.391c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
                Behance
              </a>
            </div>
          </div>

          <WorkFilter projects={projects} />

          <p className="mt-8 text-sm text-foreground/40 font-mono text-center">
            Each project has a story. Click in to read it.
          </p>
        </div>
      </div>
    </main>
  );
}