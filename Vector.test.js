const Vector = require("./libraries/Vector");

test("new Vector is a Vector", () => {
  expect(new Vector(0, 0)).toBeInstanceOf(Vector);
});
