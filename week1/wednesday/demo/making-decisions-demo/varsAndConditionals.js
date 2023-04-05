/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

//create a variable for John and Jamie's attack
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

// Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle. 
// Using an if-else statement, console.log who has the greater attack strength.
if (jonSnowAttack > jamieLannisterAttack) {
    console.log('John has a greater attack')
} else {
    console.log('Jamie has a greater attack')
}

// What if we have a tie? Our code would actually give the win to Jamie, 
// which is no good.Add in an else if to resolve this.

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('John has a greater attack')
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log('Even match')
}else {
    console.log('Jamie has a greater attack')
}

// Jamie, knowing he is the superior, initiates a fight with Jon.
// Let’s create some additional stats for Jon Snow so we can see how this plays out.
let jonSnowHealth = 100
let jonSnowDefense = 0


