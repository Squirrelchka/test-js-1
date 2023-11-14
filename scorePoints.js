const students = [
  {
    name: "Ivan",
    scorePoints: 20,
  },
  {
    name: "Petr",
    scorePoints: 30,
  },
  {
    name: "Vadim",
    scorePoints: 40,
  },
  {
    name: "Olga",
    scorePoints: 50,
  },
];

function scorePointsStud(arr) {
  let scores = [];

  for (let el in arr) {
    scores.push(arr[el].scorePoints);
  }

  let maxScore = Math.max(...scores);
  for (let el in arr) {
    if (arr[el].scorePoints === maxScore) {
      console.log(
        `Congratulations! ${arr[el].name}, you have earned the maximum points its ${maxScore}`
      );
    return maxScore
    }
  }
}

scorePointsStud(students);

module.exports = scorePointsStud;
