const scorePointsStud = require("./scorePoints");
describe('scorePointsStud', () => {
    it('max scorePoints from scorePoints', () => {
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
    
      expect(scorePointsStud (students)).toBe(50);
    }); 
    it('max scorePoints from scorePoints', () => {
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
    
      expect(scorePointsStud (students)).toBe();
    }); 
    
});

// it.each([
//   [[ { name: "Ivan", scorePoints: 20 },
//       { name: "Petr", scorePoints: 30 },
//       { name: "Vadim", scorePoints: 40 },
//       { name: "Olga", scorePoints: 50 } ], 50],
//   [[ { name: "Ivan", scorePoints: 20 },
//       { name: "Petr", scorePoints: 30 },
//       { name: "Vadim", scorePoints: 40 },
//       { name: "Olga", scorePoints: 50 }], 25],
// ])
// ('max scorePoints from scorePoints', (students, expected) => {
//   expect(scorePointsStud(students)).toBe(50);
// });

