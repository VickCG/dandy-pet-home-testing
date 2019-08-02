'use strict';

const Breed = use('App/Models/Breed')

class BreedController {
  async index () {

    const breeds = await Breed.all();

    return {data: breeds.toJSON()};
  }

  async create ({ request, response }) {

    const body = request.only(['name']);

    if (body.name) {
      const newBreed = new Breed();
      newBreed.name = body.name;
      await newBreed.save();
      return response.status(201).json(newBreed);
    } else {
      return response.status(400).json({ message: 'Error' })
    }
  }
}

module.exports = BreedController;
