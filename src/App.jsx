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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/buildings" element={<BuildingsPage />} />
      <Route path="/add-building" element={<AddBuildingPage />} />
      <Route
        path="/buildings/:id"
        element={<BuildingPage />}
        loader={buildingLoader}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
