import { Piece } from '../types/ui/about.types';
import { Tab } from '../types/ui/homepage.types';

export const SUBSTACK_URL = 'https://tejof.substack.com';
export const PAGE_SIZE = 10;

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
    link: 'https://open.spotify.com/playlist/0LZdnmD7fvMBin0qNuPBMV?si=49ba6f5c87b04dce&nd=1&dlsi=e4510c5b10a34771',
    image: '/icons/spotify.svg',
  },
];
export const SOCIALS = [
  {
    image: '/icons/behance.svg',
    link: 'https://www.behance.net/thellajames',
  },
  {
    image: '/icons/x.svg',
    link: 'https://x.com/the_ellajames',
  },
  {
    image: '/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/ella-james-163b87229',
  },
  {
    image: '/icons/substack.svg',
    link: 'https://substack.com/@tejof',
  },
];

export const TABS: { id: Tab; label: string }[] = [
  { id: 'snapshots', label: 'Snapshots' },
  { id: 'projects', label: 'Projects' },
];

export const CATEGORIES = [
  { title: 'All', value: 'all' },
  { title: 'Mobile Apps', value: 'mobile-apps' },
  { title: 'Websites', value: 'websites' },
  { title: 'Web Apps', value: 'web-apps' },
  { title: 'Branding', value: 'branding' },
  { title: 'Dashboards', value: 'dashboards' },
];

export const OFFSETS = {
  top: { y: -60 },
  bottom: { y: 60 },
  left: { x: -60 },
  right: { x: 60 },
};

export const ATTACH = {
  none: 'p-6 md:p-10',
  bottom: 'px-6 pt-6 md:px-10 md:pt-10',
  top: 'px-6 pb-6 md:px-10 md:pb-10',
  left: 'py-6 pr-6 md:py-10 md:pr-10',
  right: 'py-6 pl-6 md:py-10 md:pl-10',
  'bottom-right': 'pl-6 pt-6 md:pl-10 md:pt-10',
  'bottom-left': 'pr-6 pt-6 md:pr-10 md:pt-10',
  'top-right': 'pb-6 pl-6 md:pb-10 md:pl-10',
  'top-left': 'pb-6 pr-6 md:pb-10 md:pr-10',
} as const;

// photos land first, then stickers, then notes
export const KIND_ORDER = { photo: 0, sticker: 1, note: 2 } as const;
export const STEP = 0.06; // seconds between pieces

export const NO_SHADOW = 'drop-shadow(0 0 0 rgba(0,0,0,0))';
export const LIFT_SHADOW = 'drop-shadow(0 14px 14px rgba(0,0,0,0.22))';

export const PIECES: Piece[] = [
  // top row
  {
    kind: 'sticker',
    src: '/images/scrapbook/tennis_racket.svg',
    x: 18.8,
    y: 2.4,
    w: 15,
    rotate: 0,
    z: 3,
    from: 'left',
  },
  {
    kind: 'note',
    text: 'I ball proper\nat table tennis!',
    x: 15,
    y: 10.8,
    w: 6.2,
    rotate: -3,
    z: 8,
    from: 'left',
  },
  {
    kind: 'note',
    text: "I'm a sucker for red\nwine, just red wine!",
    x: 35.6,
    y: 8.6,
    w: 9.8,
    rotate: -1,
    z: 8,
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/favorite_person.svg',
    x: 55.4,
    y: 1.3,
    w: 18.5,
    rotate: 0,
    z: 3,
    from: 'top',
  },
  {
    kind: 'note',
    text: 'If I had a cat,\nher name would be Onix',
    x: 72.4,
    y: 5.2,
    w: 7.3,
    rotate: -2,
    z: 8,
    from: 'right',
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/cat_sticker.svg',
    x: 71.5,
    y: 10.9,
    w: 13,
    rotate: 0,
    z: 3,
    from: 'right',
  },

  // left side
  {
    kind: 'note',
    text: '...and for the\ndesigner, perhaps\nsome flowers',
    x: 10.8,
    y: 23.0,
    w: 7,
    rotate: -3,
    z: 8,
    from: 'left',
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/flowers.svg',
    x: -1,
    y: 8,
    w: 36.2,
    rotate: 0,
    z: 4,
    from: 'left',
  },
  {
    kind: 'photo',
    src: '/images/scrapbook/food.svg',
    x: 12.5,
    y: 35.8,
    w: 26.2,
    rotate: 0,
    z: 2,
    from: 'bottom',
  },
  {
    kind: 'note',
    text: 'As far as food goes, a plate or multiple\nplates of Cream pasta like this, will do',
    x: 12,
    y: 71.0,
    w: 16.8,
    rotate: -4,
    z: 8,
    from: 'bottom',
  },

  // center
  {
    kind: 'photo',
    src: '/images/scrapbook/wine.svg',
    x: 28.6,
    y: 14.6,
    w: 25.4,
    rotate: 0,
    z: 1,
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/letter_f.svg',
    x: 46.3,
    y: 18.2,
    w: 13.4,
    rotate: 0,
    z: 5,
  },
  {
    kind: 'photo',
    src: '/images/scrapbook/ella.png',
    x: 27.0,
    y: 39.2,
    w: 23,
    rotate: 0,
    z: 3,
    from: 'bottom',
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/light_bulbs.svg',
    x: 40.9,
    y: 28.5,
    w: 20.5,
    rotate: 0,
    z: 6,
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/letter_e.svg',
    x: 44.5,
    y: 48.4,
    w: 9.5,
    rotate: 0,
    z: 5,
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/fish.svg',
    x: 50.2,
    y: 63.3,
    w: 12.4,
    rotate: 0,
    z: 7,
    from: 'bottom',
  },
  {
    kind: 'note',
    text: 'Mmm... also super\nattractive.',
    x: 36.5,
    y: 85.8,
    w: 7.9,
    rotate: -16,
    z: 8,
    from: 'bottom',
  },

  // right side
  {
    kind: 'photo',
    src: '/images/scrapbook/couples_leg.svg',
    x: 51.6,
    y: 22.3,
    w: 20.2,
    rotate: 0,
    z: 2,
    from: 'right',
  },
  {
    kind: 'note',
    text: 'I’m a married\nwoman yhunno😌',
    x: 72.3,
    y: 33.2,
    w: 7.4,
    rotate: -1,
    z: 8,
    from: 'right',
  },
  {
    kind: 'photo',
    src: '/images/scrapbook/sign_board.svg',
    x: 64.7,
    y: 14.7,
    w: 30,
    rotate: 0,
    z: 4,
    from: 'right',
  },
  {
    kind: 'sticker',
    src: '/images/scrapbook/music_paper.svg',
    x: 73.5,
    y: 37.7,
    w: 19.5,
    rotate: 0,
    z: 3,
    from: 'right',
  },
  {
    kind: 'photo',
    src: '/images/scrapbook/pink_socks_leg.svg',
    x: 63.6,
    y: 50.4,
    w: 24.7,
    rotate: 0,
    z: 1,
    from: 'right',
  },
  {
    kind: 'note',
    text: 'I love love\ncolourful socks!',
    x: 72.3,
    y: 82.9,
    w: 6.8,
    rotate: -4,
    z: 8,
    from: 'right',
  },
];
