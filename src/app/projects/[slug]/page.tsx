import { getProjectBySlug, getAllProjectSlugs, getAllProjects } from "@/lib/projects";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import sireloLogo from "@/media/company_logo/sirelo_logo.jpg";
import sagefundLogo from "@/media/company_logo/sagefund_logo.jpg";
import coorpidLogo from "@/media/company_logo/eccoorpid_logo.jpg";
import Lightbox from "@/components/Lightbox";
import ReadingProgress from "@/components/ReadingProgress";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

const tagColorMap: Record<string, string> = {
  "UX Research": "mauve", "UI Design": "mauve", "Interaction Design": "mauve",
  "Service Design": "blue", "Information Architecture": "blue",
  "Brand Identity": "peach", "Design System": "peach", "Redesign": "peach",
  "Case Study": "green", "Design Challenge": "green",
  "Mobile App": "teal", "Web App": "teal", "Website": "teal",
  "Fintech": "yellow", "E-commerce": "yellow", "Banking": "blue",
  "Healthcare": "green", "Logistics": "peach", "Media": "mauve",
};

function getTagColor(tag: string): string {
  return tagColorMap[tag] || "mauve";
}

const clientExperienceMap: Record<string, {
  logo: StaticImageData;
  company: string;
  colorName: string;
  color: string;
  period: string;
  roles: string[];
  location: string;
  keyPoints: string[];
}> = {
  Sirelo: {
    logo: sireloLogo, company: "Sirelo", colorName: "peach", color: "#fab387",
    period: "Feb 2023 – Aug 2023", roles: ["UI/UX Designer"], location: "Rotterdam, Netherlands",
    keyPoints: ["Built design system from scratch", "+50% page visits, bounce 70%→54%"],
  },
  "Sirelo (ShareP)": {
    logo: sireloLogo, company: "Sirelo", colorName: "peach", color: "#fab387",
    period: "Feb 2023 – Aug 2023", roles: ["UI/UX Designer"], location: "Rotterdam, Netherlands",
    keyPoints: ["Built design system from scratch", "+50% page visits, bounce 70%→54%"],
  },
  "CoorpID (ING Bank)": {
    logo: coorpidLogo, company: "CoorpID (ING Bank)", colorName: "teal", color: "#94e2d5",
    period: "Mar 2021 – May 2021", roles: ["Service Design"], location: "Rotterdam",
    keyPoints: ["Service design for B2B onboarding", "B2B onboarding flow"],
  },
  Sagefund: {
    logo: sagefundLogo, company: "Sagefund", colorName: "green", color: "#a6e3a1",
    period: "Nov 2019 – Mar 2023", roles: ["UI/UX Designer", "Identity Designer"], location: "Germany (Remote)",
    keyPoints: ["Delivered end-to-end UX/UI", "$400K investment secured"],
  },
};

function estimateReadTime(html: string): string {
  const words = html.replace(/<\/?[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function ExperienceCard({ experience }: { experience: typeof clientExperienceMap.Sirelo }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-2">
      <p className="text-[10px] font-mono text-foreground/35 tracking-widest mb-3">RELATED EXPERIENCE</p>
      <div
        className={`retro-card-${experience.colorName} rounded-xl p-5`}
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg shrink-0 overflow-hidden relative">
            <Image src={experience.logo} alt={`${experience.company} logo`} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold mb-0.5" style={{ color: experience.color }}>
              {experience.company}
            </h3>
            <p className="text-[11px] font-mono text-foreground/50">
              {experience.period} · {experience.location}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {experience.roles.map((role, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${experience.color}18`, color: experience.color }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {experience.keyPoints.map((point, i) => (
            <div
              key={i}
              className="text-xs px-3 py-2 rounded-lg"
              style={{ backgroundColor: `${experience.color}12` }}
            >
              <span style={{ color: experience.color }}>{point}</span>
            </div>
          ))}
        </div>
        <Link
          href="/#experience"
          className="text-xs mt-4 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
          style={{ color: experience.color }}
        >
          <span>View full experience</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const relatedExperience = clientExperienceMap[project.client];
  const readTime = estimateReadTime(project.contentHtml || "");
  const year = (() => { const y = new Date(project.date).getFullYear(); return isNaN(y) ? "—" : String(y); })();

  return (
    <article className="min-h-screen">
      <ReadingProgress />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        {project.thumbnail && (
          <div className="absolute inset-0">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
            {/* Scanline overlay on hero image */}
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6">
          <div className="max-w-3xl mx-auto w-full">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground/50 hover:text-accent transition-colors mb-6 group"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              <span>All Projects</span>
            </Link>

            {/* Tags — design system styled */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className={`tag-${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-mono">
              {project.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-mono">
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: "rgba(203, 166, 247, 0.15)", border: "1px solid rgba(203, 166, 247, 0.3)", color: "#cba6f7" }}
              >
                {project.client}
              </span>
              <span className="text-foreground/40">{year}</span>
              <span className="text-foreground/40">·</span>
              <span className="text-foreground/40">{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related experience */}
      {relatedExperience && (
        <div className="pt-8">
          <ExperienceCard experience={relatedExperience} />
        </div>
      )}

      {/* Article */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Lightbox>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: project.contentHtml || "" }}
          />
        </Lightbox>
      </div>

      {/* Bottom navigation */}
      <div
        className="border-t mt-4 py-8 px-6"
        style={{ borderColor: "rgba(108, 112, 134, 0.2)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-sm font-mono text-foreground/50 hover:text-accent transition-colors"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              <div>
                <p className="text-[10px] tracking-widest text-foreground/30 mb-0.5">PREVIOUS</p>
                <p className="text-foreground/70 group-hover:text-accent transition-colors line-clamp-1 max-w-[200px]">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/work"
            className="text-[11px] font-mono text-foreground/35 hover:text-accent transition-colors px-4 py-2 rounded-lg"
            style={{ border: "1px solid rgba(108, 112, 134, 0.18)" }}
          >
            All Work
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-sm font-mono text-foreground/50 hover:text-accent transition-colors text-right"
            >
              <div>
                <p className="text-[10px] tracking-widest text-foreground/30 mb-0.5">NEXT</p>
                <p className="text-foreground/70 group-hover:text-accent transition-colors line-clamp-1 max-w-[200px]">
                  {nextProject.title}
                </p>
              </div>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
