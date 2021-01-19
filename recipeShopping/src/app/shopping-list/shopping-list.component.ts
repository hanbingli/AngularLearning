import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(  //订阅ingredienchange
        (ingredients: Ingredient[]) =>{
          this.ingredients = this.ingredients

        }
      );
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient)
  //   console.log(this.ingredients)

  // }

}
