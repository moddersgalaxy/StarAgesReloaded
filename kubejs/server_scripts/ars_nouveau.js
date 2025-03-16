ServerEvents.recipes(nadien => {












  //libro tier 1
  nadien.remove({output: 'ars_nouveau:novice_spell_book' })
  nadien.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "draconicevolution:chaotic_core"
        },
        {
          "item": "allthemodium:alloy_shovel"
        },
        {
          "item": "allthemodium:alloy_pick"
        },
        {
          "item": "allthemodium:alloy_axe"
        },
        {
          "item": "allthemodium:alloy_sword"
        }
      ],
      "result": {
        "item": "ars_nouveau:novice_spell_book"
      }
    })
  
  
  
  //jarra de fuente
  nadien.remove({output: 'ars_nouveau:source_jar' })
  nadien.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "x": {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        "y": {
          "item": "ars_nouveau:archwood_slab"
        }
      },
      "pattern": [
        "yyy",
        "x x",
        "yyy"
      ],
      "result": {
        "item": "ars_nouveau:source_jar"
      },
      "show_notification": true
    })
  
  
  //camabra de imbuir
  nadien.remove({output: 'ars_nouveau:imbuement_chamber' })
  nadien.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "x": {
          "item": "ars_nouveau:archwood_planks"
        },
        "y": {
          "item": 'biggerreactors:ludicrite_ingot'
        }
      },
      "pattern": [
        "xyx",
        "x x",
        "xyx"
      ],
      "result": {
        "item": "ars_nouveau:imbuement_chamber"
      },
      "show_notification": true
    })
  
  
  //fundidor de pociones
  nadien.remove({id: 'ars_nouveau:potion_melder' })
  nadien.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": false,
      "output": {
        "item": "ars_nouveau:potion_melder"
      },
      "pedestalItems": [
        {
          "item": "ars_nouveau:abjuration_essence"
        },
        {
          "item": "ars_nouveau:abjuration_essence"
        },
        {
          "tag": "forge:storage_blocks/gold"
        },
        {
          "tag": "forge:storage_blocks/gold"
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        }
      ],
      "reagent": [
        {
          "item": "ars_nouveau:potion_jar"
        }
      ],
      "sourceCost": 1000
    })
  
  //generador alquimico
  nadien.remove({id: 'ars_nouveau:alchemical_sourcelink' })
  nadien.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "g": {
          "tag": "forge:ingots/gold"
        },
        "i": {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        "s": {
          "tag": "forge:gems/source"
        }
      },
      "pattern": [
        " s ",
        "gig",
        " s "
      ],
      "result": {
        "item": "ars_nouveau:alchemical_sourcelink"
      },
      "show_notification": true
    })
  
  //tabla de alteraciones
  nadien.remove({id: 'ars_nouveau:alteration_table' })
  nadien.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "x": {
          "item": "ars_nouveau:magebloom_fiber"
        },
      "c": {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        "y": {
          "item": "ars_nouveau:scribes_table"
        }
      },
      "pattern": [
        "cxc",
        "xyx",
        "cxc"
      ],
      "result": {
        "item": "ars_nouveau:alteration_table"
      },
      "show_notification": true
    })
  
  
  //brazero ritual
  nadien.remove({id: 'ars_nouveau:ritual_brazier' })
  nadien.custom({
      "type": "minecraft:crafting_shapeless",
      "category": "misc",
      "ingredients": [
        {
          "item": "ars_nouveau:arcane_pedestal"
        },
        {
          "tag": "forge:storage_blocks/source"
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        {
          "item": 'biggerreactors:ludicrite_ingot'
        }
      ],
      "result": {
        "item": "ars_nouveau:ritual_brazier"
      }
    })
  
  
  
  //pedestal arcano
  nadien.remove({id: 'ars_nouveau:arcane_pedestal' })
  nadien.custom({
      "type": "minecraft:crafting_shaped",
      "category": "misc",
      "key": {
        "x": {
          "item": "ars_nouveau:sourcestone"
        },
        "y": {
          "item": 'biggerreactors:ludicrite_ingot'
        },
        "z": {
          "item": "forge:gems/source"
        }
      },
      "pattern": [
        "xzx",
        "yxy",
        "yxy"
      ],
      "result": {
        "item": "ars_nouveau:arcane_pedestal"
      },
      "show_notification": true
    })
  
  
  //gema fuente 2
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:imbuement_amethyst' })
  nadien.custom({
      "type": "ars_nouveau:imbuement",
      "count": 1,
      "input": {
        "item": 'biggerreactors:ludicrite_ingot'
      },
      "output": "ars_nouveau:source_gem",
      "pedestalItems": [],
      "source": 500
    })
  
  
  //gema fuente 2
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:source_gem' })
  nadien.remove({id: 'ars_nouveau:imbuement_lapis' })
  nadien.custom({
      "type": "ars_nouveau:imbuement",
      "count": 1,
      "input": {
        "tag": "forge:nuggets/calorite"
      },
      "output": "ars_nouveau:source_gem",
      "pedestalItems": [],
      "source": 500
    })
  
  
  
  
  
  
  
  //baneados
  nadien.remove({output: 'ars_nouveau:storage_lectern'})
  
  
  
  
  
  
  
  
  
  
  
  
  })