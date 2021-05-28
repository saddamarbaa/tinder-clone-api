/** @format */

const mongoose = require("mongoose");
const Cards = require("../models/cards");

// Handling Post Request
exports.addTinderCards = (req, res, next) => {
	const newTinderCard = new Cards({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		imgUrl: req.body.imgUrl,
	});

	Cards.create(newTinderCard, (error, card) => {
		if (error) {
			return res.status(500).send({
				message: "unable to save the card to database",
				error: error,
			});
		} else {
			return res.status(201).send({
				message: "Created TinderCard Successfully",
				tinderCard: card,
			});
		}
	});
};

// Handling Get Request
exports.getTinderCards = (req, res, next) => {
	Cards.find({}, (error, card) => {
		if (error) {
			return res.status(500).send({
				message: "Internal Server Error",
				error: error,
			});
		} else {
			return res.status(200).send({
				message: "Successfully Found  TinderCards",
				tinderCard: card,
			});
		}
	});
};
