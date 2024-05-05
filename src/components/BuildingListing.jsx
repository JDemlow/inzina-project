import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const BuildingListing = ({ building }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = building.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="relative bg-white shadow-md rounded-xl">
      <div className="p-4">
        <div className="mb-6">
          <div className="my-2 text-gray-600">{building.type}</div>
          <h3 className="text-xl font-bold">{building.buildingName}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="mb-5 text-emerald-500 hover:text-emerald-600"
        >
          {showFullDescription ? "Show less" : "Show more"}
        </button>

        <h3 className="mb-2 text-emerald-500">${building.rent}</h3>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex flex-col justify-between mb-4 lg:flex-row">
          <div className="mb-3 text-orange-700">
            <FaMapMarker className="inline mb-1 mr-2 text-lg" />
            {building.location}
          </div>
          <Link
            to={`/buildings/${building.id}`}
            className="h-[36px] bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildingListing;
