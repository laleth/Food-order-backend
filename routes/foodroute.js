const express = require("express");
const Food = require("../models/foodmodel");
const authUser = require("../middleware/auth");

const router = express.Router();
router.use(authUser);

// Add food
router.post("/add-food", async (req, res) => {
    try {
        const { id, name, image, description, category, varients, prices } = req.body;

        const food = new Food({
            id,
            name,
            image,
            description,
            category,
            varients,
            prices
        });

        const savedFood = await food.save();
        res.json(savedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Get all food
router.get("/get-all-food", async (req, res) => {
    try {
        const allFood = await Food.find();
        res.json(allFood);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get food by id
router.get("/get-food-byID/:id", async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
