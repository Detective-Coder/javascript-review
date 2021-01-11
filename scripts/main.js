// console.log("Welcome to the main module")
let favoriteSandwich = "Subway Club";
let leastFaveSandwich = {
  name: "Egg Salad",
  price: 12,
  ingredients: ["egg", "salad", "mayo"]
};
// console.log(leastFaveSandwich);

let restaurantMenu = [
  {
    name: "Subway Club",
    price: 5.99,
    ingredients: ["meats", "cheese", "veggies"]
  },
  {
    name: "Egg Salad",
    price: 12,
    ingredients: ["egg", "salad", "mayo"]
  },
  {
    name: "Meatball Sub",
    price: 8.50,
    ingredients: ["meatballs", "cheese", "peppers"]
  },
  {
    name: "Rueben",
    price: 9.99,
    ingredients: ["bread", "corned beef", "saurkraut", "thousand island dressing"]
  }
];

// Write a for loop to print each ingredient for just a Rueben to the console

// for(let i = 0; i < restaurantMenu[3].ingredients.length; i++) {
//   console.log(restaurantMenu[3].ingredients[i]);
// }

// 2. Extra challenge: If you get done early and feel inspired, try writing a loop within a loop to print each ingredient for every sandwich to the console
// for(let i = 0; i < restaurantMenu.length; i++) {
//   console.log(restaurantMenu[i].ingredients);
//   for (let j = 0; j < restaurantMenu[i].ingredients.length; j++) {
//     console.log(restaurantMenu[i].ingredients[j]);
//   }
// }

// console.log(restaurantMenu);

// for(let i = 0; i < restaurantMenu.length; i++) {
//   if (restaurantMenu[i].name === favoriteSandwich) {
//     console.log("Chef's Choice", restaurantMenu[i].name)
//   } else {
//     console.log(restaurantMenu[i].name);
//   }
// }

// for(let i = 0; i < restaurantMenu.length; i++){
//   console.log(restaurantMenu[i].price);
//   if (restaurantMenu[i].price < 10) {
//     console.log("SALE", restaurantMenu[i].name);
//   } else {
//     console.log(restaurantMenu[i].name);
//   }
// }

// 2. Write a conditional that checks the price of each sandwich. If the price is under ten dollars, print SALE before the name of the sandwich. Otherwise, print the name of the sandwich just like normal

// Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."
for (let i = 0; i < restaurantMenu.length; i++) {
  let sandwichSentence = `The ${restaurantMenu[i].name} is ${restaurantMenu[i].price}.`;
  console.log(sandwichSentence);
}

// Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. The function should build an object that represents a sandwich and add it to the array.
// function makeSandwich(sandwichName, price, ingredientsArray) {
//   let sandwichArray = [];

// }
let newSandwich = (name, price, ingredients) => {
  return {
    name: name,
    price: price,
    ingredients: ingredients
  }
};

console.log(newSandwich('Chicken', 10.99, 'chicken, bread, pickles, mayo'));

// Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.
// Write a "Dairy Free" function that loops through your array of sandwiches and returns a new array of sandwiches that do NOT include cheese in their ingredient list. (Make sure you have at least one sandwich with cheese so you can test if this function works.)