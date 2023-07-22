import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Pizza',
      'This is test description',
      'https://t4.ftcdn.net/jpg/02/16/24/99/240_F_216249940_NQ1h625IRYAIvI3RUzswBbIQPiGTrOV5.jpg',
      [
        new Ingredient('Toffel', 1),
        new Ingredient('Capsicum', 2),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is test description',
      'https://t3.ftcdn.net/jpg/01/57/74/36/240_F_157743662_YKJEVXytEgPz08DgswRMPQMgv4D6cKL0.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Cabbage', 1),
        new Ingredient('Onions', 2),
        new Ingredient('Meat Ball', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppinglistService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }
}
