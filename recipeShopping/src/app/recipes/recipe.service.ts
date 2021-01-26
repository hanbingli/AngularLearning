import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new Subject<Recipe>();
  // 因为使用router所以不需要了

  private recipes: Recipe[] = [  //规定recipes变量使用model Recipe，并且是数列
    new Recipe('General-Tsao-Chicken', 
    'Actually not exist in China', 
    'https://www.recipetineats.com/wp-content/uploads/2020/10/General-Tsao-Chicken_1.jpg',
    [
      new Ingredient('Potato', 2), 
      new Ingredient('Carrot', 2)
    ]
    ),
    new Recipe('Dumplings', 
    'a must for Festivals', 
    'https://www.thespruceeats.com/thmb/k6lQKWqVN1bRns-BtCzGBJUOU50=/3000x3000/smart/filters:no_upscale()/chinese-pan-fried-dumplings-694499_dumpling-step-08-8a2fa534bd9a4802b9fafbe3f716a80e.jpg',
    [
      new Ingredient('Potato', 2), 
      new Ingredient('Carrot', 3)
    ]
    ),
    
  ]; 

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();//get a copy of recipes
  }

  getRecipe(index:number){
    return this.recipes.slice()[index];     //从副本获取recipe的叙述
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
