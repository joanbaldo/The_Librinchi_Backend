'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    {
      return queryInterface.bulkInsert ( 'Users', [
      {
      role: 'user',
      dni: '56216422D',
      name: 'Luis',
      surname: 'Fonsi',
      adress: 'Fontvieja,32',
      country: 'France',
      tel: '682544129',
      email: 'luis@gmail.com',
      password:'123456789',
      confirmed: true,
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
