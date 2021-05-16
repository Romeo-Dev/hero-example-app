'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
     
      await queryInterface.bulkInsert('heros', [
        {
        name: 'Radiant BattleMage',
        origin: true,
        lore: 'The Radiant Battlemage is an Aerotheurge variant of the fiery Battlemage Build I made back in October of last year. It aims to be an alternative melee Magic Damage dealer, while at the same time avoiding Aerotheurge spells that may harm other melee units. The drawback of this Build is that it does not Shock or Stun targets, which is the primary function of Aero mages (besides killing things).',
        strength: 12,
        finesse: 10,
        constitution: 8,
        intelligence: 33,
        memory: 13,
        wits: 17,
        level: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Summoner Of Sparks',
        origin: true,
        lore: 'The Summoner of Sparks uses a mix of Summoning, Warfare and Pyrokinetic Skills in order to deal both Fire and Physical Damage. The skill Master of Sparks has long been used by many players to buff their own personal damage with each swing, however, with the Summoner of Sparks we take this a step further.',
        strength: 12,
        finesse: 10,
        constitution: 12,
        intelligence: 23,
        memory: 15,
        wits: 17,
        level: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Ethernal Worrior',
        origin: true,
        lore: 'Back when I started making guides, I was fascinated with the Necromancer Skills line and wanted desperately to incorporate them into some sort of melee Build that could withstand tons of punishment while dishing out respectable damage. Unfortunately at that time, although on the right track, I hadn’t acquired quite as much knowledge about the game.',
        strength: 55,
        finesse: 10,
        constitution: 17,
        intelligence: 13,
        memory: 15,
        wits: 23,
        level: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'StormChaser',
        origin: true,
        lore: 'The Stormchaser is an exceptionally high damage build that relies on Air Damage to Stun its targets, and Dodging to avoid being struck by Weapon attacks. Stormchasers can also Silence their enemies, making them have no choice but to attack with their Weapons, which will be Dodged.',
        strength: 10,
        finesse: 10,
        constitution: 15,
        intelligence: 65,
        memory: 23,
        wits: 28,
        level: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Tidalist',
        origin: true,
        lore: 'The Tidalist is Mage Build that focuses on purely Hydrosophist Skills to deal Water Damage, heal and buff. Tidalists will unleash the fury of the tides by drenching and icing nearby enemies, hampering their Movement, Chilling and Freezing them. Since both Chilled and Frozen enemies lose 20% Water Resistance, Tidalists can deal increased damage by repeatedly striking the same target.',
        strength: 10,
        finesse: 10,
        constitution: 12,
        intelligence: 51,
        memory: 11,
        wits: 20,
        level: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('heros', null, {});
  }
};
