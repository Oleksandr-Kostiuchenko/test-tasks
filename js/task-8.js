// 3. Фільтрація об'єктів за властивістю
// Опис:
// Є масив об'єктів. Напиши функцію filterByProperty(arr, property, value), яка залишає тільки ті об'єкти, де властивість дорівнює значенню.

const filterByProperty = (dataArr, key, keyValue) => {
  return dataArr.filter((el) => el[key] === keyValue);
};

const users = [
  { name: "Yevhen", active: true },
  { name: "Oleh", active: false },
  { name: "Alex", active: true },
  { name: "Valentina", active: false },
  { name: "Olga", active: false },
  { name: "Polina", active: true },
];
console.log(filterByProperty(users, "active", true));
console.log(filterByProperty(users, "active", false));
