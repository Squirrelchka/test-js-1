console.log("Hi, JS Student");
console.log("Hi, JS Student1");
console.log("Hi, JS Student2");
console.log("Hi, JS Student3");

let userName, anotherName, moreName;

userName = "Kris";
anotherName = "Ivan";
//anotherName = userName; //some text

console.log(userName);
console.log(anotherName);

const BIRTH_DAY = "03.03.1983";
//BIRTH_DAY = "01.03.1983" //not passible
console.log(BIRTH_DAY);

let balance = 100;
let penalty = balance < 0 ? 50 : 0;
console.log(penalty);

let stringType = 'another"text"';
console.log(stringType);

let stringType2 = 'text with "braces"';

console.log(stringType2);

const INCOME = [1000, 4500, 3000, 5000];
INCOME.push(1987);
console.log(INCOME);

let newName = "Kris";
let surName = "Gromova";
let fullName = newName + " " + surName;
console.log("This is my fullName " + fullName);

let newName = "Kris";
let surName = "Gromova";
let fullName = newName + " " + surName;
console.log(`This is my fullName ${fullName}\u23E9.`);
let nameLength = newName.length;
console.log(nameLength);
console.log(newName.charAt(1))

let newName = "Kris";
let surName = "Gromova";
let fullName = newName + " " + surName;
console.log(`This is my fullName ${fullName}\u23E9.`);

let nameLength = newName.length;
let index = 3
console.log(`The symbol for ${index} position is ${newName.charAt(index)}`);
console.log (`Length of the name is ${nameLength}`);

console.log(newName. toLowerCase())
console.log(newName < surName)

let whatsapp = 50
let fb = 25
let insta = 90
let spotyfy = 130
let total = whatsapp + fb + insta + spotyfy

console.log(total)
console.log(total/4)

console.log(Math.ceil(total/4))
console.log(Math.floor(total/4))