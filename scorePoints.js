const students = [
  [
    { name: "Ivan", scorePoints: 35, date: "2022-10-11" },
    { name: "Maria", scorePoints: 5, date: "2022-10-10" },
    { name: "Olga", scorePoints: 0, date: "" },
    { name: "Stepan", scorePoints: 35, date: "2022-10-12" },
    { name: "Oleg", scorePoints: 9, date: "2022-10-01" },
    { name: "Zanna", scorePoints: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", scorePoints: 0, date: "2022-10-11" },
    { name: "Natalia", scorePoints: 25, date: "2022-10-10" },
    { name: "Marina", scorePoints: 25, date: "2022-10-01" },
    { name: "Dmitry", scorePoints: 25, date: "2022-10-12" },
    { name: "Denis", scorePoints: 0, date: "2022-10-02" },
    { name: "Vadimyr", scorePoints: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", scorePoints: 0, date: "2022-10-11" },
    { name: "Vasily", scorePoints: 0, date: "2022-10-10" },
    { name: "David", scorePoints: 0, date: "2022-10-11" },
    { name: "Kristina", scorePoints: 0, date: "2022-10-12" },
    { name: "Varvara", scorePoints: 0, date: "2022-10-01" },
    { name: "Tanya", scorePoints: 0, date: "2022-10-11" },
  ],
];
function scorePointsStud(arr) {
  // создаем массив, куда будем заносить значения полей scorePoint

  let scores = [];

  // циклом перебираем поля scorePoints и заносим их в массив scores

  for (let el in arr) {
    scores.push(arr[el].scorePoints);
  }

  // находим максимальное значение из всех в scores

  let maxScore = Math.max(...scores);

  // создаем объект, куда будем заносить значения формата key - значение students.name, value - значение students.date

  let dateObj = {};

  // циклом перебираем students

  for (let el in arr) {
    // если значение scorePoints является максимальным, то заносим в dateObj имя студента и дату в формате количества секунд

    if (arr[el].scorePoints === maxScore) {
      dateObj[arr[el].name] = new Date(arr[el].date).getTime();
    }
  }

    // присваиваем переменной значение имени студента, у которого наименьшее количество в поле value в dateObj.
  // перебираем ключи и находим среди них тот, у которого наименьший value

  let minDateKeyName = Object.keys(dateObj).reduce((a, b) =>
    dateObj[a] < dateObj[b] ? a : b
  );

  // выводим сообщение с именем студента, у которого наименьшее время выполнение задания и максимальный балл,
  //  а также дату выполнения. дату получаем обратно из секунд value в dateObj

  let finalAnswer = `Congratulations! ${minDateKeyName}, you have earned the maximum ${maxScore} points at ${new Date(Math.min(...Object.values(dateObj))).toISOString().split("T")[0]}`
  console.log(finalAnswer);

  // возвращаем значение finalAnswer , нужен для тестов

  return finalAnswer;
  
}

students.forEach((el) => scorePointsStud(el));
module.exports = scorePointsStud;
