
exports.up =  async function(knex) {

    await knex.schema.createTable("project", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
        table.text("description");
        table.text("completed").notNull().defaultTo("false");
    })    
    
    await knex.schema.createTable("resource", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
		table.text("dsecription").notNull().unique()
    })
    
    await knex.schema.createTable("task", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
        table.text("address").notNull().unique()
        table.text("completed").notNull().defaultTo("false");
	})
  
};

exports.down =  async function(knex) {

        await knex.schema.dropTableIfExists("task")
        await knex.schema.dropTableIfExists("resource")
        await knex.schema.dropTableIfExists("project")

};
