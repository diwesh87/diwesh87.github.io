import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  organization: string;
  timeframe: string;
  heroMetric: string;
  summary: string;
  stack: string[];
  outcomes: string[];
  content?: string;
}

export function getAllCaseStudies(): CaseStudy[] {
  const workDir = path.join(process.cwd(), 'content', 'work');
  
  if (!fs.existsSync(workDir)) {
    return [];
  }

  const files = fs.readdirSync(workDir);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));

  const caseStudies = mdxFiles.map(file => {
    const filePath = path.join(workDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return {
      slug: data.slug || file.replace('.mdx', ''),
      title: data.title || '',
      role: data.role || '',
      organization: data.organization || '',
      timeframe: data.timeframe || '',
      heroMetric: data.heroMetric || '',
      summary: data.summary || '',
      stack: data.stack || [],
      outcomes: data.outcomes || [],
    };
  });

  return caseStudies.sort((a, b) => {
    // Sort by timeframe, most recent first
    return b.timeframe.localeCompare(a.timeframe);
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const workDir = path.join(process.cwd(), 'content', 'work');
  const filePath = path.join(workDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug: data.slug || slug,
    title: data.title || '',
    role: data.role || '',
    organization: data.organization || '',
    timeframe: data.timeframe || '',
    heroMetric: data.heroMetric || '',
    summary: data.summary || '',
    stack: data.stack || [],
    outcomes: data.outcomes || [],
    content,
  };
}
