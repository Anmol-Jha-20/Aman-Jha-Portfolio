// Skills Section Logo's

// Education Section Logo's
import logocol from "./assets/education_logo/logocol.png";
import schoolLogo from "./assets/education_logo/schoolLogo.jpeg";

// Project Section Logo's
import Blog2 from "./assets/work_logo/DressCode.png";
import EasyBazaar from "./assets/work_logo/Zapchat.png";
import Luxenparis from "./assets/work_logo/CamExpert.png";
import StrideFusion from "./assets/work_logo/Gyantra.png";
import BusWallah from "./assets/work_logo/ChatX.png";
import Weatherly from "./assets/work_logo/Weatherly.png";

export const SkillsInfo = [
  {
    title: "Programming & Architecture",
    skills: [
      { name: "Java" },
      { name: "Kotlin" },
      { name: "Kotlin Multiplatform (KMP)" },
      { name: "Clean Architecture" },
      { name: "MVVM Architecture" },
      { name: "Hilt (Dependency Injection)" },
    ],
  },
  {
    title: "UI/UX Development",
    skills: [
      { name: "Jetpack Compose" },
      { name: "Material Design" },
      { name: "Custom Views" },
      { name: "Animations" },
      { name: "Responsive Layouts" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Firebase" },
      { name: "Retrofit (REST APIs)" },
      { name: "Room Database" },
      { name: "Agora SDK (Audio/Video Calls)" },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Android Studio" },
      { name: "GitHub" },
      { name: "Gradle" },
      { name: "ExoPlayer" },
      { name: "Coil" },
      { name: "Lottie" },
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
    title: "ZapChat – WhatsApp-Style Real-Time Chat App",
    description:
      "A feature-rich chat application built with Jetpack Compose, Firebase Realtime Database, and Agora SDK, designed using MVVM, Hilt, and Clean Architecture. It supports real-time 1-1 messaging, audio/video calls, status updates, community management, OTP verification, profile customization, and responsive dark-themed UI with smooth animations.",
    image: EasyBazaar,
    tags: [
      "Jetpack Compose",
      "Firebase Realtime Database",
      "Agora SDK",
      "MVVM",
      "Hilt (DI)",
      "Clean Architecture",
      "Material 3",
      "Kotlin",
    ],
    github: "https://github.com/Anmol-Jha-20/easy-bazaar",
    webapp: "https://easy-bazaar-mvjv.vercel.app/",
  },
  {
    id: 1,
    title: "DressCode – Girls’ Fashion E-commerce App",
    description:
      "A modern shopping app tailored for girls with seamless UI, secure payments, and Firebase-powered backend. It features product showcase with categories, wishlist & cart management, profile handling, push notifications (FCM), Google voice search, and online payments via Razorpay — all built with a clean, responsive design and dark theme support.",
    image: Blog2,
    tags: [
      "Jetpack Compose",
      "Firebase",
      "Razorpay SDK",
      "MVVM",
      "Material 3",
      "Kotlin",
    ],
    github: "https://github.com/Anmol-Jha-20/BlogSphere",
    webapp: "https://blog-sphere-livid.vercel.app/",
  },
  {
    id: 2,
    title: "CamXpert – Jetpack Compose Camera App",
    description:
      "A modern camera app built with Jetpack Compose + CameraX supporting photo capture, video recording with countdown, gallery preview in bottom sheet, and smooth front/back camera toggle. Designed with animations and Material 3 for a seamless, intuitive experience.",
    image: Luxenparis,
    tags: [
      "Jetpack Compose",
      "CameraX",
      "Kotlin Coroutines",
      "Material 3",
      "AndroidX Libraries",
    ],
    github: "https://github.com/Anmol-Jha-20/Luxenparis",
    webapp: "https://luxenparis.com/",
  },
  {
    id: 3,
    title: "ChatX – AI-Powered Chat Assistant",
    description:
      "An AI chat app built with Jetpack Compose + Gemini API delivering real-time responses with a sleek and responsive UI. Features live typing indicators, Lottie animations, dark/light themes, timestamps, and context-aware replies for a smooth and modern chat experience.",
    image: BusWallah,
    tags: [
      "Jetpack Compose",
      "Kotlin",
      "Gemini AI API",
      "Material 3",
      "Lottie",
    ],
    github: "https://github.com/Anmol-Jha-20/Bus-wallah",
    webapp: "https://bus-wallah.vercel.app/",
  },
  {
    id: 4,
    title: "GYANTRA – Modern eBook Library App",
    description:
      "An elegant eBook library app built with Jetpack Compose + Firebase offering category-wise browsing, PDF reading with live page count, shimmer loading effects, dark mode, and responsive design. Designed with Clean Code Architecture (MVVM + Hilt) for a smooth and user-friendly reading experience.",
    image: StrideFusion,
    tags: [
      "Jetpack Compose",
      "Firebase",
      "MVVM",
      "Hilt",
      "Clean Architecture",
      "Material 3",
    ],
    github: "https://github.com/Anmol-Jha-20/Stride-fusion",
    webapp: "https://stride-fusion-web.netlify.app/",
  },
  {
    id: 5,
    title: "Weatherly – Kotlin Multiplatform Weather App",
    description:
      "A sleek weather app built with Kotlin Multiplatform + Jetpack Compose providing real-time updates, dark/light theme support, responsive layouts, and smooth Lottie animations. Designed for UI consistency and scalable architecture across all devices.",
    image: Weatherly,
    tags: [
      "Kotlin",
      "Multiplatform",
      "Jetpack Compose",
      "OpenWeather API",
      "Lottie",
    ],
    github: "https://github.com/Anmol-Jha-20/Stride-fusion",
    webapp: "https://stride-fusion-web.netlify.app/",
  },
];
