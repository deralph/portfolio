import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Jupyter,
  NumPy,
  Pandas,
  PyTorch,
  TensorFlow,
  scikitLearn,
  gns,
  pdfAssistant,
  expensedTracked,
  neobot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Machine Learning / AI Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Pandas",
    icon: Pandas,
  },
  {
    name: "NumPy",
    icon: NumPy,
  },
  // {
  //   name: "PyTorch",
  //   icon: PyTorch,
  // },
  // {
  //   name: "TensorFlow",
  //   icon: TensorFlow,
  // },
  // {
  //   name: "Scikit-learn",
  //   icon: scikitLearn,
  // },
  // {
  //   name: "Jupyter",
  //   icon: Jupyter,
  // },
];

const experiences = [
  {
    title: "Junior Intern",
    company_name: "Data Science Nigeria (DSN)",
    icon: null,
    iconBg: "#383E56",
    date: "May 2024 - Oct. 2024",
    points: [
      "Collaborated with a team of three to build a chatbot framework using React, Python, and Langchain, achieving up to 25% reduction in operational costs",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborated with  a team that developed a chatbot product for government officials, facilitating streamlined communication regarding local data using the chatbot framework.",
      "Contributed to data collection, annotation, and cleaning for an African Indigenous LLM project, significantly improving the quality of the model's dataset.",
      "Gained expertise in machine learning model building using Scikit-learn and TensorFlow.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Onract Limited",
    icon: null,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developed interactive UIs using React, Typescript, and Redux, enhancing user experience",
      "Implemented pixel-perfect UI components with Material-UI and Styled-Components.",
      "Automated end-to-end testing using Cypress.js, improving software quality and reducing bugs",
    ],
  },
  {
    title: "Web Developer",
    company_name: "E-connect-Techmedia",
    icon: null,
    iconBg: "#383E56",
    date: "Sep 2022 - Mar 2023",
    points: [
      "Developed and optimized responsive web pages, improving site performance and user experience.",
      "Integrated APIs to enhance functionality and streamline business processes.",
      "Collaborated with the team to debug and resolve critical issues, ensuring smooth deployment of new features.",
    ],
  },
  {
    title: "Freelance Web / Mobile / AI Developer",
    company_name: "Freelance",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Nov. 2024 - Present",
    points: [
      "Built and deployed custom web and mobile applications, tailored to client-specific needs and enhancing user engagement.",
      "Developed machine learning models to automate data-driven decision-making, improving efficiency for clients in various industries.",
      "Integrated AI-powered chatbots and recommendation systems, boosting customer interaction and personalization on client platforms.",
      "Provided technical consulting and optimized performance of existing applications, reducing loading times and resource consumption.",
      "Collaborated with clients to develop cross-platform solutions, expanding their reach and ensuring seamless user experiences across devices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PDF Assistant",
    description:
      "Created a Retrieval-Augmented Generation (RAG) system, reducing search time in PDF’s by 5 minutes using Gemini API and Pinecone database. Full-stack developed with React.js, Flask, and vector databases for faster document parsing.",
    tags: [
      {
        name: "Natural Language Processing (NLP)",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "orange-text-gradient",
      },
      {
        name: "Pinecone (Vector database)",
        color: "yellow-text-gradient",
      },
    ],
    image: pdfAssistant,
    source_code_link: "https://github.com/deralph/rag-app",
  },
  {
    name: "Great Nigerian Student (GNS)",
    description:
      "Developed a social media app for students with React Native and Node.js, managing 1,000+ user interactions for networking and opportunities",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: gns,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.witswits.GNS",
  },
  {
    name: "Neobot  (AI Chatbot)",
    description:
      "Worked in a team of 3 to design and deploy an AI chatbot for over 24,000 users, utilizing Node.js, Express.js, and Typescript. Integrated Open AI and Pi API’s, enabling advanced conversational features. It was recognized in winners' honorable mentions, highlighting great potential and inspiration in the 2023 PI hackathon",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
    ],
    image: neobot,
    source_code_link: "https://github.com/deralph/pi-neobot",
  },
  {
    name: "Expensed Tracked",
    description:
      "ExpenseTracked is a full-stack expense management platform featuring integrated frontend and backend components, enabling payment tracking, community chats, and expert consultation bookings all built with modern web technologies.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
    ],
    image: expensedTracked,
    source_code_link: "https://github.com/deralph/pi-neobot",
  },
];

export { services, technologies, experiences, testimonials, projects };
