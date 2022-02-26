// Программа-будильник-колыбельная с возможностью добавления, удаления, запусков и остановки звонков.

class AlarmClock { // создаём будильник
	constructor() {
		this.alarmCollection = []; // свойство для хранения коллекции звонков (для содержания массива с различными id)
		this.timerId = null; // свойство для хранения id таймера
	}

	addClock(time, callback, id) { // метод добавляет новый звонок в коллекцию существующих
		if (id === undefined) { // если параметр id не передан пользователем
			throw new Error('error text'); // выбрасываем ошибку
		} else if (this.alarmCollection.some((element) => element.id === id)) { // если в alarmCollection содержится такой же id
			return console.error('error text'); // выбрасываем ошибку
		}
		return this.alarmCollection.push({id, time, callback}); // добавляем в массив новый объект звонка
	}

	removeClock(id) { // метод удаляет определённый звонок
		let firstArr = this.alarmCollection.length; // узнаём длину существующего массива и сохраняем её в переменную
		this.alarmCollection = this.alarmCollection.filter((element) => element.id 	!== id); // фильтруем массив и сохраняем его
		let secondArr = this.alarmCollection.length; // сохраняем длину фильтрованного массива в новую переменную
		return firstArr > secondArr; // сравниваем переменные
	}

 	getCurrentFormattedTime() {
  	return new Date().toTimeString().slice(0, 5); // создаём новый объект Date, возвращаем его часть содержащую только время, оставляем 5 символов: HH:MM
	}

	start() {
		if (this.timerId === null) { // если значение идентификатора текущего таймера отсутствует, то создайте новый интервал
			this.timerId = setInterval(() => {this.alarmCollection.forEach(id => this.checkClock(id)); }, 1000); // в интервале реализована функция, которая будет перебирать все звонки, и для каждого вызывать функцию checkClock
		}
	}

	checkClock(clock) { // функция проверки
		if (clock.time == this.getCurrentFormattedTime()) { // если текущее время совпадает со временем звонка, то вызывается колбек
			return clock.callback();
		}
	}

	stop() { // метод останавливает выполнение всех звонков
		if (this.timerId !== null) { // проверка существования идентификатора текущего таймера
			clearInterval(this.timerId); // если у идентификатора текущего таймера есть значение, то вызываем функцию clearInterval для удаления интервала
		}
		return this.timerId = null; // а так же удаляем значение из свойства "идентификатор текущего таймера"
	}

	printAlarms() { // метод печатает все звонки
		this.alarmCollection.forEach((element) => {console.log(element.id, element.time)}); // перебираем все звонки и выводим в консоль id звонка и его время
	}

	clearAlarms() { // метод  удаляет все звонки
		this.stop(); // вызываем метод остановки интервала
		this.alarmCollection = []; // удаляет все звонки присвоив пустой массив (обнуление массива)
	}
}
