import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import BuildingsPage from "./pages/BuildingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BuildingPage, { buildingLoader } from "./pages/BuildingPage";
import AddBuildingPage from "./pages/AddBuildingPage";
import EditBuildingPage from "./pages/EditBuildingPage";

const App = () => {
  // Add new building
  const addBuilding = async (newBuilding) => {
    const res = await fetch("/api/buildings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBuilding),
    });
    return;
  };

  // Delete building
  const deleteBuilding = async (id) => {
    const res = await fetch(`/api/buildings/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update building

  const updateBuilding = async (building) => {
    const res = await fetch(`/api/buildings/${building.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(building),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/buildings" element={<BuildingsPage />} />
        <Route
          path="/add-building"
          element={<AddBuildingPage addBuildingSubmit={addBuilding} />}
        />
        <Route
          path="/edit-building/:id"
          element={<EditBuildingPage updateBuildingSubmit={updateBuilding} />}
          loader={buildingLoader}
        />
        <Route
          path="/buildings/:id"
          element={<BuildingPage deleteBuilding={deleteBuilding} />}
          loader={buildingLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
