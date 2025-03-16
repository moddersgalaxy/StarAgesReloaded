ServerEvents.recipes(nadien => {
  
  
  
  
  
  //eliminado
  nadien.remove({output: ['industrialforegoing:ether_gas', 'industrialforegoing:laser_drill', 'industrialforegoing:fluid_laser_base'] })
  nadien.remove({id: 'industrialforegoing:ore_laser_base'})

//machine frame basic
nadien.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'create:brass_casing')




//apatite ore
nadien.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens3"
},
"output": {
  "item": "thermal:apatite_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 16,
    "depth_min": 5,
    "weight": 28,
    "whitelist": {}
  },
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 255,
    "depth_min": 0,
    "weight": 4,
    "whitelist": {}
  }
]
}).id('galaxyorigenes:srnaptite')




//gas ether
nadien.custom({
  "type": "create:mixing",
  "heatRequirement": "superheated",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": 'ultimate_utilities:nadienitefluid',
      "nbt": {}
    },
    {
      "amount": 1000,
      "fluid": "thermal:resin"
    }
  ],
  "results": [
    {
      "amount": 500,
      "fluid": "industrialforegoing:ether_gas"
    }
  ]
}).id('galaxyorigenes:gasether')


//laser ore base
nadien.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('galaxyorigenes:industrialforegoings/ore_laser_drill')

//laser fluid base
nadien.shaped('industrialforegoing:fluid_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: '#forge:ores/iron',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('galaxyorigenes:industrialforegoings/fluid_laser_drill')


//laser fluid base
nadien.shaped('industrialforegoing:laser_drill', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'avaritia:neutron_gear',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('galaxyorigenes:industrialforegoings/laser_drill')





})