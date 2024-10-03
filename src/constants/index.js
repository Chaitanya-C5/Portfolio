import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    express,
    tailwind,
    nodejs,
    git,
    tcs,
    smartWaterMonitoring,
    sportsCoaching,
    ticTacToe,
    simonGame,
    cpp,
    java,
    python,
    jsp,
    sql,
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
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "IoT Developer",
      icon: creator,
    },
    {
      title: "Android App Developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Express JS",
      icon: express,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JSP-Servlets",
      icon: jsp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    }
  ];
  
  const experiences = [
    {
      title: "Systems Engineer",
      company_name: "TCS",
      icon: tcs, 
      iconBg: "#101b21",
      date: "Aug 2024 - Present",
      points: [
        "Engaging in software development and engineering projects.",
        "Collaborating with team members to solve problems and deliver effective solutions.",
        "Learning and applying various technologies and best practices in software development.",
      ],
    },
];


  const projects = [
    {
      name: "Smart Water Monitoring System",
      description:
        "An IoT-based system that monitors water quality and provides real-time data on water impurities, integrated with a mobile application for easy access to information.",
      tags: [
        {
          name: "IoT",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "Cloud",
          color: "pink-text-gradient",
        },
      ],
      image: smartWaterMonitoring, 
      source_code_link: "https://github.com/Chaitanya-C5/Smart-Water-Monitoring-System",
    },
    {
      name: "Online Sports Coaching Website",
      description:
        "A web-based platform that allows individuals to sign up as coaches or students for online sports coaching sessions, featuring user registration and scheduling functionality.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "violet-text-gradient",
        },
        {
          name: "MySQL",
          color: "blue-green-text-gradient",
        },
      ],
      image: sportsCoaching, 
      source_code_link: "https://github.com/Chaitanya-C5/esportz",
    },
    {
      name: "Tic Tac Toe Game",
      description:
        "A web-based Tic Tac Toe game featuring an intuitive user interface and basic AI for single-player mode, developed with a focus on user experience.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: ticTacToe, 
      source_code_link: "https://github.com/Chaitanya-C5/Tic-Tac-Toe",
    },
    {
      name: "Simon Game",
      description:
        "A memory-enhancement game based on the classic Simon game, developed to improve users' memory and pattern recognition through interactive gameplay.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "jQuery",
          color: "pink-text-gradient",
        },
      ],
      image: simonGame, 
      source_code_link: "https://github.com/Chaitanya-C5/Simon-Game",
    },
  ];

  export { services, technologies, experiences, projects };