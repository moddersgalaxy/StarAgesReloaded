//mekanism By SrNadien
ServerEvents.recipes(nadien => {
	
	
	//eliminadas
	nadien.remove({output:'mekanism:personal_chest'})
  nadien.remove({output:'mekanism:atomic_disassembler'})
	nadien.remove({output:'mekanism:robit'})
	nadien.remove({output:'mekanism:flamethrower'})
	nadien.remove({output:'mekanism:scuba_tank'})
	nadien.remove({output:'mekanism:free_runners'})
	nadien.remove({output:'mekanism:free_runners_armored'})
	nadien.remove({output:'mekanism:personal_barrel'})
	nadien.remove({output:'mekanismgenerators:wind_generator'})
	nadien.remove({output:'mekanismgenerators:heat_generator'})
	nadien.remove({output:'mekanism:metallurgic_infuser'})
	nadien.remove({output:'mekanism:steel_casing'})
	nadien.remove({output:'mekanism:enrichment_chamber'})
	nadien.remove({output:'mekanism:basic_energy_cube'})
	nadien.remove({output:'mekanism:purification_chamber'})
	nadien.remove({output:'mekanism:electric_pump'})
	nadien.remove({output:'mekanism:energy_tablet'})
	nadien.remove({output:'mekanism:electrolytic_separator'})
	nadien.remove({output:'mekanism:precision_sawmill'})
	nadien.remove({output:'mekanism:jetpack'})
	nadien.remove({output:'mekanismgenerators:solar_generator'})
	nadien.remove({output:'mekanism:basic_universal_cable'})
	nadien.remove({output:'mekanism:basic_logistical_transporter'})
	nadien.remove({output:'mekanism:basic_thermodynamic_conductor'})
	nadien.remove({output:'mekanism:basic_tier_installer'})
	nadien.remove({output:'mekanism:advanced_tier_installer'})
	nadien.remove({output:'mekanism:elite_tier_installer'})
	nadien.remove({output:'mekanism:ultimate_tier_installer'})
	nadien.remove({output:'mekanism:basic_logistical_transporter'})
	nadien.remove({output:'mekanism:advanced_logistical_transporter'})
	nadien.remove({output:'mekanism:elite_logistical_transporter'})
	nadien.remove({output:'mekanism:ultimate_logistical_transporter'})
	nadien.remove({output:'mekanism:restrictive_transporter'})
	nadien.remove({output:'mekanism:diversion_transporter'})
	nadien.remove({output:'mekanism:digital_miner'})
	nadien.remove({output:'mekanism:cardboard_box'})
	nadien.remove({output:'mekanism:basic_bin'})
	nadien.remove({output:'mekanism:module_blasting_unit'})
	nadien.remove({output:'mekanism:upgrade_anchor'})
	nadien.remove({output:'mekanism:alloy_infused'})
	nadien.remove({output:'mekanism:basic_control_circuit'})
	nadien.remove({output:'mekanism:combiner'})
	nadien.remove({output:'immersiveengineering:concrete_leaded'})
	nadien.remove({output:'hostilenetworks:empty_prediction'})
	nadien.remove({output:'mekanism:chemical_oxidizer'})
	nadien.remove({ id: 'mekanism:alloys/infused' });
	nadien.remove({ id: 'mekanism:basic_control_circuit' });
  nadien.remove({ id: 'mekanism:crusher' });
  nadien.remove({ output: 'mekanism:chemical_infuser' });
  nadien.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  nadien.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
  nadien.remove({ output: 'mekanism:chemical_dissolution_chamber' });
  nadien.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  nadien.remove({ output: 'mekanism:chemical_washer' });                                                                                                                                                                                     
  nadien.remove({ output: 'mekanism:resistive_heater' });
  nadien.remove({ output: 'mekanism:laser' });
  nadien.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
  nadien.remove({ output: 'mekanismgenerators:gas_burning_generator' });
  nadien.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/chorus_flower' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crossbow' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/crying_obsidian' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/dragon_egg' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/emerald' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/enchanted_golden_apple' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/ender_chest' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/glowstone_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/heart_of_the_sea' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/iron' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/lapis_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/nautilus_shell' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/phantom_membrane' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/quartz_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/redstone_block' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/respawn_anchor' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/trident' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/wither_skeleton_skull' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/diamond' });
  nadien.remove({ id: 'mekanism:nucleosynthesizing/end_crystal' });

   

//generador de calor
nadien.shaped('mekanismgenerators:heat_generator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/iron',
  C: '#forge:plates/iron',
  Q: '#forge:plates/iron',
  I: '#minecraft:planks',
  L: '#forge:plates/osmium',
  W: '#minecraft:planks',
  E: 'thermal:saw_blade',
  H: 'minecraft:blast_furnace',
  P: 'thermal:saw_blade'
}).id('galaxyorigins:generadordecalor')
  
//infusor metalurgico
  nadien.shaped('mekanism:metallurgic_infuser', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/iron',
  C: 'minecraft:blast_furnace',
  Q: '#forge:plates/iron',
  I: 'minecraft:redstone',
  L: '#forge:plates/osmium',
  W: 'minecraft:redstone',
  E: '#forge:plates/iron',
  H: 'minecraft:blast_furnace',
  P: '#forge:plates/iron'
}).id('galaxyorigins:infussormetalurgico')

//tuvo de energia basico
  nadien.shaped('mekanism:basic_energy_cube', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:energy_tablet',
  Q: 'mekanism:alloy_infused',
  I: '#forge:plates/steel',
  L: 'create:andesite_casing',
  W: '#forge:plates/steel',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:energy_tablet',
  P: 'mekanism:alloy_infused'
}).id('galaxyorigins:cubodeenergia')

//purificadora
  nadien.shaped('mekanism:purification_chamber', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:advanced_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: '#forge:plates/osmium',
  L: 'create:andesite_casing',
  W: '#forge:plates/osmium',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:advanced_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('galaxyorigins:purificadora')

//panel solar 2
  nadien.shaped('mekanismgenerators:solar_panel', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'minecraft:glass_pane',
  C: 'minecraft:glass_pane',
  Q: 'minecraft:glass_pane',
  I: 'mekanism:alloy_reinforced',
  L: 'mekanism:alloy_infused',
  W: 'mekanism:alloy_reinforced',
  E: '#forge:plates/osmium',
  H: '#forge:plates/osmium',
  P: '#forge:plates/osmium'
}).id('galaxyorigins:panelsolardos')

//bomba electrica
  nadien.shaped('mekanism:electric_pump', [
  'TCQ',
  'ILW',
  'EHP'
], {
T: 'mob_grinding_utils:spawner_upgrade_height',
C: 'minecraft:bucket',
  Q: 'mob_grinding_utils:spawner_upgrade_height',
  I: 'mekanism:alloy_infused',
  L: 'create:andesite_casing',
  W: 'mekanism:alloy_infused',
  E: '#forge:plates/osmium',
  H: '#forge:plates/osmium',
  P: '#forge:plates/osmium'
}).id('galaxyorigins:bombaelectrica')

//tabla de energia
  nadien.shaped('mekanism:energy_tablet', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: '#forge:plates/gold',
  Q: '#forge:plates/steel',
  I: 'mekanism:alloy_infused',
  L: '#forge:plates/gold',
  W: 'mekanism:alloy_infused',
  E: '#forge:plates/steel',
  H: '#forge:plates/gold',
  P: '#forge:plates/steel'
}).id('galaxyorigins:tabletadeenergia')

//separador de electrolitos
  nadien.shaped('mekanism:electrolytic_separator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: 'mekanism:alloy_infused',
  Q: '#forge:plates/steel',
  I: 'mekanism:alloy_infused',
  L: 'mekanism:electrolytic_core',
  W: 'mekanism:alloy_infused',
  E: '#forge:plates/steel',
  H: 'mekanism:alloy_infused',
  P: '#forge:plates/steel'
}).id('galaxyorigins:separadordeelectrolitos')

//cortadora de madera
  nadien.shaped('mekanism:precision_sawmill', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: 'mekanism:advanced_control_circuit',
  Q: '#forge:plates/steel',
  I: 'mekanism:alloy_infused',
  L: 'create:andesite_casing',
  W: 'mekanism:alloy_infused',
  E: '#forge:plates/steel',
  H: 'mekanism:advanced_control_circuit',
  P: '#forge:plates/steel'
}).id('galaxyorigins:sierrameka')

//generador solar
  nadien.shaped('mekanismgenerators:solar_generator', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanismgenerators:solar_panel',
  C: 'mekanismgenerators:solar_panel',
  Q: 'mekanismgenerators:solar_panel',
  I: 'mekanism:alloy_reinforced',
  L: '#forge:plates/steel',
  W: 'mekanism:alloy_reinforced',
  E: '#forge:plates/osmium',
  H: 'mekanism:energy_tablet',
  P: '#forge:plates/osmium'
}).id('galaxyorigins:generadorsolar')

//tubo universal basico
  nadien.shaped('8x mekanism:basic_universal_cable', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: '#forge:plates/steel',
  Q: '#forge:plates/steel',
  I: 'minecraft:glass',
  L: 'minecraft:redstone',
  W: 'minecraft:glass',
  E: '#forge:plates/steel',
  H: '#forge:plates/steel',
  P: '#forge:plates/steel'
}).id('galaxyorigins:cableuniversal')

//tubo presurizado basico
  nadien.shaped('8x mekanism:basic_pressurized_tube', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: '#forge:plates/steel',
  Q: '#forge:plates/steel',
  I: 'minecraft:glass',
  L: 'minecraft:glass',
  W: 'minecraft:glass',
  E: '#forge:plates/steel',
  H: '#forge:plates/steel',
  P: '#forge:plates/steel'
});

//tubo conductor de energia
   nadien.shaped('8x mekanism:basic_thermodynamic_conductor', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: '#forge:plates/steel',
  C: '#forge:plates/steel',
  Q: '#forge:plates/steel',
  I: 'minecraft:glass',
  L: 'alltheores:copper_plate',
  W: 'minecraft:glass',
  E: '#forge:plates/steel',
  H: '#forge:plates/steel',
  P: '#forge:plates/steel'
}).id('galaxyorigins:tuboconductor')

//instalador basico
   nadien.shaped('mekanism:basic_tier_installer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'minecraft:redstone',
  C: 'mekanism:basic_control_circuit',
  Q: 'minecraft:redstone',
  I: '#forge:plates/steel',
  L: '#minecraft:planks',
  W: '#forge:plates/steel',
  E: 'minecraft:redstone',
  H: 'mekanism:basic_control_circuit',
  P: 'minecraft:redstone'
}).id('galaxyorigins:instaladorbasico')

//instalador avanzado
   nadien.shaped('mekanism:advanced_tier_installer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:advanced_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: '#forge:plates/lumium',
  L: '#minecraft:planks',
  W: '#forge:plates/lumium',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:advanced_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('galaxyorigins:instaladoravanzado')


//instalador elite
  nadien.shaped('mekanism:elite_tier_installer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_reinforced',
  C: 'mekanism:elite_control_circuit',
  Q: 'mekanism:alloy_reinforced',
  I: '#forge:plates/signalum',
  L: '#minecraft:planks',
  W: '#forge:plates/signalum',
  E: 'mekanism:alloy_reinforced',
  H: 'mekanism:elite_control_circuit',
  P: 'mekanism:alloy_reinforced'
}).id('galaxyorigins:instaladorelite')

//instalador definitivo
  nadien.shaped('mekanism:ultimate_tier_installer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_atomic',
  C: 'mekanism:ultimate_control_circuit',
  Q: 'mekanism:alloy_atomic',
  I: '#forge:plates/enderium',
  L: '#minecraft:planks',
  W: '#forge:plates/enderium',
  E: 'mekanism:alloy_atomic',
  H: 'mekanism:ultimate_control_circuit',
  P: 'mekanism:alloy_atomic'
}).id('galaxyorigins:instaladordefinitivo')

//enriquesedora
  nadien.shaped('mekanism:enrichment_chamber', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:advanced_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: '#forge:plates/diamond',
  L: 'create:andesite_casing',
  W: '#forge:plates/diamond',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:advanced_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('galaxyorigins:enriquesedora')

//combinador
  nadien.shaped('mekanism:combiner', [
  'TCQ',
  'ILI',
  'EHP'
], {
  T: 'mekanism:alloy_reinforced',
  C: 'mekanism:elite_control_circuit',
  Q: 'mekanism:alloy_reinforced',
  I: 'allthecompressed:gold_block_1x',
  L: 'create:andesite_casing',
  E: 'mekanism:alloy_reinforced',
  H: 'mekanism:elite_control_circuit',
  P: 'mekanism:alloy_reinforced'
}).id('galaxyorigins:combinador')

//oxidizer
  nadien.shaped('mekanism:chemical_oxidizer', [
  'TCQ',
  'ILW',
  'EHP'
], {
  T: 'mekanism:alloy_infused',
  C: 'mekanism:basic_control_circuit',
  Q: 'mekanism:alloy_infused',
  I: 'expandedstorage:old_netherite_chest',
  L: 'mekanism:dynamic_tank',
  W: 'mekanism:basic_chemical_tank',
  E: 'mekanism:alloy_infused',
  H: 'mekanism:basic_control_circuit',
  P: 'mekanism:alloy_infused'
}).id('galaxyorigins:oxydadorchemico')

//jetpack
nadien.shaped('mekanism:jetpack', [
  ' C ',
  'ELE',
  'PHP'
], {
  C: 'mekanism:ultimate_energy_cube',
  L: 'mekanism:energy_tablet',
  E: 'mekanism:alloy_atomic',
  H: 'mekanism:ultimate_chemical_tank',
  P: 'mekanism:ingot_refined_obsidian'
}).id('galaxyorigins:jetpack')

//carcasa de acero
nadien.shaped('mekanism:steel_casing', [
  'ABA',
  'BCB',
  'ABA'
], {
  A: '#forge:plates/steel',
  B: '#forge:plates/osmium',
  C: '#forge:ingots/brass'
}).id('galaxyorigins:carcasadeacero')


  //minero digital
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 3,
  "pattern": [
    "AAABAAA",
    "ACCCCCA",
    "ACDDDCA",
    "BCDEDCB",
    "ACDDDCA",
    "ACCCCCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_core"
    },
    "B": {
      "item": "solarpanels:photonic_energy_tablet"
    },
    "C": {
      "item": "minecraft:lapis_lazuli"
    },
    "D": {
      "item": "industrialforegoing:laser_lens0"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_advanced"
    }
  },
  "result": {
    "item": "mekanism:digital_miner",
    "count": 1
  },
}).id('galaxyorigins:minerodigital')

  
//atomic disasembler
nadien.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
  I: 'mekanism:alloy_infused',
  T: 'mekanism:energy_tablet',
  A: 'mekanism:alloy_atomic',
  P: 'allthemodium:allthemodium_pickaxe'
}).id('galaxyorigins:attomicdisasembler')

//chemical infuser
nadien.custom({"type":"mekanism:mek_data","key":{"A":{"tag":"mekanism:alloys/infused"},"C":{"tag":"forge:circuits/basic"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["ACA","TXT","ACA"],"result":{"item":"mekanism:chemical_infuser"}}).id('galaxyorigins:infusorquimico')


//carcasa reactor de fusion
nadien.custom({"type":"minecraft:crafting_shaped","key":{"#":{"tag":"forge:pellets/polonium"},"A":{"tag":"forge:alloys/ultimate"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["A#A","#X#","A#A"],"result":{"count":4,"item":"mekanismgenerators:fusion_reactor_frame"}}).id('galaxyorigins:carcasareactorfision')



//trituradora receta
nadien.custom({"type":"minecraft:crafting_shaped","key":{"B":{"item":"minecraft:lava_bucket"},"C":{"tag":"forge:circuits/basic"},"R":{"tag":"forge:dusts/redstone"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["RCR","BXB","RCR"],"result":{"item":"mekanism:crusher"}}).id('galaxyorigins:trituradora')


//carcasa reactor de fission
nadien.custom({"type":"minecraft:crafting_shaped","key":{"I":{"tag":"forge:ingots/lead"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":[" I ","IXI"," I "],"result":{"count":4,"item":"mekanismgenerators:fission_reactor_casing"}}).id('galaxyorigins:carcasareactofission')


//camara de disolucion quimica
nadien.custom({"type":"mekanism:mek_data","key":{"C":{"tag":"forge:circuits/ultimate"},"I":{"tag":"forge:ingots/refined_obsidian"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["ITI","CXC","ITI"],"result":{"item":"mekanism:chemical_dissolution_chamber"}}).id('galaxyorigins:camaradedisolucion')


//generador de gas
nadien.custom({"type":"minecraft:crafting_shaped","key":{"A":{"tag":"mekanism:alloys/infused"},"C":{"item":"mekanism:electrolytic_core"},"O":{"tag":"forge:ingots/osmium"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["OAO","XCX","OAO"],"result":{"item":"mekanismgenerators:gas_burning_generator"}}).id('galaxyorigins:generadordegas')


//Lavadora quimica
nadien.custom({"type":"mekanism:mek_data","key":{"B":{"item":"mekanism:basic_fluid_tank"},"C":{"tag":"forge:circuits/ultimate"},"I":{"tag":"forge:ingots/refined_obsidian"},"T":{"item":"mekanism:basic_chemical_tank"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["IBI","CXC","ITI"],"result":{"item":"mekanism:chemical_washer"}}).id('galaxyorigins:lavarropas')


//calentador resistente
nadien.custom({"type":"mekanism:mek_data","key":{"E":{"item":"mekanism:energy_tablet"},"I":{"tag":"forge:ingots/tin"},"R":{"tag":"forge:dusts/redstone"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["IRI","RXR","IEI"],"result":{"item":"mekanism:resistive_heater"}}).id('galaxyorigins:hornoalena')


//laser
nadien.custom({"type":"mekanism:mek_data","key":{"#":{"tag":"forge:gems/diamond"},"A":{"tag":"mekanism:alloys/reinforced"},"E":{"item":"mekanism:energy_tablet"},"X":{"item":"industrialforegoing:machine_frame_advanced"}},"pattern":["AE ","AX#","AE "],"result":{"item":"mekanism:laser"}}).id('galaxyorigins:laserxd')



//qio drive array
nadien.custom({"type":"mekanism:mek_data","key":{"#":{"item":'expandedstorage:old_netherite_chest'},"C":{"tag":"forge:circuits/ultimate"},"G":{"tag":"forge:glass_panes"},"I":{"tag":"forge:pellets/polonium"},"T":{"item":"mekanism:teleportation_core"}},"pattern":["IGI","C#C","ITI"],"result":{"item":"mekanism:qio_drive_array"}}).id('galaxyorigins:qio')

//laser beam
nadien.custom({"type":"mekanism:mek_data","key":{"#":{"item":"mekanism:laser_amplifier"},"P":{"item":'expandedstorage:old_netherite_chest'}},"pattern":["P","#"],"result":{"item":"mekanism:laser_tractor_beam"}})  


//Infusor Metalurgico
nadien.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/steel"}},"output":{"count":2,"item":"mekanism:alloy_infused"}}).id('galaxyorigins:aleacioninfusionada')
nadien.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":40,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/osmium"}},"output":{"count":4,"item":"mekanism:basic_control_circuit"}}).id('galaxyorigins:circuitobasico')

//combinador
nadien.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:wither_skeleton_skull"}},"mainInput":{"ingredient":{"item":"minecraft:compass"}},"output":{"item":"hostilenetworks:prediction_matrix"}}).id('galaxyorigins:predictionmatrix')
nadien.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":'immersiveengineering:sawblade'}},"mainInput":{"ingredient":{"item":"ars_nouveau:starbuncle_charm"}},"output":{"item":"minecraft:dragon_breath"}}).id('galaxyorigins:dragonaliento')
nadien.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"amount":4,"item":'ae2:certus_quartz_dust'}},"mainInput":{"ingredient":{"amount":4,"item":'minecraft:sand'}},"output":{"count":5,"item":'ae2:certus_quartz_crystal'}}).id('galaxyorigins:certus')
  
  






//reemplazos maquinas carcasa to frame
nadien.replaceInput({id: 'mekanism:pigment_extractor'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:seismic_vibrator'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:laser'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:chemical_crystallizer'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:pigment_mixer'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:nutritional_liquifier'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:formulaic_assemblicator'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:resistive_heater'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:antiprotonic_nucleosynthesizer'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:teleporter'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:modification_station'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:superheating_element'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:energized_smelter'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:chemical_washer'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:solar_neutron_activator'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanismgenerators:gas_burning_generator'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:security_desk'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:osmium_compressor'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:chemical_dissolution_chamber'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:painting_machine'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanismgenerators:fission_reactor_casing'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:fuelwood_heater'}, 'mekanism:steel_casing', 'create:andesite_casing')
nadien.replaceInput({id: 'mekanism:chemical_infuser'}, 'mekanism:steel_casing', 'create:andesite_casing')



//trituradora
nadien.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:end_stone"}},"output":{"count":2,"item":"occultism:crushed_end_stone"}}).id('galaxyorigins:crushedendstone')
nadien.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"evilcraft:dark_gem"}},"output":{"count":4,"item":"evilcraft:dark_gem_crushed"}}).id('galaxyorigins:crusheddarkgem')
nadien.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ae2:fluix_crystal"}},"output":{"count":4,"item":"ae2:fluix_dust"}}).id('galaxyorigins:fluixdust')
nadien.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"ae2:certus_quartz_crystal"}},"output":{"count":4,"item":"e2:certus_quartz_dust"}}).id('galaxyorigins:certusdust')
   





})
