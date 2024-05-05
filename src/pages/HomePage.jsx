import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import BuildingListings from "../components/BuildingListings";
import ViewAllBuildings from "../components/ViewAllBuildings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <BuildingListings isHome={true} />
      <ViewAllBuildings />
    </>
  );
};

export default HomePage;
