const scorePointsStud = require("./scorePoints");
describe("scorePointsStud", () => {
  it("max scorePoints from scorePoints", () => {
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
    const answers = [
      "Congratulations! Ivan, you have earned the maximum 35 points at 2022-10-11",
      "Congratulations! Marina, you have earned the maximum 25 points at 2022-10-01",
      "Congratulations! Varvara, you have earned the maximum 0 points at 2022-10-01",
    ];
    for (let i = 0; i < students.length; i++) {
      expect(scorePointsStud(students[i])).toBe(answers[i]);
    }
  });
});
