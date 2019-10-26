'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedoresSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.string('Nombre').notNullable();
      table.integer('idProveedor').notNullable().unique().unsigned().references('id').inTable('productos');
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedoresSchema
