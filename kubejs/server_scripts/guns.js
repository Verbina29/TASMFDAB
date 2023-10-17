// priority: 0

// Not only guns anymore :3

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('alloyedguns:basic_gun_kit', [
    'PMP',
    'RCF',
    'PMP'
  ], {
    P: 'thermal:steel_plate',
	M: 'immersiveengineering:component_iron',
	R: 'immersiveengineering:stick_steel',
	C: 'alloyedguns:revolver_cylinder',
	F: 'flint_and_steel'
  })
})

ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('alloyedguns:advanced_gun_kit', [
    'BBCBB',
    'BGMGB',
	'CFKFC',
    'BGMGB',
    'BBCBB'
  ], {
    K: 'alloyedguns:basic_gun_kit',
	M: 'alloyedguns:musket',
	B: 'alloyedguns:complex_bullet',
	C: 'immersiveengineering:component_steel',
	F: 'alloyedguns:flintlock',
	G: 'thermal:steel_gear'
  })
})

ServerEvents.recipes(e => {
  e.recipes.create.mechanical_crafting('alloyedguns:complex_gun_kit', [
    'ABBBBBA',
    'BCDEDCB',
	'BDDFDDB',
    'BEFGFEB',
    'BDDFDDB',
	'BCDEDCB',
	'ABBBBBA'
  ], {
    A: 'thermal:steel_block',
	B: 'thermal:steel_plate',
	C: 'netherite_ingot',
	D: 'netherite_scrap',
	E: 'immersiveengineering:gunpowder_barrel',
	F: 'alloyedguns:basic_gun_kit',
	G: 'create:precision_mechanism'
  })
  e.shaped(
  Item.of('enigmaticlegacy:soul_crystal', 1),
  [ 
    'ATA', 
    'QBQ',
    'ATA'  
  ],
  {
    A: 'minecraft:netherite_scrap', 
    T: 'mekanism:teleportation_core',
    Q: 'mekanism:quantum_entangloporter',
	B: 'mekanism:pellet_polonium'
  })
  e.shaped(
  Item.of('enigmaticlegacy:soul_crystal', 1),
  [ 
    'ADA', 
    'DBD',
    'ADA'  
  ],
  {
    A: 'minecraft:netherite_scrap', 
    D: 'botania:mana_diamond',
	B: 'deeperdarker:heart_of_the_deep'
  })
})