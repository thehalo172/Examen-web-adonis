'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('C_odigo').notNullable().unique();
      table.string('Nombre').notNullable();
      table.float('Precio').notNullable();
      table.string('Marca').notNullable();
      table.string('id_Proveedor').notNullable().unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
