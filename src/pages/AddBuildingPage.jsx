import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddBuildingPage = ({ addBuildingSubmit }) => {
  const [buildingName, setBuildingName] = useState("");
  const [type, setType] = useState("Residential");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("Under 1K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newBuilding = {
      buildingName,
      type,
      description,
      location,
      rent,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    addBuildingSubmit(newBuilding);

    toast.success("Building Added Successfully");

    return navigate("/buildings");
  };

  return (
    <>
      <section class="bg-emerald-50">
        <div class="container m-auto max-w-2xl py-24">
          <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 class="text-3xl text-center font-semibold mb-6">
                Add Building
              </h2>

              <div class="mb-4">
                <label
                  htmlFor="type"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Building Type
                </label>
                <select
                  id="type"
                  name="type"
                  class="border rounded w-full py-2 px-3"
                  // required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Building Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Mountain View Apartments"
                  // required
                  value={buildingName}
                  onChange={(e) => setBuildingName(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any building duties, expectations, requirements, etc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="mb-4">
                <label
                  htmlFor="type"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Rent
                </label>
                <select
                  id="rent"
                  name="rent"
                  class="border rounded w-full py-2 px-3"
                  // required
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                >
                  <option value="Under $1K">Under $1K</option>
                  <option value="$1,100 - $1,200">$1,100 - $1,200</option>
                  <option value="$1,200 - $1,300">$1,200 - $1,300</option>
                  <option value="$1,400 - $1,500">$1,400 - $1,500</option>
                  <option value="$1,500 - $1,600">$1,500 - $1,600</option>
                  <option value="Over $200K">Over $1,600</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Building Location"
                  // required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 class="text-2xl mb-5">Company Info</h3>

              <div class="mb-4">
                <label
                  htmlFor="company"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  class="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label
                  htmlFor="company_description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  class="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Who is your building company?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="mb-4">
                <label
                  htmlFor="contact_email"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  class="border rounded w-full py-2 px-3"
                  placeholder="jeffery-smith@gmail.com"
                  // required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label
                  htmlFor="contact_phone"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  class="border rounded w-full py-2 px-3"
                  placeholder="555-555-5555"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Building
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBuildingPage;
