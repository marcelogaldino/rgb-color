window.addEventListener('load', start)

function start() {
    console.log('Dom carregada!')

    setColor()
}

const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')

const colorBox = document.querySelector('.colorBox')

function setColor() {
    const redText = document.querySelector('#redText')
    const greenText = document.querySelector('#greenText')
    const blueText = document.querySelector('#blueText')

    colorBox.style.backgroundColor = `rgb(${redText.value},${greenText.value},${blueText.value})`

    red.addEventListener('input', handleRedValue)
    green.addEventListener('input', handleGreenValue)
    blue.addEventListener('input', handleBlueValue)

    function handleRedValue(e) {
        let redColor = e.target.value
        redText.value = redColor

        colorBox.style.backgroundColor = `rgb(${redColor},${greenText.value},${blueText.value})`  
    }
    
    function handleGreenValue(e) {
        let greenColor = e.target.value
        greenText.value = greenColor

        colorBox.style.backgroundColor = `rgb(${redText.value},${greenColor},${blueText.value})`  
    }
    
    function handleBlueValue(e) {
        let blueColor = e.target.value
        blueText.value = blueColor

        colorBox.style.backgroundColor = `rgb(${redText.value},${greenText.value},${blueColor})`  
    }

}


