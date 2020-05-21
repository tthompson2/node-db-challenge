exports.seed = async function(knex) {
	await knex("resource").insert([   
		{ name: "San Diego Zoo", description: "Site name: 2920 Zoo Dr, San Diego, CA 92101" },
		{ name: "St. Louis Zoo", description: "Site name: Government Dr, St. Louis, MO 63110" },
	])
}
