const Calculator = require('./task3');

describe("Calculator", () => {
    let calc;
  
    beforeEach(() => {
      calc = new Calculator();
    });
  
    describe("add method", () => {
      test("adds two positive numbers", () => {
        expect(calc.add(2, 3)).toBe(5);
      });
  
      test("adds two negative numbers", () => {
        expect(calc.add(-2, -3)).toBe(-5);
      });
  
      test("adds a positive and a negative number", () => {
        expect(calc.add(2, -3)).toBe(-1);
      });
    });
  
    describe("subtract method", () => {
      test("subtracts a smaller number from a larger number", () => {
        expect(calc.subtract(5, 2)).toBe(3);
      });
  
      test("subtracts a larger number from a smaller number", () => {
        expect(calc.subtract(2, 5)).toBe(-3);
      });
  
      test("subtracts zero from a number", () => {
        expect(calc.subtract(5, 0)).toBe(5);
      });
    });
  
    describe("multiply method", () => {
      test("multiplies two positive numbers", () => {
        expect(calc.multiply(2, 3)).toBe(6);
      });
  
      test("multiplies two negative numbers", () => {
        expect(calc.multiply(-2, -3)).toBe(6);
      });
  
      test("multiplies a positive and a negative number", () => {
        expect(calc.multiply(2, -3)).toBe(-6);
      });
    });
  
    describe("divide method", () => {
      test("divides a number by a smaller number", () => {
        expect(calc.divide(6, 2)).toBe(3);
      });
  
      test("divides a number by a larger number", () => {
        expect(calc.divide(2, 5)).toBeCloseTo(0.4);
      });
  
      test("throws an error when dividing by zero", () => {
        expect(() => calc.divide(6, 0)).toThrow("Cannot divide by zero");
      });
    });
  });
  
