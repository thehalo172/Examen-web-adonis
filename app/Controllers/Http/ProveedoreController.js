'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Provedor = use('App/Models/Proveedor');

/**
 * Resourceful controller for interacting with proveedores
 */
class ProveedoreController {
  /**
   * Show a list of all proveedores.
   * GET proveedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let provedor = await Provedor.query().with('productos').fetch();
    return response.json(provedor.toJSON());
  }

  /**
   * Render a form to be used for creating a new proveedore.
   * GET proveedores/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let provedor = await Provedor.all();
    return view.render('provedor.create', { provedor: provedor.toJSON() });
  }

  /**
   * Create/save a new proveedore.
   * POST proveedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Provedor.create(request.all());
    return response.json('provedor registrado')
  }

  /**
   * Display a single proveedore.
   * GET proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing proveedore.
   * GET proveedores/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let provedor = await Provedor.find(params.id);
    return view.render('provedor.edit', { provedor: provedor.toJSON() });
  }

  /**
   * Update proveedore details.
   * PUT or PATCH proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let provedor = await Provedor.find(params.id);
      provedor.merge(request.all());
      await provedor.save();
      return response.json('provedor editado');
  }

  /**
   * Delete a proveedore with id.
   * DELETE proveedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let provedor = await Provedor.find(params.id);
    provedor.delete();
    return response.json('Provedor eliminado');
  }
}

module.exports = ProveedoreController
