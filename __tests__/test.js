let algos = require("../matrixProduct.js")

// MATRIX PRODUCT

test("Create the new matrix product based on the given matrices", () => {
  expect(algos.matrixProduct(
    [
      [8, 1, 5],
      [6, 2, 6],
      [22, 30, 14]
    ],
    [
      [11, .2, 3],
      [.6, 1, .2],
      [20, 3.1, 10],
    ])).toMatchObject([
      [188.6, 18.1, 74.2],
      [187.2, 21.8, 78.4],
      [540, 77.8, 212]
    ])

})
