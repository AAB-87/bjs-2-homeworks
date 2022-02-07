// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > max) {
      max = i;
    } else if (i < min) {
      min = i;
    }
    sum = i + sum;
  }
  
  let avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}



// Задание 2
function worker(arr) {
  let sum;

  for (let i = 0; i < arr.length; i++) {
    sum = i + sum;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}




// Задание 3
function worker2(arr) {
  // Ваш код
}
