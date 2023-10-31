let yearlyExpences = [800, 450, 2000, 45550, 5000, 999, 3400, 4000, 5500, 1500, 789, 7000]
const monthes = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

function calculateExpences(expences) {
    let totalExpences = 0;
    for (let i = 0; i < expences.length; i++) {
      if (expences[i] > 1000) {
        totalExpences += expences[i];
      }
    }
    return totalExpences;
  }
  
  let total = calculateExpences(yearlyExpences);
  console.log("Сумма затрат выше 1000: " + total);

  //выводим месяцы

  function getMonth(expences) {
      let monthNames = [];
      for (let i = 0; i < expences.length; i++) {
      if (expences[i] <= 1000) {
         monthNames.push(monthes[i]);
             } 
    }
      return monthNames;
  }
  
  let monthNames = getMonth(yearlyExpences);
  console.log("Месяцы с затратами меньше или равными 1000: " + monthNames.join(", "));

  let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];
  
 function testCalculateExpences() {
    expencesExamples.forEach((example) => {
      let total = calculateExpences(example.yearlyExpences);
      console.log("Сумма затрат выше 1000: " + total);
    });
  }
  
  testCalculateExpences();

  function getMonth(expences) {
    let monthNames = [];
      for (let i = 0; i < expences.length; i++) {
      if (expences[i] <= 1000) {
        let currentDate = new Date(i + 1);
        monthNames.push(currentDate.toLocaleString('default', { month: 'long' }));
      }
    }
  
    return monthNames;
  }
  
  let monthNamesWithLowExpences = getMonth(yearlyExpences);
  console.log("Месяцы с затратами меньше или равными 1000: " + monthNamesWithLowExpences.join(", "));