ServerEvents.recipes(nadien => {
	
  //diamond lattice
  nadien.remove({output: 'avaritia:diamond_lattice' })
  nadien.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
    X: {
      tag: "forge:gems/diamond",
    },
    D: {
      item: 'mekanism:dirty_netherite_scrap',
    },
  }).id('galaxyorigins:latituddediamantes')



 //casco infinito
 nadien.remove({output: 'avaritia:infinity_helmet' })
 nadien.recipes.create.mechanical_crafting('avaritia:infinity_helmet', [
  "  NNNNN  ",
  " NIIIIIN ",
  " N XIX N ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NI I IN "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutron_ingot',
    X: 'avaritia:infinity_catalyst'
  }).id('galaxyorigins:cascoinfinito')


//pechera infinita
nadien.remove({output: 'avaritia:infinity_chestplate' })
nadien.recipes.create.mechanical_crafting('avaritia:infinity_chestplate', [
  " NN   NN ",
  "NNN   NNN",
  "NNN   NNN",
  " NIIIIIN ",
  " NIIXIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  "  NNNNN  "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutron_ingot',
    X: 'avaritia:infinity_catalyst'
  }).id('galaxyorigins:pecherainfinita')	


  //pantalones infinitos
  nadien.remove({output: 'avaritia:infinity_pants' })
  nadien.recipes.create.mechanical_crafting('avaritia:infinity_pants', [
    "NNNNNNNNN",
    "NIIIXIIIN",
    "NINNXNNIN",
    "NIN   NIN",
    "NCN   NCN",
    "NIN   NIN",
    "NIN   NIN",
    "NIN   NIN",
    "NNN   NNN"
    ], {
      C: 'avaritia:crystal_matrix_ingot',
      I: 'avaritia:infinity_ingot',
      N: 'avaritia:neutron_ingot',
      X: 'avaritia:infinity_catalyst'
    }).id('galaxyorigins:pantaloneinfinitos')


    //infinity boots
    nadien.remove({output: 'avaritia:infinity_boots' })
    nadien.recipes.create.mechanical_crafting('avaritia:infinity_boots', [
      " NNN NNN ",
      " NIN NIN ",
      " NIN NIN ",
      "NNIN NINN",
      "NIIN NIIN",
      "NNNN NNNN"
      ], {
        I: 'avaritia:infinity_ingot',
        N: 'avaritia:neutron_ingot'
      }).id('galaxyorigins:botasinfinitas')


      //espada infinita 1
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinitysword_1', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:crystal_matrix',
          N: 'avaritia:neutron',
          X: 'avaritia:crystal_matrix'
        }).id('galaxyorigins:infinitysworduno')


      //espada del cosmos
      nadien.remove({output: 'avaritia:infinity_sword' })
      nadien.recipes.create.mechanical_crafting('avaritia:infinity_sword', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutron_ingot',
          X: 'avaritia:infinity_catalyst'
        }).id('galaxyorigins:cosmossword')




      //espada del cosmos (balanced)
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinityswordbalanced', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutron_ingot',
          X: 'avaritia:infinity_catalyst'
        }).id('galaxyorigins:cosmosswordbalanced')




       //skullfire
       nadien.remove({output: 'avaritia:blaze_sword' })
       nadien.recipes.create.mechanical_crafting( 'avaritia:blaze_sword', [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
        ], {
          B: 'minecraft:bone',
          D: 'minecraft:nether_star',
          I: 'avaritia:crystal_matrix_ingot',
          W: '#minecraft:logs',
          X: 'minecraft:blaze_powder'
        }).id('galaxyorigins:blaze_sword')



       //arco multidisparo
       nadien.remove({output: 'avaritia:infinity_bow' })
       nadien.recipes.create.mechanical_crafting('avaritia:infinity_bow', [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
        ], {
          X: 'avaritia:infinity_catalyst',
          I: 'avaritia:infinity_ingot',
          W: 'minecraft:white_wool'
        }).id('galaxyorigins:arco_de_los_dioses')

        //infinite crosbow
        nadien.remove({output: 'avaritia:infinity_crossbow' })
        nadien.recipes.create.mechanical_crafting('avaritia:infinity_crossbow', [
          '   IIIIIP',
          ' AC N  C ',
          ' CXN  C  ',
          'I NIPC   ',
          'IN PCN   ',
          'I  CNIN  ',
          'I C  NNA ',
          'IC    AAN',
          'P      NN'
          ], {
           A: 'avaritia:crystal_matrix',
           I: 'avaritia:infinity_ingot',
           C: 'avaritia:crystal_matrix_ingot',
           N: 'avaritia:neutron_ingot',
           P: 'avaritia:neutron_pile',
           X: 'avaritia:infinity_catalyst',
          }).id('galaxyorigins:infinity_crossbow')




        //destructor de mundos
        nadien.remove({output: 'avaritia:infinity_pickaxe' })
        nadien.recipes.create.mechanical_crafting('avaritia:infinity_pickaxe', [
          " IIIIIII ",
          "IIIIXIIII",
          "II  N  II",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
          ], {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutron_ingot',
            X: 'avaritia:infinity_catalyst'
          }).id('galaxyorigins:wold_breaker')



          //pala planetaria
          nadien.remove({output: 'avaritia:infinity_shovel' })
          nadien.recipes.create.mechanical_crafting('avaritia:infinity_shovel', [
            "      III",
            "     IIXI",
            "      III",
            "     N I ",
            "    N    ",
            "   N     ",
            "  N      ",
            " N       ",
            "N        "
            ], {
              I: 'avaritia:infinity_ingot',
              N: 'avaritia:neutron_ingot',
              X: 'avaritia:infinity_catalyst'
            }).id('galaxyorigins:palainfinita')


            //hacha de la naturaleza
            nadien.remove({output: 'avaritia:infinity_axe' })
            nadien.recipes.create.mechanical_crafting('avaritia:infinity_axe', [
              "   I   ",
              "  IIIII",
              "  IIXI ",
              "   IN  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  "
              ], {
                I: 'avaritia:infinity_ingot',
                N: 'avaritia:neutron_ingot',
                X: 'avaritia:infinity_catalyst'
              }).id('galaxyorigins:hachainfinita')


              //azada del la tierra verde
              nadien.remove({output: 'avaritia:infinity_hoe' })
              nadien.recipes.create.mechanical_crafting('avaritia:infinity_hoe', [
                "     N ",
                "   IIII",
                "  IIIII",
                "  I  XI",
                "     N ",
                "     N ",
                "     N ",
                "     N ",
                "     N "
                ], {
                  I: 'avaritia:infinity_ingot',
                  N: 'avaritia:neutron_ingot',
                  X: 'avaritia:infinity_catalyst'
                }).id('galaxyorigins:azadainfinita')




                //albondigas cosmicas
                nadien.remove({output: 'avaritia:cosmic_meatballs' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:cosmic_meatballs',
                  ["ABCDEFGHI", "JKLM     "],
                  {
                    A: {
                      item: "minecraft:porkchop",
                    },
                    B: {
                      item: "minecraft:beef",
                    },
                    C: {
                      item: "minecraft:mutton",
                    },
                    D: {
                      item: "minecraft:cod",
                    },
                    E: {
                      item: "minecraft:salmon",
                    },
                    F: {
                      item: "minecraft:tropical_fish",
                    },
                    G: {
                      item: "minecraft:pufferfish",
                    },
                    H: {
                      item: "minecraft:rabbit",
                    },
                    I: {
                      item: "minecraft:chicken",
                    },
                    J: {
                      item: "minecraft:rotten_flesh",
                    },
                    K: {
                      item: "minecraft:spider_eye",
                    },
                    L: {
                      item: "minecraft:egg",
                    },
                    M: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                ).id('galaxyorigins:cosmic_meatballs')



                //estofado ultimo
                nadien.remove({output: 'avaritia:ultimate_stew' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:ultimate_stew',
                  [
                    "ABCDEFGHI",
                    "JKLMOPQRS",
                    "TUVWXYZab",
                    "cdefghijk",
                    "lmnopqrst",
                    "uvwxyz123",
                    "45       ",
                  ],
                  {
                    A: {
                      item: "minecraft:apple",
                    },
                    B: {
                      item: "minecraft:golden_apple",
                    },
                    C: {
                      item: "minecraft:bread",
                    },
                    D: {
                      item: "minecraft:kelp",
                    },
                    E: {
                      item: "minecraft:cocoa_beans",
                    },
                    F: {
                      item: "minecraft:cake",
                    },
                    G: {
                      item: "minecraft:glistering_melon_slice",
                    },
                    H: {
                      item: "minecraft:carrot",
                    },
                    I: {
                      item: "minecraft:poisonous_potato",
                    },
                    J: {
                      item: "minecraft:chorus_fruit",
                    },
                    K: {
                      item: "minecraft:beetroot",
                    },
                    L: {
                      item: "minecraft:mushroom_stew",
                    },
                    M: {
                      item: "minecraft:honey_bottle",
                    },
                    O: {
                      item: "minecraft:sweet_berries",
                    },
                    P: {
                      item: "farmersdelight:apple_pie",
                    },
                    Q: {
                      item: "farmersdelight:sweet_berry_cheesecake",
                    },
                    R: {
                      item: "farmersdelight:chocolate_pie",
                    },
                    S: {
                      item: "farmersdelight:melon_popsicle",
                    },
                    T: {
                      item: "farmersdelight:fruit_salad",
                    },
                    U: {
                      item: "farmersdelight:mixed_salad",
                    },
                    V: {
                      item: "farmersdelight:nether_salad",
                    },
                    W: {
                      item: "farmersdelight:barbecue_stick",
                    },
                    X: {
                      item: "farmersdelight:egg_sandwich",
                    },
                    Y: {
                      item: "farmersdelight:chicken_sandwich",
                    },
                    Z: {
                      item: "farmersdelight:hamburger",
                    },
                    a: {
                      item: "farmersdelight:bacon_sandwich",
                    },
                    b: {
                      item: "farmersdelight:mutton_wrap",
                    },
                    c: {
                      item: "farmersdelight:dumplings",
                    },
                    d: {
                      item: "farmersdelight:stuffed_potato",
                    },
                    e: {
                      item: "farmersdelight:cabbage_rolls",
                    },
                    f: {
                      item: "farmersdelight:cooked_rice",
                    },
                    g: {
                      item: "farmersdelight:beef_stew",
                    },
                    h: {
                      item: "farmersdelight:chicken_soup",
                    },
                    i: {
                      item: "farmersdelight:vegetable_soup",
                    },
                    j: {
                      item: "farmersdelight:fish_stew",
                    },
                    k: {
                      item: "farmersdelight:fried_rice",
                    },
                    l: {
                      item: "farmersdelight:pumpkin_soup",
                    },
                    m: {
                      item: "farmersdelight:baked_cod_stew",
                    },
                    n: {
                      item: "farmersdelight:noodle_soup",
                    },
                    o: {
                      item: "farmersdelight:bacon_and_eggs",
                    },
                    p: {
                      item: "farmersdelight:pasta_with_meatballs",
                    },
                    q: {
                      item: "farmersdelight:pasta_with_mutton_chop",
                    },
                    r: {
                      item: "farmersdelight:roasted_mutton_chops",
                    },
                    s: {
                      item: "farmersdelight:vegetable_noodles",
                    },
                    t: {
                      item: "farmersdelight:steak_and_potatoes",
                    },
                    u: {
                      item: "farmersdelight:ratatouille",
                    },
                    v: {
                      item: "farmersdelight:salmon_roll",
                    },
                    w: {
                      item: "farmersdelight:stuffed_pumpkin_block",
                    },
                    x: {
                      item: "farmersdelight:roast_chicken_block",
                    },
                    y: {
                      item: "farmersdelight:grilled_salmon",
                    },
                    z: {
                      item: 'farmersdelight:sweet_berry_cheesecake_slice',
                    },
                    1: {
                      item: 'ultimate_utilities:cajita_feliz',
                    },
                    2: {
                      item: "create:blaze_cake",
                    },
                    3: {
                      item: "create:chocolate_glazed_berries",
                    },
                    4: {
                      item: "create:honeyed_apple",
                    },
                    5: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                ).id('galaxyorigins:estofado_ultimo')




                //perla destructora
                nadien.remove({output: 'avaritia:endest_pearl' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:endest_pearl',
                  [
                    "   AAA   ",
                    " AABBBAA ",
                    " ABBBBBA ",
                    "ABBBDBBBA",
                    "ABBDCDBBA",
                    "ABBBDBBBA",
                    " ABBBBBA ",
                    " AABBBAA ",
                    "   AAA   ",
                  ],
                  {
                    A: {
                      item: "minecraft:end_stone",
                    },
                    B: {
                      item: "minecraft:ender_pearl",
                    },
                    C: {
                      item: "minecraft:nether_star",
                    },
                    D: {
                      item: "avaritia:neutron_ingot",
                    },
                  }
                ).id('galaxyorigins:endest_pearl')


                //compresor
                nadien.remove({output: 'avaritia:neutron_compressor' })
                nadien.recipes.createMechanicalCrafting(
                  'extendedcrafting:compressor',
                  [
                    "IIIHHHIII",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "RNN O NNR",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "IIIXIXIII",
                  ],
                  {
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    H: {
                      item: "minecraft:hopper",
                    },
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    O: {
                      item: "avaritia:neutronium_block",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                  }
                ).id('galaxyorigins:compresor')



                //colector de neutrones
              
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:neutron_collector',
                  [
                    "IIQQQQQII",
                    "I QQQQQ I",
                    "I  RRR  I",
                    "X RRRRR X",
                    "I RRXRR I",
                    "X RRRRR X",
                    "I  RRR  I",
                    "I       I",
                    "IIIXIXIII",
                  ],
                  {
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                    Q: {
                      tag: "forge:storage_blocks/quartz",
                    },
                  }
                ).id('galaxyorigins:neutron_collector')



                 //colector de neutrones Dense

                 nadien.recipes.createMechanicalCrafting(
                  'avaritia:dense_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('galaxyorigins:neutroncollectordense')


                //colector de neutrones Denser
 
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:denser_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:dense_neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('galaxyorigins:neutroncollectordenser')


                //colector de neutrones Densest

                nadien.recipes.createMechanicalCrafting(
                  'avaritia:densest_neutron_collector',
                  [
                    "CC     CC",
                    "C  BBB  C",
                    "  AAAAA  ",
                    " BAXXXAB ",
                    " BAXYXAB ",
                    " BAXXXAB ",
                    "  AAAAA  ",
                    "C  BBB  C",
                    "CC     CC" 
                  ],
                  {
                    A: {
                      "item": "minecraft:redstone_block"
                    },
                    "B": {
                      "item": "avaritia:neutron_ingot"
                    },
                    C: {
                      "item": "avaritia:neutron_gear"
                    },
                    X: {
                      "item": "avaritia:denser_neutron_collector"
                    },
                    Y: {
                      "type": "forge:nbt",
                      "item": "extendedcrafting:singularity",
                      "count": 1,
                      "nbt": "{Id:\"extendedcrafting:redstone\"}"
                    },

                  }
                ).id('galaxyorigins:neutroncollectordensest')


                //infinity catalyst
     
                nadien.recipes.createMechanicalCrafting(
                  "avaritia:infinity_catalyst",
                  ["ABCDEFGHI", "8        "],
                  {
                    A: {
                      item: "avaritia:diamond_lattice",
                    },
                    B: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    C: {
                      item: "avaritia:neutron_pile",
                    },
                    D: {
                      item: "avaritia:neutron_nugget",
                    },
                    E: {
                      item: "avaritia:neutron_ingot",
                    },
                    F: {
                      item: "avaritia:record_fragment",
                    },
                    G: {
                      item: "avaritia:endest_pearl",
                    },
                    H: {
                      item: "avaritia:ultimate_stew",
                    },
                    I: {
                      item: "avaritia:cosmic_meatballs",
                    },
                    8: {
                      item: 'avaritia:eternal_singularity',
                    },
                  }).id("galaxyorigenes:infinity_catalyst")



                //lingote infinito
                nadien.remove({output: 'avaritia:infinity_ingot' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:infinity_ingot',
                  ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
                  {
                    C: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    I: {
                      item: "avaritia:infinity_catalyst",
                    },
                  }
                ).id('galaxyorigins:infinityingot')


               //ethernal singularity
               nadien.remove({output: 'avaritia:eternal_singularity' })
               RecipeMachineStage.addRecipe('create:mechanical_crafting', 'galaxyorigins:ultimatesingularity', 'avaritia')
                nadien.recipes.create.mechanical_crafting('avaritia:eternal_singularity', [
                  "ABCDEFGHI",
                  "JKLMNOPQR",
                  "STUVWXYce"
                  ], {
                  A: 'avaritia:dark_iron_ingot_singularity',
                  B: 'avaritia:esmarelda_singularity',
                  C: 'avaritia:xp_jelly_baby_singularity',
                  D: 'avaritia:cheese_singularity',
                  E: 'avaritia:uraninite_singularity',
                  F: 'avaritia:fusion_reactor_casing_singularity',
                  G: 'avaritia:addon_singularity',
                  H: 'avaritia:track_singularity',
                  I: 'avaritia:source_gem_singularity',
                  J: 'avaritia:mateico_singularity',
                  K: 'avaritia:singularity_emerlad_to_emerald_singularity',
                  L: 'avaritia:flux_block_singularity',
                  M: 'avaritia:uranium_235_singularity',
                  N: 'avaritia:enderium_block_singularity',
                  O: 'avaritia:crafting_table_singularity',
                  P: 'avaritia:soul_berry_singularity',
                  Q: 'avaritia:nether_star_singularity',
                  R: 'avaritia:crystal_nitro_singularity',
                  S: 'avaritia:neutronium_singularity',
                  T: 'avaritia:balloon_singularity',
                  U: 'avaritia:certus_quartz_singularity',
                  V: 'avaritia:hopper_botany_pot_singularity',
                  W: 'avaritia:caca_singularity',
                  X: 'avaritia:pellet_polonium_singularity',
                  Y: 'avaritia:record_singularity',
                  c: 'avaritia:nadienite_singularity',
                  e: 'avaritia:andesite_cassing_singularity'
                  }).id('galaxyorigins:ultimatesingularity')

	
	
	
	//endless cake
  nadien.remove({output: 'avaritia:endless_cake' })
  nadien.recipes.createMechanicalCrafting(
    'avaritia:endless_cake',
    [
      "aaa",
      "bcb",
      "ded"
    ],
    {
          a: {
            "item": "minecraft:milk_bucket",
          },
          b: {
            "item": "minecraft:sugar",
          },
          "c": {
            "item": "minecraft:dragon_egg",
          },
          d: {
            "tag": "forge:crops/wheat",
          },
          e: {
            "item": "avaritia:infinity_ingot",
          },
    }
  ).id('galaxyorigins:tartainfinita')




		//infinity totem
    nadien.remove({output: 'avaritia:infinity_totem' })
  nadien.recipes.createMechanicalCrafting(
    'avaritia:infinity_totem',
    [
      "   NNN   ",
      "  NIIIN  ",
      "  NYIYN  ",
      "CCCIIICCC",
      " CCIIICC ",
      "  NIIIN  ",
      "  NNNNN  ",
      "   CCC   ",
      "    C    "
    ],
    {
      C: {
        "item": "avaritia:crystal_matrix_ingot"
      },
      I: {
        "item": "avaritia:infinity_nugget"
      },
      N: {
        "item": "avaritia:neutron_ingot"
      },
      Y: {
        "item": "minecraft:totem_of_undying"
          },
    }
  ).id('galaxyorigins:toteminfinito')



  		//star fuel
      nadien.remove({output: 'avaritia:star_fuel' })
      nadien.recipes.createMechanicalCrafting(
        'avaritia:star_fuel',
        [
          "ccc",
          "cxc",
          "ccc"
        ],
        {
          c: {
            "item": "allthecompressed:coal_block_9x"
          },
          x: {
            "item": "avaritia:infinity_catalyst"
              },
        }
      ).id('galaxyorigins:starfuel')




        		//infinite bucket
            nadien.remove({output: 'avaritia:infinity_bucket' })
            nadien.recipes.createMechanicalCrafting(
              "avaritia:infinity_bucket",
              [
                "NN     NN",
                "NNX   XNN",
                "NBBX XBBN",
                "NBBI IBBN",
                "NBBI IBBN",
                "NBBIIIBBN",
                "NNBBBBBNN",
                " NNBBBNN ",
                "  NNNNN  "
              ],
              {
                B: "minecraft:bucket",
                I: "avaritia:infinity_ingot",
                N: "avaritia:neutron_ingot",
                X: "avaritia:infinity_catalyst"
              }).id('galaxyorigins:infinityfuel')
      
              //crystal sword
              nadien.remove({output: 'avaritia:crystal_sword' })
              nadien.recipes.create.mechanical_crafting('avaritia:crystal_sword', [
                '     CA',
                '    CAC',
                ' C CAC ',
                ' CCAC  ',
                'CAAC   ',
                ' BACC  ',
                'A C    '
                ], {
                 A: 'avaritia:crystal_matrix',
                 B: 'avaritia:neutron',
                 C: 'avaritia:crystal_matrix_ingot',
                }).id('galaxyorigins:crystal_sword')


       //crystal axe
       nadien.remove({output: 'avaritia:crystal_axe' })
       nadien.recipes.create.mechanical_crafting('avaritia:crystal_axe', [
         '  CCC  ',
         ' CAA D ',
         ' CAA   ',
         ' C  AC ',
         '  B CC ',
         ' B     ',
         'A      '
         ], {
          A: 'avaritia:crystal_matrix',
          B: 'avaritia:neutron_ingot',
          C: 'avaritia:crystal_matrix_ingot',
          D: 'avaritia:neutron'
         }).id('galaxyorigins:crystal_axe')




      //crystal pickaxe
      nadien.remove({output: 'avaritia:crystal_pickaxe' })
      nadien.recipes.createMechanicalCrafting(
        "avaritia:crystal_pickaxe",
        [
          " CCCWCCC ",
          "CWWWWWWWC",
          "CW  N  WC",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
        ],
        {
          C: "avaritia:crystal_matrix_ingot",
          W: "avaritia:crystal_matrix",
          N: "avaritia:neutron",
        }).id('galaxyorigins:crystalpickaxe')


        //crystal shovel
        nadien.remove({output: 'avaritia:crystal_shovel' })
        nadien.recipes.create.mechanical_crafting('avaritia:crystal_shovel', [
          '    CCC',
          '   CCCC',
          '    CCC',
          '   B C ',
          '  B    ',
          ' B     ',
          'A      '
          ], {
           A: 'avaritia:crystal_matrix',
           B: 'avaritia:neutron_ingot',
           C: 'avaritia:crystal_matrix_ingot',
          }).id('galaxyorigins:crystal_shovel')

          //crystal hoe
          nadien.remove({output: 'avaritia:crystal_hoe' })
          nadien.recipes.create.mechanical_crafting('avaritia:crystal_hoe', [
            'CAAAAA ',
            ' CCCA A',
            '     AA',
            '   B CA',
            '  B   C',
            ' B     ',
            'A      '
            ], {
             A: 'avaritia:crystal_matrix',
             B: 'avaritia:neutron_ingot',
             C: 'avaritia:crystal_matrix_ingot',
            }).id('galaxyorigins:crystal_hoe')



        //cofre compreso
        nadien.remove({output: 'avaritia:compressed_chest' })
        nadien.recipes.create.mechanical_crafting("avaritia:compressed_chest", [
          "ccc",
          "cgc",
          "ccc"
        ], {
          c: "minecraft:chest",
          g: "avaritia:neutron_gear"
        }).id('galaxyorigins:cofrecompreso')



      //cofre infinito
     nadien.remove({output: 'avaritia:infinity_chest' })
     nadien.recipes.create.mechanical_crafting('avaritia:infinity_chest', [
      "mxn",
      "xyx",
      "mxn"
       ], {
        m: 'minecraft:crafting_table',
        n: 'minecraft:furnace',
        x: 'avaritia:infinity_ingot',
        y: 'avaritia:compressed_chest'
       }).id('galaxyorigins:infinity_chest')



       //mejora Infinita
       nadien.remove({output: 'avaritia:upgrade_smithing_template' })
       nadien.recipes.create.mechanical_crafting('avaritia:upgrade_smithing_template', [
        ' aaabaaa ',
        ' accecca ',
        ' acefeca ',
        'dijkelmnd',
        'dogphqgrd',
        'dstufvwxd',
        ' acdfdca ',
        ' accecca ',
        ' aaabaaa '
         ], {
          a: 'avaritia:crystal_matrix_ingot',
          b: 'avaritia:crystal_matrix',
          c: 'avaritia:neutron_ingot',
          d: 'avaritia:neutron_pile',
          e: 'avaritia:infinity_nugget',
          f: 'avaritia:infinity_ingot',
          g: 'avaritia:infinity_catalyst',
          h: 'minecraft:netherite_upgrade_smithing_template',
          i: 'minecraft:sentry_armor_trim_smithing_template',
          j: 'minecraft:dune_armor_trim_smithing_template',
          k: 'minecraft:coast_armor_trim_smithing_template',
          l: 'minecraft:wild_armor_trim_smithing_template',
          m: 'minecraft:ward_armor_trim_smithing_template',
          n: 'minecraft:eye_armor_trim_smithing_template',
          o: 'minecraft:vex_armor_trim_smithing_template',
          p: 'minecraft:tide_armor_trim_smithing_template',
          q: 'minecraft:snout_armor_trim_smithing_template',
          r: 'minecraft:rib_armor_trim_smithing_template',
          s: 'minecraft:spire_armor_trim_smithing_template',
          t: 'minecraft:wayfinder_armor_trim_smithing_template',
          u: 'minecraft:shaper_armor_trim_smithing_template',
          v: 'minecraft:silence_armor_trim_smithing_template',
          w: 'minecraft:raiser_armor_trim_smithing_template',
          x: 'minecraft:host_armor_trim_smithing_template',
         }).id('galaxyorigins:infinity_template')

      //end crafting table
      nadien.remove({output: 'avaritia:end_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:end_crafting_table', [
        'bcccb',
        'dfifd',
        'dgagd',
        'dhjhd',
        'beeeb'
        ], {
         a: 'avaritia:nether_crafting_table',
         b: 'minecraft:end_crystal',
         c: 'minecraft:end_portal_frame',
         d: 'minecraft:obsidian',
         e: 'minecraft:dragon_breath',
         f: 'minecraft:purpur_pillar',
         g: 'minecraft:end_stone_bricks',
         h: 'minecraft:end_stone',
         i: 'minecraft:ender_eye',
         j: 'minecraft:ender_chest'
        }).id('galaxyorigins:end_crafting_table')


        //nether ctafting tabe
       nadien.remove({output: 'avaritia:nether_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:nether_crafting_table', [
        'cbc',
        'dad',
        'efe'
        ], {
         a: 'avaritia:sculk_crafting_table',
         b: 'minecraft:respawn_anchor',
         c: 'minecraft:wither_skeleton_skull',
         d: 'minecraft:netherrack',
         e: 'minecraft:netherite_ingot',
         f: 'minecraft:nether_star'
        }).id('galaxyorigins:nether_crafting_table')
  

      //nchanced core
      nadien.remove({output: 'avaritia:enhancement_core' })
      nadien.recipes.create.mechanical_crafting('avaritia:enhancement_core', [
        '   PPP   ',
        ' NPCCCPN ',
        ' PABBBAP ',
        'PCBBXBBCP',
        'PCBXEXBCP',
        'PCBBXBBCP',
        ' PABBBAP ',
        ' NPCCCPN ',
        '   PPP   '
        ], {
         A:  'avaritia:crystal_matrix',
         B: 'avaritia:infinity_nugget',
         C: 'avaritia:crystal_matrix_ingot',
         E: 'avaritia:endest_pearl',
         N: 'avaritia:neutron_ingot',
         P: 'avaritia:neutron_pile',
         x: 'avaritia:infinity_catalyst'
        }).id('galaxyorigins:enhancement_core')

   


        //extreme smithing table
        nadien.remove({output: 'avaritia:extreme_smithing_table' })
        nadien.recipes.create.mechanical_crafting('avaritia:extreme_smithing_table', [
          'aaaaaaaaa',
          'bccfgfccb',
          'bcdhhhdcb',
          'lfhijihfl',
          'eghjkjhge',
          'lfhijihfl',
          'bcdhhhdcb',
          'bccfgfccb',
          'bleeeeelb'
          ], {
           a:  'avaritia:neutron',
           b: 'avaritia:neutron_ingot',
           c: 'avaritia:diamond_lattice',
           d: 'avaritia:blaze_cube',
           e: 'avaritia:crystal_matrix',
           f:  'avaritia:infinity_nugget',
           g: 'avaritia:infinity_ingot',
           h: 'avaritia:neutron_gear',
           i: 'avaritia:infinity_catalyst',
           j:  'minecraft:smithing_table',
           k: 'avaritia:extreme_crafting_table',
           l: 'avaritia:crystal_matrix_ingot',
          }).id('galaxyorigins:extreme_smithing_table')



       //xpjelly baby singularity
       nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 150,
        "ingredient": {
          "item": 'mob_grinding_utils:solid_xp_baby'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:xp_jelly_baby_singularity'
        }
      }).id('galaxyorigins:xpjellybabysingularity')



      //reactor cassing
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 8,
        "ingredient": {
          "item": 'mekanism:induction_casing'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:fusion_reactor_casing_singularity'
        }
      }).id('galaxyorigins:fusionreactorcasingsingularity')

      

      //cheese singularity
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 90,
        "ingredient": {
          "item": 'farmersdelight:sweet_berry_cheesecake_slice'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:cheese_singularity'
        }
      }).id('galaxyorigins:cheesesingularity')


      //uraninite singularity
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 500,
        "ingredient": {
          "item": 'powah:uraninite'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:uraninite_singularity'
        }
      }).id('galaxyorigins:uraninitesingularity')

      //track
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 10000,
        "ingredient": {
          "item": 'create:track'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:track_singularity'
        }
      }).id('galaxyorigins:tracksingularity')


      //source gem singularity
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 100,
        "ingredient": {
          "item": 'ars_nouveau:source_gem'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:source_gem_singularity'
        }
      }).id('galaxyorigins:sourcegemsingularitys')



      //mateicisingularity
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 777,
        "ingredient": {
          "item": 'argentinas_delight:matedulceitem' //cambiar por maiteicodulce
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:mateico_singularity'
        }
      }).id('galaxyorigins:mateicosingularity')

      //neutronium singularity
      nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 9500,
        "ingredient": {
          "item": 'avaritia:neutronium_block'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:neutronium_blockium_singularity'
        }
      }).id('galaxyorigins:neutroniumsingularity')


       //uranium235 singularity
       nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 500,
        "ingredient": {
          "item": 'mekanism:yellow_cake_uranium'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:uranium_235_singularity'
        }
      }).id('galaxyorigins:uraniumcincosingularity')

              //ultimate ore prossesing  singularity
              nadien.custom({
                "type": "extendedcrafting:compressor",
                "powerCost": 500000,
                "inputCount": 50,
                "ingredient": {
                  "item": 'industrialforegoing:processing_addon_2'
                },
                "catalyst": {
                  "item": 'extendedcrafting:ultimate_catalyst'
                },
                "result": {
                  "item": 'avaritia:addon_singularity'
                }
              }).id('galaxyorigins:ultimeaterossesingsingularity')





        //addon prossecing tier 2 singularity
            nadien.custom({
              "type": "extendedcrafting:compressor",
              "powerCost": 500000,
              "inputCount": 50,
              "ingredient": {
                "item": 'betterfurnacesreforged:ultimate_ore_processing_upgrade'
              },
              "catalyst": {
                "item": 'extendedcrafting:ultimate_catalyst'
              },
              "result": {
                "item": 'avaritia:ultimate_upgrade_singularity'
              }
            }).id('galaxyorigins:ultimateupgradesingularity')


       //certus singularity
       nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 350,
        "ingredient": {
          "tag": 'ae2:all_certus_quartz'
        },
        "catalyst": {
          "item": 'extendedcrafting:ultimate_catalyst'
        },
        "result": {
          "item": 'avaritia:certus_quartz_singularity'
        }
      }).id('galaxyorigins:certussingularity')



 //enderium singularity
 nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 350,
  "ingredient": {
    "item": 'thermal:enderium_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:enderium_block_singularity'
  }
}).id('galaxyorigins:enderiumsingularity')



 //crafting table singularity
 nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 20,
  "ingredient": {
    "item": 'minecraft:crafting_table'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:crafting_table_singularity'
  }
}).id('galaxyorigins:craftingtablesingularity')


  
 //soul berry singularity
 nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 15,
  "ingredient": {
    "item": 'allthemodium:ancient_soulberries'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:soul_berry_singularity'
  }
}).id('galaxyorigins:soulberrysingularity')

//nether star singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 90,
  "ingredient": {
    "item": 'minecraft:nether_star'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:nether_star_singularity'
  }
}).id('galaxyorigins:netherstarsingularity')




//flux block singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 450,
  "ingredient": {
    "item": 'fluxnetworks:flux_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:flux_block_singularity'
  }
}).id('galaxyorigins:fluxblocksingularity')



//nitro cristal singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 800,
  "ingredient": {
    "item": 'powah:crystal_nitro'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:crystal_nitro_singularity'
  }
}).id('galaxyorigins:nitrocristalsingularity')




//record singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 35,
  "ingredient": {
    "item": 'avaritia:record_fragment'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:record_singularity'
  }
}).id('galaxyorigins:recordsingularity')




//polonium singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 10,
  "ingredient": {
    "item": 'mekanism:pellet_polonium'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:pellet_polonium_singularity'
  }
}).id('galaxyorigins:poloniumsingularity')



// singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 777,
  "ingredient": {
    "item": 'ultimate_utilities:super_caca'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:caca_singularity'
  }
}).id('galaxyorigins:cacasingularity')


//hopper botany pot singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 22,
  "ingredient": {
    "item": 'botanypots:terracotta_hopper_botany_pot'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:hopper_botany_pot_singularity'
  }
}).id('galaxyorigins:hopperbotanypotsingularity')


//blutonium singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 3500,
  "ingredient": {
    "item": 'extendedcrafting:black_iron_ingot'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:dark_iron_ingot_singularity'
  }
}).id('galaxyorigins:blackironingotsingularity')


//balloon singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 5000,
  "ingredient": {
    "item": 'immersiveengineering:balloon'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:balloon_singularity'
  }
}).id('galaxyorigins:balloonsingularity')


//esmarelda de esmarelda singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1500,
  "ingredient": {
    "item": 'avaritia:esmarelda_singularity'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:singularity_emerlad_to_emerald_singularity'
  }
}).id('galaxyorigins:esmareldatoesmareldasingularity')




//esmarelda singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1600,
  "ingredient": {
    "item": 'minecraft:emerald_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:esmarelda_singularity'
  }
}).id('galaxyorigins:esmareldasingularity')

//ethereal singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 150,
  "ingredient": {
    "item": 'bloodmagic:etherealslate'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:ethereal_singularity'
  }
}).id('galaxyorigins:etherealdasingularity')


//chaotic singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 250,
  "ingredient": {
    "item": 'draconicevolution:chaos_shard'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:chaotic_singularity'
  }
}).id('galaxyorigins:chaotic_singularity')


//nadienite singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 250,
  "ingredient": {
    "item": 'ultimate_utilities:nadienitebloque'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:nadienite_singularity'
  }
}).id('galaxyorigins:nadienite_singularity')


//tera steel singularity
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 1000,
  "ingredient": {
    "item": 'botania:terrasteel_block'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:terra_steel_singularity'
  }
}).id('galaxyorigins:terrasteel_singularity')


//
nadien.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 3,
  "ingredient": {
    "item": 'create:andesite_casing'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_catalyst'
  },
  "result": {
    "item": 'avaritia:andesite_cassing_singularity'
  }
}).id('galaxyorigins:andesite_cassing_singularity')


function addChamberPneumatic(resultado, iteminput, presion) {
   nadien.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: iteminput
      }
    ],
    pressure: presion,
    results: [
      {
        item: resultado
      }
    ]
  }).id(`galaxyorigins:avaritia/${resultado.replace(':', '/')}`)

}






nadien.shaped('avaritia:record_fragment', [
  'A  ',
  '   ',
  '   '
], {
  A: cds
}).id('galaxyorigins:fragmentos_de_disco')
const cds = ['minecraft:music_disc_13', 'minecraft:music_disc_chirp', 'minecraft:music_disc_cat', 'minecraft:music_disc_blocks', 'minecraft:music_disc_chirp', 'minecraft:music_disc_far', 'minecraft:music_disc_mall', 'minecraft:music_disc_mellohi', 'minecraft:music_disc_stal', 'minecraft:music_disc_strad', 'minecraft:music_disc_ward', 'minecraft:music_disc_11', 'minecraft:music_disc_wait', 'minecraft:music_disc_otherside', 'minecraft:music_disc_5', 'minecraft:music_disc_pigstep', 'minecraft:music_disc_relic', 'ars_nouveau:music_disc_thistle_the_sound_of_glass', 'ars_nouveau:music_disc_aria_biblio', 'ultimate_utilities:avengers', 'ultimate_utilities:mc_caco']




      

})