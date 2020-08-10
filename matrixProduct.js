// MATRIX PRODUCT

const matrixProduct = (matrix1, matrix2) => {
  var result = new Array(matrix1.length).fill(0).map(() => new Array(matrix2[0].length).fill(0));
  
  return result.map((row, i) => {    
      return row.map((_, j) => {
          return matrix1[i].reduce((sum, element, k) => sum + (element*matrix2[k][j]) ,0)
      })
  })
}

console.table(
  matrixProduct(
    [
      [1, 2],
      [3, 2]
    ],
    [
      [3, 2],
      [1, 1]
    ]
  )
)

module.exports = {
  matrixProduct
}
