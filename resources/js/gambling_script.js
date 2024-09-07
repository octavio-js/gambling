let money = 1000;
let wins = 0;
let losses = 0;
let mul1 = 0;
let mul2 = 0;
let mul3 = 0;
let mul4 = 0;
let mul5 = 0;
let mul6 = 0;
let mul7 = 0;
let mul8 = 0;
let mul9 = 0;

const moneyGambled1 = document.getElementById("money_gambled1");
const moneyGambled2 = document.getElementById("money_gambled2");
const gambleButton1 = document.getElementById("gamble_button1");
const gambleButton2 = document.getElementById("gamble_button2");
const multiplyBy2 = document.getElementById("multiply_2x");
const divideByHalf = document.getElementById("divide_2x");
const rules1 = document.getElementById("rules1");
const rules2 = document.getElementById("rules2");
const currentMoney = document.getElementById("current_money");
const multiplierSelected = document.getElementById("multiplier");
const profitMade = document.getElementById("profit_made");

const winsFirstGame = document.getElementById("wins_50");
const lossesFirstGame = document.getElementById("losses_50");
const numOfMul1 = document.getElementById("num_01");
const numOfMul2 = document.getElementById("num_02");
const numOfMul3 = document.getElementById("num_05");
const numOfMul4 = document.getElementById("num_1");
const numOfMul5 = document.getElementById("num_3");
const numOfMul6 = document.getElementById("num_5");
const numOfMul7 = document.getElementById("num_10");
const numOfMul8 = document.getElementById("num_25");
const numOfMul9 = document.getElementById("num_100");

const multiplier = [
  { number: 0.1, weight: 200},
  { number: 0.2, weight: 120},
  { number: 0.5, weight: 100},
  { number: 1, weight: 85},
  { number: 3, weight: 55},
  { number: 5, weight: 25},
  { number: 10, weight: 10},
  { number: 25, weight: 3},
  { number: 100, weight: 2}
]

gambleButton1.addEventListener('click', gambleFun1);
gambleButton2.addEventListener('click', gambleFun2);
multiplyBy2.addEventListener('click', multiply);
divideByHalf.addEventListener('click', divide);

function gambleFun1() {
  if (money == 0) {
    rules1.innerText = "You do not have enough money!";
    alert("You lost all your money! Please refresh the page to start over.");
  } else {
    let amount = Math.round(parseFloat(moneyGambled1.value));
    if (isNaN(amount) || amount > money || amount <= 0) {
        alert("Enter a valid amount of money!");
      } else {
        money -= amount;
        currentMoney.innerText = money + "$";

      const win = Math.random() < 0.5; // 50% chance to win or lose

      if(win) {
        money += Math.round(amount * 2);
        currentMoney.innerText = money + "$";
        wins++;
        winsFirstGame.innerText = wins;
        profitMade.innerText = money - 1000 + "$";
      } else {
        losses++;
        lossesFirstGame.innerText = losses;
        profitMade.innerText = money - 1000 + "$";
      }
    }
  }
}

function gambleFun2() {
  if (money == 0) {
    rules2.innerText = "You do not have enough money!";
    alert("You lost all your money! Please refresh the page to start over.");
  } else {
    let amount = Math.round(parseFloat(moneyGambled2.value));

    if (isNaN(amount) || amount > money || amount <= 0) {
        alert("Enter a valid amount of money!");
      } else {

        const totalWeight = multiplier.reduce((acc, curr) => acc + curr.weight, 0);
        let randomWeight = Math.random() * totalWeight;

        let selectedNumber;
        for(const num of multiplier) {
          randomWeight -= num.weight;
          if(randomWeight <= 0) {
            selectedNumber = num.number;
            break;
          }       
        }

        money -= amount;
        money += Math.round(amount * selectedNumber);
        currentMoney.innerText = money + "$";
        multiplierSelected.innerText = selectedNumber + "X";
        profitMade.innerText = money - 1000 + "$";

        if (selectedNumber == 0.1) {
          mul1++;
          numOfMul1.innerText = mul1;
        } else if (selectedNumber == 0.2) {
          mul2++;
          numOfMul2.innerText = mul2;
        } else if (selectedNumber == 0.5) {
          mul3++;
          numOfMul3.innerText = mul3;
        } else if (selectedNumber == 1) {
          mul4++;
          numOfMul4.innerText = mul4;
        } else if (selectedNumber == 3) {
          mul5++;
          numOfMul5.innerText = mul5;
        } else if (selectedNumber == 5) {
          mul6++;
          numOfMul6.innerText = mul6;
        } else if (selectedNumber == 10) {
          mul7++;
          numOfMul7.innerText = mul7;
        } else if (selectedNumber == 25) {
          mul8++;
          numOfMul8.innerText = mul8;
        } else if (selectedNumber == 100) {
          mul9++;
          numOfMul9.innerText = mul9;
        }
    }
  }
}

function multiply() {
  let amount = Math.round(parseFloat(moneyGambled2.value));
  moneyGambled2.value = amount * 2; // Update the input field with the new value
}

function divide() {
  let amount = Math.round(parseFloat(moneyGambled2.value));
  moneyGambled2.value = amount / 2; // Update the input field with the new value
}