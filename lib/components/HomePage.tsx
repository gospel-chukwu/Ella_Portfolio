import { getProjects, getSiteSettings, getSnapshots } from '../sanity/sanity_queries';
import Hero from '../sub_components/home/Hero';
import Showcase from '../sub_components/home/Showcase';

const HomePage = async () => {
  const siteSettings = await getSiteSettings();
  const projects = await getProjects();
  const snapshots = await getSnapshots();

  return (
    <>
      <Hero clients={siteSettings.clients} />
      <Showcase projects={projects} snapshots={snapshots}/>
    </>
  );
};

export default HomePage;
