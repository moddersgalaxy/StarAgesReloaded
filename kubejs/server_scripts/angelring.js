ServerEvents.recipes(nadien => {
  nadien.remove({id: 'angelring:diamond_ring'})
  nadien.shaped('angelring:diamond_ring', [
     'DND',
     'VEU',
     'DAD'
   ], {
     D: '#forge:storage_blocks/diamond',
     N: 'mekanism_extras:alloy_thermonuclear',
     V: 'mekanism_extras:alloy_thermonuclear',
     U: 'mekanism_extras:alloy_thermonuclear',
     A: 'mekanism_extras:alloy_thermonuclear',
     E: 'minecraft:elytra'
   }).id('galaxyorigenes:diamondring')
 nadien.remove({id: 'angelring:angel_ring'})
 nadien.shaped('angelring:angel_ring', [
  'CAC',
  'ARA',
  'DGD'
], {
  C: 'minecraft:netherite_ingot',
  A: 'mekanism_extras:alloy_thermonuclear',
  R: 'angelring:diamond_ring',
  D: '#forge:nether_stars',
  G: 'mekanism_extras:alloy_thermonuclear'
  }).id('galaxyorigenes:angelring')
  })