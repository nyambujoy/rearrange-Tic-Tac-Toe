const startBtn = document.getElementById("start")
const modal = document.querySelector(".modal")
const closeBtn = document.getElementById("close")
const form = document.querySelector("#myForm")

const submitBtn = document.getElementById("submit")

startBtn.addEventListener("click", () => {
    modal.showModal()

})

closeBtn.addEventListener("click", () => {
    modal.close()
    // alert("hello")
})

submitBtn.addEventListener("click", () => {
    modal.close()
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    const second = intiliazing(data)
    second(data)
    // console.log(second)
})

const cards = document.querySelectorAll(".cards")
const changeDisplay = document.getElementById("turnDisplay")


const intiliazing = (data) => {
    data.choice = +data.choice;
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    data.playerOne = "X";
    data.playerTwo = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;

    // return data
    console.log(data.choice)
    return function cellClicked(data) {

        if (data.choice === 0 && !data.gameOver) {
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    if (data.gameOver) {
                        return; // Return early if the game is already over
                    }

                    const changeDisplay = document.getElementById("turnDisplay")
                    if (card.textContent === "") {
                        card.textContent = data.currentPlayer;
                    }

                    if (checkWinner(data, cards)) {
                        // data.gameOver = true;
                        changeDisplay.textContent = `Game over! ${data.currentPlayer} wins!`;
                        data.gameOver = true;
                        return;
                    }

                    if (checkTie(cards)) {
                        changeDisplay.textContent = `Game Over Draw!`;
                        data.gameOver = true;
                        return;
                    }

                    card.textContent = data.currentPlayer
                    data.currentPlayer = (data.currentPlayer === data.playerOne ? data.playerTwo : data.playerOne)
                    changeDisplay.textContent = `${data.currentPlayer}'s turn`

                });
            });








        };


    }

}

// intiliazing()

function checkWinner(data, cards) {

    let winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningCombination.length; i++) {
        [a, b, c] = winningCombination[i]
        if (cards[a].textContent === data.currentPlayer && cards[b].textContent === data.currentPlayer && cards[c].textContent === data.currentPlayer) {
            return true
        }


    }
    return false
}

function checkTie(cards) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].textContent === "") {
            return false
        }


    }
    return true

}


// const restartBtn = document.getElementsByClassName("restart")
// restartBtn.addEventListener("click", restart(cards))
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function restart(data) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].textContent = "";
        changeDisplay.textContent = data.currentPlayer


    }
})







// // Call the function when needed


