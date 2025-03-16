ServerEvents.recipes(nadien => {


      


        //celda creatva aplied energistics
        nadien.custom({
          type: 'powah:energizing',
          ingredients: [
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('ultimate_utilities:estella_galactica').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('megacells:mega_energy_cell').toJson(),
            Ingredient.of('avaritia:infinity',).toJson(),
          ],
          energy: '2147483647',
          result: Item.of('ae2:creative_energy_cell').toJson()
        }).id(`galaxyorigins:energizing/ae2_creative_energy_cell`)
      
        nadien.recipes.create.mechanical_crafting("ae2:creative_energy_cell", [
          "CCCCXCCCC",
          "CYYYXYYYC",
          "CYYRXRYYC",
          "CYYYXYYYC",
          "XXXXXXXXX",
          "CYYYXYYYC",
          "CYYRXRYYC",
          "CYYYXYYYC",
          "CCCCXCCCC"
        ], {
          Y: "ae2:dense_energy_cell",
          X: "ae2:engineering_processor",
          C: "avaritia:infinity_ingot",
          R: 'ultimate_utilities:estella_galactica'
        }).id('galaxyorigins:celdacreativaaedos')



        //cubo de energia creativa mekanism
        nadien.shaped('mekanism:creative_energy_cube', ['ATA', 'UCU', 'ATA'], {
          A: 'mekanism:alloy_atomic',
          T: 'mekanism:energy_tablet',
          U: 'allthemodium:unobtainium_block',
          C: 'mekanism:ultimate_energy_cube'
        }).id('galaxyorigins:mekanism/creative_energy_cube')


        nadien.custom({
          type: 'powah:energizing',
          ingredients: [
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('ultimate_utilities:estella_galactica').toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('mekanism:creative_energy_cube',).toJson(),
            Ingredient.of('avaritia:infinity',).toJson(),
          ],
          energy: '2147483647',
          result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}').toJson()
        }).id(`galaxyorigins:energizing/mekanism_creative_energy_cube`)





        //tanque quimico creativo mekanism
        nadien.recipes.create.mechanical_crafting("mekanism:creative_chemical_tank", [
          "   B B   ",
          " SAADAAS ",
          " ABRBRBA ",
          " ABBCBBA ",
          " ABCICBA ",
          " ABBCBBA ",
          " ABRBRBA ",
          " SAADAAS ",
          "         "
        ], {
          A: "mekanism:ultimate_chemical_tank",
          B: "mekanism:dynamic_tank",
          C: "mekanism:dynamic_glass",
          D: "mekanism:dynamic_valve",
          I: "avaritia:infinity_ingot",
          S: "avaritia:infinity_catalyst",
          R: 'ultimate_utilities:estella_galactica'
        }).id('galaxyorigins:quimicocreativo')

        
        //tanque creativo de fluidos mekanism
        nadien.recipes.create.mechanical_crafting("mekanism:creative_fluid_tank", [
          "         ",
          " SAADAAS ",
          " ABRCRBA ",
          " ABBCBBA ",
          " ACCICCA ",
          " ABBCBBA ",
          " ABRCRBA ",
          " SAADAAS ",
          "         "
        ], {
          A: "mekanism:ultimate_fluid_tank",
          B: "mekanism:dynamic_tank",
          C: "mekanism:dynamic_glass",
          D: "mekanism:dynamic_valve",
          I: "avaritia:infinity_ingot",
          S: "avaritia:infinity_catalyst",
          R: 'ultimate_utilities:estella_galactica'
        }).id('galaxyorigins:fluidtankmeka')


        //creative coil thermal
        nadien.recipes.create.mechanical_crafting("thermal:rf_coil_creative_augment", [
          "AAAABAAAA",
          "ACCRBRCCA",
          "ACCCBCCCA",
          "ACCDBDCCA",
          "BBBBEBBBB",
          "ACCDBDCCA",
          "ACCCBCCCA",
          "ACCRBRCCA",
          "AAAABAAAA"
        ], {
          A: "avaritia:infinity_ingot",
          B: "avaritia:caca_singularity",
          C: "thermal:dynamo_compression",
          D: "avaritia:track_singularity",
          E: "thermal_extra:rf_coil_augment_5",
          R: 'ultimate_utilities:estella_galactica'
        }).id('galaxyorigins:coilthermal')
        
        
          //creative jar ars
          nadien.recipes.create.mechanical_crafting('ars_nouveau:creative_source_jar', [
            ' AAA ',
            'ABCDA',
            'AIHJA',
            'AEFGA',
            ' AAA '
          ], {
            A:'ars_nouveau:summon_focus', 
            B:'ars_nouveau:bookwyrm_charm', 
            C:'ars_nouveau:starbuncle_charm', 
            D:'ars_nouveau:whirlisprig_charm', 
            E:'ars_nouveau:wixie_charm', 
            F:'ars_nouveau:drygmy_charm', 
            G:'ars_nouveau:amethyst_golem_charm', 
            H:'ultimate_utilities:estella_galactica', 
            I:'ars_nouveau:thread_spellpower', 
            J:'ars_nouveau:potion_melder'
  
          }).id('galaxyorigins:creativesourcejar')

          //creative Blaze Cake
          nadien.recipes.create.mechanical_crafting('create:creative_blaze_cake', [
            '     ',
            'AAAAA',
            'BCCCB',
            'BCDCB',
            ' BAB '
          ], {
            A: 'create:precision_mechanism',
            B: 'create:blaze_cake',
            C: 'create:experience_block',
            D: 'ultimate_utilities:estella_galactica'
  
          }).id('galaxyorigins:creativeblazecake')

         //creative motor
          nadien.recipes.create.mechanical_crafting('create:creative_motor', [
            'CLC', 
            'HSH', 
            'LGL'
            ], {
            C: 'create:cogwheel',
            L: 'create:large_cogwheel',
            H: 'create:shaft',
            S: 'ultimate_utilities:estella_galactica',
            G:  'create:gearbox'
  
          }).id('galaxyorigins:creativemotor')


         


        

          nadien.shaped('ars_nouveau:creative_spell_book',  ['BSG', 'GGE', 'EER'],
            {
              B: 'ars_nouveau:archmage_spell_book',
              S: 'ultimate_utilities:estella_galactica',
              G: 'ars_nouveau:source_gem_block',
              E: 'minecraft:ender_eye',
              R: 'ars_nouveau:starbuncle_charm'
            }).id('galaxyorigins:creativespellbook')
        

            




      })