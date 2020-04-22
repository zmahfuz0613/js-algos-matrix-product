# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

## Mini Algorithm Exercise

"Matrix Product"

_Difficulty Rating: Hard_

### Objectives

- Create a function which accepts two [square matrices](https://en.wikipedia.org/wiki/Square_matrix) as arguments (`matrix1` and `matrix2`), represented by 2 dimensional arrays, and returns the [matrix product](https://en.wikipedia.org/wiki/Matrix_multiplication).

_i.e.:_

```js

// input
([
  [1, 2],
  [3, 2]
], [
  [3, 2],
  [1, 1]
])

// output
[
  [5, 4],
  [11, 8]
]
```

_For a more detailed breakdown:_

```js
// C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = 1*3 + 2*1 =  5
// C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] = 1*2 + 2*1 =  4
// C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3*3 + 2*1 = 11
// C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3*2 + 2*1 =  8
```

### Getting Started

- Fork and clone this repo.
- Run `npm i` from within the repo.
- Run `npm run test` or `npm test` to make sure the tests work. (They should fail.)
- Get hacking on the problem and test when you think you've got it!

### Notes

- No `for` loops or unary incrementors/decrementors (`++` or `--`) allowed.
- For a visual represtation of matrix multiplication, [check this website](http://matrixmultiplication.xyz/).

Pull requests due by 11pm. Happy hacking!