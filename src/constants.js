// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import logocol from "./assets/education_logo/logocol.png";
import schoolLogo from "./assets/education_logo/schoolLogo.jpeg";

// Project Section Logo's
import Blog2 from "./assets/work_logo/Blog2.jpg";
import EasyBazaar from "./assets/work_logo/EasyBazaar.jpg";
import Luxenparis from "./assets/work_logo/luxenparis.jpg";
import StrideFusion from "./assets/work_logo/Stridefusion.jpg";
import BusWallah from "./assets/work_logo/BusWallah.jpg";

export const SkillsInfo = [
  {
    title: "Programming & Architecture",
    skills: [
      { name: "Java", logo: htmlLogo },
      { name: "Kotlin", logo: cssLogo },
      { name: "Kotlin Multiplatform (KMP)", logo: javascriptLogo },
      { name: "Clean Architecture", logo: reactjsLogo },
      { name: "MVVM Architecture", logo: reduxLogo },
      { name: "Hilt (Dependency Injection)", logo: tailwindcssLogo },
    ],
  },
  {
    title: "UI/UX Development",
    skills: [
      { name: "Jetpack Compose", logo: nodejsLogo },
      { name: "Material Design", logo: expressjsLogo },
      { name: "Custom Views", logo: mysqlLogo },
      { name: "Animations", logo: mongodbLogo },
      { name: "Responsive Layouts", logo: firebaseLogo },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Firebase", logo: gitLogo },
      { name: "Retrofit (REST APIs)", logo: githubLogo },
      { name: "Room Database", logo: vscodeLogo },
      { name: "Agora SDK (Audio/Video Calls)", logo: postmanLogo },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Android Studio", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Gradle", logo: vscodeLogo },
      { name: "ExoPlayer", logo: postmanLogo },
      { name: "Coil", logo: mcLogo },
      { name: "Lottie", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: logocol,
    school: "Mangalayatan University",
    date: "July 2024",
    desc: "I completed my Bachelor of Computer Applications(BCA) from Mangalayatan University.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "Navyug Happy Public Sec. School",
    date: "March 2021",
    desc: "I completed my class 12 education from Navyug Happy Public Sec. School under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "CBSE(XII) - Commerce",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Saraswati Bal Mandir, Jhandewalan",
    date: "March 2018",
    desc: "I completed my class 10 education from Saraswati Bal Mandir, Jhandewalan, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "EasyBazaar",
    description:
      ": Developed a full-stack eCommerce web application focused on electronic products, offering a wide range of gadgets, appliances, and accessories at affordable prices. this platform allows users to register, log in, browse products, manage their shopping cart, and securely complete purchases.",
    image: EasyBazaar,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay API"],
    github: "https://github.com/Anmol-Jha-20/easy-bazaar",
    webapp: "https://easy-bazaar-mvjv.vercel.app/",
  },
  {
    id: 1,
    title: "BlogSphere",
    description:
      "Built a full-stack blog platform enabling users to create, read, update and delete blog posts with rich text formatting. ",
    image: Blog2,
    tags: ["React JS", "Tailwind CSS", "Appwrite"],
    github: "https://github.com/Anmol-Jha-20/BlogSphere",
    webapp: "https://blog-sphere-livid.vercel.app/",
  },
  {
    id: 2,
    title: "LuxenParis",
    description:
      "A website dedicated to offering a curated selection of premium perfumes. Designed for seamless user experience across mobile and desktop devices.",
    image: Luxenparis,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anmol-Jha-20/Luxenparis",
    webapp: "https://luxenparis.com/",
  },
  {
    id: 3,
    title: "Bus Wallah",
    description:
      "Developed a frontend UI for a bus ticket booking application using React.js and Tailwind CSS. Animated UI transitions for smooth page interactions using Framer Motion (A React Animation Library)",
    image: BusWallah,
    tags: ["React JS", "Tailwind CSS"],
    github: "https://github.com/Anmol-Jha-20/Bus-wallah",
    webapp: "https://bus-wallah.vercel.app/",
  },
  {
    id: 4,
    title: "stride-fusion",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: StrideFusion,
    tags: ["React JS", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Anmol-Jha-20/Stride-fusion",
    webapp: "https://stride-fusion-web.netlify.app/",
  },
];
