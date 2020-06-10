const container = document.getElementById("die-container");
generateDie = document.getElementById("die-button"),
rollDice = document.getElementById("roll-button")
let diceArray = [];

class Die {
  constructor(value, x, y) {
    this.div = document.createElement("div");
    this.div.classList.add("new-die");
    this.div.style.left = `${x}px`;
    this.div.style.top = `${y}px`;
    this.div.style.border = "black, solid, 2px";
    this.div.appendChild(document.createTextNode(`${value}`));
    container.appendChild(this.div);
    this.div.addEventListener('click', () => {
        this.roll();
    });
    btn2.addEventListener('click', () => {
        this.roll();
    });
    this.div.addEventListener('dblclick', () => {
        this.deleteDie();
    });
  }
  roll() {
    let rollValue = randomVal(1, 7);
    $(this.div).empty();
    this.div.appendChild(document.createTextNode(`${rollValue}`));
  }

  deleteDie() {
      this.div.remove();
  }
}

let btn = document.getElementById("die-button");
let btn2 = document.getElementById("roll-button");
let btn3 = document.getElementById("sum-button");

btn.addEventListener("click", createDie);
btn3.addEventListener("click", sumDice);

function createDie() {
  let xVal = 25;
  let yVal = 25;
  let dieValue = randomVal(1, 7);
  let die = new Die(dieValue, xVal, yVal);
  diceArray.push(die);
  console.log(diceArray);
}

function sumDice(){
    var sum = 0;
     $('.new-die').each(function(){
         sum += parseFloat($(this).text());
     })
     $('#total').text(sum);
 };

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 
