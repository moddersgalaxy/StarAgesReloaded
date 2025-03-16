//create By Srnadien
ServerEvents.recipes(nadien => {

   

   

  nadien.remove({output: ['create:deployer', 'create:mechanical_crafter', 'create:spout','create:andesite_alloy', 'create:andesite_casing', 'create:brass_casing', 'create:copper_casing', 'create:railway_casing',  'create:refined_radiance_casing']})
 
 
 //aleacion de andesita
 nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'ultimate_utilities:nadienite_ingot'
 }).id('galaxyorigins:aleaciondeandesita')

  //aleacion de andesita
 nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'minecraft:netherite_ingot'
 }).id('galaxyorigins:aleaciondeandesitados')

 RecipeMachineStage.addRecipe('create:mixing', 'galaxyorigins:andesite_alloy_aged', "evil")
 nadien.recipes.create.mixing('create:andesite_alloy', ['2x minecraft:andesite', 'minecraft:copper_ingot']).id('galaxyorigins:andesite_alloy_aged').superheated()
 
 
 //surtidor
 nadien.shaped('create:spout', [
   ' P ',
   ' A ',
   '   '
 ], {
   P: 'create:andesite_casing',
   A: 'minecraft:dried_kelp'
 }).id('galaxyorigins:spout')
 
 //ensamblador mecanico
 nadien.shaped('create:mechanical_crafter', [
   ' P ',
   ' A ',
   ' D '
 ], {
   P: 'create:electron_tube',
   A: 'create:andesite_casing',
   D: 'minecraft:crafting_table'
 }).id('galaxyorigins:mechanical_crafter')
 
 
 
 })
 
 // Add missing ore crushing recipes for Create
 let missingCreateOres = [
     'aluminum',
     'lead',
     'nickel',
     'osmium',
     'platinum',
     'silver',
     'tin',
     'uranium',
 ]
 ServerEvents.recipes(nadien => {
     missingCreateOres.forEach(ore => {
        nadien.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('galaxyorigins:smelting/' + ore + '_ingot_from_crushed')
        nadien.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('galaxyorigins:blasting/' + ore + '_ingot_from_crushed')
        nadien.custom({
             type: 'create:splashing',
             ingredients: [
                 {
                     'item': 'create:crushed_raw_' + ore
                 }
             ],
             results: [
                 {
                     'count': 9,
                     'item': 'alltheores:' + ore + '_nugget'
                 }
             ]
         }).id('galaxyorigins:splashing/crushed_raw_' + ore)
     })
 
 
     nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "item": "create:andesite_alloy"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": "create:andesite_casing",
           "count": 4
         }
       }).id('galaxyorigins:andesitealloy')
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "item": "pneumaticcraft:etching_acid_bucket"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": 'create:brass_casing',
           "count": 4
         }
       }).id('galaxyorigins:brassalloy')
 
       
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "tag": "minecraft:planks"
           },
           "C": {
             "item": "pneumaticcraft:plastic"
           },
           "S": {
             "tag": "minecraft:logs"
           }
         },
         "result": {
           "item": 'create:copper_casing',
           "count": 4
         }
       }).id('galaxyorigins:copperalloy')
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "item": "minecraft:rail"
           },
           "C": {
             "item": "pneumaticcraft:capacitor"
           },
           "S": {
             "item": "create:brass_casing"
           }
         },
         "result": {
           "item": 'create:railway_casing',
           "count": 4
         }
       }).id('galaxyorigins:railwaycassing')
 
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "pattern": [
           "AAA",
           "CSC",
           "AAA"
         ],
         "key": {
           "A": {
             "item": "minecraft:oak_planks"
           },
           "C": {
             "item": "pneumaticcraft:printed_circuit_board"
           },
           "S": {
             "item": "create:brass_casing"
           }
         },
         "result": {
           "item": 'create:refined_radiance_casing',
           "count": 4
         }
       }).id('galaxyorigins:radiancecassing')
 
 
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "B": {
             "tag": 'forge:plates/zinc'
           }
         },
         "pattern": [
           " A ",
           "BBB",
           " B "
         ],
         "result": {
           "item": 'kubejs:zinc_hand'
         },
         "show_notification": true
       }).id('galaxyorigins:zinchand')
 
       
 
 
        nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "B": {
             "item": "create:electron_tube"
           },
           "C": {
             "item": "create:andesite_casing"
           },
           "I": {
             "item": 'kubejs:zinc_hand'
           }
         },
         "pattern": [
           "B",
           "C",
           "I"
         ],
         "result": {
           "item": "create:deployer"
         },
         "show_notification": true
       }).id('galaxyorigins:deployer')
 
 
 
       nadien.remove({output: 'createaddition:copper_wire'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:cut_copper"
         },
         "result": {
           "item": "createaddition:copper_wire",
           "count": 2
         }
       }).id('galaxyorigins:copperwire')
 
    
       nadien.remove({output: 'createaddition:iron_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:raw_iron_block"
         },
         "result": {
           "item": 'createaddition:iron_rod',
           "count": 2
         }
       }).id('galaxyorigins:ironbar')
 
 
       nadien.remove({output: 'createaddition:copper_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "create:copper_sheet"
         },
         "result": {
           "item": 'createaddition:copper_rod',
           "count": 2
         }
       }).id('galaxyorigins:copperbar')
 
       nadien.remove({output: 'createaddition:gold_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:gold_ingot"
         },
         "result": {
           "item": 'createaddition:gold_rod',
           "count": 2
         }
       }).id('galaxyorigins:goldbar')
 
 
       nadien.remove({output: 'createaddition:electrum_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'createaddition:electrum_ingot'
         },
         "result": {
           "item": 'createaddition:electrum_rod',
           "count": 2
         }
       }).id('galaxyorigins:electrumbar')
 
 
       nadien.remove({output: 'createaddition:brass_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'create:brass_ingot'
         },
         "result": {
           "item": 'createaddition:brass_rod',
           "count": 2
         }
       }).id('galaxyorigins:brassbar')
 
 
 
       nadien.remove({output: 'createaddition:alternator'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " ISI ",
           "ISRSI",
           " ICI "
         ],
         "key": {
           "C": {
             "item": "createaddition:capacitor"
           },
           "I": {
             "tag": "forge:plates/iron"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           },
           "A": {
             "item": "create:andesite_alloy"
           }
         },
         "result": {
           "item": "createaddition:alternator"
         }
       }).id('galaxyorigins:alternator')
 
 
       nadien.remove({output: 'createaddition:electric_motor'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " BSB ",
           "BSRSB",
           " BCB "
         ],
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "C": {
             "item": "createaddition:capacitor"
           },
           "B": {
             "tag": "forge:plates/brass"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           }
         },
         "result": {
           "item": "createaddition:electric_motor"
         }
       }).id('galaxyorigins:electricmotor')
 
       //radiant sheet
       nadien.recipes.create.mixing('create:radiant_sheet', '4x mekanism_extras:alloy_radiance').id('galaxyorigins:radiant_sheet').superheated()
       
 
      
   
 
 
    
 
 
 
 
 })
 