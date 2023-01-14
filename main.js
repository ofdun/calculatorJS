window.onload = function () {

    let buttonC = document.getElementById("c")
    let buttonPercent = document.getElementById("percent")
    let buttonExponentiation = document.getElementById("exponentiation")
    let buttonDivision = document.getElementById('division')

    let buttonOne = document.getElementById('one')
    let buttonTwo = document.getElementById('two')
    let buttonThree = document.getElementById('three')
    let buttonMultiply = document.getElementById('multiply')

    let buttonFour = document.getElementById('four')
    let buttonFive = document.getElementById('five')
    let buttonSix = document.getElementById('six')
    let buttonMinus = document.getElementById('minus')

    let buttonSeven = document.getElementById('seven')
    let buttonEight = document.getElementById('eight')
    let buttonNine = document.getElementById('nine')
    let buttonPlus = document.getElementById('plus')

    let buttonZero = document.getElementById('zero')
    let buttonDot = document.getElementById('dot')
    let buttonEqual = document.getElementById('equal')

    let firstNum
    //let secondNum
    var needac = false
    let operation

    let spaceHTML = document.getElementById("label")
    var operationWasUsed = false

    buttonC.onclick = function () {
        if (needac) { needac = false }
        spaceHTML.innerHTML = 0
        operationWasUsed = false
    }

    buttonOne.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 1 }
            else { spaceHTML.innerHTML += 1 }
        }

    }

    buttonTwo.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 2 }
            else { spaceHTML.innerHTML += 2 }
        }

    }

    buttonThree.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 3 }
            else { spaceHTML.innerHTML += 3 }
        }

    }

    buttonFour.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 4 }
            else { spaceHTML.innerHTML += 4 }
        }

    }

    buttonFive.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 5 }
            else { spaceHTML.innerHTML += 5 }
        }

    }

    buttonSix.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 6 }
            else { spaceHTML.innerHTML += 6 }
        }

    }

    buttonSeven.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 7 }
            else { spaceHTML.innerHTML += 7 }
        }

    }

    buttonEight.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 8 }
            else { spaceHTML.innerHTML += 8 }
        }

    }

    buttonNine.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 9 }
            else { spaceHTML.innerHTML += 9 }
        }

    }

    buttonZero.onclick = function () {
        if (spaceHTML.innerHTML == 'E' || needac) { }
        else {
            if (spaceHTML.innerHTML == 0) { }
            else { spaceHTML.innerHTML += 0 }
        }
    }

    buttonDot.onclick = function () {
        if (needac) { }
        else {
            spaceHTML.innerHTML += '.'
        }
    }

    buttonEqual.onclick = function () {
        if (!operation) { }
        if (operation == '%') {
            operation = null
            spaceHTML.innerHTML = firstNum / 100 * Number(spaceHTML.innerHTML) + '%'
            operationWasUsed = false
            needac = true
        }
        if (operation == '^') {
            operation = null
            spaceHTML.innerHTML = firstNum ** Number(spaceHTML.innerHTML)
            operationWasUsed = false
        }

    }

    buttonPercent.onclick = function () {
        if (spaceHTML.innerHTML == 0) { spaceHTML.innerHTML = 'E' }
    }

    buttonPercent.onclick = function () {
        firstNum = Number(spaceHTML.innerHTML)
        operation = '%'
        operationWasUsed = true
        spaceHTML.innerHTML = ''
    }

    buttonExponentiation.onclick = function () {
        firstNum = Number(spaceHTML.innerHTML)
        operation = '^'
        operationWasUsed = true
        spaceHTML.innerHTML = ''
    }

}