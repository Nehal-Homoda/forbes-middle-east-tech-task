export interface CategoryArticle {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  to: string;
}

export interface CategoryPage {
  slug: string;
  label: string;
  title: string;
  articles: CategoryArticle[];
}

const meta = "Guy Hawkins — Sep 9, 2024";

export const categoryPages: Record<string, CategoryPage> = {
  "world-news": {
    slug: "world-news",
    label: "World News",
    title: "WORLD NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/world/element-1.png",
        title: "Celebrating diversity and shared human experience",
        subtitle: meta,
        to: "/category/culture/deep-dive-cultural-movements",
      },
      {
        id: 2,
        image: "/elements/world/element-2.png",
        title: "A comprehensive analysis of the state of global affairs",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/world/element-3.png",
        title: "The global financial landscape and its implications for all",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/world/element-4.png",
        title: "Understanding the socialmovements reshaping ourworld today",
        subtitle: meta,
        to: "/",
      },
      {
        id: 5,
        image: "/elements/world/element-5.png",
        title: "Examining the challenges and responses of nations",
        subtitle: meta,
        to: "/",
      },
    ],
  },
  politics: {
    slug: "politics",
    label: "Politics",
    title: "POLITICS NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/politics/element-1.png",
        title: "Far-Right Prepares for Post-Election Violence",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/politics/element-2.png",
        title: "Trump's Potential Cabinet",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/politics/element-3.png",
        title: "US Election Update: A Divided Nation",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/politics/element-4.png",
        title: "Elon Musk's $1M Giveaways Spark Controversy",
        subtitle: meta,
        to: "/",
      },
      {
        id: 5,
        image: "/elements/politics/element-5.png",
        title: "Kamala Harris' Policies",
        subtitle: meta,
        to: "/",
      },
    ],
  },
  business: {
    slug: "business",
    label: "Business",
    title: "BUSINESS NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/business/element-1.png",
        title: "Strategies for success in a competitive landscape",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/business/element-2.png",
        title: "Innovation hubs are transforming traditional business models",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/business/element-3.png",
        title: "Challenges and solutions in a digital age",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/business/element-4.png",
        title: "The evolution of business models in a digital economy",
        subtitle: meta,
        to: "/",
      },
      {
        id: 5,
        image: "/elements/business/element-5.png",
        title:
          "Understanding the interconnectedness ofevents shaping our world today",
        subtitle: meta,
        to: "/",
      },
    ],
  },

  technology: {
    slug: "technology",
    label: "Technology",
    title: "TECHNOLOGY NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/technology/element-1.png",
        title: "Understanding the role of big data in driving technological",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/technology/element-2.png",
        title: "Latest Innovations Pave the Way to a Sustainable Future",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/technology/element-3.png",
        title: "Exploring the latest developments in AI, Robotics",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/technology/element-4.png",
        title: "Future of computing and what it means for society",
        subtitle: meta,
        to: "/",
      },
      {
        id: 5,
        image: "/elements/technology/element-5.png",
        title: "How technology are revolutionizing urban living",
        subtitle: meta,
        to: "/",
      },
    ],
  },

  health: {
    slug: "health",
    label: "Health",
    title: "HEALTH NEWS",
    articles: [
      {
        id: 1,
        image: "elements/health/element-1.png",
        title: "Tailoring treatments to individual genetic profiles",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "elements/health/element-3.png",
        title: "How technology is revolutionizing patient experiences",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "elements/health/element-2.png",
        title: "Analyzing the effects of global health policies",
        subtitle: meta,
        to: "/",
      },
    ],
  },

  sports: {
    slug: "sports",
    label: "Sports",
    title: "SPORTS NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/sports/element-1.png",
        title: "Celebrating diversity and shared human experience",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/sports/element-2.png",
        title: "The journey from aspiring athlete to global sports icon",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/sports/element-3.png",
        title: "The economics, sponsorships, and branding behind the scenes",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/sports/element-4.png",
        title: "Affect the integrity and future of professional sports",
        subtitle: meta,
        to: "/",
      },
    ],
  },

  culture: {
    slug: "culture",
    label: "Culture",
    title: "CULTURE NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/culture/element-1.png",
        title: "How generations are redefining heritage & cultural norms",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/culture/element-2.png",
        title: "Analyzing the figures who reshape our social narratives",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/culture/element-3.png",
        title: "Preserving cultural traditions in a rapidly changing world",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/culture/element-4.png",
        title:
          "A deep dive into the influence of cultural movements on contemporary society",
        subtitle: meta,
        to: "/category/culture/deep-dive-cultural-movements",
      },
      {
        id: 5,
        image: "/elements/culture/element-5.png",
        title: "Global efforts to combat environmental challenges",
        subtitle: meta,
        to: "/",
      },
    ],
  },

  podcast: {
    slug: "podcast",
    label: "Podcast",
    title: "PODCAST NEWS",
    articles: [
      {
        id: 1,
        image: "/elements/podcast/element-1.png",
        title: "How generations are redefining heritage & cultural norms",
        subtitle: meta,
        to: "/",
      },
      {
        id: 2,
        image: "/elements/podcast/element-2.png",
        title: "Analyzing the figures who reshape our social narratives",
        subtitle: meta,
        to: "/",
      },
      {
        id: 3,
        image: "/elements/podcast/element-3.png",
        title: "Preserving cultural traditions in a rapidly changing world",
        subtitle: meta,
        to: "/",
      },
      {
        id: 4,
        image: "/elements/podcast/element-4.png",
        title:
          "A deep dive into the influence of cultural movements on contemporary society",
        subtitle: meta,
        to: "/category/culture/deep-dive-cultural-movements",
      },
      {
        id: 5,
        image: "/elements/podcast/element-5.png",
        title: "Global efforts to combat environmental challenges",
        subtitle: meta,
        to: "/",
      },
    ],
  },
};

export const articleDetail = {
  slug: "deep-dive-cultural-movements",
  categorySlug: "culture",
  image: "/HomeBg-desktop.webp",
  title:
    "A deep dive into the influence of cultural movements on contemporary society",
  author: "Guy Hawkins",
  date: "Monday, September 9, 2024",
  paragraphs: [
    "Cultural movements have been a driving force behind societal change for centuries, but in today's globally connected world, their influence has grown stronger and more immediate. These movements, ranging from social justice initiatives to environmental campaigns and digital innovations, shape not only individual beliefs but also entire communities and industries.",
    "One of the most prominent cultural movements in recent years has been the call for social justice and equality. This movement has manifested in multiple forms, from the fight for gender equality and racial justice to the push for LGBTQ+ rights and workplace inclusivity.",
    "Environmental movements are another powerful force reshaping contemporary society. From climate change activism to sustainable agriculture, people around the world are uniting to address environmental challenges and rethink how industries operate.",
    "The rise of digital culture and technology-driven movements has further transformed how people engage with one another and participate in cultural shifts. Social media platforms have become powerful tools for awareness and community building.",
    "At the same time, cultural movements have left a significant impact on the arts and media industries. Artists and creators use their work to reflect these themes, highlighting voices and narratives that were often overlooked.",
    "Education systems are also evolving in response to cultural movements. Schools and universities are gradually incorporating lessons on social change, mental health, and social justice into their programs.",
    "These cultural movements underscore the importance of collective action, demonstrating that significant change is possible when individuals and communities work together toward common goals.",
    "Looking ahead, the continued influence of cultural movements will likely shape new trends and priorities across various aspects of life, from technology and politics to everyday social interactions.",
    "By examining and understanding these movements, we gain insight into the forces that drive modern society, encouraging us to participate in positive change and embrace values that reflect a shared vision for a brighter future.",
  ],
  bullets: [
    "Social justice movements are influencing business practices, encouraging inclusivity, fair representation, and equality in various sectors.",
    "Environmental activism is driving industries toward sustainable practices, emphasizing green energy and waste reduction.",
    "Digital connectivity has transformed how cultural movements spread and gather support.",
    "Arts and media increasingly highlight diverse perspectives through storytelling.",
    "Educational reforms embed critical social issues into curriculums for future generations.",
  ],
};
