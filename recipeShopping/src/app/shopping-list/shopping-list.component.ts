import { Component, OnDestroy, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
     this.subscription =  this.slService.ingredientsChanged
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
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
