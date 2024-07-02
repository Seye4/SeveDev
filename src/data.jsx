import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import arScreenshot from './assets/img/arScreenshot.png'
// import vrScreenshot from './assets/img/vrScreenshot.png'
// import webScreenshot from './assets/img/webScreenshot.png'
// import motionGraphicScreenshot from './assets/img/motionGraphics.png'
// import modelling from './assets/img/modelling.png'
import modernWeb from './assets/img/ModernWeb.png'
import dashBoard from './assets/img/DashBoard.png'
import gitHubPg from './assets/img/GithubPg.png'
import mernEventBooking from './assets/img/mernEventBooking.png'
import seveStock from './assets/img/seveStock.jpg'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#services', text: 'services' },
  { id: nanoid(), href: '#portfolio', text: 'portfolio' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'FULLSTACK',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Motion Graphics',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: '3D Design & Visualization',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: gitHubPg,
    url: 'https://github.com/Seye4',
    github: "",
    title: 'GitHub project',
    text: 'Check out my github portfolio, where you can find some of my front-end projects',
  },
  {
    id: nanoid(),
    img: mernEventBooking,
    url: 'https://seveeventbooking.netlify.app',
    github: '',
    title: 'Event Booking',
    text: 'A MERN CRUD app design to create event, modify event and delete event. Made with React Js, Next Js, Html, javascript and tailwind css',
  },
  {
    id: nanoid(),
    img: dashBoard,
    url: 'https://sevedashboard.netlify.app',
    github: '',
    title: 'Dashboard Website',
    text: 'A dash board website made with Html, JavaScript and CSS',
  },
  {
    id: nanoid(),
    img: modernWeb,
    url: 'https://sevearchiviz.netlify.app',
    github: '',
    title: 'Modern Website',
    text: 'A modern website created with Html, CSS and JavaScript',
  },
  {
    id: nanoid(),
    img: seveStock,
    url: 'https://sevestock.netlify.app',
    github: '',
    title: 'SeveStock',
    text: 'A photo searching app made with React Html, CSS and axios',
  },
];
