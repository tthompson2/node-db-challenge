exports.seed = async function(knex) {
	await knex("zoos_animals").insert([
		{ resource_id: 1, project_id: 1},
		{ resource_id: 1, project_id: 1},
  ])
}