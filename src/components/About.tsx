"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import scalarLogo from "@/media/company_logo/scalar.jpg";
import sireloLogo from "@/media/company_logo/sirelo_logo.jpg";
import sagefundLogo from "@/media/company_logo/sagefund_logo.jpg";
import reddLogo from "@/media/company_logo/reddexperiencedesign_logo.jpg";
import stellosLogo from "@/media/company_logo/stellos_logo.jpg";
import coorpid from "@/media/company_logo/eccoorpid_logo.jpg";

const experiences = [
  {
    period: "Feb 2026 – Present",
    company: "StellOS (ShareP)",
    website: "https://sharep.io",
    linkedin: "",
    logo: stellosLogo,
    roles: ["Lead UI/UX Designer"],
    location: "Poland (Remote)",
    colorName: "red",
    color: "#f38ba8",
    keyPoints: [
      "Creation and maintaining design system",
      "Key UI/UX designer for mobile/web applications"
    ],
    bulletPoints: [
      "Building and maintaining design system across 3 product lines",
      "Leading end-to-end UX/UI for mobile and web applications",
      "Collaborating with cross-functional teams of 8+ members",
      "Conducting user research and usability testing"
    ]
  },
  {
    period: "Jun 2024 – Jan 2026",
    company: "Scalar (ZF Group)",
    website: "https://zf-scalar.com",
    linkedin: "https://linkedin.com/company/transics",
    logo: scalarLogo,
    roles: ["UI/UX Designer"],
    location: "Yepers, Belgium",
    colorName: "mauve",
    color: "#cba6f7",
    keyPoints: [
      "Sole designer with 10 engineers + PM",
      "200+ organisations served"
    ],
    bulletPoints: [
      "Owned end-to-end UX/UI design for asset tracking module in a B2B fleet management platform",
      "Designed complete mobile application experience for fleet management workflows",
      "Conducted 20-25 user interviews with fleet managers and field operators",
      "Led initial product redesign phase, contributed 4-5 new component patterns",
      "Facilitated design reviews, presented UX solutions to stakeholders"
    ]
  },
  {
    period: "Feb 2023 – Aug 2023",
    company: "Sirelo",
    website: "https://sirelo.com",
    linkedin: "",
    logo: sireloLogo,
    roles: ["UI/UX Designer"],
    location: "Rotterdam, Netherlands",
    colorName: "peach",
    color: "#fab387",
    keyPoints: [
      "Built design system from scratch",
      "+50% page visits, bounce 70%→54%"
    ],
    bulletPoints: [
      "Built scalable design system from scratch, created 10-15 reusable UI templates impacting 100+ pages",
      "Led full website redesign that increased monthly page visits by 50% (10K to 15K)",
      "Reduced bounce rate from 70% to 54%, improving user engagement",
      "Collaborated in 8-person cross-functional team to consolidate legacy designs"
    ]
  },
  {
    period: "Nov 2019 – Mar 2023",
    company: "Sagewealth",
    website: "https://sagewealth.eu",
    linkedin: "",
    logo: sagefundLogo,
    roles: ["UI/UX Designer", "Identity Designer"],
    location: "Germany (Remote)",
    colorName: "green",
    color: "#a6e3a1",
    keyPoints: [
      "Delivered end-to-end UX/UI",
      "$400K investment secured"
    ],
    bulletPoints: [
      "Delivered end-to-end UX/UI services covering brand identity, UX research, interaction design",
      "Contributed to securing $400K in investment funding through compelling design",
      "Designed user-centred investment experience, simplified ETF products for first-time investors",
      "Reduced cognitive load and improved onboarding flows"
    ]
  },
  {
    period: "Mar 2021 – May 2021",
    company: "CoorpID (ING Bank)",
    website: "https://www.coorpid.com",
    linkedin: "",
    logo: coorpid,
    roles: ["Service Design"],
    location: "Rotterdam",
    colorName: "blue",
    color: "#89b4fa",
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
  {
    period: "Dec 2018 – May 2019",
    company: "Redd Experience Design",
    website: "https://redd.in",
    linkedin: "https://linkedin.com/company/reddexperiencedesign",
    logo: reddLogo,
    roles: ["UX Intern"],
    location: "India",
    colorName: "teal",
    color: "#94e2d5",
    keyPoints: [
      "Design thinking foundation",
      "Started design journey"
    ],
    bulletPoints: [
      "Started design journey at Redd Experience Design",
      "Learned fundamentals of design thinking and user research methods",
      "Gained first-hand experience with empathy-driven design"
    ]
  },
];

const education = [
  {
    degree: "M. Interaction Technology",
    school: "University of Twente, Netherlands",
    year: "2020–2023",
    colorName: "blue",
    color: "#89b4fa",
  },
  {
    degree: "B.Tech Computer Science enginerring",
    school: "RIT, India",
    year: "2015–2019",
    colorName: "green",
    color: "#a6e3a1",
  },
];

function ExperienceCard({ 
  exp, 
  index,
  isExpanded, 
  onToggle 
}: { 
  exp: typeof experiences[0]; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cardClass = `retro-card-${exp.colorName}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      
      {/* Date on the line */}
      <div className="absolute left-0 top-2 -translate-x-1/2">
        <span 
          className="text-xs font-mono px-2 py-1 rounded-full whitespace-nowrap"
          style={{ 
            backgroundColor: 'rgba(30, 30, 46, 0.9)',
            border: `1px solid ${exp.period.includes('Present') ? '#a6e3a1' : exp.color}40`,
            color: exp.period.includes('Present') ? '#a6e3a1' : '#cdd6f4'
          }}
        >
          {exp.period.split('–')[0].trim()}
        </span>
      </div>

      <div 
        className={`${cardClass} rounded-xl p-4 mb-3 group cursor-pointer md:cursor-default`}
        style={{ 
          borderColor: isExpanded || false ? `${exp.color}50` : `${exp.color}25`
        }}
        onClick={onToggle}
      >
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* Left column - Logo, Company info & tags - 35% */}
          <div className="md:w-[35%] w-full flex gap-4">
            {/* Logo placeholder */}
            {exp.logo ? (
              <div className="w-10 h-10 rounded-lg shrink-0 overflow-hidden relative">
                <Image 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                style={{ 
                  backgroundColor: `${exp.color}20`,
                  border: `2px solid ${exp.color}`,
                  color: exp.color
                }}
              >
                {exp.company.split(' ')[0].slice(0, 2).toUpperCase()}
              </div>
            )}
            
            <div>
              {exp.website ? (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-semibold mb-1 hover:underline"
                  style={{ color: exp.color }}
                >
                  {exp.company}
                </a>
              ) : (
                <h4 className="text-base font-semibold mb-1" style={{ color: '#cdd6f4' }}>
                  {exp.company}
                </h4>
              )}
              <p className="text-xs" style={{ color: '#cdd6f4', opacity: 0.5 }}>
                {exp.location}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs font-mono" style={{ color: exp.period.includes('Present') ? '#a6e3a1' : '#cdd6f4', opacity: 0.6 }}>
                  {exp.period}
                </p>
                {exp.linkedin && (
                  <a 
                    href={exp.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: exp.color }}
                  >
                    LinkedIn
                  </a>
                )}
              </div>
              
              {/* Role tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.roles.map((role, i) => (
                  <span 
                    key={i}
                    className={`tag-${exp.colorName}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Key points & details - 65% */}
          <div className="md:w-[65%] md:text-right">
            {/* Compact view - key points */}
            <div className="space-y-1">
              {exp.keyPoints.map((point, i) => (
                <p 
                  key={i} 
                  className="text-sm flex items-start gap-2 font-medium"
                  style={{ color: exp.color }}
                >
                  <span className="w-4 shrink-0 mt-0" style={{ color: exp.color }}>•</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
            
            {/* Desktop only - always show bullet points */}
            <div className="hidden md:block mt-3 pt-3 border-t border-border/20">
              {exp.bulletPoints.map((point, i) => (
                <p 
                  key={i} 
                  className="text-xs flex items-baseline gap-2 mb-1"
                  style={{ color: '#cdd6f4', opacity: 0.8 }}
                >
                  <span className="w-4 shrink-0" style={{ color: exp.color }}>▸</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
            
            {/* Animated expanded view for mobile (click) */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 pt-3 border-t border-border/20"
            >
              {exp.bulletPoints.map((point, i) => (
                <p 
                  key={i} 
                  className="text-xs flex items-baseline gap-2 mb-1"
                  style={{ color: '#cdd6f4', opacity: 0.8 }}
                >
                  <span className="w-4 shrink-0" style={{ color: exp.color }}>▸</span>
                  <span>{point}</span>
                </p>
              ))}
            </motion.div>
            
            {/* Show more text button (mobile only) */}
            {!isExpanded && exp.bulletPoints.length > 0 && (
              <button className="md:hidden text-xs mt-2" style={{ color: '#cdd6f4', opacity: 0.5 }}>
                +{exp.bulletPoints.length} more details →
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TradingCard({ 
  exp, 
  index,
  isExpanded, 
  onToggle 
}: { 
  exp: typeof experiences[0]; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cardClass = `retro-card-${exp.colorName}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      
      {/* Date on the line */}
      <div className="absolute left-0 top-2 -translate-x-1/2">
        <span 
          className="text-xs font-mono px-2 py-1 rounded-full whitespace-nowrap"
          style={{ 
            backgroundColor: 'rgba(30, 30, 46, 0.9)',
            border: `1px solid ${exp.period.includes('Present') ? '#a6e3a1' : exp.color}40`,
            color: exp.period.includes('Present') ? '#a6e3a1' : '#cdd6f4'
          }}
        >
          {exp.period.split('–')[0].trim()}
        </span>
      </div>

      <div 
        className={`${cardClass} p-4 mb-3 group cursor-pointer md:cursor-default`}
        onClick={onToggle}
      >
        {/* Card Header - Logo Art Area */}
        <div className="flex items-start gap-4 mb-4">
          {exp.logo ? (
            <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
              <Image 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold shrink-0"
              style={{ 
                backgroundColor: `${exp.color}20`,
                color: exp.color
              }}
            >
              {exp.company.split(' ')[0].slice(0, 2).toUpperCase()}
            </div>
          )}
          
          {/* Card Title Area */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h4 className="text-lg font-bold" style={{ color: '#cdd6f4' }}>
                {exp.company}
              </h4>
              <span 
                className="text-xs px-2 py-1 rounded"
                style={{ backgroundColor: exp.color, color: '#1e1e2e' }}
              >
                {exp.roles[0]}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-xs" style={{ color: '#cdd6f4', opacity: 0.5 }}>
                {exp.location}
              </p>
              {exp.website && (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                  style={{ color: exp.color }}
                >
                  Website
                </a>
              )}
              {exp.linkedin && (
                <a 
                  href={exp.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                  style={{ color: exp.color }}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
          
          {/* Date Stamp Badge */}
          <div 
            className="text-xs font-mono px-2 py-1 rounded-lg"
            style={{ 
              backgroundColor: exp.period.includes('Present') ? '#a6e3a118' : `${exp.color}12`,
              color: exp.period.includes('Present') ? '#a6e3a1' : '#cdd6f4'
            }}
          >
            {exp.period}
          </div>
        </div>
        
        {/* Stats Section - Key Points */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {exp.keyPoints.map((point, i) => (
            <div 
              key={i}
              className="text-sm font-semibold px-3 py-2 rounded-lg"
              style={{ 
                backgroundColor: `${exp.color}18`
              }}
            >
              <span style={{ color: exp.color }}>{point}</span>
            </div>
          ))}
        </div>
        
        {/* Description Box */}
        <div 
          className="text-xs p-3 rounded-lg"
          style={{ 
            backgroundColor: 'rgba(30, 30, 46, 0.6)'
          }}
        >
          {exp.bulletPoints.map((point, i) => (
            <p 
              key={i} 
              className="flex items-baseline gap-2 mb-1 last:mb-0"
              style={{ color: '#cdd6f4', opacity: 0.8 }}
            >
              <span style={{ color: exp.color }}>▸</span>
              <span>{point}</span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 font-mono"
        >
          <span className="gradient-text-bold">About Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <div className="retro-card-mauve rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 to-transparent" />
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-surface-hover flex items-center justify-center text-6xl float-3d">
                  👾
                </div>
                <h3 className="text-xl font-semibold mb-1">Ninad "Nikel" Ketkale</h3>
                <p className="text-foreground/60 font-mono text-sm mb-4">UI/UX Designer</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <span className="tag-mauve">5+ Years</span>
                  <span className="tag-green">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I'm a UI/UX designer who loves turning complex problems into simple, elegant solutions. 
              With <span className="text-accent font-semibold">5+ years of experience</span> across B2B SaaS, fintech, and e-commerce, 
              I've learned that the best design happens when research meets creativity.
            </p>
            <p className="text-foreground/80">
              I thrive in the messy middle — that space between user research and final UI where 
              the real magic happens. Whether it's building design systems from scratch, running 
              20+ user interviews, or shipping work that actually moves metrics, I bring passion 
              and process to every project.
            </p>
            <p className="text-foreground/80">
              Currently based in <span className="text-peach font-medium">Roeselare, Belgium</span>, 
              always open to interesting projects and collaboration opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
                <span className="font-mono">Available for work</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <span>📍</span>
                <span>Belgium</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 id="experience" className="text-2xl font-bold mb-6 font-mono">
            <span className="text-green">›</span> Experience
            <span className="text-foreground/40 text-sm ml-2">Click to expand</span>
          </h3>
          
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <TradingCard
                key={index}
                exp={exp}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleExpand(index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 font-mono">
            <span className="text-blue">›</span> Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`retro-card-${edu.colorName} rounded-xl p-5 cursor-default`}
              >
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-foreground/60">{edu.school}</p>
                  <p className="text-xs text-foreground/40 font-mono mt-1">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}