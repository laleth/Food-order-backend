const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        varients: [{ type: String, required: true }],
        prices: [{
            small: { type: Number, required: true },
            medium: { type: Number, required: true },
            large: { type: Number, required: true }
        }]
    },
    { timestamps: true }
);

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
