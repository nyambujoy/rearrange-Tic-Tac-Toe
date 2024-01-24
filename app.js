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
    intiliazing(data)
})


const intiliazing = (data) => {
    data.choice = +data.choice;
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    data.playerOne = "X"
    data.playerTwo = "O"
    data.round = 0
    data.currentPlayer = "X"
    data.gameOver = false

}
