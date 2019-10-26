'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('productos', 'ProductoController.index')
Route.get('productos/crear', 'ProductoController.create')
Route.post('productos/crear', 'ProductoController.store')
Route.get('productos/editar/:id', 'ProductoController.edit')
Route.post('productos/editar/:id', 'ProductoController.update')
Route.get('productos/eliminar/:id', 'ProductoController.destroy')

Route.get('inventario', 'InventarioController.index')
Route.get('inventario/crear', 'InventarioController.create')
Route.post('inventario/crear', 'InventarioController.store')
Route.get('inventario/editar/:id', 'InventarioController.edit')
Route.post('inventario/editar/:id', 'InventarioController.update')
Route.get('inventario/eliminar/:id', 'InventarioController.destroy')

Route.get('provedor', 'ProveedoreController.index')
Route.get('provedor/crear', 'ProveedoreController.create')
Route.post('provedor/crear', 'ProveedoreController.store')
Route.get('provedor/editar/:id', 'ProveedoreController.edit')
Route.post('provedor/editar/:id', 'ProveedoreController.update')
Route.get('provedor/eliminar/:id', 'ProveedoreController.destroy')