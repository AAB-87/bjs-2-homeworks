// Задача 1 
// функция-преобразователь, которая возвращает число - если всё ок, и генерирует ошибку - если ввод не является числом в десятичной системе счисления.

function parseCount(value) {
  let parsed = Number.parseInt(value);
  if (Number.isNan(parsed)) {
    throw new Error("невалидное значение"); // в случае ошибки выбрасывает исключение с ошибкой...
  } else { // если ошибки нет, возвращает результат парсинга из функции
    return parsed;
  }
}

function validateCount(value) {
  try {
    let parsed = parseCount(value); // распарсить значение с помощью предыдущей функции
    return parsed;
  }
  catch (error) { // перехватываем исключение, которое может выбрасывать функция parseCount
    return error; // возвращаем ошибку из функции в случае перехвата исключения
  }
}

// Задача 2

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error("Треугольник с такими сторонами не существует")
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = 0.5 * (this.a + this.b + this.c);
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return Triangle = {
      getArea() {
        return "Ошибка! Треугольник не существует"
      }
      getPerimeter() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }

}