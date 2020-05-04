const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const animals = await db("project")
			.select("*")

		res.json(animals)
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const animal = await db("project")
			.where("id", req.params.id)
			.first()

		if (!animal) {
			return res.status(404).json({
				message: "Animal not found",
			})
		}

		res.json(animal)
	} catch(err) {
		next(err)
	}
})

module.exports = router