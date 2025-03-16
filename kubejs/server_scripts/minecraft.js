//minecraft vanilla By SrNadien 
ServerEvents.recipes(nadien => {
	
	
	//eliminadas
	nadien.remove({output:'minecraft:chest'})
  nadien.remove({output:'minecraft:furnace'})
	nadien.remove({output:'minecraft:piston'})
	nadien.remove({output:'minecraft:sticky_piston'})
	nadien.remove({output:'minecraft:cobweb'})
	nadien.remove({output:'mekanism:scuba_mask'})
	nadien.remove({output:'minecraft:ender_chest'})
  nadien.remove({output:'minecraft:bucket'})
  nadien.remove({output:'minecraft:netherite_upgrade_smithing_template'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x4'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
  nadien.remove({output: 'minecraft:crafting_table'})
	


     //cabeza
     const nadienskull = Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;2118518208,-1698609149,-1383017808,204096419],Name:"SrNadien",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTczNjE4NzkxMjI4MiwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}}}')
     nadien.shaped(nadienskull, [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:wither_skeleton_skull',
      A: 'minecraft:emerald_block'
    }).id('galaxyorigins:cabeza_nadien')


    //manzana de notch
    const apple = ['minecraft:golden_apple', 'minecraft:apple']
    nadien.shaped('minecraft:enchanted_golden_apple', [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:gold_block',
      A: apple
    }).id('galaxyorigins:enchanted_golden_apple')


  //mesa de crafteo
  nadien.shaped('minecraft:crafting_table', [
    'PP ',
    'PP ',
    '   '
  ], {
    P: 'minecraft:cobblestone'
  }).id('galaxyorigins:valde')


    //cofre
    nadien.shaped('4x minecraft:chest', [
    'PPP',
    'PNP',
    'PPP'
  ], {
    P: '#minecraft:logs_that_burn',
    N: '#minecraft:logs' 
  }).id('galaxyorigins:cofre')


       //horno 
       nadien.shaped('minecraft:furnace', [
        'PPP',
        'PNP',
        'PPP'
      ], {
        P: 'allthecompressed:cobbled_deepslate_1x',
        N: '#minecraft:wooden_buttons' 
      }).id('galaxyorigins:horno')




    //telaraña
    nadien.shaped('minecraft:cobweb', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:string',
    C: 'minecraft:string',
    Q: 'minecraft:string',
    I: 'minecraft:string',
    L: 'minecraft:string',
    W: 'minecraft:string',
    E: 'minecraft:string',
    H: 'minecraft:string',
    P: 'minecraft:string'
  }).id('galaxyorigins:telarana')



      



  //ender chest
  nadien.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "ultimate_utilities:nadienite_ingot"
      },
      "B": {
        "item": "minecraft:obsidian"
      },
      "C": {
        "item": 'minecraft:ender_eye'
      }
    },
    "result": {
      "item": 'minecraft:ender_chest',
      "count": 1
    }
  }).id('galaxyorigins:cofredelend')

  //enderchest 2
  nadien.shaped('minecraft:ender_chest', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    B: 'minecraft:obsidian',
    A: 'ultimate_utilities:nadienite_ingot',
    S: 'minecraft:ender_eye'
  }).id('galaxyorigins:enderchestdos')


//cacota
nadien.shaped('ultimate_utilities:super_caca', [
  '   ',
  ' BA',
  '   '
], {
  A: 'ultimate_utilities:cacota',
  B: 'minecraft:wheat'
}).id('galaxyorigins:supercacota')


//doritos
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "012",
    "345",
    "678"
  ],
  "key": {
    "0": {
      "item": "minecraft:wheat"
    },
    "1": {
      "item": "minecraft:baked_potato"
    },
    "2": {
      "item": "minecraft:wheat"
    },
    "3": {
      "item": "minecraft:baked_potato"
    },
    "4": {
      "item": "minecraft:bucket"
    },
    "5": {
      "item": "minecraft:baked_potato"
    },
    "6": {
      "item": "minecraft:wheat"
    },
    "7": {
      "item": "minecraft:baked_potato"
    },
    "8": {
      "item": "minecraft:wheat"
    }
  },
  "result": {
    "item": 'ultimate_utilities:doritos',
    "count": 1
  }
}).id('galaxyorigins:doritos')


//cristal del end
nadien.replaceInput({id: 'minecraft:end_crystal'}, 'minecraft:ender_eye', 'allthemodium:piglich_heart')


  
  


//extras
    nadien.shaped("16x minecraft:stick", ["L","L"], {L:"#minecraft:logs"}).id('galaxyorigins:qol/log_to_stick')
    nadien.shapeless("4x minecraft:clay_ball", "minecraft:clay").id('galaxyorigins:qol/clay_to_ball')
    nadien.shapeless("minecraft:flint", "3x minecraft:gravel").id(`galaxyorigenes:qol/gravel_to_flint`)
    nadien.shapeless("4x minecraft:amethyst_shard", "minecraft:amethyst_block").id(`galaxyorigenes:qol/amethyst_to_shard`)
    nadien.remove({id: 'thermal:earth_charge/quartz_from_quartz_block'})
    nadien.shapeless("4x minecraft:quartz", "minecraft:quartz_block").id(`galaxyorigenes:qol/quartz_to_shard`)
    nadien.forEachRecipe({type:"minecraft:crafting_shaped", output:/slab/}, recipe => {
        let output = recipe.originalRecipeResult
        if (output.count == 6) {
            let ingredients = recipe.originalRecipeIngredients.stream().distinct().toList()
            if (ingredients.length == 1) {
                nadien.shaped(ingredients[0].getFirst(), ["S","S"], {S:output.id}).id(`galaxyorigenes:qol/${output.id.replace(":","/")}`)
            }
        }
    })


    nadien.remove({output: ['minecraft:enchanting_table', 'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots', 'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe', 'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots', 'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe', 'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'minecraft:netherite_sword', 'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel', 'minecraft:netherite_hoe', 'enderstorage:ender_chest', 'enderstorage:ender_tank', 'enderstorage:ender_pouch']}) 



    //mesa de ncantamientos
    nadien.shaped('minecraft:enchanting_table', [
        ' S ',
        'PAP',
        'AAA'
      ], {
        P: 'minecraft:amethyst_shard',
        A: 'minecraft:obsidian',
        S: 'minecraft:book'
      }).id('galaxyorigins:mesdeencanatar')




    // Armadura de hierro
    nadien.shaped('minecraft:iron_helmet', [
        'XXX',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('galaxyorigins:cascodehierro')


    nadien.shaped('minecraft:iron_chestplate', [
        'X X',
        'XXX',
        'XXX'
    ], {
        X: '#forge:plates/iron'
    }).id('galaxyorigins:pecheradehierro')

    nadien.shaped('minecraft:iron_leggings', [
        'XXX',
        'X X',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('galaxyorigins:pantalondehierro')

    nadien.shaped('minecraft:iron_boots', [
        'X X',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('galaxyorigins:botasdehierro')

    // Herramientas de hierro
    nadien.shaped('minecraft:iron_sword', [
        'X',
        'X',
        'S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('galaxyorigins:espadadehierro')

    nadien.shaped('minecraft:iron_pickaxe', [
        'XXX',
        ' S ',
        ' S '
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('galaxyorigins:picodehierro')

    nadien.shaped('minecraft:iron_axe', [
        'XX',
        'XS',
        ' S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('galaxyorigins:hachadehierro')

    nadien.shaped('minecraft:iron_shovel', [
        'X',
        'S',
        'S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('galaxyorigins:paladehierro')

    nadien.shaped('minecraft:iron_hoe', [
        'XX',
        ' S',
        ' S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('galaxyorigins:azadadehierro')




    
       //Piston
       nadien.shaped('minecraft:piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:amethyst_shard',
        P: 'minecraft:stone'
      }).id('galaxyorigins:piston')
      
      
      
        //Piston Pegajoso
        nadien.shaped('minecraft:sticky_piston', [
        'TCQ',
        'ILW',
        'EHP'
        ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:piston',
        P: 'minecraft:stone'
      }).id('galaxyorigins:pistonpegajoso')


//valde
  nadien.shaped('minecraft:bucket', [
    '   ',
    'P P',
    ' P '
  ], {
    P: '#forge:plates/iron'
  }).id('galaxyorigins:baldeugur')

        // Armadura de oro
        nadien.shaped('minecraft:golden_helmet', [
            'XXX',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('galaxyorigins:cascodeoro')
    
        nadien.shaped('minecraft:golden_chestplate', [
            'X X',
            'XXX',
            'XXX'
        ], {
            X: '#forge:plates/gold'
        }).id('galaxyorigins:pecheradeoro')
    
        nadien.shaped('minecraft:golden_leggings', [
            'XXX',
            'X X',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('galaxyorigins:pantalondeoro')
    
        nadien.shaped('minecraft:golden_boots', [
            'X X',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('galaxyorigins:botasdeoro')
    
        // Herramientas de oro
        nadien.shaped('minecraft:golden_sword', [
            'X',
            'X',
            'S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('galaxyorigins:espadadeoro')
    
        nadien.shaped('minecraft:golden_pickaxe', [
            'XXX',
            ' S ',
            ' S '
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('galaxyorigins:picodeoro')
    
        nadien.shaped('minecraft:golden_axe', [
            'XX',
            'XS',
            ' S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('galaxyorigins:hachadeoro')
    
        nadien.shaped('minecraft:golden_shovel', [
            'X',
            'S',
            'S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('galaxyorigins:paladeoro')
    
        nadien.shaped('minecraft:golden_hoe', [
            'XX',
            ' S',
            ' S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('galaxyorigins:azadaoro')



            // Armadura de diamante
            nadien.shaped('minecraft:diamond_helmet', [
                'XXX',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('galaxyorigins:cascodediamante')
        
            nadien.shaped('minecraft:diamond_chestplate', [
                'X X',
                'XXX',
                'XXX'
            ], {
                X: '#forge:plates/diamond'
            }).id('galaxyorigins:pecheradediamante')
        
            nadien.shaped('minecraft:diamond_leggings', [
                'XXX',
                'X X',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('galaxyorigins:pantalondediamante')
        
            nadien.shaped('minecraft:diamond_boots', [
                'X X',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('galaxyorigins:botasdediamante')
        
            // Herramientas de diamante
            nadien.shaped('minecraft:diamond_sword', [
                'X',
                'X',
                'S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('galaxyorigins:espadadediamante')
        
            nadien.shaped('minecraft:diamond_pickaxe', [
                'XXX',
                ' S ',
                ' S '
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('galaxyorigins:picodediamante')
        
            nadien.shaped('minecraft:diamond_axe', [
                'XX',
                'XS',
                ' S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('galaxyorigins:hachadediamante')
        
            nadien.shaped('minecraft:diamond_shovel', [
                'X',
                'S',
                'S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('galaxyorigins:paladediamante')
        
            nadien.shaped('minecraft:diamond_hoe', [
                'XX',
                ' S',
                ' S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('galaxyorigins:azadadiamante')

            // Armadura
            nadien.smithing('minecraft:netherite_helmet', 'minecraft:diamond_helmet', 'thermal:netherite_plate')
                .id('galaxyorigins:cascodenetherite')
                
        
            nadien.smithing('minecraft:netherite_chestplate', 'minecraft:diamond_chestplate', 'thermal:netherite_plate')
                .id('galaxyorigins:pecheradenetherite')
                
        
            nadien.smithing('minecraft:netherite_leggings', 'minecraft:diamond_leggings', 'thermal:netherite_plate')
                .id('galaxyorigins:pantalondenetherite')
                
        
            nadien.smithing('minecraft:netherite_boots', 'minecraft:diamond_boots', 'thermal:netherite_plate')
                .id('galaxyorigins:botasdenetherite')
                
        
            // Herramientas
            nadien.smithing('minecraft:netherite_sword', 'minecraft:diamond_sword', 'thermal:netherite_plate')
                .id('galaxyorigins:espadadenetherite')
                
        
            nadien.smithing('minecraft:netherite_pickaxe', 'minecraft:diamond_pickaxe', 'thermal:netherite_plate')
                .id('galaxyorigins:picodenetherite')
                
        
            nadien.smithing('minecraft:netherite_axe', 'minecraft:diamond_axe', 'thermal:netherite_plate')
                .id('galaxyorigins:hachadenetherite')
                
        
            nadien.smithing('minecraft:netherite_shovel', 'minecraft:diamond_shovel', 'thermal:netherite_plate')
                .id('galaxyorigins:paladenetherite')
                
        
            nadien.smithing('minecraft:netherite_hoe', 'minecraft:diamond_hoe', 'thermal:netherite_plate')
                .id('galaxyorigins:azadadenetherite')
                



       //netherite template
       nadien.shaped('minecraft:netherite_upgrade_smithing_template', [
        'TCT',
        'TLT',
        'TTT'
      ], {
        T: 'minecraft:nether_brick',
        L: 'minecraft:ender_eye',
        C: 'minecraft:diamond'
      }).id('galaxyorigins:netheritetemplate')

            //mesa de pociones
            nadien.shaped('minecraft:brewing_stand', [
                    '   ', 
                    ' # ', 
                    ' B '
                ], {
                    '#': 'minecraft:blaze_rod',    
                    'B': 'minecraft:cobblestone'   
                }).id('galaxyorigins:brewingstand')

                nadien.shaped('minecraft:end_portal_frame', [
                    'TCQ',
                    'ILW',
                    'EHP'
                  ], {
                    T: '#forge:ingots/enderium',
                    C: '#forge:ingots/enderium',
                    Q: '#forge:ingots/enderium',
                    I: 'minecraft:end_stone',
                    L: 'ae2:fluix_block',
                    W: 'minecraft:end_stone',
                    E: 'minecraft:end_stone',
                    H: 'minecraft:end_stone',
                    P: 'minecraft:end_stone'
                  }).id('galaxyorigins:portalframeend')


                  nadien.shaped('minecraft:elytra', ["aba", "cdc", "c c"], {
                    a: "minecraft:diamond",
                    b: "minecraft:string",
                    c: "minecraft:phantom_membrane",
                    d: "minecraft:nether_star"
                  }).id('galaxyorigins:elytros')




})