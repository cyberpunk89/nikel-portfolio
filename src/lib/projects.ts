import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  client: string;
  date: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  contentHtml?: string;
  hidden?: boolean;
}

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  isoDate: string;
  thumbnail?: string;
}

const MEDIUM_RSS_URL = "https://medium.com/feed/@nikel_design";

export async function getMediumArticles(): Promise<MediumArticle[]> {
  try {
    const response = await fetch(MEDIUM_RSS_URL, { 
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    
    const xml = await response.text();
    
    const items: MediumArticle[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    let count = 0;
    while ((match = itemRegex.exec(xml)) !== null && count < 6) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>|<description>(.*?)<\/description>/);
      const thumbnailMatch = itemContent.match(/<img[^>]+src="([^"]+)"/);
      
      if (titleMatch) {
        items.push({
          title: titleMatch[1] || titleMatch[2] || "",
          link: linkMatch ? linkMatch[1] : "",
          pubDate: pubDateMatch ? pubDateMatch[1] : "",
          content: contentMatch ? (contentMatch[1] || contentMatch[2] || "") : "",
          isoDate: "",
          thumbnail: thumbnailMatch ? thumbnailMatch[1] : undefined,
        });
        count++;
      }
    }
    
    return items;
  } catch (error) {
    console.error("Error fetching Medium RSS:", error);
    return [];
  }
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        ...data,
      } as Project;
    });
  return allProjects
    .filter(p => !p.hidden)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    contentHtml,
    ...data,
  } as Project;
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}