import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [  //规定recipes变量使用model Recipe，并且是数列
    new Recipe('A Test Recipe', 
    'only a test', 
    'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',
    [
      new Ingredient('Potato', 2), 
      new Ingredient('Carrot', 2)
    ]
    ),
    new Recipe('A Test Recipe', 
    'only a test', 
    'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',
    [
      new Ingredient('Potato', 2), 
      new Ingredient('Carrot', 3)
    ]
    ),
    
  ]; 

  constructor() { }

  getRecipes(){
    return this.recipes.slice()//get a copy of recipes
  }
}
