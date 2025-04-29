// 5. Створити клас Counter
// Опис:
// Створи клас Counter, у якого є:

// поле count (починається з 0),

// метод increment() (збільшує count на 1),

// метод decrement() (зменшує count на 1),

// метод reset() (обнуляє count).

// Приклад:

class Counter {
  #count;

  constructor() {
    this.#count = 0;
  }

  increment() {
    this.#count += 1;
  }

  decrement() {
    this.#count -= 1;
  }

  reset() {
    this.#count = 0;
  }

  get count() {
    return this.#count;
  }

  set count(newValue) {
    this.#count = newValue;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.count); // 2
counter.reset();
console.log(counter.count); // 0
counter.count = 10;
console.log(counter.count);
