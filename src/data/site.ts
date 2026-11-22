// ───────────────────────────────────────────────────────────────
// Single source of truth for your portfolio content.
// Edit this file to update the site — no need to touch the pages.
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rabin Neupane',
  title: 'Software Engineer',
  tagline: 'Java · Backend ',
  location: 'Kathmandu, Nepal',
  summary:
    'Software Engineer focused on building and scaling reliable backend systems with Java and Spring Boot. I work across microservices, databases, and cloud infrastructure (AWS), with hands-on experience in Docker, CI/CD, and system monitoring. Currently pursuing an M.Tech in Information Technology at Kathmandu University.',
  // Public contact details. Remove any you'd rather keep private.
  email: 'neupanerabin7@gmail.com',
  phone: '+977 9861357116',
  resume: '/Rabin_Neupane_Resume.pdf',
  socials: {
    github: 'https://github.com/neupanerabin',
    linkedin: 'https://www.linkedin.com/in/rabin-neupane-3971a2191/',
    instagram: 'https://www.instagram.com/rabeen_neupane/',
  },
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Smart Data Solutions',
    location: 'Kathmandu, Nepal',
    period: 'Dec 2025 – Present',
    points: [
      'Scaled and enhanced existing application logic to improve performance, maintainability, and system efficiency in an AWS cloud environment.',
      'Maintained and updated Java-based backend systems and database management processes, ensuring high availability and reliability.',
      'Monitored application and system performance, troubleshooting issues across application and infrastructure layers.',
      'Developed Python and Bash scripts for automation, log analysis, and system monitoring.',
      'Applied SOLID principles and best coding practices to improve maintainability and scalability of Java applications.',
      'Accessed remote servers to execute scripts, manage the application lifecycle, and monitor logs for debugging and issue resolution.',
    ],
  },
  {
    role: 'Java Developer',
    company: 'Amakomaya App Nepal',
    location: 'Kathmandu, Nepal',
    period: 'Aug 2024 – Apr 2025',
    points: [
      'Contributed to the DHIS2 analytics module by resolving critical issues in the Nepali Calendar and improving performance.',
      'Configured a Dockerized DHIS2 environment to streamline development and testing.',
      'Managed PostgreSQL configurations and optimized dhis.config settings to enhance database performance.',
      'Developed new features for DHIS2 modules, focusing on scalable and efficient backend integrations.',
      'Collaborated with the team to debug and resolve complex backend issues effectively.',
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  points: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'E-commerce Platform',
    blurb: 'A microservices-based e-commerce application.',
    stack: ['Spring Boot', 'PostgreSQL', 'Kafka', 'MongoDB', 'Redis', 'Keycloak', 'Docker Compose'],
    points: [
      'Designed and implemented a microservices architecture with Spring Boot, PostgreSQL, Kafka, MongoDB, and Docker Compose.',
      'Secured endpoints with Keycloak for token-based authentication and session management.',
      'Integrated Redis caching to reduce database load for frequently accessed data.',
      'Used Zipkin for distributed tracing to monitor and debug cross-service interactions.',
      'Streamlined deployment and scalability through modular service design and orchestration.',
    ],
    link: 'https://github.com/neupanerabin/ecommerce_spring_microservice',
  },
  {
    name: 'Book Recommendation System',
    blurb: 'A collaborative-filtering engine for personalized book suggestions.',
    stack: ['Python', 'Flask', 'Bootstrap', 'Cosine Similarity', 'K-NN'],
    points: [
      'Implemented Collaborative Filtering with two algorithms — Cosine Similarity and K-Nearest Neighbor (K-NN).',
      'Both algorithms achieved ~68% accuracy in recommending similar books.',
      'Built a responsive web app (HTML, CSS, Bootstrap frontend; Python Flask backend).',
      'Processed and filtered large datasets, focusing on data quality for reliable recommendations.',
    ],
    link: 'https://github.com/neupanerabin',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'] },
  { group: 'Frameworks', items: ['Spring Boot', 'Spring MVC', 'Hibernate', 'JPA'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: 'Web', items: ['RESTful APIs', 'JSON', 'HTML', 'CSS', 'React'] },
  { group: 'DevOps & Tools', items: ['Docker', 'Git', 'JUnit', 'Mockito', 'Postman', 'Selenium'] },
  { group: 'Systems', items: ['Linux', 'Unix', 'Bash', 'CI/CD', 'System Monitoring'] },
  { group: 'Architecture', items: ['Microservices'] },
];

export const education = [
  {
    school: 'Kathmandu University',
    place: 'Dhulikhel, Nepal',
    degree: 'Master of Technology in Information Technology',
    period: 'Dec 2024 – Dec 2026 (Ongoing)',
  },
  {
    school: 'Tribhuvan University',
    place: 'Kathmandu, Nepal',
    degree: 'B.Sc. in Computer Science and Information Technology',
    period: '2019 – 2024',
  },
];

export const certifications = [
  { name: 'Git and GitHub', issuer: '365 Data Science' },
];
