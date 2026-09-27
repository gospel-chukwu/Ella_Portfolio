import Footer from '../sub_components/footer/Footer';
import { getSiteSettings } from '../sanity/sanity_queries';
import Hero from '../sub_components/home/Hero';
import Showcase from '../sub_components/home/Showcase';

const HomePage = async () => {
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Hero clients={siteSettings.clients} />
      <Showcase />
      <Footer />
    </>
  );
};

export default HomePage;
