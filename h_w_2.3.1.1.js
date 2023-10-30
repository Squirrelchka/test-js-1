
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
    let scores = [];
  
  for (let player in players) {
    scores.push(players[player].scorePoints);
  }
      
  let maxScore = Math.max(...scores);
  console.log(maxScore)

  for(let player in players){
    if(players[player].scorePoints === maxScore){
      console.log(`Maxpoints has ${players[player].name}, its ${maxScore} points`)
    }
  }


  // Граничные значения
  let minScore = Math.min(...scores);
  console.log(minScore);

  let MinScore = minScore + 1;
  let MaxScore = maxScore - 1;
  console.log(MinScore);
  console.log(MaxScore);

  let MinScore2 = minScore - 1;
  let MaxScore2 = maxScore + 1;
  console.log(MinScore2);
  console.log(MaxScore2);
  
   
  
