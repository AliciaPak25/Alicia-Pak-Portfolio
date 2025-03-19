export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  /* {
    id: 4,
    name: "Contact",
    href: "#contact",
  }, */
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title:
      "Signature Integral Solution Inc. - Professional Services Landing Page",
    desc: "Signature Integral Solution Inc. is a professional services company based in the U.S., offering cleaning services, preventive and corrective maintenance, and comprehensive facility management. This landing page serves as their online presence, helping them promote their services and connect with potential clients.",
    subdesc:
      "I built this landing page in collaboration with a professional web designer using React, Vite, and Tailwind CSS to ensure a modern, responsive, and fast-loading experience. The site effectively showcases the company’s offerings while providing an easy way for customers to get in touch.",
    href: "https://signature-integral-solution.vercel.app/",
    texture: "/textures/project/signature2.mp4",
    logo: "/assets/signature-logo.png",
    logoStyle: {
      backgroundColor: "#333333",
      border: "0.2px solid #333333",
      boxShadow: "0px 0px 60px 0px #8db924",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
  {
    title: "Emprenderesina - Online Course Landing Page",
    desc: "Emprenderesina is a landing page designed to showcase my client’s courses and provide an easy way for users to learn more and enroll.",
    subdesc:
      "Built together with another developer for a client in Argentina using WordPress and Elementor, this site ensures a visually appealing, responsive, and user-friendly experience. It is entirely in Spanish and effectively highlights my client’s educational offerings while making it easy for visitors to navigate and purchase a course",
    href: "https://emprenderesina.com.ar/",
    texture: "/textures/project/emprenderesina.mp4",
    logo: "https://emprenderesina.com.ar/wp-content/uploads/2024/09/cropped-IMG_20240917_114305_076.jpg",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #FFFFFF",
      boxShadow: "0px 0px 60px 0px #ffc7ee",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/wordpress.png",
      },
      {
        id: 2,
        name: "Elementor",
        path: "assets/elementor.png",
      },
    ],
  },
  {
    title: "CodeJoy Creations - Fictional Software Company Showcase",
    desc: "CodeJoy Creations is a fictional software company designed to showcase my frontend development skills. Built as part of a challenge for a selection process. This project demonstrates my ability to create engaging and visually appealing web experiences.",
    subdesc:
      "Developed using React, Vite, and Tailwind CSS, this website serves as a creative portfolio piece to highlight my frontend expertise. With a focus on design, responsiveness, and interactivity, CodeJoy Creations presents a dynamic and polished web experience aimed at capturing recruiters' attention.",
    href: "https://codejoy-creations.vercel.app/",
    texture: "/textures/project/codejoy-creations.mp4",
    logo: "/assets/code.png",
    logoStyle: {
      backgroundColor: "transparent",
      border: "0.2px solid  #e483f8 ",
      boxShadow: "0px 0px 60px 0px #8ecef4",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
