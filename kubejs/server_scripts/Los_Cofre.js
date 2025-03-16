//cofres By SrNadien
ServerEvents.recipes(nadien => {
	

    //eliminar
    nadien.remove({output:'sophisticatedstorage:iron_chest'})
  nadien.remove({output:'sophisticatedstorage:gold_chest'})
  nadien.remove({output:'sophisticatedstorage:diamond_chest'})
  nadien.remove({output:'sophisticatedstorage:netherite_chest'})
  nadien.remove({ output: 'sophisticatedstorage:iron_to_diamond_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_to_iron_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_to_gold_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_to_diamond_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_to_netherite_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:copper_to_iron_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:copper_to_gold_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:copper_to_diamond_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:copper_to_netherite_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:iron_to_gold_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:iron_to_netherite_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:basic_to_copper_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:gold_to_netherite_tier_upgrade' })
  nadien.remove({ output: 'sophisticatedstorage:diamond_to_netherite_tier_upgrade' })
  nadien.remove({ output: ['sophisticatedstorage:limited_iron_barrel_3', 'sophisticatedstorage:limited_diamond_barrel_4', 'sophisticatedstorage:limited_iron_barrel_1', 'sophisticatedstorage:copper_barrel', 'sophisticatedstorage:iron_barrel', 'sophisticatedstorage:gold_barrel', 'sophisticatedstorage:diamond_barrel', 'sophisticatedstorage:limited_diamond_barrel_1', 'sophisticatedstorage:limited_diamond_barrel_2', 'sophisticatedstorage:limited_diamond_barrel_3', 'sophisticatedstorage:limited_gold_barrel_1', 'sophisticatedstorage:limited_gold_barrel_2', 'sophisticatedstorage:limited_iron_barrel_2', 'sophisticatedstorage:limited_iron_barrel_4', 'sophisticatedstorage:limited_gold_barrel_3', 'sophisticatedstorage:limited_gold_barrel_4', 'sophisticatedstorage:limited_copper_barrel_1', 'sophisticatedstorage:limited_copper_barrel_3', 'sophisticatedstorage:limited_netherite_barrel_2', 'sophisticatedstorage:limited_copper_barrel_4', 'sophisticatedstorage:limited_netherite_barrel_3', 'sophisticatedstorage:limited_copper_barrel_2', 'sophisticatedstorage:limited_netherite_barrel_1', 'sophisticatedstorage:limited_netherite_barrel_4'] })

  


 

  
   //cofre De Hierro
   nadien.shaped('sophisticatedstorage:iron_chest', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/iron',
  C: '#forge:plates/iron',
  Q: '#forge:plates/iron',
  I: '#forge:plates/iron',
  L: 'minecraft:chest',
  W: '#forge:plates/iron',
  E: '#forge:plates/iron',
  H: '#forge:plates/iron',
  P: '#forge:plates/iron'
});


  //cofre de oro
  nadien.shaped('sophisticatedstorage:gold_chest', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/gold',
  C: '#forge:plates/gold',
  Q: '#forge:plates/gold',
  I: '#forge:plates/gold',
  L: 'sophisticatedstorage:iron_chest',
  W: '#forge:plates/gold',
  E: '#forge:plates/gold',
  H: '#forge:plates/gold',
  P: '#forge:plates/gold'
});

  //cofre de diamante
  nadien.shaped('sophisticatedstorage:diamond_chest', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/diamond',
  C: '#forge:plates/diamond',
  Q: '#forge:plates/diamond',
  I: '#forge:plates/diamond',
  L: 'sophisticatedstorage:gold_chest',
  W: '#forge:plates/diamond',
  E: '#forge:plates/diamond',
  H: '#forge:plates/diamond',
  P: '#forge:plates/diamond'
});

  //cofre de netherite
  nadien.shaped('sophisticatedstorage:netherite_chest', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:ingot_refined_obsidian',
  C: 'mekanism:ingot_refined_obsidian',
  Q: 'mekanism:ingot_refined_obsidian',
  I: 'mekanism:ingot_refined_obsidian',
  L: 'sophisticatedstorage:diamond_chest',
  W: 'mekanism:ingot_refined_obsidian',
  E: 'mekanism:ingot_refined_obsidian',
  H: 'mekanism:ingot_refined_obsidian',
  P: 'mekanism:ingot_refined_obsidian'
});








})