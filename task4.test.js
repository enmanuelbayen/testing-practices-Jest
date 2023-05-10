const capitalize = require('./task4');

test("capitalize function capitalizes first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  