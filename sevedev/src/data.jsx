import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import arScreenshot from './assets/img/arScreenshot.png'
import vrScreenshot from './assets/img/vrScreenshot.png'
import webScreenshot from './assets/img/webScreenshot.png'

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
    img: webScreenshot,
    url: 'https://github.com/Seye4',
    github: "",
    title: 'Web project',
    text: 'Check out my github portfolio, where you can find some of my front-end projects',
  },
  {
    id: nanoid(),
    img: vrScreenshot,
    url: 'https://drive.google.com/file/d/1__8yumx-pfx64YspjAYEreLOWC_9sP9V/view?usp=drive_link',
    github: '',
    title: 'Virtual Reality',
    text: 'Here is a video demo of a virtual reality app I developed, its for educational purpose on the concept of magnetism',
  },
  {
    id: nanoid(),
    img: arScreenshot,
    url: 'https://drive.google.com/file/d/1zQ4H5ySPLRv-winsRe4RcHIJAKFt3Qgt/view?usp=drive_link',
    github: '',
    title: 'Augmented Reality',
    text: 'Here is a video project on an augmented reality app meant to stimulate the concept of lighting',
  },
];
