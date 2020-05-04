exports.seed = async function(knex) {
	await knex("task").insert([   
		{ name: "Clean room", description: "get in really clean", notes: "ok", completed: "true", project_id: 1},
		{ name: "Clean bathroom", description: "get in hyper clean", notes: "too bad", completed: "false", project_id: 1},
	])
}