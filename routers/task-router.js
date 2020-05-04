const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const task = await db("task")
			.select("*")

		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const task = await db("task")
			.where("id", req.params.id)
			.first()

		if (!task) {
			return res.status(404).json({
				message: "Animal not found",
			})
		}

		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
    try {

        const [id] = await db("task").insert(req.body)
        const task = await db("task").where({id}).first()

        res.status(201).json(task)

    } catch(err){
        next(err)
    }
})


module.exports = router