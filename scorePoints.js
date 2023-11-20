const students = [
  [
    { "name": "Ivan", "scorePoints": 35, "date": "2022-10-11" },
    { "name": "Maria", "scorePoints": 5, "date": "2022-10-10" },
    { "name": "Olga", "scorePoints": 0, "date": "" },
    { "name": "Stepan", "scorePoints": 35, "date": "2022-10-12" },
    { "name": "Oleg", "scorePoints": 9, "date": "2022-10-01" },
    { "name": "Zanna", "scorePoints": 15, "date": "2022-10-11" }
  ],
  [
    { "name": "Margo", "scorePoints": 0, "date": "2022-10-11" },
    { "name": "Natalia", "scorePoints": 25, "date": "2022-10-10" },
    { "name": "Marina", "scorePoints": 25, "date": "2022-10-01" },
    { "name": "Dmitry", "scorePoints": 25, "date": "2022-10-12" },
    { "name": "Denis", "scorePoints": 0, "date": "2022-10-02" },
    { "name": "Vadimyr", "scorePoints": 1, "date": "2022-10-11" }
  ],
  [
    { "name": "Irina", "scorePoints": 0, "date": "2022-10-11" },
    { "name": "Vasily", "scorePoints": 0, "date": "2022-10-10" },
    { "name": "David", "scorePoints": 0, "date": "2022-10-11" },
    { "name": "Kristina", "scorePoints": 0, "date": "2022-10-12" },
    { "name": "Varvara", "scorePoints": 0, "date": "2022-10-01" },
    { "name": "Tanya", "scorePoints": 0, "date": "2022-10-11" }
  ]
]
function scorePointsStud(arr) {
  let scores = [];

  for (let el in arr) {
    scores.push(arr[el].scorePoints);
  }


  let maxScore = Math.max(...scores);

 
  for (let el in arr) {
    if (arr[el].scorePoints === maxScore) {
      console.log(
        `Congratulations! ${arr[el].name}, you have earned the maximum points at ${arr[el].date}, its ${maxScore} `
      );
       }
         }
         return maxScore
}

students.forEach((el)=> scorePointsStud(el))

module.exports = scorePointsStud;
 