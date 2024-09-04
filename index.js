let age = 17;
if (age >= 18) {
  console.log('Вы совершеннолетний');
} else {
  console.log('Вы несовершеннолетний');
}

const number = 11;
if (number % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

let score = 60;
if (score < 30) {
  console.log('Неудовлетворительно');
} else if (score > 30 && score < 50) {
  console.log('Удовлетворительно');
} else if (score >= 50 && score <= 70) {
  console.log('Хорошо');
} else if (score > 70 && score < 100) {
  console.log('Отлично');
}

let day = 8;
switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Такого дня недели нет');
}

let grade = 4;
switch (grade) {
  case 1:
    console.log('Плохо');
    break;
  case 2:
    console.log('Удовлетворительно');
    break;
  case 3:
    console.log('Хорошо');
    break;
  case 4:
    console.log('Очень хорошо');
    break;
  case 5:
    console.log('Отлично');
    break;
}

let hour = 12;
switch (true) {
  case hour >= 0 && hour < 5:
    console.log('Доброй ночи!');
    break;
  case hour >= 6 && hour < 9:
    console.log('Доброе утро!');
    break;
  case hour >= 10 && hour < 17:
    console.log('Добрый день!');
    break;
  case hour >= 18 && hour <= 23:
    console.log('Добрый вечер!');
    break;
}

for (let a = 1; a <= 10; a++) {
  console.log('Число ' + a);
}

let sum = 0;
for (let b = 1; b <= 100; b++) {
  console.log((sum += b));
}

for (let n = 0; n <= 18; 0) {
  console.log((n += 2));
}

let c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

let summa = 0;
let i = 1;
while (i < 50) {
  console.log((summa += i));
  i++;
}

let t = 2;
while (t <= 20) {
  console.log(t);
  t += 2;
}
