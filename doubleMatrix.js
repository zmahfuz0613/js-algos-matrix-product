//DOUBLE MATRIX
// create a new matrix based on the pattern below

// C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = 1*3 + 2*1 =  5
// C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] = 1*2 + 2*1 =  4
// C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3*3 + 2*1 = 11
// C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3*2 + 2*1 =  8

//your output for matrix C would be 

const doubleMatrix = (matrix1, matrix2) => {
 

 
  
}

console.log(
  doubleMatrix(
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
  doubleMatrix
}
