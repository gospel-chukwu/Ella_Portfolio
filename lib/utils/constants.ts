import { Tab } from "../types/ui/homepage.type";

export const NAVIGATIONS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About me',
    link: '/about',
    image: '/icons/about_me.svg',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Playground',
    link: 'https://open.spotify.com/',
    image: '/icons/spotify.svg',
  },
];
export const SOCIALS = [
  {
    image: '/icons/behance.svg',
    link: 'https://www.behance.net/',
  },
  {
    image: '/icons/x.svg',
    link: 'https://x.com/the_ellajames',
  },
  {
    image: '/icons/linkedin.svg',
    link: 'https://www.linkedin.com/',
  },
  {
    image: '/icons/substack.svg',
    link: 'https://substack.com/ ',
  },
];

export const TABS: { id: Tab; label: string }[] = [
  { id: 'snapshots', label: 'Snapshots' },
  { id: 'projects', label: 'Projects' },
];

export const CATEGORIES = [
  { title: 'Mobile Apps', value: 'mobile-apps' },
  { title: 'Websites', value: 'websites' },
  { title: 'Web Apps', value: 'web-apps' },
  { title: 'Branding', value: 'branding' },
  { title: 'Dashboards', value: 'dashboards' },
];

