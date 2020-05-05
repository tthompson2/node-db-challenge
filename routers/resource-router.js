const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const resource = await db("resource")
			.select("*")

		res.json(resource)
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const resource = await db("resource")
			.where("id", req.params.id)
			.first()

		if (!resource) {
			return res.status(404).json({
				message: "Resource not found",
			})
		}

		res.json(resource)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
    try {

        const [id] = await db("resource").insert(req.body)
        const resource = await db("resource").where({id}).first()

        res.status(201).json(resource)

    } catch(err){
        next(err)
    }
})


module.exports = router