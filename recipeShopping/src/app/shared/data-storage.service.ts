import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';


import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})   //捷径，这样就不中去app.module里面加providers
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService ){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://ngcourse-recipe-default-rtdb.firebaseio.com/recipes.json', 
                recipes)
            .subscribe(response =>{
            console.log(response)
        })

    }

    // fetchRecipes() {
    //   return this.authService.user.pipe(
    //     take(1), 
    //     exhaustMap(user =>{
    //        //take(1)只获取一个数据之后就unsubscribe, exhaustMap 获取observable，用新的observable取代，然后往下pass
    //     return this.http
    //     .get<Recipe[]>(  //告诉ng我们要抽取的数据形式是什么
    //       'https://ngcourse-recipe-default-rtdb.firebaseio.com/recipes.json', 
    //       {
    //         params: new HttpParams().set('auth' ,user.token)
    //       }
    //     )
    //   }),
    //     map(recipes => {   //是ng中观察observable的 
    //     return recipes.map(recipe => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : []   //如果返回数据没有ingre， 那么加上一项，以避免错误
    //       };
    //     });
    //   }),
    //     tap(recipes => {
    //       this.recipeService.setRecipes(recipes);
    //     })
     
       
    //     //   .subscribe(recipes => {
    //     //     this.recipeService.setRecipes(recipes);
    //     //   });
    //   )}
       
    fetchRecipes() {
      return this.http
        .get<Recipe[]>(
          'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json'
        )
        .pipe(
          map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),
          tap(recipes => {
            this.recipeService.setRecipes(recipes);
          })
        );
    }
    





}