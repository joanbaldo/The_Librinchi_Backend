'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert ( 'Products', [
      {
      name: 'House of hunted',
      description: 'Novela clásica de terror',
      brand: 'Planeta',
      madein: 'España',
      ean: '12522157',
      price: '23',
      weight: '1',
      volume: '1',
      CategoryId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'House of hunted II',
        description: 'Novela clásica de terror',
        brand: 'Anaya',
        madein: 'España',
        ean: '56222157',
        price: '25',
        weight: '1',
        volume: '1',
        CategoryId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
        }
      ])
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
