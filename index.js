const diceContainer = document.querySelector('#dice-container')
const adviceText = document.querySelector('#advice')
const adviceNumber = document.querySelector('#advice-number')

diceContainer.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {console.log(data)
        adviceText.textContent = data.slip.advice
        adviceNumber.textContent = data.slip.id
    })
})