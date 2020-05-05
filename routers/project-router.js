const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const project = await db("project")
			.select("*")

		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const project = await db("project")
			.where("id", req.params.id)
			.first()

		if (!project) {
			return res.status(404).json({
				message: "Project not found",
			})
		}

		res.json(project)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
    try {

        const [id] = await db("project").insert(req.body)
        const project = await db("project").where({id}).first()

        res.status(201).json(project)

    } catch(err){
        next(err)
    }
})

module.exports = router