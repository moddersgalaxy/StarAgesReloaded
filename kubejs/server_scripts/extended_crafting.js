ServerEvents.recipes(nadien => {


	//eliminadas
	nadien.remove({output: ['extendedcrafting:ultimate_singularity', 'extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot']}) 
    
  


	  



  //placa de hierro oscuro
  RecipeMachineStage.addRecipe('create:pressing', 'galaxyorigenes:blackironslate', 'craftingmaestro')
  nadien.recipes.create.pressing('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot').id('galaxyorigenes:blackironslate')

  //hierro oscuro
  RecipeMachineStage.addRecipe('create:mixing', 'galaxyorigenes:blackiron', 'craftingmaestro')
  nadien.recipes.create.mixing('extendedcrafting:black_iron_ingot', ['create:brass_ingot', 'create:bar_of_chocolate']).superheated().id('galaxyorigenes:blackiron')








})