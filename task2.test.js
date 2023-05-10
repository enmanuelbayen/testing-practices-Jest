const reverseString = require('./task2');

test("reverseString function should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });
  