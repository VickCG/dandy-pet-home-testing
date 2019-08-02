'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Breed extends Model {

  static get table () {
    return 'breeds'
  }

  static get primaryKey () {
    return 'id'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get visible () {
    return ['name']
  }
}

module.exports = Breed;
