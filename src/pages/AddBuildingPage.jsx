import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBuildingPage = () => {
  const [building, setBuilding] = useState({
    buildingName: "",
    type: "",
    description: "",
    location: "",
    rent: "",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("company.")) {
      const companyField = name.split(".")[1];
      setBuilding((prevState) => ({
        ...prevState,
        company: {
          ...prevState.company,
          [companyField]: value,
        },
      }));
    } else {
      setBuilding({
        ...building,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/buildings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(building),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Building added:", data);
        navigate("/buildings");
      })
      .catch((error) => console.error("Error adding building:", error));
  };

  return (
    <div className="add-building-page">
      <h1>Add Building</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buildingName"
          placeholder="Building Name"
          value={building.buildingName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={building.type}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={building.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={building.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rent"
          placeholder="Rent"
          value={building.rent}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company.name"
          placeholder="Company Name"
          value={building.company.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="company.description"
          placeholder="Company Description"
          value={building.company.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="email"
          name="company.contactEmail"
          placeholder="Contact Email"
          value={building.company.contactEmail}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="company.contactPhone"
          placeholder="Contact Phone"
          value={building.company.contactPhone}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Building</button>
      </form>
    </div>
  );
};

export default AddBuildingPage;
