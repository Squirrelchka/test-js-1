class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }

  onClick() {
    console.log(
      `Button width: ${this.width}, height: ${this.height}, type: ${this.type}, color: ${this.color}`
    );
  }
}

let newButton1 = new Button(5, 1, "button", "green");
let newButton2 = new Button(5, 12, "button", "green");

function testButton(btn1, btn2) {
if (btn1.width === btn2.width && 
  btn1.height === btn2.height && 
  btn1.type === btn2.type && 
  btn1.color === btn2.color) {
  console.log("true");
} else {
  console.log("false");
}
}

testButton(newButton1, newButton2);
