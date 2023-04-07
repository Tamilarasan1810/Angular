import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test description',
      'https://t4.ftcdn.net/jpg/02/16/24/99/240_F_216249940_NQ1h625IRYAIvI3RUzswBbIQPiGTrOV5.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is test description',
      'https://t3.ftcdn.net/jpg/02/35/58/06/240_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
