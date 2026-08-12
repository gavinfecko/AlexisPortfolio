/**
 * Every case study on the site.
 *
 * To add a project: copy an existing object, change the fields, drop its
 * images in /public/work/<slug>/. The index page, the featured section on
 * the home page, and the case-study page all read from this one array.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** "full" spans the content width; "half" sits two-up on desktop. */
  span?: "full" | "half";
  /**
   * "contain" shows the whole artwork on a tinted ground — right for posters
   * and ads, which must never be cropped. "cover" fills the frame, which
   * suits photography and in-situ mockups.
   */
  fit?: "cover" | "contain";
};

export type Insight = {
  /** Optional pulled-out number, e.g. "57%". Rendered large. */
  stat?: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  /** Campaign line or subtitle. */
  tagline: string;
  category: string;
  year: string;
  featured: boolean;
  /** Controls ordering on the work page — lower comes first. */
  order: number;

  /**
   * Each project carries a color lifted from the campaign itself. It tints
   * the case study's tagline, insight rules, tool chips, and card hover — so
   * the site picks up the work's own palette instead of imposing one.
   */
  accent: string;
  /** A pale version of the same hue for chip and panel backgrounds. */
  accentWash: string;

  cover: ProjectImage;
  /** One or two sentences for the project card. */
  summary: string;

  role: string;
  team?: string[];
  context: string;

  challenge: string;
  audience: string;
  insights: Insight[];
  bigIdea: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
  tools: string[];

  images: ProjectImage[];
  /**
   * Optional extra detail rendered as dense columns under the approach —
   * lines that didn't make it, the states a quiz produced, the rooms a sign
   * system covered. This is where a case study earns a second read.
   */
  processNotes?: { title: string; items: string[] }[];
  /** Optional closing note — results, learnings, or what shipped. */
  outcome?: string;
  /** Optional downloadable asset, e.g. the full campaign book. */
  download?: { label: string; href: string };
};

export const projects: Project[] = [
  // ---------------------------------------------------------------
  {
    slug: "touchland",
    title: "Gets the Job Done",
    client: "Touchland",
    tagline: "The Pocket-Sized Power Tool",
    category: "Integrated Campaign",
    year: "2026",
    featured: true,
    order: 1,

    accent: "#1B9AAA",
    accentWash: "#E6F4F6",

    cover: {
      src: "/work/touchland/billboard.jpg",
      alt: "Touchland OOH billboard reading 'Impact Over Inches' beside a tape measure",
      fit: "contain",
    },
    summary:
      "A full integrated campaign repositioning a beauty-aisle hand sanitizer as a jobsite tool — built on original consumer research and carried across print, OOH, broadcast, social, and guerilla.",

    role: "Organization & Account Planner",
    team: [
      "Lexy Farinelli — Strategy Manager & Designer",
      "Grace May — Copywriter & Design Planner",
      "Audrey Ridder — Research Specialist",
      "Lauren Zimmerman — Art Director",
    ],
    context:
      "The GAL Agency — a five-person student agency formed for SMAD 442 at James Madison University. The name combines our first initials; the paintbrush in the logo stands in for the creative work itself.",

    challenge:
      "Touchland sells a premium hand sanitizer that lives in the beauty aisle — Ulta, Sephora, Revolve — and is marketed almost entirely on scent and aesthetics. We wanted to know whether the product could earn a completely different shelf: the one blue-collar workers actually reach for. That meant proving the product could be sold as a tool rather than a lifestyle item, without abandoning what already makes the brand distinctive.",

    audience:
      "Blue-collar and skilled-trade workers — people whose hands are dirty by 9am, whose access to clean water on site is inconsistent, and who lose income when they get sick.",

    insights: [
      {
        text: "Blue-collar households are function-centered buyers, prioritizing essential goods over aesthetic ones (U.S. Bureau of Labor Statistics, 2017). Positioning the product as a tool makes it necessary rather than indulgent.",
      },
      {
        text: "This audience responds to messaging built on risk reduction and staying able to work. Hand hygiene isn't personal care here — it's not missing a shift.",
      },
      {
        text: "Clear, fast, concrete communication outperforms abstract branding. Products need to be easy to understand, shown in real use, and visibly solving a problem.",
      },
      {
        stat: "15",
        text: "participants in a blind in-person experiment comparing Touchland against a lower-cost dupe, run across three locations — plus an online survey on usage habits, brand perception, and purchase behavior.",
      },
    ],

    bigIdea:
      "Touchland gets the job done. It's the smallest thing in your kit and it still outworks the mess — the pocket-sized power tool.",

    approach: [
      {
        title: "Test the product before writing a word",
        body: "We presented Touchland and a competing dupe to participants with the brands hidden, and recorded how they described packaging, texture, and scent, plus what they'd pay for each. Only afterward did we reveal brand, price, and ingredients and ask whether their choice changed. The gap between those two answers told us what the brand was actually worth to people.",
      },
      {
        title: "Borrow the language of tools, not cosmetics",
        body: "We wrote thirty headlines and thirty taglines against the jobsite vocabulary — kits, grit, durability, hard hats — and pressure-tested them until one line held the whole campaign: The Pocket-Sized Power Tool.",
      },
      {
        title: "Make size the running joke",
        body: "The final headlines all play the same game on the product's small format: 'Jean-iously compact.' 'Over-all best fit.' 'Impact Over Inches.' 'Size Isn't Everything.' Each print execution tucks the bottle into a different pocket or piece of workwear, so the visual sells portability while the copy sells punch.",
      },
      {
        title: "Carry one idea across every channel",
        body: "The same idea had to survive a transit poster, a fifteen-second TV spot, a Facebook story, a billboard, a urinal ad, and a construction-site guerilla stunt. Each execution reframes the tool comparison rather than repeating the tagline.",
      },
    ],

    deliverables: [
      "Three-part transit station poster series",
      "TV spot — script, storyboard, casting, key frames",
      "Facebook feed and story ads",
      "Social media mockups",
      "OOH billboard",
      "OOH urinal placements",
      "Guerilla marketing installation",
      "Radio jingle script",
      "Branded product placement script",
      "Primary research report",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Survey research"],

    processNotes: [
      {
        title: "Taglines that didn't make it",
        items: [
          "Built for hard working hands",
          "Where grit meets clean",
          "Another tool in your kit",
          "Rugged hands. Reliable clean.",
          "Cuts dirt, not corners",
          "Your pocket-sized power tool",
          "Sanitizer that works as hard as you do",
          "Every tool has a job",
        ],
      },
      {
        title: "Headlines we kept",
        items: [
          "Jean-iously compact.",
          "Over-all best fit.",
          "Impact Over Inches.",
          "Size Isn't Everything.",
          "Is Bigger Always Better?",
        ],
      },
      {
        title: "What we asked the room",
        items: [
          "Describe this packaging",
          "Describe how it feels on your hands",
          "Describe the scent",
          "What would you pay for it?",
          "Which of these is the original, and which is the dupe?",
          "Now that you know the brand and price — has your answer changed?",
        ],
      },
    ],
    images: [
      {
        src: "/work/touchland/station-mockup.jpg",
        alt: "The three transit posters installed in a subway station",
        caption:
          "The three-part transit series in situ. Each ad tucks the product into a different pocket, so the set reads as one argument from across the platform.",
        span: "full",
      },
      {
        src: "/work/touchland/poster-jeaniously-compact.jpg",
        alt: "Poster reading 'Jean-iously Compact.' with the product in a jeans pocket",
        span: "half",
      },
      {
        src: "/work/touchland/poster-overall-best-fit.jpg",
        alt: "Poster reading 'Overall Best Fit.' with the product in a pair of overalls",
        span: "half",
      },
      {
        src: "/work/touchland/poster-pocket-sized-powertool.jpg",
        alt: "Poster reading 'The Pocket-Sized Powertool.' with the product in a work jacket",
        caption: "The line that named the campaign.",
        span: "full",
      },
      {
        src: "/work/touchland/billboard.jpg",
        alt: "Billboard reading 'Impact Over Inches'",
        caption: "'Impact Over Inches' — the tape measure makes the argument for us.",
        span: "half",
      },
      {
        src: "/work/touchland/billboard-mockup.jpg",
        alt: "Billboard mounted on the side of a city building",
        caption: "Billboard in place.",
        span: "half",
      },
      {
        src: "/work/touchland/urinal-ad.jpg",
        alt: "Urinal placement ad reading 'Size Isn't Everything'",
        caption:
          "'Size Isn't Everything.' Placed where the joke lands and the hygiene reminder is unavoidable.",
        span: "half",
      },
      {
        src: "/work/touchland/urinal-mockup.jpg",
        alt: "The ad mocked up above a urinal in a restroom",
        caption: "Placement mockup.",
        span: "half",
      },
      {
        src: "/work/touchland/facebook-feed-ads.jpg",
        alt: "Three Facebook feed advertisements for Touchland",
        caption:
          "Facebook carried the most weight for this target. 'The one time small isn't disappointing.' / 'Not all heroes carry tool boxes.' / 'The only small thing you won't complain about.'",
        span: "full",
      },
      {
        src: "/work/touchland/facebook-story-ads.jpg",
        alt: "Two Facebook story advertisements for Touchland",
        caption:
          "Story units — 'Big Power, Small Package' and 'Not the biggest tool in the box, just the one that proves size isn't everything.'",
        span: "full",
      },
      {
        src: "/work/touchland/social-mockups.jpg",
        alt: "Social advertisements mocked up on phone screens",
        caption: "In feed.",
        span: "full",
      },
      {
        src: "/work/touchland/guerilla.jpg",
        alt: "An oversized Touchland bottle suspended from a construction crane",
        caption:
          "Guerilla: an oversized bottle hung from a construction crane above the line 'Is Bigger Always Better?'",
        span: "full",
      },
      {
        src: "/work/touchland/tv-keyframe.jpg",
        alt: "Key frame from the Touchland television commercial",
        caption: "Key frame from the 'Bigger Isn't Better' spot.",
        span: "half",
      },
      {
        src: "/work/touchland/tv-storyboard.jpg",
        alt: "Final television storyboard",
        caption: "The storyboard it came from.",
        span: "half",
      },
      {
        src: "/work/touchland/print-brainstorming.jpg",
        alt: "Print advertisement brainstorming sketches",
        caption: "Where it started — thirty headlines and thirty taglines deep.",
        span: "half",
      },
      {
        src: "/work/touchland/book-cover.jpg",
        alt: "Cover of the Touchland campaign book",
        caption: "The full campaign book — 71 pages of research, brainstorming, and finals.",
        span: "half",
      },
    ],

    outcome:
      "Delivered as a complete 71-page campaign book covering brand research, primary research methodology and findings, ideation, and final executions across nine channels.",
    download: {
      label: "Read the full campaign book (PDF)",
      href: "/touchland-campaign-book.pdf",
    },
  },

  // ---------------------------------------------------------------
  {
    slug: "harrisonburg-farmers-market",
    title: "What Soup Are You?",
    client: "Harrisonburg Farmers Market",
    tagline: "Shop local, one bowl at a time",
    category: "Digital Interactive Campaign",
    year: "2025",
    featured: true,
    order: 2,

    accent: "#4F7942",
    accentWash: "#EDF3EA",

    cover: {
      src: "/work/harrisonburg-farmers-market/carousel-mockup.png",
      alt: "Instagram carousel showing the four soup personality results",
      fit: "contain",
    },
    summary:
      "A personality-quiz campaign that turned National Soup Month into a reason to shop the local farmers market — built around the one format this audience already shares without being asked.",

    role: "Designer & Concept",
    team: ["Hayley Weissburg", "Ella Alger", "Hailey Yenyo"],
    context: "Elements of Creative Advertising (SMAD 342), James Madison University.",

    challenge:
      "Build a digital interactive campaign that drives middle-aged women to shop at the Harrisonburg Farmers Market — launching in January, historically the market's quietest month.",

    audience:
      "Middle-aged women who value fresh, quality food and treat shopping as much social as transactional.",

    insights: [
      {
        text: "Personality quizzes are a proven engagement mechanic with this audience — they're voluntarily shared, and the result becomes a small piece of identity worth posting.",
      },
      {
        text: "Farmers markets are an economic engine for the towns around them, which gives shopping local a civic motive on top of a personal one.",
      },
      {
        text: "January is National Soup Month — a seasonal hook that makes cold-weather produce feel like an occasion instead of a chore.",
      },
    ],

    bigIdea:
      "Find your soup personality with the 'What Soup Are You?' quiz — then shop the ingredients local at the Harrisonburg Farmers Market.",

    approach: [
      {
        title: "Make the ad the entertainment",
        body: "Rather than asking people to visit the market, we asked them a question about themselves. The BuzzFeed-style quiz sorts you into one of four soups — Cozy Romantic, Refreshing Realist, Steady Soul, Humble Creative — and the result is designed to be screenshot and shared.",
      },
      {
        title: "Close the loop with a recipe",
        body: "Every quiz outcome returns a tailored recipe, and every ingredient in that recipe is sold at the market. The campaign converts a moment of fun directly into a shopping list.",
      },
      {
        title: "Give people a reason to go this week",
        body: "A 10% discount tied to National Soup Month adds urgency to a campaign that would otherwise be purely playful.",
      },
      {
        title: "Design for the platforms it lives on",
        body: "Instagram carousels for the quiz reveal, Stories for the swipe-up, Facebook posts for reach — each execution built native to its format rather than resized from one master.",
      },
    ],

    deliverables: [
      "Instagram carousel series",
      "Instagram and Facebook Stories",
      "Facebook feed posts",
      "Quiz flow and four result states",
      "Vendor spotlight assets",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],

    processNotes: [
      {
        title: "The four soup personalities",
        items: [
          "Cozy Romantic",
          "Refreshing Realist",
          "Steady Soul",
          "Humble Creative",
        ],
      },
      {
        title: "Where it ran",
        items: [
          "Instagram carousel",
          "Instagram Stories with swipe-up",
          "Facebook feed",
          "Vendor spotlight posts",
        ],
      },
      {
        title: "The hooks",
        items: [
          "National Soup Month",
          "10% off at the market",
          "A recipe attached to every result",
          "#WhatSoupAreYou",
        ],
      },
    ],
    images: [
      {
        src: "/work/harrisonburg-farmers-market/carousel-mockup.png",
        alt: "Instagram carousel showing the four soup personality results",
        caption: "The carousel reveal — four soup personalities, each with its own palette.",
        span: "full",
      },
      {
        src: "/work/harrisonburg-farmers-market/soup-season.jpg",
        alt: "Ad reading 'Soup Season Is Officially Here. What Soup Are You?'",
        span: "half",
      },
      {
        src: "/work/harrisonburg-farmers-market/national-soup-month.jpg",
        alt: "National Soup Month ad prompting users to take the quiz",
        span: "half",
      },
      {
        src: "/work/harrisonburg-farmers-market/quiz-story.jpg",
        alt: "Instagram story with a swipe-up to the soup personality quiz",
        caption: "Story unit driving into the quiz itself.",
        span: "half",
      },
      {
        src: "/work/harrisonburg-farmers-market/secret-ingredients.jpg",
        alt: "Ad reading 'The Secret Ingredients are Local'",
        span: "half",
      },
      {
        src: "/work/harrisonburg-farmers-market/phones-mockup.png",
        alt: "Campaign assets mocked up across phone screens",
        caption: "Reasons-to-shop-local sequence.",
        span: "full",
      },
      {
        src: "/work/harrisonburg-farmers-market/results-mockup.png",
        alt: "Quiz result screens mocked up on phones",
        caption: "Result states — each one designed to be screenshotted.",
        span: "full",
      },
      {
        src: "/work/harrisonburg-farmers-market/sketches-1.jpg",
        alt: "Early campaign sketches",
        caption: "Early thinking.",
        span: "half",
      },
      {
        src: "/work/harrisonburg-farmers-market/sketches-2.jpg",
        alt: "Early campaign sketches",
        span: "half",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "tonys-chocolonely",
    title: "#DadHacks",
    client: "Tony's Chocolonely",
    tagline: "A win for dads, a win for the supply chain",
    category: "Integrated Campaign",
    year: "2025",
    featured: true,
    order: 3,

    accent: "#D81E24",
    accentWash: "#FBEAEA",

    cover: {
      src: "/work/tonys-chocolonely/print-bogo.jpg",
      alt: "Red Tony's Chocolonely ad reading 'BOGO Keeps it Fair'",
      fit: "contain",
    },
    summary:
      "A limited-time BOGO campaign that reframed an ethical chocolate brand as a back-to-school parenting shortcut — aimed at stay-at-home dads, and built on the brand's own unequal chocolate chunks.",

    role: "Designer & Concept",
    team: ["Ella Alger", "Hayley Weissburg", "Hailey Yenyo"],
    context: "Elements of Creative Advertising (SMAD 342), James Madison University.",

    challenge:
      "Drive a limited-time offer for Tony's Chocolonely without diluting what the brand stands for. Tony's exists to end exploitation in the cocoa industry — a discount campaign risks making an ethics-led brand feel like a commodity.",

    audience:
      "Stay-at-home dads navigating back-to-school season, where 57% of dads say fatherhood is central to their identity.",

    insights: [
      {
        stat: "57%",
        text: "of dads say fatherhood is central to their identity — so a product that helps them win at the job is a product that flatters who they are.",
      },
      {
        text: "Tony's chocolate is ethically sourced and sustainable, and the brand actively campaigns to end exploitation in the cocoa industry. The discount had to feel consistent with that, not opposed to it.",
      },
      {
        text: "The bars are divided into deliberately uneven chunks to symbolize inequality in the chocolate supply chain — a design detail that hands you a fairness metaphor for free.",
      },
    ],

    bigIdea:
      "Buying Tony's is a win for dads — a healthier, sustainable, feel-good treat that's fun for kids and dads of all ages. Filed under #DadHacks.",

    approach: [
      {
        title: "Speak the audience's existing language",
        body: "#DadHacks already exists as a genre of small parenting victories. We placed the BOGO inside it rather than inventing a campaign vocabulary nobody uses.",
      },
      {
        title: "Turn the product flaw into the punchline",
        body: "Tony's uneven chunks are a statement about supply-chain inequality. In a house with kids, they're also the source of every argument over who got the big piece. 'No Fights Over the Big Piece — BOGO Keeps it Fair' lets one line do both jobs.",
      },
      {
        title: "Give the second bar a job",
        body: "'One for their lunchbox, one for your secret stash.' The BOGO stops being a discount and becomes a small conspiracy between the ad and the dad reading it.",
      },
      {
        title: "Hold the brand's visual equity",
        body: "Tony's red and blue, the wordmark, and the chunk pattern stay untouched across every execution, so the campaign reads as Tony's before it reads as a promotion.",
      },
    ],

    deliverables: [
      "OOH transit shelter advertisement",
      "Print magazine advertisement",
      "Print campaign series",
      "Concept sketches",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],

    images: [
      {
        src: "/work/tonys-chocolonely/print-bogo.jpg",
        alt: "Red print ad: 'No Fights Over the Big Piece — BOGO Keeps it Fair'",
        caption: "'No Fights Over the Big Piece.' The uneven chunks earn their keep.",
        span: "full",
      },
      {
        src: "/work/tonys-chocolonely/transit-lunchbox.jpg",
        alt: "Blue transit ad: 'One for their lunchbox, one for your secret stash'",
        span: "half",
      },
      {
        src: "/work/tonys-chocolonely/transit-mockup.jpg",
        alt: "Transit shelter mockup of the Tony's advertisement",
        caption: "Transit shelter placement.",
        span: "half",
      },
      {
        src: "/work/tonys-chocolonely/magazine-dadhack.jpg",
        alt: "Magazine ad reading 'The Ultimate #DADHACK'",
        caption: "'The Ultimate #DadHack — Happy Kid, Happy Dad.'",
        span: "half",
      },
      {
        src: "/work/tonys-chocolonely/ultimate-dadhacks.jpg",
        alt: "Print ad reading 'The Ultimate #DADHACKS'",
        span: "half",
      },
      {
        src: "/work/tonys-chocolonely/sketches-1.jpg",
        alt: "Concept sketches for the Tony's campaign",
        caption: "Concept doodles — where '#DadHack' first showed up.",
        span: "half",
      },
      {
        src: "/work/tonys-chocolonely/sketches-2.jpg",
        alt: "Concept sketches for the Tony's campaign",
        span: "half",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "smad-day-2025",
    title: "SMAD Day 2025",
    client: "JMU School of Media Arts & Design",
    tagline: "Shift your future",
    category: "Event Branding & Wayfinding",
    year: "2025",
    featured: false,
    order: 4,

    accent: "#3B4EA0",
    accentWash: "#EBEDF7",

    cover: {
      src: "/work/smad-day-2025/welcome-signage.jpg",
      alt: "Welcome to SMAD Day 2025 signage",
      fit: "contain",
    },
    summary:
      "Event branding and wayfinding for a university open house — a keyboard-key identity that doubled as a color-coded map, solving a navigation problem with the same system that carried the theme.",

    role: "Designer",
    team: ["Hayley Weissburg"],
    context: "James Madison University, School of Media Arts & Design.",

    challenge:
      "Create unified event branding for SMAD Day 2025 — door signage and event posters for current and prospective School of Media Arts & Design students. In previous years, attendees were confused about what events were happening and where.",

    audience:
      "Prospective students deciding whether to apply, and current students deciding which concentration to pursue.",

    insights: [
      {
        text: "The navigation problem was the brief. People weren't confused about the event — they were confused about which room they should be standing in.",
      },
      {
        text: "Bright color and playful iconography make an academic building feel like somewhere you're invited, which matters most for the prospective students seeing it for the first time.",
      },
      {
        text: "SMAD's four concentrations already have assigned colors, and the school's dark blue is instantly recognisable on campus. The system existed — it just hadn't been used for wayfinding.",
      },
    ],

    bigIdea:
      "Guide students through SMAD Day 2025 with vibrant, concentration-specific posters that make each space feel engaging and approachable.",

    approach: [
      {
        title: "Let the color do the wayfinding",
        body: "Each door sign takes the color of the concentration meeting behind it — Journalism, Creative Advertising & Interactive Design, Digital Video & Cinema, and so on. Attendees stop reading signs and start following color.",
      },
      {
        title: "Build the theme out of the tools",
        body: "'Shift your future' is set in keyboard keys — S, M, A, D as keycaps. The identity is literally made of the equipment the school teaches on, and it gives the posters a modular, repeatable structure.",
      },
      {
        title: "Put the schedule where the decision happens",
        body: "Every door sign carries its room number and the times of the sessions inside it, so the answer arrives at the moment of confusion rather than back on a printed handout.",
      },
      {
        title: "Open with a welcome, not a wall of text",
        body: "'Come on in!' on every door. The tone does as much recruiting work as the information does.",
      },
    ],

    deliverables: [
      "Door signage system — four concentration variants",
      "Welcome signage",
      "Event promotion poster",
      "Class presentation slides",
    ],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Canva"],

    processNotes: [
      {
        title: "The rooms, color-coded",
        items: [
          "Taylor 304 — Journalism",
          "Taylor 404 — Creative Advertising & Interactive Design",
          "Taylor 306 — Digital Video & Cinema",
          "Taylor 400 — Creative Advertising career panel",
        ],
      },
      {
        title: "What each sign had to answer",
        items: [
          "Which concentration is this?",
          "What time does it start?",
          "Am I allowed to walk in?",
        ],
      },
    ],
    images: [
      {
        src: "/work/smad-day-2025/welcome-signage.jpg",
        alt: "Welcome to SMAD Day 2025 signage with keyboard-key lettering",
        caption: "'Shift your future' — the identity built from keycaps.",
        span: "full",
      },
      {
        src: "/work/smad-day-2025/door-taylor-304.jpg",
        alt: "Door sign for Taylor 304, Journalism, in red",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/door-taylor-404.jpg",
        alt: "Door sign for Taylor 404, Creative Advertising & Interactive Design, in blue",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/door-taylor-306.jpg",
        alt: "Door sign for Taylor 306, Digital Video & Cinema, in yellow",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/door-taylor-400.jpg",
        alt: "Door sign for Taylor 400, Creative Advertising career panel, in green",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/event-poster.jpg",
        alt: "SMAD Day 2025 event poster with date and schedule",
        caption: "Promotion poster — date, place, and what you get for showing up.",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/presentation-slide.jpg",
        alt: "SMAD Day presentation slide displayed in an auditorium",
        caption: "Presentation slides in the room.",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/sketches-1.jpg",
        alt: "Wayfinding and signage sketches",
        caption: "Planning the sign system.",
        span: "half",
      },
      {
        src: "/work/smad-day-2025/sketches-2.jpg",
        alt: "Wayfinding and signage sketches",
        span: "half",
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "scarsdale-family-dental",
    title: "Scarsdale Family Dental",
    client: "Scarsdale Family Dental",
    tagline: "Making the dentist less frightening, one poster at a time",
    category: "Brand & Environmental Design",
    year: "2024",
    featured: false,
    order: 5,

    accent: "#4A6B96",
    accentWash: "#EDF1F6",

    cover: {
      src: "/work/scarsdale-family-dental/hygiene-essentials.jpg",
      alt: "Dental Hygiene Essentials poster with a tooth built from typography",
      fit: "contain",
    },
    summary:
      "In-office educational signage for a dental practice — professional design work that used clear visuals and consistent branding to make a genuinely anxious experience feel manageable.",

    role: "Graphic Design & Marketing Intern",
    context: "Scarsdale Family Dental, a dental office in Scarsdale, New York. Summer 2024.",

    challenge:
      "Design clear, friendly visuals that educate patients, simplify dental concepts, and make the office feel welcoming — across a practice that treats both children and adults in the same waiting room.",

    audience:
      "Patients of every age, a meaningful share of whom arrive already nervous.",

    insights: [
      {
        stat: "50–60%",
        text: "of children experience some level of anxiety or nervousness at the dentist.",
      },
      {
        stat: "36%",
        text: "of U.S. adults experience some level of dental anxiety — so this isn't a children's design problem, it's everyone's.",
      },
      {
        text: "Visuals improve comprehension. A procedure that sounds frightening in clinical language often stops being frightening once it's drawn.",
      },
    ],

    bigIdea:
      "Turn dental visits into a positive experience by blending education, humor, and consistent branding throughout the office.",

    approach: [
      {
        title: "Explain the scary things plainly",
        body: "The implant and root canal poster does the single most useful thing available: it says what the procedure actually is, in short sentences, with a diagram, and a one-line 'think of it as' translation. Fear of the dentist is mostly fear of the unknown.",
      },
      {
        title: "Make prevention feel achievable",
        body: "'How to Make Your Next Checkup Easy' reduces oral health to four icons and four short instructions. Nobody memorises a paragraph in a waiting room.",
      },
      {
        title: "Build one palette and hold it",
        body: "A restrained blue system ties every poster to the practice's existing branding, so the signage reads as one considered environment rather than a collection of printouts.",
      },
      {
        title: "Use type as illustration",
        body: "The 'Dental Hygiene Essentials' tooth is built entirely from the words it's teaching. It works as decoration from across the room and as content up close.",
      },
    ],

    deliverables: [
      "In-office educational poster series",
      "Print promotional materials",
      "Office color palette",
      "Patient communication signage",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],

    processNotes: [
      {
        title: "What the posters explain",
        items: [
          "What a dental implant actually is",
          "What happens during a root canal",
          "Why a nightguard is worth wearing",
          "Four habits that make a checkup easier",
        ],
      },
      {
        title: "Rules I set for the system",
        items: [
          "No paragraph longer than a waiting-room attention span",
          "Every clinical term gets a plain-language translation",
          "One palette across every room",
          "Illustration over photography — less clinical, less frightening",
        ],
      },
    ],
    images: [
      {
        src: "/work/scarsdale-family-dental/hygiene-essentials.jpg",
        alt: "Poster with a tooth shape built from dental hygiene words",
        caption: "The tooth is set entirely in the vocabulary it's teaching.",
        span: "half",
      },
      {
        src: "/work/scarsdale-family-dental/checkup-easy.jpg",
        alt: "Poster: How to Make Your Next Checkup Easy",
        caption: "Four icons, four instructions, no paragraphs.",
        span: "half",
      },
      {
        src: "/work/scarsdale-family-dental/implant-root-canal.jpg",
        alt: "Poster explaining dental implants and root canals",
        caption:
          "Plain-language explanations of the two procedures patients most dread hearing named.",
        span: "half",
      },
      {
        src: "/work/scarsdale-family-dental/nightguard.jpg",
        alt: "Poster: Why Wear a Nightguard?",
        span: "half",
      },
      {
        src: "/work/scarsdale-family-dental/palette.jpg",
        alt: "The blue color palette developed for the practice",
        caption: "The palette that holds the whole system together.",
        span: "full",
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export const categories = Array.from(new Set(projects.map((p) => p.category)));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
