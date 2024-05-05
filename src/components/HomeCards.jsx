import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">Building Admin?</h2>
            <p className="mt-2 mb-4">
              Log into your profile to manage your building
            </p>
            <Link
              to="/buildings"
              className="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
            >
              Log In
            </Link>
          </Card>
          <Card bg="bg-emerald-100">
            <h2 className="text-2xl font-bold">Building Resident?</h2>
            <p className="mt-2 mb-4">
              Add / confirm information about your building here
            </p>
            <Link
              to="/add-building"
              className="inline-block px-4 py-2 text-white rounded-lg bg-emerald-500 hover:bg-emerald-600"
            >
              Add Info
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
