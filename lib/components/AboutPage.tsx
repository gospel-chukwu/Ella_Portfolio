import AboutHero from '../sub_components/about/AboutHero';
import Scrapbook from '../sub_components/about/Scrapbook';
import Substack from '../sub_components/about/Substack';

const AboutPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <AboutHero />
      <Scrapbook />
      <Substack />
    </div>
  );
};

export default AboutPage;
