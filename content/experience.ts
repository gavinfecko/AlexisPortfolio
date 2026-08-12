/**
 * Resume data. Powers /resume.
 * Keep this in sync with the PDF in /public.
 */

export const education = {
  school: "James Madison University",
  location: "Harrisonburg, VA",
  degree: "Bachelor of Arts in Media Arts & Design",
  concentration: "Creative Advertising",
  graduation: "May 2026",
  /** Shown as "Graduated May 2026" once this is true. */
  graduated: true,
  honors: ["Dean's List — Fall 2024, Spring 2025, Fall 2025"],
};

export type Role = {
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  /** Set on roles outside the creative field, so they render as context
   *  rather than competing with the design work. */
  aside?: boolean;
};

export const experience: Role[] = [
  {
    title: "Pharmacy Technician",
    organization: "Grassy Sprain Pharmacy",
    location: "New York",
    start: "June 2026",
    end: "Present",
    aside: true,
    bullets: [
      "Run day-to-day pharmacy technician operations — intake, fulfilment, inventory, and patient-facing service in a high-volume independent pharmacy.",
    ],
  },
  {
    title: "Graphic Design Intern",
    organization: "Depaul Community Resources",
    start: "May 2025",
    end: "August 2025",
    bullets: [
      "Worked directly with marketing leadership to develop creative concepts for campaign materials.",
      "Produced promotional assets for digital and print channels, adapting a single concept across formats.",
    ],
  },
  {
    title: "Graphic Design & Marketing Intern",
    organization: "Scarsdale Family Dental",
    location: "Scarsdale, NY",
    start: "May 2024",
    end: "August 2024",
    bullets: [
      "Designed the practice's in-office signage system, used for patient education and brand consistency across every room.",
      "Produced the majority of the practice's print promotional materials.",
      "Built a color palette that unified previously mismatched office materials.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Design & Production",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Canva",
      "Figma",
      "Layout & Typography",
      "Print Production",
    ],
  },
  {
    label: "Advertising & Strategy",
    items: [
      "Campaign Concepting",
      "Art Direction",
      "Copywriting",
      "Brand Positioning",
      "Audience & Persona Research",
      "Creative Briefs",
      "Storyboarding",
      "Media Planning",
    ],
  },
  {
    label: "Research & Insight",
    items: [
      "Primary Research Design",
      "Survey Writing",
      "In-Person Product Testing",
      "Competitive Analysis",
      "Insight Synthesis",
    ],
  },
  {
    label: "Digital & Social",
    items: [
      "Social Content Design",
      "Instagram & Facebook Campaigns",
      "Interactive & Quiz Formats",
      "HTML",
      "CSS",
      "Bootstrap",
      "WordPress",
      "Wix",
    ],
  },
];

export const involvement = [
  {
    name: "Scratch Pad",
    detail: "Student-run advertising agency, James Madison University",
  },
  {
    name: "Society for Collegiate Leadership & Achievement",
    detail: "Member",
  },
  {
    name: "Delta Delta Delta",
    detail: "Gamma Tau Chapter",
  },
];
