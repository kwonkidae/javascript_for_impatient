let obj = { name: 'Harry Smith', age: 42 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

(() => {
  let greeting = 'Hello ';
  for (const c of greeting) console.log(c);

  let numbers = [1, 2, , 4];
  numbers[99] = 100;
  for (const i in numbers) console.log(`${i}: ${numbers[i + 1]}`);
})();
