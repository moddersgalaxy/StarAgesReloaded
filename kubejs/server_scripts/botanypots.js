ServerEvents.recipes(nadien => {



  nadien.remove({output: ['#botanypots:all_botany_pots']})
  
  
  
  
   //Power Pot Tier 1
   nadien.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "ultimate_utilities:nadienite_ingot"
      },
      "B": {
        "item": "botanypots:terracotta_hopper_botany_pot"
      },
      "C": {
        "item": "solarpanels:improved_energy_tablet"
      },
      "D": {
        "item": 'mysticalagriculture:awakened_supremium_hoe'
      }
    },
    "result": {
      "item": 'powerpots:power_pot_1',
      "count": 1
    }
  }).id('galaxyorigins:power_pot_uno')
  
  
  
  //ultra hopper botany pot
  nadien.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": [
      "ABBBBBA",
      "BCDDDCB",
      "BDEEEDB",
      "BDEEEDB",
      "BDEEEDB",
      "BCDDDCB",
      "ABBBBBA"
    ],
    "key": {
      "A": {
        "item": "powerpots:power_pot_1"
      },
      "B": {
        "item": "ultimate_utilities:nadienite_ingot"
      },
      "C": {
        "item": "allthemodium:vibranium_hoe"
      },
      "D": {
        "item": "solarpanels:spectral_energy_tablet"
      },
      "E": {
        "item": "mysticalagriculture:awakened_supremium_essence"
      }
    },
    "result": {
      "item": 'powerpots:power_pot_2',
      "count": 1
    }
  }).id('galaxyorigins:power_pot_dos')
  
  
  
    //creative botany pot
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "solarpanels:singular_energy_tablet"
      },
      "ingredients": [
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "powerpots:power_pot_2"
        },
        {
          "item": "powerpots:power_pot_2"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "powerpots:power_pot_2"
        },
        {
          "item": "powerpots:power_pot_2"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        },
        {
          "item": "mysticalagradditions:insanium_essence"
        }
      ],
      "result": {
        "item": 'powerpots:power_pot_3',
        "count": 1
      }
    }).id('galaxyorigins:power_pot_3')
  
  

  
  
          
      //hellfire forged 
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:hellforgedingot_seeds","mysticalagriculture:hellforgedingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:hellforgedingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:hellforgedingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:hellforgedingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:hellforgedingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:hellforged_seed')
  
  
      //prediction matrix
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:predicciondematrix_seeds","mysticalagriculture:predicciondematrix_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:predicciondematrix_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:predicciondematrix_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:predicciondematrix_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:predicciondematrix_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:matriz_de_prediccion_seed')
      
  
  
      //redstone ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:redstoneingot_seeds","mysticalagriculture:redstoneingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:redstoneingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:redstoneingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:redstoneingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:redstoneingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:redstone_ingot_seed')
  
      //pink slime 
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:pink_slime_seeds","mysticalagriculture:pink_slime_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:pink_slime_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:pink_slime_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:pink_slime_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:pink_slime_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:pink_slime_seed')
      
      
      //luducrite ingot
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:luducrite_ingot_seeds","mysticalagriculture:luducrite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:luducrite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:luducrite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:luducrite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:luducrite_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:luducrite_ingot_seed')
  
      //black quarts
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:black_quartz_seeds","mysticalagriculture:black_quartz_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:black_quartz_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:black_quartz_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:black_quartz_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:black_quartz_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:black_quartz_seed')
      
      //duroplast
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:duroplast_seeds","mysticalagriculture:duroplast_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:duroplast_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:duroplast_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:duroplast_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:duroplast_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:duroplast_seed')
  
      //source gem
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:source_gem_seeds","mysticalagriculture:source_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:source_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:source_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:source_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:source_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:source_gem_seed')
  
      //crystal matrix
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:crystal_matrix_seeds","mysticalagriculture:crystal_matrix_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:crystal_matrix_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:crystal_matrix_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:crystal_matrix_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:crystal_matrix_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:crystal_matrix_seed')
  
  
      //Super Cacotas seed
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:super_cacotas_seeds","mysticalagriculture:super_cacotas_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:super_cacotas_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:super_cacotas_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:super_cacotas_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:super_cacotas_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:super_cacotas_seed')
  
       //flux dust
       nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:flux_dust_seeds","mysticalagriculture:flux_dust_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:flux_dust_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:flux_dust_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:flux_dust_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:flux_dust_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:flux_dust_seed')
  
      //abyssal ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:abyssal_ingot_seeds","mysticalagriculture:abyssal_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:abyssal_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:abyssal_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:abyssal_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:abyssal_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:abyssal_ingot_seed')
  
      //dragon steel ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dragon_steel_ingot_seeds","mysticalagriculture:dragon_steel_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dragon_steel_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dragon_steel_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dragon_steel_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dragon_steel_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:dragon_steel_ingot_seed')
  
      //shellite ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:shellite_ingot_seeds","mysticalagriculture:shellite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:shellite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:shellite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:shellite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:shellite_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:shellyte_ingot_seed')
  
      //soul infused ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:soul_infused_ingot_seeds","mysticalagriculture:soul_infused_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:soul_infused_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:soul_infused_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:soul_infused_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:soul_infused_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:soul_infused_ingot_seed')
  
      //twinite ingot
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:twine_ingot_seeds","mysticalagriculture:twine_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:twine_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:twine_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:twine_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:twine_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:twine_ingot_seed')
  
      //galaxy star
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:galaxy_star_seeds","mysticalagriculture:galaxy_star_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:galaxy_star_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:galaxy_star_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:galaxy_star_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:galaxy_star_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:galaxy_star_seed')
      
      //chaos shard
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:chaos_shard_seeds","mysticalagriculture:chaos_shard_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:chaos_shard_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:chaos_shard_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:chaos_shard_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:chaos_shard_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:chaos_shard_seed')
  
      //cajita feliz
      nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:cajita_feliz_seeds","mysticalagriculture:cajita_feliz_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cajita_feliz_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cajita_feliz_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cajita_feliz_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cajita_feliz_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:cajita_feliz_seed')
  
      //arcane gold ingot
      //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:arcane_gold_ingot_seeds","mysticalagriculture:arcane_gold_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:arcane_gold_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:arcane_gold_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:arcane_gold_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:arcane_gold_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:arcane_gold_ingot_seed')
  
     //aleacion de andesita
     nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:andesite_alloy_seeds","mysticalagriculture:andesite_alloy_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:andesite_alloy_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:andesite_alloy_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:andesite_alloy_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:andesite_alloy_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:andesite_alloy_seed')
  
    //deorum ingot
    //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:deorum_ingot_seeds","mysticalagriculture:deorum_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:deorum_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:deorum_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:deorum_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:deorum_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:deorum_ingot_seed')
  
    //skysteel ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:sky_steel_ingot_seeds","mysticalagriculture:sky_steel_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:sky_steel_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:sky_steel_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:sky_steel_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:sky_steel_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:sky_steel_ingot_seed')
    
    //naquadah ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:naquadah_seeds","mysticalagriculture:naquadah_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:naquadah_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:naquadah_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:naquadah_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:naquadah_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:naquadah_seed')
 
    //Chromium Ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:chromium_seeds","mysticalagriculture:chromium_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:chromium_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:chromium_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:chromium_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:chromium_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:chromium_seed')


    //dawnstone
    //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dawnstone_seeds","mysticalagriculture:dawnstone_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dawnstone_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dawnstone_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dawnstone_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dawnstone_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:dawnstone_seed')

    //seared bricks ingot
    nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:seared_ingot_seeds","mysticalagriculture:seared_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:seared_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:seared_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:seared_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:seared_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:seared_ingot_seed')

   //Cognition Alloy
   nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:cognition_seeds","mysticalagriculture:cognition_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:cognition_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:cognition_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:cognition_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:cognition_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:cognition_seed')

  //Nadienite Ingot
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:nadienite_ingot_seeds","mysticalagriculture:nadienite_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:nadienite_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:nadienite_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:nadienite_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:nadienite_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:nadienite_ingot_seed')

  //dark gem
  nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:dark_gem_seeds","mysticalagriculture:dark_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:dark_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:dark_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:dark_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:dark_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:dark_gem_seed')

  //spirit gem
  //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:spirit_gem_seeds","mysticalagriculture:spirit_gem_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:spirit_gem_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:spirit_gem_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:spirit_gem_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:spirit_gem_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:spirit_gem_seed')

  //replica ingot
  //nadien.custom({"bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":["mysticalagriculture:replica_ingot_seeds","mysticalagriculture:replica_ingot_essence"]}],"type":"botanypots:crop","seed":{"item":"mysticalagriculture:replica_ingot_seeds"},"categories":["inferium", "prudentium", "tertium", "imperium", "supremium", "insanium", "magic", "dirt", "farmland", "grass", "sand"],"growthTicks":5,"display":{"type":"botanypots:aging","block":"mysticalagriculture:replica_ingot_crop"},"drops":[{"chance":1.00,"output":{"item":"mysticalagriculture:replica_ingot_essence"}},{"chance":0.01,"output":{"item":"mysticalagriculture:replica_ingot_seeds"}},{"chance":0.01,"output":{"item":"mysticalagriculture:fertilized_essence"},"minRolls":1,"maxRolls":1}]}).id('galaxyorigins:replica_ingot_seed')



    

 
 
 
})