const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;//переменным присвоенны значения и рассчитана сумма
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;//рассчитан бонус 
    return bonus;
};

console.log(calculateBonus(50, 1));

