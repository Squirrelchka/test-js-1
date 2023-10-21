//1
let testUser = new Object();
testUser.name = "Kris";
testUser.age = 40;
testUser.city = "Moscow";
console.log(testUser);

//2
let testUserLiteral = {
  name: "Kris",
  Age: 40,
  city: "Moscow",
};
console.log(testUserLiteral);

//3
let testUserArray = new Array("Kris", 37, "Moscow");
console.log(testUserArray);

//4
let testUserFunction = new Function(
  "userName",
  "age",
  "city",
  "return userName + age + city"
);
console.log(testUserFunction("Kris ", 40, " Moscow"));

//5 проперти также может быть в ковычках
let testUserSimple = {
  name: "Kris",
  Age: 40,
  "city": "Moscow",
};
console.log(testUserSimple);

//6 обращение к значениям внутри объекта
let testUserSimple = {
    name: "Kris",
    Age: 40,
    "city": "Moscow",
  };
  console.log(testUserSimple);
  testUserSimple.car = "Ford"
  console.log(testUserSimple)

  // 7 название св-ва передаем через переменную
  let testUserSimple = {
    name: "Kris",
    Age: 40,
    "city": "Moscow",
  };
  console.log(testUserSimple);
  let newProp = "car"
  testUserSimple[newProp] = "Ford"
  console.log(testUserSimple)  

  //8 исп-ие значений в условиях

  let testUserSimple = {
    name: "Kris",
    Age: 40,
    "city": "Moscow",
  };
  console.log(testUserSimple);
  let newProp = "car"
  let value = "Ford"
  testUserSimple[newProp] = value
  console.log(testUserSimple)  

  if(testUserSimple.Age > 30) {
    console.log("We can offer a credit for  you")
  }else {
    console.log("You are too young")
  }

  //9 исп=ие нескольких знач.
  let testUserSimple = {
    name: "Kris",
    Age: 40,
    "city": "Moscow",
  };
  console.log(testUserSimple);
  let newProp = "car"
  let value = "Ford"
  testUserSimple[newProp] = value
  console.log(testUserSimple)  

  if(testUserSimple.Age > 30 && testUserSimple.car == "audi") {
    console.log("We can offer a credit for  you")
  }else {
    console.log("You are too young or you dont have a Ford")
  }

  //10 исп-ие разных объектов для одних и тех же целей
let anotherTestUser = testUserSimple;
console.log(anotherTestUser);

anotherTestUser.name = "yana"
console.log(anotherTestUser);
console.log(testUserSimple); //изменяется и в имени изначального объекта тк уровняли anotherTestUser = testUserSimple. В этом случае выход создать отдельный объект

//11 методы к-е есть в фун-ях
let calculation = {
    april: 5000,
    may: 4000,
    june: 3000,
    calculateAverage: function() {
        let average = (calculation.april + calculation.may + calculation.june)/3
        console.log(`average for ${calculation.april}, ${calculation.may}, ${calculation.june}, is ${average}`)
    }
}
calculation.calculateAverage();