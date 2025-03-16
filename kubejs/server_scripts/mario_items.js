//star items v2 By SrNadien 
ServerEvents.recipes(nadien => {



    //Muñeco De Paja
    nadien.recipes.create.mixing('ultimate_utilities:muneco_de_paja', ['ultimate_utilities:cacota', 'ultimate_utilities:super_semilla', 'minecraft:sculk_sensor', 'mob_grinding_utils:solid_xp_baby', 'argentinas_delight:matedulceitem', 'ars_nouveau:glyph_wither']).superheated().id('galaxyorigins:mpj')
  

    //super semilla
    nadien.recipes.create.mixing('ultimate_utilities:super_semilla', ['ultimate_utilities:cajita_feliz', 'ultimate_utilities:cajita_feliz', 'ultimate_utilities:super_caca', 'argentinas_delight:tablachura', 'allthemodium:allthemodium_apple', 'argentinas_delight:matedulceitem', 'ultimate_utilities:cacota', 'createaddition:chocolate_cake', 'farmersdelight:steak_and_potatoes']).superheated().id('galaxyorigins:opsemilla')

    //planos
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "occultism:iesnium_block"
      },
      "ingredients": [
        {
          "item": "angelring:angel_ring"
        },
        {
          "item": "angelring:energetic_angel_ring"
        },
        {
          "item": "aeinfinitybooster:dimension_card"
        },
        {
          "item": "aeinfinitybooster:infinity_card"
        },
        {
          "item": "create:track_station"
        },
        {
          "item": "argentinas_delight:pavacalientetool"
        },
        {
          "item": "mifa:speed_addon_4"
        },
        {
          "item": "thermal_more:mega_upgrade_augment"
        },
        {
          "item": "allthemodium:unobtainium_boots"
        },
        {
          "item": "cookingforblockheads:cow_jar"
        },
        {
          "item": "botanypotstiers:creative_terracotta_hopper_botany_pot"
        },
        {
          "item": 'exdeorum:porcelain_crucible'
        },
        {
          "item": "mysticalagradditions:insanium_gemstone_block"
        },
        {
          "item": "occultism:otherworld_goggles"
        },
        {
          "item": "pneumaticcraft:advanced_air_compressor"
        },
        {
          "item": "exmachinis:netherite_upgrade"
        }
      ],
      "result": {
        "item": 'ultimate_utilities:planos',
        "count": 1
      }
    }).id('galaxyorigins:planos')



    //combustible radiactivo
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "pneumaticcraft:collector_drone"
      },
      "ingredients": [
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "biggerreactors:ludicrite_block"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "tag": "forge:ores/uranium"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "biggerreactors:ludicrite_block"
        },
        {
          "item": "mekanism:module_radiation_shielding_unit"
        }
      ],
      "result": {
        "item": 'ultimate_utilities:combustible_radiactivo',
        "count": 1
      }
    }).id('galaxyorigins:combustible')
	

  //alma de dragon
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:dragon_egg"
    },
    "ingredients": [
      {
        "item": 'thermal_extra:abyssal_fluid_tank_augment'
      },
      {
        "item": 'thermal_extra:abyssal_potion_amplifier_augment'
      },
      {
        "item": 'thermal_extra:dragonsteel_potion_duration_augment'
      },
      {
        "item": 'mysticalagradditions:insanium_gemstone_block'
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'thermal_extra:abyssal_block'
      },
      {
        "item": "minecraft:dragon_breath"
      },
      {
        "item": "thermal_extra:dragonsteel_block"
      },
      {
        "item": "thermal_extra:dragonsteel_ingot"
      },
      {
        "item": "thermal_extra:dragonsteel_plate"
      },
      {
        "item": 'mysticalagradditions:insanium_gemstone_block'
      },
      {
        "item": 'thermal_extra:abyssal_ingot'
      },
      {
        "item": 'mysticalagradditions:insanium_gemstone_block'
      },
      {
        "item": "minecraft:dragon_head"
      },
      {
        "item": 'mysticalagradditions:insanium_gemstone_block'
      },
      {
        "item": 'mob_grinding_utils:tank_sink'
      }
    ],
    "result": {
      "item": 'ultimate_utilities:alma_de_dragon',
      "count": 1
    }
  }).id('galaxyorigins:alma')


  //antimateria
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": 'createaddition:electric_motor'
    },
    "ingredients": [
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'thermal:machine_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": 'ultimate_utilities:super_semilla'
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'ultimate_utilities:bob_toronja'
      },
      {
        "item": 'thermal:machine_frame'
      },
      {
        "item": "create:mechanical_crafter"
      },
      {
        "item": "ae2:engineering_processor"
      },
      {
        "item": 'mekanism:meka_tool'
      },
      {
        "item": 'mekanism:meka_tool'
      }
    ],
    "result": {
      "item": 'ultimate_utilities:anti_materia',
      "count": 1
    }
  }).id('galaxyorigins:uumater')




  //mini portal
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "minecraft:end_portal_frame"
    },
    "ingredients": [
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": "create:mechanical_saw"
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'ironfurnaces:million_furnace'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": 'mekanism_extras:infinite_control_circuit'
      },
      {
        "item": 'create:radiant_sheet'
      },
      {
        "item": "create:mechanical_saw"
      }
    ],
    "result": {
      "item": 'ultimate_utilities:mini_portal',
      "count": 1
    }
  }).id('galaxyorigins:miniportal')


  //mini reactor
  nadien.custom({
    "type": "extendedcrafting:combination",
    "powerCost": 100000,
    "input": {
      "item": "extendedcrafting:ender_star_block"
    },
    "ingredients": [
      {
        "item": "avaritia:caca_singularity",
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "sophisticatedbackpacks:battery_upgrade"
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "item": "avaritia:caca_singularity"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "item": "extendedcrafting:nether_star_block"
      },
      {
        "type": "forge:nbt",
        "item": "hostilenetworks:prediction",
        "count": 1,
        "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
      }
    ],
    "result": {
      "item": 'ultimate_utilities:mini_reactor',
      "count": 1
    }
  }).id('galaxyorigins:minireactor')



  //black hole
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": 'bigreactors:ludicrite_ingot'
      },
      "ingredients": [
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "minecraft:beetroot_seeds"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": "minecraft:wheat_seeds"
        },
        {
          "item": 'allthemodium:allthemodium_apple'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": 'mob_grinding_utils:golden_egg'
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": "ultimate_utilities:cacota"
        }
      ],
      "result": {
        "item": 'ultimate_utilities:agujero_negro'
      }
    }).id('galaxyorigenes:black_hole')
  



    //semilla
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": 'bigreactors:ludicrite_ingot'
      },
      "ingredients": [
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "minecraft:beetroot_seeds"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": "minecraft:wheat_seeds"
        },
        {
          "item": 'allthemodium:allthemodium_apple'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": 'ars_nouveau:magebloom_crop'
        },
        {
          "item": "ultimate_utilities:cacota"
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": 'mob_grinding_utils:golden_egg'
        },
        {
          "item": 'extendedcrafting:enhanced_ender_ingot_block'
        },
        {
          "item": "ultimate_utilities:super_caca"
        },
        {
          "item": "ultimate_utilities:cacota"
        }
      ],
      "result": {
        "item": 'ultimate_utilities:semilla'
      }
    }).id('galaxyorigenes:semilla')



    //buscador del universo
    nadien.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 100000,
      "input": {
        "item": "pneumaticcraft:universal_sensor"
      },
      "ingredients": [
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        },
        {
          "item": 'mekanism_extras:infinite_control_circuit'
        },
        {
          "item": 'thermal_extra:twinite_plate'
        }
      ],
      "result": {
        "item": 'ultimate_utilities:buscador_del_universo',
        "count": 1
      }
    }).id('galaxyorigins:universesearch')



  //catalizador del olvido
  nadien.shaped('ultimate_utilities:catalizador', [' AB', 'ACA', 'BA '], {
    A: 'draconicevolution:wyvern_core',
    C: 'allthecompressed:glass_5x',
    B: 'ultimate_utilities:muneco_de_paja'
  }).id('galaxyorigins:catalizador').stage('avaritia')



   // Brujula Maldita
   nadien.shaped('ultimate_utilities:brujula_maldita', ['DED', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'ars_nouveau:glyph_summon_steed',
    D: 'ae2:energy_card',
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('galaxyorigins:brujula').stage('avaritia')



    //calavaera maldita
    nadien.recipes.create.mechanical_crafting('ultimate_utilities:calavera_oscura', [
      '    F    ',
      '   AAA   ',
      '  FACAF  ',
      '  FABAF  ',
      '   NNN   ',
      '    F    '
      ], {
        A: 'minecraft:wither_skeleton_skull',
        B: 'thermal_extra:upgrade_augment',
        C: 'ars_nouveau:glyph_summon_steed',
        F: 'minecraft:wither_rose',
        N: 'occultism:soul_gem'
      }).id('galaxyorigins:calaveradark')



  // transmisor
  nadien.shaped('ultimate_utilities:transmisor', ['A B', ' CF', 'GED'], {
    A: Item.of('mekanism:canteen', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:64000,FluidName:"mekanism:nutritional_paste"}}]}}'),
    B: 'ae2wtlib:wireless_universal_terminal',
    C: 'mekanism:supercharged_coil',
    D: 'ae2wtlib:quantum_bridge_card',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'createaddition:tesla_coil'
  }).id('galaxyorigins:transmisor').stage('avaritia')



   //star nuget
   nadien.shaped('9x ultimate_utilities:pepita_de_mega_estrella', [
    '   ',
    ' A ',
    '   '
  ], {
    A: 'ultimate_utilities:estella_galactica'
  }).id('galaxyorigins:starnugget').stage('avaritia')



})