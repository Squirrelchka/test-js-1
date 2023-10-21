//1 с одной переменной

function logUserName(userName) {
  userName = userName + " bestUser";
  console.log(userName);
}
let anotherUser = "Ivan";
logUserName(anotherUser);
logUserName("Kris");

//2 с двумя переменными

function logUserName(surName, firstName) {
  let userName = surName + firstName;
  console.log(userName);
}
let anotherName = "Ivan";
let anotherSurName = " Ivanov";
logUserName(anotherName, anotherSurName);
logUserName("Gromova", " Kris");

//3

let age = 33;

function logUserName(surName, firstName) {
  let userName = surName + firstName;
  console.log(userName + "age is " + age);
}
let anotherName = "Ivan";
let anotherSurName = " Ivanov";
logUserName(anotherName, anotherSurName);
logUserName("Gromova", " Kris");

//4

function isLengthMoreThan6(text) {
  if (text > 6) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isLengthMoreThan6("Someword");

//5
function calculateLengthMoreThan6(text) {
  let length = text.length;
  console.log(length);
}
calculateLengthMoreThan6("Someword");

//6
function calculateLengthMoreThan6(text) {
  let length = text.length;
  console.log(length);
  return length;
}

let lengthOfWord = calculateLengthMoreThan6("Someword");
console.log(lengthOfWord);

//7 можно сократить код выше

function calculateLengthMoreThan6(text) {
  return text.length;
}
console.log(calculateLengthMoreThan6("Someword"));

//8 функция в функции

function calculateLengthMoreThan6(text) {
  return text.length;
}
console.log(calculateLengthMoreThan6("Someword"));

let result = calculateLengthMoreThan6("SameWord");

function logTextParameter() {
  let textInfo = result;
  return textInfo;
}
console.log();

//9 функции в тестировании

let respPositive200 = {
  code: 200,
  body: {
    text: "Some positive message",
  },
};

let respRedirect300 = {
  code: 300,
  body: {
    text: "Some redirect message",
  },
};

let isResponseOk = function (code, expectedCode) {
  if (code === expectedCode) {
    return true;
  } else {
    return false;
  }
};

function getInfoFromResponse(response, codeValidation, expectedCode){
    let text = response.body.text;
    if(!codeValidation(response.code, expectedCode)){
        console.log(`Not a ${expectedCode}`)
    }
    return text;
}

console.log(getInfoFromResponse(respRedirect300, isResponseOk, 200))

//10

let respPositive200 = {
    code: 200,
    body: {
      text: "Some positive message",
    },
  };
  
  let respRedirect300 = {
    code: 300,
    body: {
      text: "Some redirect message",
    },
  };
  
  let isResponseOk = function (code, expectedCode) {
    if (code === expectedCode) {
      return true;
    } else {
      return false;
    }
  };
  
  function getInfoFromResponse(response, codeValidation, expectedCode){
      let text = response.body.text;
      if(!codeValidation(response.code, expectedCode)){
          console.log(`Not a ${expectedCode}`)
      }
      let info = {}
      info.text = text;
      info.code = response.code
      return info;
  }
  
  console.log(getInfoFromResponse(respRedirect300, isResponseOk, 200))

  //11 стрелочная ф-ция тоже самое что это 
  //let isResponseOk = function (code, expectedCode) {
    //if (code === expectedCode) {
       // return true;
      //} else {
        //return false;
        //a
        let isResponseOk = (code, expectedCode)=> {
            if (code === expectedCode) {
              return true;
            } else {
              return false;
            }
          };
   //b
   
   let someArrowFunction = () => {return 55}
   console.log(someArrowFunction()) 
   
   //c
   
   let isValid = (code) => code === 200
   console.log(isValid(200))
