'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Proveedor extends Model {
    productos() {
        return this.belongsTo('App/Models/Producto', 'Codigo')
    }
}

module.exports = Proveedor
