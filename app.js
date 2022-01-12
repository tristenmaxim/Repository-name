const board = document.querySelector('#board')
const colors = ['#00E7F7', '#CE9FFC', '#D3CCE3', '#FE2F57', '#2DBDE8', '#FFCFC5', '#04CE9B']
const SQUARES_NUMBER = 1000

for (let i = 0; i < SQUARES_NUMBER; i++)  {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow =  `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow =  '0 0 2px #000'
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// #00E7F7 #CE9FFC #D3CCE3 #FE2F57 #2DBDE8 #FFCFC5 #04CE9B