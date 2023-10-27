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

let newButton1 = new Button(5, 12, "button", "green");
let newButton2 = new Button(52, 15, "button", "red");

newButton1.onClick();

function testButton(obj) {
   console.log(obj instanceof Button )
  }

testButton(newButton2);
