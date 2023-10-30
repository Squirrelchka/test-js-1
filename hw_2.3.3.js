

let balance = 500;
let packageCost = 100;
let smsCode = "A001DFX0"
let view = [null, null, null, "1432HGF", null];
let packageId = "1432HGF";
let cellNumber = "№4";

function post(sms){ 
if(sms === smsCode) {
    balance -= packageCost;
    view[3] = null
console.log(`Заберите посылку ${packageId} из ячейки ${cellNumber}. Ваш счет составляет ${balance}`)
}else(console.log("Вы ввели неверный код из смс"))

}

post("A001DFX0")

console.log(view)
