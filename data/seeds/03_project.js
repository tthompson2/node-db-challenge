exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "Clean house", description: "had to add this", completed: "false"},
		{ name: "Clean shed", description: "put desk in there", completed: "true"},
	])
}