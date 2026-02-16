import skillsData from '@/content/skills.json';

export function getComprehensiveKeywords(): string {
  const keywords = skillsData.keywords || [];
  const coreSkills = skillsData.core?.map(skill => skill.name) || [];
  const allTools = skillsData.core?.flatMap(skill => skill.tools || []) || [];
  const supportingSkills = Object.values(skillsData.supporting || {}).flat() || [];
  
  const allKeywords = [
    ...keywords,
    ...coreSkills,
    ...allTools,
    ...supportingSkills,
    'CTO',
    'AI Platform Architect',
    'Fractional CTO',
    'Tech Leadership',
    'HRTech',
    'Healthcare Tech',
    'IoT',
    'Cloud Architecture',
    'DevOps',
    'Machine Learning',
    'AI',
    'Platform Engineering'
  ];
  
  // Remove duplicates and return comma-separated string
  return [...new Set(allKeywords)].join(', ');
}

export function getPersonStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Collect all skills and tools
  const knowsAbout = [
    ...skillsData.keywords,
    ...skillsData.core.map(skill => skill.name),
    ...skillsData.core.flatMap(skill => skill.tools),
    ...Object.values(skillsData.supporting).flat()
  ];
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Diwesh Saxena",
    "jobTitle": "CTO & AI Platform Architect",
    "description": "16+ years building scalable platforms and AI-augmented workflows across HRTech, healthcare, IoT, and public sector.",
    "knowsAbout": [...new Set(knowsAbout)],
    "url": baseUrl,
    "sameAs": [
      "https://www.linkedin.com/in/diweshsaxena/"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "CTO & AI Platform Architect",
      "occupationLocation": {
        "@type": "Country",
        "name": "India"
      },
      "skills": skillsData.core.map(skill => skill.name)
    }
  };
}

export function getWebsiteStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Diwesh Saxena - CTO & AI Platform Architect",
    "url": baseUrl,
    "description": "CTO & AI Platform Architect turning ideas into measurable outcomes. 16+ years shipping scalable platforms and AI-augmented workflows.",
    "author": {
      "@type": "Person",
      "name": "Diwesh Saxena"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function getBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
