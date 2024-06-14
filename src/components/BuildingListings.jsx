import React, { useState, useEffect } from "react";
import BuildingListing from "./BuildingListing";

const BuildingListings = () => {
  const [buildings, setBuildings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/buildings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setBuildings(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="building-listings">
      {buildings.map((building) => (
        <BuildingListing key={building._id} building={building} />
      ))}
    </div>
  );
};

export default BuildingListings;
