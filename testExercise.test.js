const stringLength = require('./testExercise');

test("test 1", () => {
    expect(() => stringLength("")).toThrow("Input string must be at least 1 character long.");
    expect(() => stringLength("12345678901")).toThrow("Input string must not be longer than 10 characters.");
    expect(stringLength("hola")).toBe(4);
  });

test("test 2", () => {
    expect(() => stringLength("")).toThrow("Input string must be at least 1 character long.");
    expect(() => stringLength("12345678901")).toThrow("Input string must not be longer than 10 characters.");
    expect(stringLength("mundo!")).toBe(6);
  });