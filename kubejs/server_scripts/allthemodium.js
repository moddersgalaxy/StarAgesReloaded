ServerEvents.recipes(nadien => {



  //aged recipes
  RecipeMachineStage.addRecipes('powah:energizing', [`galaxyorigenes:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`, `galaxyorigenes:energizing/allthemodium_vibranium_allthemodium_alloy_block`, `galaxyorigenes:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`, `galaxyorigenes:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`, `galaxyorigenes:energizing/allthemodium_unobtainium_allthemodium_alloy_block`, `galaxyorigenes:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`, `galaxyorigenes:energizing/allthemodium_ingot`], "jcage")
  //Powah
  //
  // ATM-Vibranium Ingot
    nadien.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:vibranium_ingot').toJson()
      ],
      energy: '1000000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
    }).id(`galaxyorigenes:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`)
    
  // ATM-Vibranium Block
    nadien.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_block').toJson(),
        Ingredient.of('ultimate_utilities:nadienitebloque').toJson(),
        Ingredient.of('allthemodium:vibranium_block').toJson()
      ],
      energy: '8100000000',
      result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
    }).id(`galaxyorigenes:energizing/allthemodium_vibranium_allthemodium_alloy_block`)
  
  // ATM-Unobtainium Ingot
    nadien.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:unobtainium_ingot').toJson()
      ],
      energy: '1000000000',
      result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
    }).id(`galaxyorigenes:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`)
    
  // ATM-Unobtainium Block
    nadien.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_block').toJson(),
        Ingredient.of('ultimate_utilities:nadienitebloque').toJson(),
        Ingredient.of('allthemodium:unobtainium_block').toJson()
      ],
      energy: '8100000000',
      result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
    }).id(`galaxyorigenes:energizing/allthemodium_unobtainium_allthemodium_alloy_block`)
    
  // Unobtainium-Vibranium Ingot
    nadien.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:vibranium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:unobtainium_ingot').toJson()
      ],
      energy: '1000000000',
      result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
    }).id(`galaxyorigenes:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`)
  
  // Allthemodium ingot
  nadien.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('powah:capacitor_nitro'),
      Ingredient.of('galaxyorigenes:patricio'),
      Ingredient.of('ultimate_utilities:nadienite_ingot')
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:allthemodium_ingot').toJson()
  }).id(`galaxyorigenes:energizing/allthemodium_ingot`)

    // Sword, All recipes are Top-middle and go clockwise
    nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_sword").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_sword").toJson()],
      "sourceCost": 5000
    }).id('galaxyorigenes:allthemodium/alloy_sword')
    
      // Pickaxe
    nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_pick").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_pickaxe").toJson()],
      "sourceCost": 5000
    }).id('galaxyorigenes:allthemodium/alloy_pick')
    
        // Shovel
    nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_shovel").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_shovel").toJson()],
      "sourceCost": 5000
    }).id('galaxyorigenes:allthemodium/alloy_shovel')
   
       // Axe
    nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_axe").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_axe").toJson()],
      "sourceCost": 5000
    }).id('galaxyorigenes:allthemodium/alloy_axe')
  
  
    //Paxel
    nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": false,
      "output": {
        "item": "allthemodium:alloy_paxel"
      },
      "pedestalItems": [
        {
          "item": "allthemodium:alloy_sword"
        },
        {
          "item": "allthemodium:alloy_pick"
        },
        {
          "item": "allthemodium:alloy_shovel"
        },
        {
          "item": "allthemodium:alloy_axe"
        }
      ],
      "reagent": [
        {
          "item": "mekanism:meka_tool"
        }
      ],
      "sourceCost": 10000
    }).id('galaxyorigenes:allthemodium/alloy_paxel')  




  let ATM_metal = ['allthemodium','unobtainium','vibranium',]
  ATM_metal.forEach(ATM_metal =>
  nadien.custom({
    "type": "thermal:crucible",
    "ingredient": {
      "item": `allthemodium:${ATM_metal}_block`
    },
    "result": [
      {
      "fluid": `allthemodium:molten_${ATM_metal}`,
      "amount": 1000
      }
    ],
    "energy": 232000
  }).id(`galaxyorigenes:molten_${ATM_metal}`)
  )
  ATM_metal.forEach(ATM_metal =>
  nadien.custom({
    "type": "thermal:chiller",
    "ingredients": [
      {
        "fluid": `allthemodium:molten_${ATM_metal}`,
        "amount": 1000
      }
    ],
    "result": [
      {
        "item": `allthemodium:${ATM_metal}_block`
      }
    ],
    "energy": 232000
  }).id(`galaxyorigenes:chilling_${ATM_metal}`) )






      //piglitch hearth 
      nadien.recipes.create.mechanical_crafting('allthemodium:piglich_heart', [
        " AAAAAAA ",
        " AAAAAAA ",
        " AANNNAA ",
        " AA   AA ",
        " AA   AA ",
        " AAAAAAA ",
        " AAAAAAA "
      ], {
        A: 'allthemodium:allthemodium_ingot',
        N: 'allthemodium:raw_allthemodium'
      }).id('galaxyorigenes:pheartcraft')  



      //molten allthemodium unobtainium
      nadien.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "fluid": "allthemodium:molten_allthemodium",
            "amount": 90
          },
          {
            "fluid": "allthemodium:molten_unobtainium",
            "amount": 90
          }
        ],
        "result": {
          "fluid": "allthemodium:molten_atmunob",
          "amount": 90
        },
        "temperature": 9000
      }).id('galaxyorigenes:molten_atmunob')  


      //molten allthemodium vibranium
      nadien.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "amount": 250,
            "fluid": "allthemodium:molten_allthemodium"
          },
          {
            "amount": 250,
            "fluid": "allthemodium:molten_vibranium"
          }
        ],
        "result": {
          "amount": 180,
          "fluid": "allthemodium:molten_atmvib"
        },
        "temperature": 9000
      }).id('galaxyorigenes:molten_atmvib')  


      //molten vibranium unobtainium
      nadien.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "fluid": "allthemodium:molten_vibranium",
            "amount": 90
          },
          {
            "fluid": "allthemodium:molten_unobtainium",
            "amount": 90
          }
        ],
        "result": {
          "fluid": "allthemodium:molten_vibunob",
          "amount": 90
        },
        "temperature": 9000,
        "conditions": [
          {
            "type": "forge:mod_loaded",
            "modid": "tconstruct"
          }
        ]
      }).id('galaxyorigenes:molten_vibunob')  
       
    
    
   //nether star block 1x
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": 'extendedcrafting:nether_star_block'
      }
    },
    "result": {
      "item": "allthecompressed:nether_star_block_1x",
      "count": 1
    }
  
  }).id('galaxyorigenes:nether_star_block_1x')


       

  //nether star block 2x
  nadien.remove({output:'allthecompressed:nether_star_block_2x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_1x"
      }
    },
    "result": {
      "item": "allthecompressed:nether_star_block_2x",
      "count": 1
    },

  }).id('galaxyorigenes:nether_star_block_2x')


  //nether star block 3x
  nadien.remove({output:'allthecompressed:nether_star_block_3x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_2x"
      }
    },
    "result": {
      "item": "allthecompressed:nether_star_block_3x",
      "count": 1
    },
}).id('galaxyorigenes:nether_star_block_3x')



//nether star block 4x
nadien.remove({output:'allthecompressed:nether_star_block_4x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_3x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_4x",
    "count": 1
  },
}).id('galaxyorigenes:nether_star_block_4x')


//nether star block 5x
nadien.remove({output:'allthecompressed:nether_star_block_5x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_4x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_5x",
    "count": 1
  },
}).id('galaxyorigenes:nether_star_block_5x')




//nether star block 6x
nadien.remove({output:'allthecompressed:nether_star_block_6x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_5x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_6x",
    "count": 1
  },
}
).id('galaxyorigenes:nether_star_block_6x')





//nether star block 7x
nadien.remove({output:'allthecompressed:nether_star_block_7x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_6x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_7x",
    "count": 1
  },

}).id('galaxyorigenes:nether_star_block_7x')




//nether star block 8x
nadien.remove({output:'allthecompressed:nether_star_block_8x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_7x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_8x",
    "count": 1
  },
}).id('galaxyorigenes:nether_star_block_8x')



//nether star block 9x
nadien.remove({output:'allthecompressed:nether_star_block_9x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_8x"
    }
  },
  "result": {
    "item": "allthecompressed:nether_star_block_9x",
    "count": 1
  },
}).id('galaxyorigenes:nether_star_block_9x')
   





  })
  