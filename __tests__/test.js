let algos = require("../matrixProduct.js")

// MATRIX PRODUCT

test("Create the new matrix product based on the given matrices", () => {
  expect(algos.matrixProduct(
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ])).toMatchObject([
      [19, 22], [43, 50]
    ])

})
