import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [  //规定recipes变量使用model Recipe，并且是数列
  new Recipe('A Test Recipe', 'only a test', 'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg'),
  new Recipe('A Test Recipe', 'only a test', 'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg'),
]; 
  

  constructor() { }

  ngOnInit(): void {
  }

}
