let numbers = document.querySelector(".js-numbers");
let betNumber = document.querySelector(".js-betNumber");
let moneyLabel = document.querySelector(".js-money");
let money = 50;
let result = document.querySelector(".js-result");
const playButton = document.querySelector(".js-PlayButton");
const resetButton = document.querySelector(".js-resetButton");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

playButton.addEventListener("click", function() {
    const machine = getRandomNumber(6);
    const player = parseInt(numbers.value);
    console.log(machine);
    console.log (parseInt(numbers.value));

    if (!Number(betNumber.value)) {
        result.innerHTML = "Tienes que indicar la apuesta.";
    } else if (betNumber.value > money) {
        result.innerHTML = "No puedes apostar.";
        playButton.classList.add("hidden");
    } else if (money > 199) {
        resetButton.classList.remove("hidden");
        result.innerHTML = "¡Has ganado!";
    } else {

        if (machine === player) {
            result.innerHTML = "Has ganado el doble de lo apostado.";
            money += parseInt(betNumber.value) * 2;
            moneyLabel.value = `Saldo: ${money}`;
        } else { 
            result.innerHTML = "Has perdido lo apostado.";
            money -= parseInt(betNumber.value);
            moneyLabel.value = `Saldo: ${money}`;
        }
    }
});

resetButton.addEventListener("click", function() {
    money = 50;
    playButton.classList.remove("hidden");
    resetButton.classList.add("hidden");
});

