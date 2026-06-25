
export interface Article {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
  to: string;
}
export const hero = {

  categories: ["Culture", "Guy Hawkins"],

  title:
    "A deep dive into the influence of cultural movements on contemporary society",

  date: "Sep 9, 2024",

  readTime: "06 Minute",
};

export const heroTeasers = [
  {
    id: 1,
    image: "/elements/world/element-2.png",
    category: "WORLD NEWS",
    title: "Celebrating diversity and shared human experience",
    author: "Guy Hawkins",
    date: "Sep 9, 2024",
    to: "/",
  },

  {
    id: 2,
    image: "/elements/technology/element-5.png",
    title: "A comprehensive analysis of the state of global affairs",
    author: "Guy Hawkins",
    category: "TECHNOLOGY",
    date: "Sep 9, 2024",
    to: "/",
  },

  {
    id: 3,
    image: "/elements/health/element-2.png",
    title: "The global financial landscape and its implications for all",
    author: "Guy Hawkins",
    category: "HEALTH",
    date: "Sep 9, 2024",
    to: "/",
  },

  {
    id: 4,
    image: "/elements/sports/element-4.png",
    title: "Understanding the social movements reshaping our world today",
    author: "Guy Hawkins",
    category: "SPORTS",
    date: "Sep 9, 2024",
    to: "/",
  },
];

export const latestNews = {
  featured: {
    image: "/videoImage.jpg.png",
    title: "Riding the tide of innovation and inspiration",
    category: "Business",
    date: "Sep 6, 2024",
    to: "/",
  },

  highlights: <Article[]>[
    {
      id: 1,
      image: "/elements/business/element-6.png",
      title: "The effects of geopolitical shifts on global security",
      category: "World News",
      date: "Sep 8, 2024",
      to: "/",
    },
    {
      id: 2,
      image: "/elements/sports/element-4.png",
      title: "Affect the integrity and future of professional sports",
      category: "Sports",
      date: "Sep 8, 2024",
      to: "/",
    },
  ],

  articles: <Article[]>[
    {
      id: 3,
      image: "/elements/business/element-1.png",
      title: "Strategies for success in a competitive landscape",
      category: "Business",
      date: "Sep 8, 2024",
      to: "/",
    },
    {
      id: 4,
      image: "/elements/business/element-2.png",
      title: "Innovation hubs are transforming traditional business models",
      category: "Business",
      date: "Sep 8, 2024",
      to: "/",
    },

    {
      id: 5,
      image: "/elements/health/element-1.png",
      title: "Tailoring treatments to individual genetic profiles",
      category: "Health",
      date: "Sep 8, 2024",
      to: "/",
    },
  ],
};

export const worldNews = {
  featured: {
    image: "/elements/world/element-4.png",

    date: "Oct 14, 2024",

    title: "Understanding the social movements reshaping our world today",

    author: "Guy Hawkins",

    publisher: "Publisher",
  },

  articles: [
    {
      image: "/elements/world/element-3.png",

      subtitle: "Guy Hawkins — Sep 8, 2024",

      title: "The global financial landscape and its implications for all",
    },

    {
      image: "/elements/world/element-5.png",
      subtitle: "Guy Hawkins — Sep 9, 2024",
      title: "Examining the challenges and responses of nations",
    },

    {
      image: "/elements/world/element-2.png",
      subtitle: "Guy Hawkins — Sep 9, 2024",
      title: "A comprehensive analysis of the state of global affairs",
    },
  ],
};

export const technologyNews = [
  {
    id: 1,
    image: "/elements/technology/element-2.png",
    subtitle: "Guy Hawkins — Sep 9, 2024",
    title: "Latest innovations pave the way to a sustainable future",
    to: "/",
  },
  {
    id: 2,
    image: "/elements/technology/element-1.png",
    subtitle: "Guy Hawkins — Sep 9, 2024",
    title: "Understanding the role of big data in driving technological change",
    to: "/",
  },
  {
    id: 3,
    image: "/elements/technology/element-3.png",
    subtitle: "Guy Hawkins — Sep 9, 2024",
    title: "Exploring the latest developments in AI and robotics",
    to: "/",
  },
  {
    id: 4,
    image: "/elements/technology/element-4.png",
    subtitle: "Guy Hawkins — Sep 9, 2024",
    title: "Future of computing and what it means for society",
    to: "/",
  },
];

export const podcasts = [
  {
    id: 1,
    image: "/elements/podcast/element-1.png",
    subtitle: "10 Minutes — Guy Hawkins",
    title: "Riding the tide of innovation and inspiration",
    description:
      "The latest trends, creative breakthroughs, and visionary minds driving change.",
    to: "/",
  },
  {
    id: 2,
    image: "/elements/podcast/element-2.png",
    subtitle: "08 Minutes — Guy Hawkins",
    title: "Where ideas come alive and stories unfold",
    description:
      "This podcast explores the journey from concept to creation, showcasing the stories.",
    to: "/",
  },
  {
    id: 3,
    image: "/elements/podcast/element-3.png",
    subtitle: "12 Minutes — Guy Hawkins",
    title: "Connecting ideas, people, and perspectives",
    description:
      "This podcast bridges ideas, people, and perspectives, fostering meaningful conversations.",
    to: "/",
  },
  {
    id: 4,
    image: "/elements/podcast/element-4.png",
    subtitle: "09 Minutes — Guy Hawkins",
    title: "On the air capturing the voices of change",
    description:
      "Brings you powerful stories and conversations with individuals who are making a difference.",
    to: "/",
  },
  {
    id: 5,
    image: "/elements/podcast/element-5.png",
    subtitle: "06 Minutes — Guy Hawkins",
    title: "The podcast where ideas take flight",
    description:
      "Offering listeners a chance to hear how groundbreaking ideas are launched into the world.",
    to: "/",
  },
  {
    id: 6,
    image: "/elements/podcast/element-6.png",
    subtitle: "10 Minutes — Guy Hawkins",
    title: "Exploring thought-provoking topics weekly",
    description:
      "A wide range of topics, offering fresh perspectives and in-depth analysis on issues.",
    to: "/",
  },
];
