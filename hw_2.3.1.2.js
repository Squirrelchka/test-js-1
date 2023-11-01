const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: -33,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: undefined,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: "string",
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: null,
  },
];


let scores = [];

for (let player in players) {
let result = players[player].scorePoints;
 if (typeof result === "number" && result >= 0) {
    scores.push(result);
  }
}

//console.log(scores);

let maxScore = Math.max(...scores);
//console.log(maxScore);
//console.log(typeof maxScore);

if (scores.length > 0) {
  for (let player in players) {
    if (players[player].scorePoints === maxScore) {
      console.log(
        `Maxpoints has ${players[player].name}, its ${maxScore} points`
      );
    }
  }
} else {
  console.log("Нет ни одного результата, соответствующего заданным условиям");
}
