import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe ('A Test Recipe', 'This is simply a test', 
    'https://upload.wikimedia.org/wikimedia/commons/1/15/Recipe_logo.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato', 2)
    ]),
    new Recipe ('A Test Recipe two', 'This is simply a test','../src/app/img/padang.jpg', 
    [
      new Ingredient('rice',1),
      new Ingredient('meal', 3),
      new Ingredient('egg',1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor(private slsService:ShoppingListService) { }
  
  addIngredientsShoppingList(ingredients:Ingredient[])
  {
    this.slsService.addIngredients(ingredients);
  }


}
