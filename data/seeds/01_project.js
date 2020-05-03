exports.seed = async function(knex) {
	await knex("project").insert([   
		{ name: "San Diego Zoo", address: "2920 Zoo Dr, San Diego, CA 92101" },
		{ name: "St. Louis Zoo", address: "Government Dr, St. Louis, MO 63110" },
	])
}