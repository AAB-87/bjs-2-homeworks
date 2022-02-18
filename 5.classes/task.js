// Задание 1

class PrintEditionItem { // Создание печатного изжания
	constructor(name, releaseDate, pagesCount) { // конструктор принимает параметры...)
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state; // с нижнем подчёркиыванием для того чтобы избежать зацикливание (если пишем this.state, то ссылаемся на get state)
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = "author";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

// Задание 2

class Library { // Создание библиотеки
	constructor(name) { // конструктор принимает параметры...)
		this.name = name;
		this.books = []; // пустой массив 
	}

	addBook(book) { // метод добавления книги в библиотеку который в качестве аргумента принимает объект (книгу)
		if (book.state > 30) { // если состояние книги больше 30и
			return this.books.push(book); // добавляем книгу в массив
		}
	}

	findBookBy(type, value) { // метод поиска книги в библиотеке в качестве аргумента принимает ключ (type) с помощью которого будет производиться поиск и искомое значение (value)
		let result = this.book.find((book) => book[type] === value); // ищем книгу в массиве (book), критерии - если элемент массива идентичен искомому значению помещаем его в result
		if (result === undefined) { // если книга не найдена вернуть null
        return null;
      } else {
        return result; // в случае успеха вернуть найденную книгу
      }
    }

    giveBookByName(bookName) { // выдача книги по названию
    	let bookSearch = this.book.find((book) => book.name === bookName); // ищем книгу в массиве (book), критерии - если элемент массива идентичен искомому значению помещаем его в giveBook
    	if (bookSearch === undefined) { // если книга не найдена вернуть null
        return null;
      } else {
      	delete this.bookName;
      }
    }
}