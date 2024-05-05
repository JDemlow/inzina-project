import { useParams, useLoaderData } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

const BuildingPage = ({ deleteBuilding }) => {
  const { id } = useParams();
  const building = useLoaderData();

  const navigate = useNavigate();

  const onDeleteClick = (buildingId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this building?"
    );

    if (!confirm) return;

    deleteBuilding(buildingId);

    navigate("/buildings");
  };

  return (
    <>
      <section>
        <div className="container px-6 py-6 m-auto">
          <Link
            to="/buildings"
            className="flex items-center text-emerald-500 hover:text-emerald-600"
          >
            <FaArrowLeft className="mr-2" /> Back to Building Listings
          </Link>
        </div>
      </section>

      <section className="bg-emerald-50">
        <div className="container px-6 py-10 m-auto">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
            <main>
              <div className="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
                <div className="mb-4 text-gray-500">{building.type}</div>
                <h1 className="mb-4 text-3xl font-bold">
                  {building.buildingName}
                </h1>
                <div className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
                  <FaMapMarker className="mr-2 text-orange-700" />
                  <p className="text-orange-700">{building.location}</p>
                </div>
              </div>

              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-lg font-bold text-emerald-800">
                  Building Description
                </h3>

                <p className="mb-4">{building.description}</p>

                <h3 className="mb-2 text-lg font-bold text-emerald-800">
                  Rent
                </h3>

                <p className="mb-4">${building.rent}</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Building Info</h3>

                <h2 className="text-2xl">{building.company.name}</h2>

                <p className="my-2">{building.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="p-2 my-2 font-bold bg-emerald-100">
                  {building.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="p-2 my-2 font-bold bg-emerald-100">
                  {building.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                <Link
                  to={`/buildings/edit/${id}`}
                  className="block w-full px-4 py-2 mt-4 font-bold text-center text-white rounded-full bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:shadow-outline"
                >
                  Edit Building
                </Link>
                <button
                  onClick={() => onDeleteClick(building.id)}
                  className="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                  Delete Building
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const buildingLoader = async ({ params }) => {
  const res = await fetch(`/api/buildings/${params.id}`);
  const data = await res.json();
  return data;
};

export { BuildingPage as default, buildingLoader };
