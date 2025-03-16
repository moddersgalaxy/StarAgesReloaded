ServerEvents.recipes(nadien => {



   //hellfire sword
   nadien.custom({
    "type": "tconstruct:casting_basin",
    "cast": {
      "item": "allthemodium:alloy_sword"
    },
    "cast_consumed": true,
    "cooling_time": 5500,
    "fluid": {
      "amount": 5000,
      "fluid": "immersiveengineering:phenolic_resin"
    },
    "result": "galaxy_core:hellfiresword"
  }).id('galaxyorigins:hellfire_sword')
  


  //galaxy globe
  RecipeMachineStage.addRecipe('create:mechanical_crafting', 'galaxyorigins:galacticglobe', "mekat3")




  nadien.recipes.create.mechanical_crafting('ultimate_utilities:galaxy_globe', [
    "SSSSSSSSS",
    "S G G G S",
    "S G M M S",
    "S G M M S",
    "S G G G S",
    "S G G G S",
    "S M M M S",
    "S S S S S",
    "SSSSSSSSS"
  ], {
    S: 'minecraft:chiseled_stone_bricks',  // Marco de piedra
    G: 'solarpanels:photonic_solar_panel',             // Globo terráqueo (el centro del mapa)
    M: 'kubejs:mek_mechanism',              // Globo de la luna (alrededor de la tierra)
  }).id('galaxyorigins:galacticglobealt');
  

  //nadien.custom({
    //"type": "tconstruct:casting_basin",
    //"cooling_time": 500,
    //"fluid": {//
      //"amount": 1000,
      //"fluid": "ultimate_utilities:nadienitefluid"
   // },
   // "result": "ultimate_utilities:nadienitebloque"
  //}).id('ultimate_utilities:nadienite_block_recipe_tinkers')

})