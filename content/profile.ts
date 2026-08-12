/**
 * Everything about Alexis that isn't a project or a resume line.
 * Edit this file to change the name, headline, bio, or contact details
 * anywhere they appear on the site.
 */

export const profile = {
  name: "Alexis Chondrogiannis",
  shortName: "Alexis",

  /** Shown under the name in the nav and in page titles. */
  role: "Advertising Creative",

  /** The one-line pitch on the home page hero. */
  headline: "Creating ads that are memorable and adaptable.",

  /** Supporting paragraph directly under the headline. */
  intro:
    "I'm an advertising creative working across strategy, art direction, and design. I just finished a Media Arts & Design degree at James Madison University, and I'm looking for the room where the ideas get made.",

  /** Longer bio used on the About page. */
  bio: [
    "I want the work to do something. Not just look right — actually stop someone, make them laugh, and stick around long enough to be worth repeating.",
    "That usually means starting with a question instead of a layout. Who are we talking to? What do they already believe? What would make them look twice? A campaign I built this year began with fifteen people in a hallway holding two bottles of hand sanitizer, telling us which one they'd pay more for. The design came later. It was better for it.",
    "I'm a New York–born creative who moves fast, thinks fast, and works best with a slice of pizza nearby. I'm a dog person, a lifelong Yankees fan, and I have a genuinely severe aversion to cats — so please forgive me if I react badly around one.",
  ],

  /** Short version used in meta tags and link previews. */
  metaDescription:
    "Portfolio of Alexis Chondrogiannis — advertising creative working across strategy, art direction, and design. Campaigns for Touchland, Tony's Chocolonely, and more.",

  location: "New York, NY",
  availability: "Recently graduated and actively looking for a creative role",
  /** Short version for the nav badge and footer. */
  availabilityShort: "Available now",

  /**
   * One sentence answering the question every hiring manager has by the
   * bottom of the hero: what do you actually want?
   */
  lookingFor:
    "Looking for a junior creative role — art direction, media strategy, or copy — at an agency or in-house team in or around New York.",

  /** The kinds of roles the site should read as a pitch for. */
  targetRoles: [
    "Junior Art Director",
    "Media Strategist",
    "Junior Copywriter",
    "Brand & Campaign Design",
    "Creative Services",
  ],

  email: "alexischondro@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexis-chondrogiannis-1b99a1343/",

  /** Update this once the site has a real domain. Used for SEO + share links. */
  siteUrl: "https://alexischondrogiannis.com",

  /**
   * Path to the downloadable resume in /public.
   * Set to null while there's no file — the download button hides itself
   * rather than linking to a 404. Drop the PDF in /public and set the path
   * to turn the button back on.
   */
  resumePdf: null as string | null,

  /** Three things a hiring manager should take away in five seconds. */
  pillars: [
    {
      title: "I find the insight first",
      body: "Surveys, blind product tests, fifteen strangers in a hallway. I'd rather know why something will work than hope it does.",
    },
    {
      title: "One idea, every format",
      body: "A billboard, a fifteen-second spot, a Facebook story, a crane on a construction site. Same idea, never the same execution twice.",
    },
    {
      title: "I want the second look",
      body: "Wordplay, a joke that lands where it's placed, a system you can actually navigate. Work that earns attention instead of buying it.",
    },
  ],
} as const;

export const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
] as const;
