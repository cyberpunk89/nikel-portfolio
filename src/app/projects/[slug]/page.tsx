import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import sireloLogo from "@/media/company_logo/sirelo_logo.jpg";
import sagefundLogo from "@/media/company_logo/sagefund_logo.jpg";
import coorpidLogo from "@/media/company_logo/eccoorpid_logo.jpg";
import Lightbox from "@/components/Lightbox";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
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
  bulletPoints: string[];
}> = {
  Sirelo: {
    logo: sireloLogo,
    company: "Sirelo",
    colorName: "peach",
    color: "#fab387",
    period: "Feb 2023 – Aug 2023",
    roles: ["UI/UX Designer"],
    location: "Rotterdam, Netherlands",
    keyPoints: [
      "Built design system from scratch",
      "+50% page visits, bounce 70%→54%"
    ],
    bulletPoints: [
      "Built scalable design system from scratch, created 10-15 reusable UI templates impacting 100+ pages",
      "Led full website redesign that increased monthly page visits by 50%"
    ]
  },
  "Sirelo (ShareP)": {
    logo: sireloLogo,
    company: "Sirelo",
    colorName: "peach",
    color: "#fab387",
    period: "Feb 2023 – Aug 2023",
    roles: ["UI/UX Designer"],
    location: "Rotterdam, Netherlands",
    keyPoints: [
      "Built design system from scratch",
      "+50% page visits, bounce 70%→54%"
    ],
    bulletPoints: [
      "Built scalable design system from scratch, created 10-15 reusable UI templates impacting 100+ pages",
      "Led full website redesign that increased monthly page visits by 50%"
    ]
  },
  "CoorpID (ING Bank)": {
    logo: coorpidLogo,
    company: "CoorpID (ING Bank)",
    colorName: "teal",
    color: "#94e2d5",
    period: "Mar 2021 – May 2021",
    roles: ["Service Design"],
    location: "Rotterdam",
    keyPoints: [
      "Service design for B2B onboarding",
      "B2B onboarding flow"
    ],
    bulletPoints: [
      "Service design for B2B onboarding at ING Bank",
      "Mapped customer journeys, identified pain points",
      "Proposed digital solutions for onboarding improvements"
    ]
  },
  Sagefund: {
    logo: sagefundLogo,
    company: "Sagefund",
    colorName: "green",
    color: "#a6e3a1",
    period: "Nov 2019 – Mar 2023",
    roles: ["UI/UX Designer", "Identity Designer"],
    location: "Germany (Remote)",
    keyPoints: [
      "Delivered end-to-end UX/UI",
      "$400K investment secured"
    ],
    bulletPoints: [
      "Delivered end-to-end UX/UI services covering brand identity, UX research, interaction design",
      "Contributed to securing $400K in investment funding through compelling design"
    ]
  },
};

function ExperienceCard({ experience }: { experience: typeof clientExperienceMap.Sirelo }) {
  const cardClass = `retro-card-${experience.colorName}`;
  
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <p className="text-xs font-mono text-foreground/40 mb-3">Related Experience</p>
      <div className={`${cardClass} rounded-xl p-5`}>
        <div className="flex items-start gap-4">
          {/* Logo */}
          {experience.logo ? (
            <div className="w-12 h-12 rounded-lg shrink-0 overflow-hidden relative">
              <Image 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div 
              className="w-12 h-12 rounded-lg shrink-0"
              style={{ backgroundColor: experience.color }}
            />
          )}
          
          {/* Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold" style={{ color: experience.color }}>
              {experience.company}
            </h3>
            <p className="text-xs font-mono mt-1" style={{ color: '#cdd6f4', opacity: 0.6 }}>
              {experience.period} • {experience.location}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {experience.roles.map((role, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${experience.color}20`,
                    color: experience.color
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Key points */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {experience.keyPoints.map((point, i) => (
            <div 
              key={i}
              className="text-xs px-3 py-2 rounded-lg"
              style={{ 
                backgroundColor: `${experience.color}12`
              }}
            >
              <span style={{ color: experience.color }}>{point}</span>
            </div>
          ))}
        </div>
        
        {/* Link to full experience */}
        <Link 
          href="/#experience"
          className="text-xs mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all"
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

  if (!project) {
    notFound();
  }

  const relatedExperience = clientExperienceMap[project.client];

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {project.thumbnail && (
          <div className="absolute inset-0">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          </div>
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6">
          <div className="max-w-4xl mx-auto w-full">
            <Link
              href="/work"
              className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground mb-6 transition-colors"
            >
              ← Back to Work
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/80">
              <span className="font-medium">{project.client}</span>
              <span>•</span>
            <span className="font-mono text-foreground/60">
              {(() => {
                const year = new Date(project.date).getFullYear();
                return isNaN(year) ? "—" : year;
              })()}
            </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Experience Card */}
      {relatedExperience && (
        <ExperienceCard experience={relatedExperience} />
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Lightbox>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: project.contentHtml || "" }}
          />
        </Lightbox>
      </div>
    </article>
  );
}