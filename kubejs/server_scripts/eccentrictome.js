let EccentricTome = Item.of('eccentrictome:tome', '{"eccentrictome:mods":{actuallyadditions:{0:{Count:1b,id:"actuallyadditions:booklet"}},ae2:{0:{Count:1b,id:"ae2:guide"}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},allthemodium:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"allthemodium:allthemodium_book"}}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1b,id:"botania:lexicon"}},cookingforblockheads:{0:{Count:1b,id:"cookingforblockheads:no_filter_edition"}},embers:{0:{Count:1b,id:"embers:ancient_codex"}},enchanted:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:extraction"}},1:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:poppetry"}},2:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:circle_magic"}},3:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:getting_started"}},4:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:herbology"}},5:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"enchanted:brewing"}}},extendedcrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},mysticalagriculture:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}}},occultism:{0:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}}},player_companions:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"player_companions:guide"}}},powah:{0:{Count:1b,id:"powah:book"}},rootsclassic:{0:{Count:1b,id:"rootsclassic:runic_tablet"}},tconstruct:{0:{Count:1b,id:"tconstruct:mighty_smelting"},1:{Count:1b,id:"tconstruct:tinkers_gadgetry"},2:{Count:1b,id:"tconstruct:encyclopedia"},3:{Count:1b,id:"tconstruct:fantastic_foundry"},4:{Count:1b,id:"tconstruct:puny_smelting"},5:{Count:1b,id:"tconstruct:materials_and_you"}},thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}}}}')
ServerEvents.recipes(nadien => {
  nadien.shapeless(EccentricTome, ['eccentrictome:tome', '#minecraft:logs']).id('galaxyorigins:fulltome')
})



