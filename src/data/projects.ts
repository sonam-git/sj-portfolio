export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  duration: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
}

// Import actual project images from assets
import hscImg from '../assets/images/project/hsc.png';
import rosterHubImg from '../assets/images/project/Roster-hub.png';
import weatherImg from '../assets/images/project/weather.png';
import techIntImg from '../assets/images/project/Tech-int.png';
import alumniBookImg from '../assets/images/project/alumni-book.png';
import ngimalayaImg from '../assets/images/project/ngimalaya.png';
import emotionamicImg from '../assets/images/project/emotionamic.png';
import reduxShopImg from '../assets/images/project/redux-shop.png';

// Array of project images mapped to project IDs
const projectImages = [
  hscImg,        // Project 1: HSC of Sonoma Website
  rosterHubImg,  // Project 2: Roster-Hub
  weatherImg,    // Project 3: Weather Dashboard
  techIntImg,    // Project 4: Tech Int Prep
  alumniBookImg, // Project 5: MEARN alumni-book
  ngimalayaImg,  // Project 6: Ngimalaya Adventure
  emotionamicImg,// Project 7: Emotionamics
  reduxShopImg   // Project 8: Redux-shop
];

// Function to get project image by ID
const getProjectImage = (projectId: string): string => {
  const index = parseInt(projectId) - 1;
  return projectImages[index] || projectImages[0];
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'HSC of Sonoma Website',
    shortDescription: 'WordPress website for non profit organization',
    description: 'I designed and developed a fully responsive website (including Logo design) for the Himalayan Sherpa Club of Sonoma, a 501(c)(3) nonprofit organization, using WordPress. The site highlights the organization\'s history, mission, and vision while providing a platform for community engagement. In addition to web development, I created the organization\'s logo to reflect its cultural identity. This part-time freelance project included content development and research to accurately represent the organization\'s values.',
    image: getProjectImage('1'),
    technologies: ['WordPress', 'Elementor', 'SEO', 'Logo Design'],
    startDate: '2025-01-01',
    endDate: '2025-05-01',
    duration: '5 months',
    features: [
      'Fully responsive WordPress website design',
      'Custom logo design reflecting cultural identity',
      'Organization history, mission, and vision showcase',
      'Community engagement platform',
      'Content development and research',
      'SEO optimization for better visibility',
      '501(c)(3) nonprofit organization branding',
      'Elementor page builder integration'
    ],
    githubUrl: '',
    liveUrl: 'https://www.himalayansherpaclubsonoma.org/',
    category: 'web',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Roster-Hub',
    shortDescription: 'Soccer Team Management System - Fullstack application with modern UI/UX',
    description: 'Roster Hub is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and GraphQL. Designed to streamline soccer team management, the platform allows players to create accounts, manage profiles, view and endorse teammates, chat, and post updates. The application features user authentication with JWT, real-time messaging, and a responsive React frontend styled with Tailwind CSS. Built to enhance team collaboration and communication through a clean and intuitive interface.',
    image: getProjectImage('2'),
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'GraphQL', 'JWT', 'Tailwind CSS', 'Cloudinary'],
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    duration: '3 months',
    features: [
      'User authentication using JWT tokens',
      'Player profile management with photos and social media links',
      'Teammate endorsement system for skills recognition',
      'Real-time messaging and chat functionality',
      'Social posting and commenting system',
      'Game schedule polling for player availability',
      'Formation creation and strategy planning',
      'Post-game feedback and review system',
      'Password reset functionality',
      'Responsive design with Tailwind CSS',
      'Photo storage with Cloudinary integration'
    ],
    githubUrl: 'https://github.com/sonam-git/Roster-Hub-V2',
    liveUrl: 'https://roster-hub-v2-240f2b371524.herokuapp.com/',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    shortDescription: 'Weather forecast application with 5-day forecast using OpenWeatherMap API',
    description: 'Weather Dashboard is a simple weather forecast application that allows users to check current weather and daily weather forecasts for up to 5 days. The project demonstrates the use of server-side APIs by fetching data from OpenWeatherMap API. Built with vanilla JavaScript, jQuery, and Day.js libraries, the app runs in the browser and features dynamically updated HTML and CSS powered by jQuery for an interactive user experience.',
    image: getProjectImage('3'),
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Day.js', 'OpenWeatherMap API'],
    startDate: '2023-03-01',
    endDate: '2024-03-30',
    duration: '1 month',
    features: [
      'Current weather data display',
      '5-day weather forecast functionality',
      'OpenWeatherMap API integration',
      'Dynamic HTML and CSS updates with jQuery',
      'Server-side API data fetching',
      'Date and time handling with Day.js',
      'Interactive user interface',
      'Real-time weather information',
      'Location-based weather services',
      'Responsive browser-based application'
    ],
    githubUrl: 'https://github.com/sonam-git/Weather_Dashboard',
    liveUrl: '',
    category: 'web',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Tech Int Prep',
    shortDescription: 'CMS style platform for technical interview preparation',
    description: 'Technical Interview Preparation aka Tech Int Prep is a Heroku deployed CMS-style platform designed for users to publish their questions as posts. The application allows users to interact and engage with questions through comments to share coding knowledge. Built following the MVC paradigm using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. The platform supports multiple users, questions, answers, and comments with security-focused authentication to protect personal data.',
    image: getProjectImage('4'),
    technologies: ['Node.js', 'Express.js', 'Sequelize', 'Handlebars.js', 'MySQL', 'Bcryptjs', 'Bootstrap', 'JavaScript'],
    startDate: '2024-10-01',
    endDate: '2024-12-15',
    duration: '2.5 months',
    features: [
      'User authentication and account management',
      'Question and answer posting system',
      'Interactive comment section for user engagement',
      'Edit and delete functionality for user posts',
      'Dashboard for managing questions and answers',
      'MVC architecture with Handlebars templating',
      'Secure session management with express-session',
      'Responsive design with Bootstrap integration'
    ],
    githubUrl: 'https://github.com/sonam-git/Tech_Int_Prep',
    liveUrl: '',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '5',
    title: 'MEARN Alumni-Book',
    shortDescription: 'Comprehensive social media application',
    description: 'A comprehensive social media application that offers a user-friendly interface and extensive functionality. The application enables users to create, edit, and manage their posts while providing the ability to discover friends and posts, where they can share their content and comment on other users\' posts. The application ensures a seamless user experience, offering secure, responsive, and accessible features across various devices and screen sizes.',
    image: getProjectImage('5'),
    technologies: ['MongoDB', 'React', 'Cloudinary', 'GraphQL', 'Bcrypt'],
    startDate: '2023-06-25',
    endDate: '2023-07-25',
    duration: '1 month',
    features: [
      'Secure user authentication (sign up, log in, log out)',
      'Create, add, delete, and edit posts functionality',
      'Friend discovery and management system',
      'Comment system for user interaction',
      'Add friends to friendlist feature',
      'Responsive design for all devices and screen sizes',
      'User-friendly interface with extensive functionality',
      'Secure and accessible across various platforms'
    ],
    githubUrl: 'https://github.com/sonam-git/MEARN_Alumni_Book',
    liveUrl: '',
    category: 'fullstack',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Ngimalaya Adventure',
    shortDescription: 'Trekking agency website using React | TypeScript | Tailwind CSS',
    description: 'A modern trekking agency website built with React, TypeScript, and Tailwind CSS, showcasing adventure tours and trekking packages.',
    image: getProjectImage('6'),
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    startDate: '2025-07-01',
    endDate: '2025-11-30',
    duration: '5 months',
    features: [
      'Modern responsive design',
      'Tour package showcase',
      'Booking system integration',
      'Image galleries',
      'Contact and inquiry forms'
    ],
    githubUrl: '',
    liveUrl: '',
    category: 'web',
    status: 'in-progress'
  },
  {
    id: '7',
    title: 'Emotionamics',
    shortDescription: 'Cryptocurrency emotion tracking application using third-party APIs',
    description: 'Emotionamics is an innovative web application that tracks cryptocurrency price changes and delivers appropriate GIFs to guide user emotions. By monitoring live coin values, the app calculates percentage loss or gain over 24 hours and randomly selects happy or sad GIFs accordingly. Built with vanilla JavaScript, jQuery, and integrated with Coinranking and Giphy APIs, the application features a responsive design using Bulma CSS framework and local storage functionality for user preferences.',
    image: getProjectImage('7'),
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Day.js', 'Bulma CSS', 'Giphy API', 'Coinranking API'],
    startDate: '2023-02-01',
    endDate: '2023-03-15',
    duration: '1.5 months',
    features: [
      'Live cryptocurrency price tracking and monitoring',
      'Percentage change calculation over 24-hour periods',
      'Dynamic GIF selection based on price performance',
      'Coinranking API integration for real-time data',
      'Giphy API integration for emotional feedback',
      'Local storage for user preferences and coin data',
      'Responsive design with Bulma CSS framework',
      'Interactive dropdown for coin selection',
      'Modal system for about us, contact, and team info',
      'Hamburger menu for mobile navigation',
      'User email storage and management'
    ],
    githubUrl: 'https://github.com/sonam-git/project_1_emotionomics',
    liveUrl: 'https://sonam-git.github.io/project_1_emotionomics/',
    category: 'web',
    status: 'completed'
  },
  {
    id: '8',
    title: 'Redux-Shop',
    shortDescription: 'E-commerce platform, full-stack e-commerce solution with React-Redux modern UI/UX',
    description: 'Redux-Shop is an eCommerce platform application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux for global state management. The application underwent a complete refactoring process using the React-Redux package to enable seamless interaction between React components and the Redux store. Redux provides a reliable container for maintaining consistent application state across client, server, and native environments while facilitating easy testing. The platform demonstrates modern state management patterns and e-commerce functionality.',
    image: getProjectImage('8'),
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose', 'GraphQL', 'JWT', 'JavaScript'],
    startDate: '2023-07-01',
    endDate: '2023-07-20',
    duration: '3 weeks',
    features: [
      'Redux store setup for centralized state management',
      'Custom reducers for state change specifications',
      'React-Redux integration with component connections',
      'Redux state access and action dispatching',
      'MERN stack full-stack architecture',
      'MongoDB database with Mongoose ODM',
      'GraphQL API for efficient data querying',
      'JWT authentication for secure user sessions',
      'Responsive e-commerce user interface',
      'Product catalog and shopping functionality',
      'Heroku deployment for production hosting'
    ],
    githubUrl: 'https://github.com/sonam-git/SJ_MERN_REDUX_STORE',
    liveUrl: '',
    category: 'fullstack',
    status: 'completed'
  }
];
