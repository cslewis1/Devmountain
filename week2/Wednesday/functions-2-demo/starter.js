////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
  //checking to see if the input is a number
  if (+num1 & +num2) {
    num1 = +num1
    num2 = +num2
    return callback(num1, num2)
  } else {
    return console.log('Please provide numbers only.')
  }
}

// console.log(calculator(10, '2', divide))
// console.log(calculator ('a', 2, add))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

//apply discount by percentage or by rate, 
//we have to pass discount as decimals, so tor 25 % we will pass .25

 const applyPercentageDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

applyPercentageDiscount(catProducts[0], .50)
// console.log(catProducts)


const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatDiscount = (product, discount) => {
  product.displayPrice - product.basePrice - discount
}
const applyDiscount = (arr, cb, discount)=>{
  for (let i = 0; i < arr.length; i++){
    cb(arr[i], discount)
  }
}

/* applyDiscount(dogProducts, applyFlatDiscount, 1)
applyDiscount(catProducts, applyPercentDiscount, .20)
console.log(dogProducts)
console.log(catProducts) */

const discountByCategory = (arr, cb, discount, category) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].category === category) {
      cb(arr[i], discount)
    }
  }
}

discountByCategory(dogProducts, applyFlatDiscount, 2, 1)
discountByCategory(catProducts, applyPercentDiscount, .10, 2)
// console.log(dogProducts)
// console.log(catProducts)

//apply discount according to inventory
const applyDiscountByInventory = (arr, cb, discount, amount) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].inventory < amount) {
      cb(arr[i], discount)
    }
  }  
}

applyDiscountByInventory(dogProducts, applyPercentDiscount, .25, 50)
console.log(dogProducts)

applyDiscountByInventory(catProducts, applyFlatDiscount, 2, 75)
console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

 
// CODE HERE
const makeSandwich = (bread) => {
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sandwich with `
    for (let i in ingredients) {
      if (i === ingredients.length - 1 && 1 !== 0) {
        order += `and ${ingredients[i]}.`
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]}, `
      } else {
        order += `${ingredients[i]}, `
      }
    }
    return order
  }
}

const mySandwich = makeSandwich('wheat')
console.log(mySandwich(['bacon', 'lettuce', 'tomato']))

