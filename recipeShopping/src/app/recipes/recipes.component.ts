import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe:Recipe) =>{  //会接受到eventEmitter发出来的recipe， 
    //       this.selectedRecipe = recipe   //将selectedRecipe 设置成收来的Recipe
    //     }

    //   );
  }



}
