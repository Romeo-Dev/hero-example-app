'use strict';
const { string_to_slug } = require('../helpers/utility');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
     await queryInterface.bulkInsert('skills', [
       {
         name: 'Aerotheurge',
         index: string_to_slug('Aerotheurge'),
         description: 'Aerotheurge increase all Air damage you deal. Air attacks deal +5% more damage.',
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        name: 'Geomancer',
        index: string_to_slug('Geomancer'),
        description: 'Geomancer increases all Poison and Earth damage you deal, and any Physical Armour restoration you cause. 	Poison and Earth attacks deal +5% more damage, +5% Physical Armour from skills and potions.',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      name: 'Huntsman',
      index: string_to_slug('Huntsman'),
      description: 'Huntsman increases the damage bonus when attacking from high ground. 	+5% Damage from high ground.',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    name: 'Hydrosophist',
    index: string_to_slug('Hydrosophist'),
    description: 'Hydrosophist increases all Water damage you deal, and any Vitality healing or Magic Armour restoration that you cause. 	Water attacks deal +5% more damage, +5% Vitality healed, +5% Magic Armour from skills and potions.',
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  name: 'Necromancer',
  index: string_to_slug('Necromancer'),
  description: 'Heals you every time you deal damage to Vitality. Damage from reflection effects yields half heal. Also increase the damage dealt by Necromancy skills. 	Heal +10% of the damage dealt to Vitality.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Polymorph',
  index: string_to_slug('Polymorph'),
  description: 'Polymorph provides one free attribute point per point invested. 	+1 Attribute Point',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Pyrokinetic',
  index: string_to_slug('Pyrokinetic'),
  description: 'Pyrokinetic increase all Fire damage you deal. 	+5% Damage.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Scoundrel',
  index: string_to_slug('Scoundrel'),
  description: 'Scoundrel increases movement speed and boosts your Critical Modifier. 	+5% Critical Multiplier, +0.3 Movement speed.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Summoner',
  index: string_to_slug('Summoner'),
  description: 'Summoning increases Vitality, Damage, Physical Armour and Magical Armour of your summons and totems. 	Summons starts with 5% more Vitality, Damage, Physical Armour and Magical Armour.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Warfare',
  index: string_to_slug('Warfare'),
  description: 'Warfare increases all Physical damage you deal. 	Physical attacks deal +5% more damage',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Two-Handed',
  index: string_to_slug('Two-Handed'),
  description: 'Two-Handed increase damage and critical multiplier when using two-handed melee weapon (Sword, axe, mace, spear or staff). 	+5% Damage and +5% Critical Multiplier.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Single-handed',
  index: string_to_slug('Single-handed'),
  description: 'Single-handed increase damage and Accuracy when using a one-handed weapon (dagger, sword, axe, mace or wand) with a shield or empty off-hand. 	+5% Damage and +5% Accuracy.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Ranged',
  index: string_to_slug('Ranged'),
  description: 'Ranged increase damage and Critical Chance when using bows and crossbows. 	+5% Damage and +1% Critical Chance.',
  createdAt: new Date(),
  updatedAt: new Date(),
},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.*/
     await queryInterface.bulkDelete('skills', null, {});
     
  }
};
