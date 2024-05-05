import { useState, useEffect } from "react";
import BuildingListing from "./BuildingListing";
import Spinner from "./Spinner";
const BuildingListings = ({ isHome = false }) => {
  const [buildingListings, setBuildingListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuildings = async () => {
      const apiUrl = isHome
        ? "http://localhost:8000/buildings?_limit=3"
        : "http://localhost:8000/buildings";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setBuildingListings(data);
      } catch (error) {
        console.log("Error fetching buildings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBuildings();
  }, []);

  return (
    <section className="px-4 py-10 bg-emerald-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-emerald-500">
          {isHome ? "Featured Buildings" : "Buildings"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {buildingListings.map((building) => (
              <BuildingListing key={building.id} building={building} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildingListings;
