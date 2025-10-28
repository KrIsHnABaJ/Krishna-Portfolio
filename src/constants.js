// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import apiLogo from './assets/tech_logo/api.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import awsLogo from './assets/tech_logo/aws.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import sklearnLogo from './assets/tech_logo/sklearn.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import featureengineeringLogo from './assets/tech_logo/featureengineering.png';
import renderLogo from './assets/tech_logo/render.png';



// Experience Section Logo's
import bharatTechLogo from './assets/company_logo/bharatTech.png';
import hcltechLogo from './assets/company_logo/hcl.jpg';



// Education Section Logo's
import vitLogo from './assets/education_logo/vit.png';
import suryaLogo from './assets/education_logo/suryapublic.jpeg';
import jindalLogo from './assets/education_logo/shriop.jpeg';

// Project Section Logo's
import vegifyLogo from './assets/work_logo/vegify.png';
import fitflareLogo from './assets/work_logo/fitflare.png';
import portfolioLogo from './assets/work_logo/portfolio.png';
import holidayshoppingLogo from './assets/work_logo/holiday_shopping.png';
import eventmsLogo from './assets/work_logo/eventms.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST APIs', logo: apiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Scikit-Learn', logo: sklearnLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'Feature Engg', logo: featureengineeringLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },

];

  export const experiences = [
    {
      id: 0,
      img: hcltechLogo,
      role: "Java Software Developer",
      company: "HCLTech",
      date: "January 2025 - August 2025",
      desc: "Developed and maintained Java-based backend modules using Spring Boot and RESTful APIs for enterprise-level applications. Integrated MySQL databases for efficient data handling, focusing on query optimization and data consistency. Collaborated with senior developers to debug, test, and deploy new features following Agile development methodologies. Contributed to improving system performance and scalability through code refactoring and modular architecture. Gained hands-on experience with Git, Postman, and CI/CD pipelines, strengthening understanding of the complete software development lifecycle.",
      skills: [
        "Java",
        "Spring Boot",
        "RESTful APIs",
        "MySQL",
        "Git",
        "Postman",
        "CI/CD",
        "Agile Development",
      ],
    },

    {
      id: 1,
      img: bharatTechLogo,
      role: "Machine Learning Intern",
      company: "Bharat-Tech",
      date: "December 2023 - March 2024",
      desc: "Worked on data preparation and model optimization for College-Cue, an AI-based student and job search platform. Cleaned and transformed over 50,000 records, handled missing data, removed duplicates, and engineered features to improve model accuracy by 15%. Collaborated in a 5-member team to integrate multi-source datasets, applying normalization and encoding techniques to ensure consistent, high-quality input for machine learning workflows.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Data Cleaning",
        "Feature Engg",
        "Machine Learning",
      ],
    },
    
  ];
  
  export const education = [
  {
    id: 0,
    img: vitLogo,
    school: "VIT Bhopal University, Bhopal, Madhya Pradesh",
    date: "Aug 2021 - July 2025",
    grade: "9.16 CGPA",
    desc: "Completed Bachelor's degree in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning. Gained strong expertise in software development, data structures, algorithms, and AI-driven problem solving. Worked on multiple projects involving full-stack web development and machine learning applications, contributing to both academic and technical communities.",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
  },
  {
    id: 1,
    img: suryaLogo,
    school: "Surya Public School, IT City, Lucknow, Uttar Pradesh",
    date: "June 2021",
    grade: "75%",
    desc: "Completed Class XII under the CBSE board with core subjects in Physics, Chemistry, Mathematics, and Computer Science. Built strong analytical, logical, and problem-solving abilities that laid the foundation for my technical studies.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: jindalLogo,
    school: "Shri O.P. Jindal Vidya Niketan, Mundra, Kutch, Gujarat",
    date: "May 2019",
    grade: "87.8%",
    desc: "Completed Class X under the CBSE board with Science stream. Developed curiosity in computer technology and programming, which motivated me to pursue computer science as a career path.",
    degree: "CBSE (X) - Science with Computer Applications",
  },
];

  
  export const projects = [
    {
      id: 0,
      title: "Vegify",
      description:
        "A full-stack vegetarian recipe platform enabling users to explore, contribute, and engage with diverse recipes. Built with a React.js frontend and Node.js + Express backend, it supports secure authentication, dynamic content updates, and interactive UI for 100+ vegetarian dishes across multiple categories.",
      image: vegifyLogo,
      tags: ["React JS", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/KrIsHnABaJ/Vegify",
      webapp: "https://recipe-mern-frontend.vercel.app/",
    },
    {
      id: 1,
      title: "FitFlare",
      description:
        "A fitness management web application that allows users to track workouts, set goals, and monitor progress. Integrated authentication and authorization with Node.js and MongoDB, offering a personalized dashboard with over 25 exercises and dynamic workout plans.",
      image: fitflareLogo,
      tags: ["React JS", "Node.js", "Express", "MongoDB", "Authentication", "Tailwind CSS"],
      github: "https://github.com/KrIsHnABaJ/FitFlare",
      webapp: "https://back-gilt-one.vercel.app/",
    },
    {
      id: 2,
      title: "Event Management System (MERN)",
      description:
        "A full-stack Event Management System where admins can create and manage user profiles and events across multiple timezones. Built using the MERN stack with state management via Redux and timezone handling through Day.js. Supports creating, viewing, and updating events while ensuring all timestamps are accurately reflected according to each user's selected timezone. Includes robust form validation, responsive design, and real-time updates for seamless collaboration.",
      image: eventmsLogo,
      tags: [
        "React JS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Day.js",
        "REST API",
        "Full Stack",
      ],
      github: "https://github.com/KrIsHnABaJ/event_management_system",
      webapp: "https://event-management-system-alpha-nine.vercel.app", 
    },
    {
      id: 3,
      title: "Krishna-Portfolio",
      description:
        "A personal developer portfolio built to showcase my projects, technical skills, professional experience, and contact information. Designed with a clean, responsive UI and dynamic project integration for seamless updates. Features detailed sections for About, Projects, Skills, Resume, and Contact, making it a complete digital representation of my developer profile.",
      image: portfolioLogo,
      tags: [
        "React JS",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "Vite",
        "Vercel",
      ],
      github: "https://github.com/KrIsHnABaJ/Krishna-Portfolio",
      webapp: "https://krishna-portfolio-bice.vercel.app", 
    },

    {
      id: 4,
      title: "Holiday Shopping Analysis",
      description:
        "A reproducible data science project for exploring, analyzing, and visualizing consumer shopping behavior during holiday seasons. Built with Python and Jupyter notebooks, the project includes end-to-end data pipelines for cleaning, feature engineering, exploratory data analysis (EDA), and baseline forecasting models. Designed to uncover key retail insights such as seasonal demand shifts, category performance, and customer engagement trends.",
      image: holidayshoppingLogo,
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-Learn",
        "EDA",
        "Data Visualization",
      ],
      github: "https://github.com/KrIsHnABaJ/holiday-shopping-analysis",
      webapp: "https://github.com/KrIsHnABaJ/holiday-shopping-analysis/blob/main/readme.md",
    },

  ];