require_relative "recipe.rb"
require_relative "ingredient.rb"
require_relative "recipe_ingredient.rb"

# EASIEST WAY TO SEED DATA

salt = Ingredient.new('salt')
pepper = Ingredient.new('pepper')
butter = Ingredient.new('butter')

bread = Recipe.new('bread')
pasta = Recipe.new('pasta')
casserole = Recipe.new('casserole')

RecipeIngredient.new(bread, salt)
RecipeIngredient.new(bread, butter)
RecipeIngredient.new(pasta, butter)
RecipeIngredient.new(pasta, pepper)
RecipeIngredient.new(casserole, salt)

casserole.add_ingredient(pepper)
casserole.add_ingredient(butter)

# make four associations just to play with
# RecipeIngredient.new(Recipe.all[0], Ingredient.all[0])
# RecipeIngredient.new(Recipe.all[0], Ingredient.all[1])
# RecipeIngredient.new(Recipe.all[0], Ingredient.all[2])
# RecipeIngredient.new(Recipe.all[0], Ingredient.all[3])

binding.pry

# sometimes binding.pry won't catch if it's the last line in the file, so we add a friendly sayonara :)
puts "goodbye"
