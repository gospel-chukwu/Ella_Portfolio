'use client';

import Footer from '../reusable_components/Footer';
import ContentToggle from '../sub_components/home/ContentToggle';
import Hero from '../sub_components/home/Hero';
import Projects from '../sub_components/home/Projects';
import Snapshots from '../sub_components/home/Snapshots';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ContentToggle />
      <Snapshots />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
