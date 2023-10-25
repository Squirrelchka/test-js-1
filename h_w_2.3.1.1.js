
const players = [
    {
      id: 1,
      name: "Ivan",
      scorePoints: 4500,
    },
    {
      id: 2,
      name: "Petr",
      scorePoints: 3600,
    },
    {
      id: 3,
      name: "Vadim",
      scorePoints: 3433,
    },
    {
      id: 4,
      name: "Olga",
      scorePoints: 2356,
    },
  ];
  console.log(players)
  
  let scores = [];
  
  for (let player in players) {
    scores.push(players[player].scorePoints);
  }
  console.log(scores)
  
  let maxScore = Math.max(...scores);
  console.log(maxScore)
  
  
