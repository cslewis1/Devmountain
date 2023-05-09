const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions");

test("returnTwo should return the number 2", () => {
    expect(returnTwo()).toBe(2);
});
  
// test("greetings should return Hello, value of name param", () => {
//     expect(greeting('Neaka')).toBe('Hello, Neaka');
// })

test("add should return the sum of num1 and num2", () => {
    expect(add(5,9)).toBe(14)
})

describe("Math functions", () => {
    test("add should return the sum of num1 & num2", () => {
        expect(add(1,2)).toBe(3)
    });
    test("multiply should return the product of num1 & num2", () => {
        expect(multiply(1,2)).toBe(2)
    });
    test("divide should return the result of dividing num1 by num2", () => {
        expect(divide(4,2)).toBe(2)
    });
    test("subtract should return the result of subtracting num2 from num1", () => {
        expect(subtract(5,2)).toBe(3)
    });
  });
