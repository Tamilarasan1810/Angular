import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test description',
      'https://t4.ftcdn.net/jpg/02/16/24/99/240_F_216249940_NQ1h625IRYAIvI3RUzswBbIQPiGTrOV5.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is test description',
      'https://t4.ftcdn.net/jpg/02/16/24/99/240_F_216249940_NQ1h625IRYAIvI3RUzswBbIQPiGTrOV5.jpg'
    ),
  ];
}
