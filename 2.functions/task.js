// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { // если элемент больше предыдущего максимума, то максимум становится равен элементу
      max = arr[i];
    }
    if (arr[i] < min) { // если элемент меньше предыдущего минимума, то минимум становится равен элементу
      min = arr[i];
    }
    sum = arr[i] + sum;
  }

  let avg = sum / arr.length; // получившеюся сумму делим на кол-во чисел в массиве

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}


// Задание 2
function worker(arr) { // находит сумму элементов массива и возвращает её
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]); // makeWork применяет полученную функцию worker к каждому из полученных массивов worker(arrOfArr[i]) вычисляя таким образом сумму элементов.
    if (sum > max) { // если сумма элементов массива больше предыдущего максимума, то меняем максимум
      max = sum;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let arrayParams = getArrayParams(arr); // для решения используем функцию из Задания 1. Обернули функцию в новую переменную
  let difference = Math.abs(arrayParams.max - arrayParams.min); // метод Math.abs() возвращает абсолютное значение числа. 
  return difference;
}
