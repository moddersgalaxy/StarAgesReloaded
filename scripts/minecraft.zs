import mods.itemstages.ItemStages;
import mods.redimstages.ReDimensionStages;

///ERA DE HIERRO


// Aged item
ItemStages.restrict(<item:minecraft:iron_hoe>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_axe>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_shovel>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:bucket>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_sword>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_boots>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_chestplate>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_helmet>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:iron_leggings>, "hierro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:flint_and_steel>, "hierro").setHiddenInJEI(true);




///ERA DE ORO




// Aged item
ItemStages.restrict(<item:minecraft:golden_sword>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_axe>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_helmet>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_boots>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_leggings>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_chestplate>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_hoe>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_axe>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "oro").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:golden_shovel>, "oro").setHiddenInJEI(true);




///ERA DE DIAMANTE

// Aged item
ItemStages.restrict(<item:minecraft:diamond_hoe>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_helmet>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_shovel>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_axe>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_sword>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_leggings>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_axe>, "diamante").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:diamond_boots>, "diamante").setHiddenInJEI(true);



///ERA DE NETHERITE

// Aged item
ItemStages.restrict(<item:minecraft:netherite_sword>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_chestplate>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_helmet>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_boots>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_leggings>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_hoe>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_axe>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_pickaxe>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_shovel>, "netherite").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:netherite_upgrade_smithing_template>, "netherite").setHiddenInJEI(true);



///ERA ENDPORTAL



// Aged item
ItemStages.restrict(<item:enderstorage:ender_chest>, "enderportal").setHiddenInJEI(true);
ItemStages.restrict(<item:enderstorage:ender_pouch>, "enderportal").setHiddenInJEI(true);
ItemStages.restrict(<item:enderstorage:ender_tank>, "enderportal").setHiddenInJEI(true);



///ERA MAGIC




// Aged item
ItemStages.restrict(<item:minecraft:enchanting_table>, "magic").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:lectern>, "magic").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:bookshelf>, "magic").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:chiseled_bookshelf>, "magic").setHiddenInJEI(true);
ItemStages.restrict(<item:minecraft:anvil>, "magic").setHiddenInJEI(true);



///ERA BRUJO



// Aged item
ItemStages.restrict(<item:minecraft:brewing_stand>, "brujo").setHiddenInJEI(true);

//Aged dimensions 


ReDimensionStages.restrict("minecraft:the_end", "enderportal");
ReDimensionStages.restrictWithMessage("minecraft:the_end", "No Puedes Entrar Necesitas La Era ENDERPORTAL!", "enderportal");

ReDimensionStages.restrict("minecraft:nether", "netherite");
ReDimensionStages.restrictWithMessage("minecraft:the_end", "No Puedes Entrar Necesitas La Era NETHERITE!", "netherite");

