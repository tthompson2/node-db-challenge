exports.up = async function (knex) {

    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
    })

    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull();
        table.text("completed").notNull().defaultTo("false");
    })

    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull().unique()
        table.text("notes")
        table.text("completed").notNull().defaultTo("false");
        table.integer("project_id")
            .references("id")
            .inTable("task")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("project_resource", (table) => {

        table.integer("resource_id")
           .references("id")
           .inTable("resource")
           .onDelete("CASCADE")
           .onUpdate("CASCADE")
        table.integer("project_id")
           .references("id")
           .inTable("project")
           .onDelete("CASCADE")
           .onUpdate("CASCADE")
        table.primary(["zoo_id," , "animal_id"])
    })

};

exports.down = async function (knex) {

    await knex.schema.dropTableIfExists("project_resource")
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("project")
    await knex.schema.dropTableIfExists("resource")

};
