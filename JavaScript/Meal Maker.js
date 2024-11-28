const menu = {
  _meal : '',
  _price : 0,
  
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
     } else {
      console.log("Error: Not a string");
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log("Error: Not a number");
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for £${this._price}!`;
    } else {
      return "Meal or price was not set correctly";
    }
  }
}

menu.meal = "Food";
menu.price = 2;
console.log(menu);
console.log(menu.todaysSpecial);
