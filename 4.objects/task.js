function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) { // создаём доступный для всех студентов метод, который при вызове будет устанавливать новый предмет для изучения студенту 
  this.subject = subjectName; // присваиваем значение полю sabject
}

Student.prototype.addMark = function (mark) { // создаём доступный для всех студентов метод, который при вызове будет устанавливать оценку студенту по предмету 
  if(this.marks === undefined) { // true если this.marks тоже undefined. Т.е. если массив marks не имеет значений, то он не существует
    this.marks = [mark]; // создаём массив и добавляем в него первую оценку
  } else {
    this.marks.push(mark); // добавляем вторую оценку в существующий массив
    }
}

Student.prototype.addMarks = function (...marks) { // создаём доступный для всех студентов метод, который при вызове будет добавляеть студенту сразу несколько оценок
  if(this.marks === undefined) { // true если this.marks тоже undefined. Т.е. если массив marks не имеет значений, то он не существует
    this.marks = [...marks]; // добавляем все новые оценки в существующий массив
  } else {
    this.marks.push(...marks); // добавляем новые оценки в существующий массив
    }
}

Student.prototype.getAverage = function (marks) { // метод принимает на вход массив оценок и возвращает среднюю
  let sum = this.marks.reduce((acc, marks) => acc + marks, 0); // в функцию reduce передаём аккумулятор и массив. Аккумулятор накапливает значение при перебе массива
  let length = this.marks.length; // в переменную length передаём длинну массива (кол-во елементов)
  return sum / length; // возвращаем сумму массива делённую на кол-во элементов
}

Student.prototype.exclude = function (reason) { // метод исключения студента из учебного процесса, принимает причину
  this.excluded = reason; 
  delete this.subject; // удаляем предметы
  delete this.marks; // удадяем оценки
}