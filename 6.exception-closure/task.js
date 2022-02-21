// Задача 1 
// функция-преобразователь, которая возвращает число - если всё ок, и генерирует ошибку - если ввод не является числом в десятичной системе счисления.

function parseCount(value) {
  let parsed = Number.parseInt(value);
  if (Number.isNan(parsed)) { // если значение не является числовым
    throw new Error("невалидное значение"); // выбрасывает исключение с ошибкой...
  } else { // если числовым, возвращает результат парсинга из функции
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
// калькулятор треугольников, который сможет проверять существование треугольника, а так же считать площадь и периметр

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) { // если сумма двух сторон меньше третьей
      throw new Error("Треугольник с такими сторонами не существует"); // выбрасываем исключение
    } 
    this.a = a;
    this.b = b;
    this.c = c;
    
  }

  getPerimeter() {
    return this.a + this.b + this.c; // высчитываем периметр (сумма длинн всех сторон)
  }

  getArea() { // высчитываем площадь с помошью формулы Герона
    let p = 0.5 * (this.a + this.b + this.c);
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // Math.sqrt возвращает квадратный корень из числа в скобках
    return parseFloat(area.toFixed(3)); // в полученном результате оставляем 3 знака после запятой и преобразуем всё это в строку
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c); // Попытайтесь вернуть новый объект треугольника
  } catch (error) {
    return Triangle = { // случае перехвата исключения возвращайте объект с двумя методами, которые возвращают строку
      getArea() {
        let String = "Ошибка! Треугольник не существует"
        return String
      },
      getPerimeter() {
        let String = "Ошибка! Треугольник не существует"
        return String
      }
    }
  }
}