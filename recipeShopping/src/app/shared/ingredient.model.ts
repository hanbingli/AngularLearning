// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name= name;
//     this.amount = amount;
//   }
// }



export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
//同时完成declare和assign两个动作，因为同名