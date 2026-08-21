import type { BioEntry, HobbyItem, Project, NavLink } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Bio", href: "/#bio" },
  { label: "Projects", href: "/#projects" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact", href: "/#contact" },
];

export const aboutParagraphs: string[] = [
  `Hello, I'm Steffi, a former archaeologist and now a full-stack developer who enjoys working with people as much as with technology. My background in archaeology gave me a lot of experience in team coordination, documenting complex work (partly in Finnish!) and keeping projects running smoothly and on schedule. These skills turned out to be surprisingly helpful in software development and in product-oriented work.`,
  `During my studies at Business College Helsinki and especially during my internship, I have noticed that I really enjoy both sides of tech: building things with React, TypeScript, NestJS and Supabase, and understanding why we build them and for whom. I like talking to users or customers, turning their needs into something clear and structured, and helping a team stay focused on the most urgent tasks.`,
  `In our internship project I worked in a small, self-organized team where we built a multi-tenant booking app called Harakka. We had a supervisor for support, but most of the project was handled by our self-organized team. Besides coding and fixing bugs, I also took care of sprint planning, customer discussions, prioritizing tasks, organizing meetings, reviewing pull requests and making sure we included all important feedback. Taking on these responsibilities really confirmed that I enjoy working between development and product.`,
  `Right now I am focused on growing as a developer and getting more real-world experience. I'm also building an MVP in React Native with Python and machine learning, and getting more experience in development and API design. In the long run I would love to move into a Product Owner or Associate Product Manager role, and use both my technical skills and my people skills to support a team.`,
  `If you're looking for someone who can connect product thinking with coding, communicates well and enjoys working in a friendly and collaborative way, feel free to reach out.`,
];

export const bioEntries: BioEntry[] = [
  {
    id: "nutrilyser",
    date: "Nov 2025 — Present",
    sortKey: "2025-11",
    role: "Mobile Developer Intern",
    org: "Nutrilyser",
    accent: "var(--pink)",
    description:
      "We're building Nutrilyser, an automated, evidence-based diet management app that helps people make healthier food choices more easily. We use React Native with TypeScript to create personalized meal plans and keep nutrition simpler, especially for people managing conditions like diabetes. I'm excited to be part of a team so passionate about helping people take control of their health through better nutrition.",
  },
  {
    id: "illusia",
    date: "May 2025 — Oct 2025",
    sortKey: "2025-05",
    role: "Full Stack Development Intern",
    org: "Illusia Ry",
    accent: "var(--purple)",
    description:
      "We shipped our first full-stack booking app to a real customer, turning what started as a school project into a fully professional production system built with React, TypeScript, Tailwind, NestJS and Supabase. By helping each other we managed to deliver a scalable, multi-tenant app we\u2019re really proud of — you can find the project in my GitHub.",
  },
  {
    id: "business-college",
    date: "Aug 2024 — Dec 2025",
    sortKey: "2024-08",
    role: "Full Stack Web Developer Program",
    org: "Business College Helsinki",
    accent: "var(--indigo)",
    description:
      "Vocational qualification in Information and Communications Technology, covering HTML5/CSS3, JavaScript, Node, React (basic to advanced), databases, UI design and prototyping, TypeScript, unit testing and QA, CI/CD and AWS, and two full software development team projects.",
  },
  {
    id: "museovirasto",
    date: "May 2021 — Aug 2024",
    sortKey: "2021-05",
    role: "Apulaistutkija (Assistant Researcher)",
    org: "Museovirasto — Finnish Heritage Agency",
    accent: "var(--blue)",
    description:
      "Learned how Finnish excavations are managed — including getting a GPS signal in the forest, then continuing measurements with the tachymeter in the bushes. Deepened my knowledge of construction-site safety and Finnish archaeology, and saw first-hand how important open communication is between field teams and other companies sharing a site.",
  },
  {
    id: "archaeotask",
    date: "Aug 2020 — Feb 2021",
    sortKey: "2020-08",
    role: "Field Archaeologist",
    org: "ArchaeoTask GmbH",
    accent: "var(--cyan)",
    description:
      "A wide variety of organisational tasks across construction sites — finding creative ways to make impossible requirements possible in order to keep to schedule, and learning how to motivate a team and keep it happy even when circumstances were difficult. Having fun at work matters.",
  },
  {
    id: "freiburg",
    date: "Oct 2004 — Jan 2013",
    sortKey: "2004-10",
    role: "Magister Artium, Archaeology",
    org: "University of Freiburg, Germany",
    accent: "var(--green)",
    description:
      'Studied prehistoric archaeology, Near Eastern archaeology and geology. Thesis: "Untersuchungen zu kupferzeitlichen Augenidolen auf der Iberischen Halbinsel" (Copper Age eye idols of the Iberian Peninsula), supervised by Prof. Dr. Christoph Huth.',
  },
];

export const projects: Project[] = [
  {
    id: "Harakka Booking Service",
    name: "harakka",
    url: "https://github.com/stabjana/harakka",
    forkedFrom: {
      label: "con2/harakka",
      url: "https://github.com/con2/harakka",
    },
    description:
      "A multi-tenancy full-stack web application, developed as part of an internship team project at Business College Helsinki. Lets users browse, book and manage storage items across organizations.",
    language: "TypeScript",
    accent: "var(--pink)",
  },
  {
    id: "memory-game",
    name: "Memory Game",
    url: "https://github.com/stabjana/memory-game",
    description:
      "My first own side project, back when I was new to coding. I built from a tutorial and then customized on top of it.",
    language: "JavaScript",
    accent: "var(--cyan)",
  },
  {
    id: "timelink-client",
    name: "TimeLink",
    url: "https://github.com/stabjana/timeLink-client",
    description:
      " TimeLink, a small game we built in class. An alien discovers earth and explores the planets history.",
    language: "TypeScript",
    accent: "var(--green)",
  },
];

export const hobbies: HobbyItem[] = [
  {
    id: "jugger",
    title: "3... 2... 1... Jugger",
    eyebrow: "Team sport",
    description:
      "Jugger is a team sport for nerds: a quick, tactical and maybe unusual. A central thing is fencing with padded equipment, there are clear roles and lots of movement. It is a wonderful mix of strategy, reaction and joint learning that makes it so exciting for everyone.",
    accent: "var(--pink)",
    youtubeId: "H5KGov_Sajs",
    link: {
      label: "Video on YouTube",
      href: "https://www.youtube.com/watch?v=H5KGov_Sajs",
    },
  },
  {
    id: "quarks",
    title: "Favourite Podcast: Quarks Daily",
    eyebrow: "Podcast",
    description:
      "My favourite podcast for scientific context in daily life. I love it how complex topics are made clearer in an accessible way, with hosts who explain things with a lot of curiosity and humor.",
    accent: "var(--cyan)",
    link: {
      label: "Listen on Spotify",
      href: "https://open.spotify.com/show/69xh1rMg3LYfptNTC5mcTe",
    },
  },
  {
    id: "climbing",
    title: "Climbing",
    eyebrow: "Focus",
    description:
      "Climbing means to me relaxing mind and body. I love the moment on the wall and just to be there in the challenge with myself. I climb with Auto-Belay.",
    accent: "var(--green)",
    image: {
      src: "/hobbies/climbing.jpg",
      alt: "Steffi at Climbing",
    },
  },
  {
    id: "instagram",
    title: "Instagram",
    eyebrow: "Snapshots",
    description:
      "A quick peek into my everyday life. Food, training, nature, travel, and things that happen in between.",
    accent: "var(--purple)",
    link: {
      label: "Open Instagram",
      href: "https://www.instagram.com/stabjana/",
    },
  },
  {
    id: "gym",
    title: "Gym",
    eyebrow: "Strength",
    description:
      "Gym training gives me focus and helps to keep my body in balance. I love it to become stronger and like the me-time to listen to my favourite podcasts.",
    accent: "var(--blue)",
    image: {
      src: "/hobbies/gym.jpg",
      alt: "Steffi in the Gym",
    },
  },
  {
    id: "cooking",
    title: "Cooking",
    eyebrow: "Food",
    description:
      "I love cooking and baking. Cooking is a creative outlet for me, and I love experimenting with new recipes from all over the world.",
    accent: "var(--indigo)",
    image: {
      src: "/hobbies/cooking.jpg",
      alt: "Steffi cooking",
    },
  },
  {
    id: "nature",
    title: "Being Outside & other Hobbies",
    eyebrow: "I am explorer",
    description:
      "I need fresh air to breathe, and being outside makes me feel free. Scientists say its good for the mental an physical health, I feel more calm when I am in the forest or at the shore.  I have many other hobbies and interests that I enjoy exploring and developing, I am not doing all of them still, but I would if I had more time.  For example knitting, brewing my own beer, sewing, crafting and many other things.",
    accent: "var(--indigo)",
    image: {
      src: "/hobbies/nature.jpg",
      alt: "Steffi being outside",
    },
  },
  {
    id: "music",
    title: "Singing and Playing Music",
    eyebrow: "Music",
    description:
      "I used to play bass in a band very long time ago, but I still love to sing and play music or go out to dance. Music is a good way to express how you feel. The most recent recording I did was a song with a friend, where I was exploring growling (2021).",
    accent: "var(--indigo)",
    image: {
      src: "/hobbies/music.jpg",
      alt: "Steffi playing music",
    },
  },
];
