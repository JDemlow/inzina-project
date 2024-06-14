import React, { useState, useEffect } from "react";
import Card from "./Card";

const HomeCards = () => {
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
    <div className="home-cards">
      {buildings.map((building) => (
        <Card key={building._id} building={building} />
      ))}
    </div>
  );
};

export default HomeCards;
