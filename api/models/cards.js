/** @format */

const mongoose = require("mongoose");

const tinderCardSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
	},
	imgUrl: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("tinderCard", tinderCardSchema);
