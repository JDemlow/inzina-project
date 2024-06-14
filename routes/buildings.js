import express from "express";
import Building from "../models/Building.js";

const router = express.Router();

// Get all buildings
router.get("/", async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one building
router.get("/:id", getBuilding, (req, res) => {
  res.json(res.building);
});

// Create a building
router.post("/", async (req, res) => {
  const building = new Building(req.body);
  try {
    const newBuilding = await building.save();
    res.status(201).json(newBuilding);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a building
router.patch("/:id", getBuilding, async (req, res) => {
  if (req.body.buildingName != null) {
    res.building.buildingName = req.body.buildingName;
  }
  if (req.body.type != null) {
    res.building.type = req.body.type;
  }
  if (req.body.description != null) {
    res.building.description = req.body.description;
  }
  if (req.body.location != null) {
    res.building.location = req.body.location;
  }
  if (req.body.rent != null) {
    res.building.rent = req.body.rent;
  }
  if (req.body.company != null) {
    res.building.company = req.body.company;
  }
  try {
    const updatedBuilding = await res.building.save();
    res.json(updatedBuilding);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a building
router.delete("/:id", getBuilding, async (req, res) => {
  try {
    await res.building.remove();
    res.json({ message: "Deleted Building" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBuilding(req, res, next) {
  const { id } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid building ID format" });
  }

  let building;
  try {
    building = await Building.findById(id);
    if (building == null) {
      return res.status(404).json({ message: "Cannot find building" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.building = building;
  next();
}

export default router;
