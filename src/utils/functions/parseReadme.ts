interface ReadmeSections {
  [key: string]: string;
}

export const parseReadme = (readmeLines: string[]): ReadmeSections => {
  const sections: ReadmeSections = {};
  let currentSection: string | null = null;

  readmeLines.forEach((line) => {
    const sectionMatch = line.match(/<!--\s*(.*?)\s*-->/);
    if (sectionMatch) {
      // Start a new section
      const sectionName = sectionMatch[1];
      currentSection = sectionName;
      sections[currentSection] = "";
    } else if (currentSection) {
      // Add line to the current section
      sections[currentSection] += line + "\n";
    }
  });

  // Trim whitespace from each section
  for (const section in sections) {
    sections[section] = sections[section].trim();
  }

  return sections;
};
