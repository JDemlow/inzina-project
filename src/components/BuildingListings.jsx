import React, { useState, useEffect } from "react";
import BuildingListing from "./BuildingListing";
import Spinner from "./Spinner";

const BuildingListings = ({ isHome = false }) => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/buildings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setBuildings(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            {buildings.map((building) => (
              <BuildingListing key={building._id} building={building} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildingListings;
