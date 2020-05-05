exports.seed = async function(knex) {
	await knex("project_resource").insert([
		{ resource_id: 1, project_id: 1},
		{ resource_id: 1, project_id: 2},
  ])
}