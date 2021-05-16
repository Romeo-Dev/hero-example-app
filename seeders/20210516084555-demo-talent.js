'use strict';
const { string_to_slug } = require('../helpers/utility');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
      await queryInterface.bulkInsert('talents', [
      {
        name: 'All Skilled Up',
        index_to_talent: string_to_slug('All Skilled Up'),
        description: 'Grants players 2 extra Ability points.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Avoid Opportunists',
        index_to_talent: string_to_slug('Avoid Opportunists'),
        description: 'Grants ability to evade attacks of opportunity.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bully',
        index_to_talent: string_to_slug('Bully'),
        description: '+50% damage against opponents that Knocked Down, Slowed or Crippled.Only works with melee or ranged weapons; not with spells.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Escapist',
        index_to_talent: string_to_slug('Escapist'),
        description: 'Allows you to flee combat even when enemies are right next to you.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Far Out Man',
        index_to_talent: string_to_slug('Far Out Man'),
        description: 'Increases the range of spells and scrolls by 2 meters.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SideStep',
        index_to_talent: string_to_slug('SideStep'),
        description: 'Grants players 10% extra chance to evade hits.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Glass Cannon',
        index_to_talent: string_to_slug('Glass Cannon'),
        description: 'Grants 4 extra recovery Action Points but your total vitality is decreased by 50%.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Guerrilla',
        index_to_talent: string_to_slug('Guerrilla'),
        description: 'Increases attack damage by 50% while sneaking. Works with any weapon.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Leech',
        index_to_talent: string_to_slug('Leech'),
        description: 'Heals you when standing in blood. (Usually only during your turn)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
     await queryInterface.bulkDelete('talents', null, {});
  }
};
