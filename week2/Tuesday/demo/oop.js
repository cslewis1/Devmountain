let person = {
  firstName: "Michael",
  lastName: "Scott",
  age: 34,
};

//console.log(person.firstName);
//console.log(person['firstName']);

let meal = {
  appetizer: "cheese sticks",
  entree: "chicken parm",
  dessert: "ice cream",
  drink: "Coke",
};

let { dessert } = meal;
console.log(dessert);

let { entree, appetizer } = meal;
console.log(entree);
console.log(appetizer);

const { drink: sweetness } = meal;
console.log(meal.drink);
console.log(sweetness);

const {
  appetizer: myAppetizer,
  entree: myEntree,
  dessert: myDessert,
  drink: myDrink,
} = meal;
console.log(myAppetizer);
console.log(myEntree);
console.log(myDessert);
console.log(myDrink);

for (let key in meal) {
  console.log(`${key} : ${meal[key]}`);
}

person.job = "Web Developer";
console.log(person);

person.pets = ["Chicken", "Duck", "Hamster"];
console.log(person);

person.pets.push("Dog");
console.log(person);

console.log(person.pets[1]);

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};
delete teams.teamFour;
console.log(teams);

//Classes
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
    }
    drive(milesToDrive) {
        this.miles += milesToDrive
    }
}

class Sedan extends Car{
    constructor(make, model, year, color, type) {
        super(make, model, year, color)

        this.type = type
        this.passengerCount = 5;
    }
}

let vinsonsCar = new Sedan('Tesla', 'model 3', 2025, 'Matte Black', 'Electric')
console.log(vinsonsCar)
let chasesCar = new Car('Pontiac', 'GrandPrix', 1998, 'red')
console.log(chasesCar) 

let ashleysCar = new Car('Music', 'MP3', 2001, 'blue')
console.log(ashleysCar)

ashleysCar.drive(50)
console.log(ashleysCar.miles)