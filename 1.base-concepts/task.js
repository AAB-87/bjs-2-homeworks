"use strict" // активация строгого режима

function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d;
  let x;
  let x1;
  let x2;

  d = b ** 2 - 4 * a * c

  // Формула для вычисления корня [1]
  x = -b / (2 * a),
  arr.push('x')

  // Формула для вычисления 2х корней [2]
  x1 = (-b + Math.sqrt(d)) / (2 * a)
  arr.push('x1')
  x2 = (-b - Math.sqrt(d)) / (2 * a)
  arr.push('x2')

  if (d == 0) {
    arr = [x];
  } else if (d > 0) {
    arr = [x1, x2];
  }
    return arr; // array
}


// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
