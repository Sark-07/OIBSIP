const form = document.getElementById('form')
const iterate = document.querySelectorAll('.iterate')
const iterateOperators = document.querySelectorAll('.iterate-operations')
const result = document.querySelector('.result')
const screen = document.getElementById('screen')

const utils = document.querySelectorAll('.utils')


// ref vars
let prevStr = ''
let currentStr = ''
let answer = ''



form.addEventListener('submit', (e) => {

    e.preventDefault();
})



// utils
Array.from(utils).forEach((elements) => {
    elements.addEventListener('click', () => {
        // console.log(elements.id);
        if (elements.id == 'clearAll') {
            currentStr = ''
            prevStr = ''
            result.value = ''
            answer = ''
            form.reset()
        } else if (elements.id == 'del') {
            screen.value = screen.value.slice(0, screen.value.length - 1)

        } else if (elements.id == 'submit') {
            answer = eval(screen.value)
            result.value = answer
            screen.value = ''

        } else if (elements.id == 'ans') {
            if (answer == '') return
            screen.value += answer
        }
    })
})


// for operands
const addOperands = (operand) => {
    if (operand === '.' && currentStr.includes('.')) {
        return
    }
    currentStr += operand;
    screen.value += operand;
    prevStr = ''
}


// for operators
const addOperators = (operation) => {
    if ((operation == '*' || operation == '+' || operation == '/') && screen.value == '') {
        console.log('ki', currentStr);
        return
    } else if (operation == '-' && prevStr.includes('-')) {
        return
    } else if ((operation === '*' || operation === '+' || operation === '/') && (prevStr.includes('/') || prevStr.includes('-') || prevStr.includes('+') || prevStr.includes('*'))) {

        return
    } else if ((operation === '*' || operation === '+' || operation === '/' || operation === '-') && currentStr.charAt(currentStr.length - 1) == '.') {
        return
    }
    prevStr += operation
    screen.value += operation
    currentStr = ''
}



// event listener for operands and dot
Array.from(iterate).forEach((elements, index) => {
    elements.addEventListener('click', () => {
        addOperands(elements.innerText)
        // console.log(elements.innerText);
    })
})

// event listener for operators
Array.from(iterateOperators).forEach((elements, index) => {
    elements.addEventListener('click', () => {
        addOperators(elements.innerText)
        // console.log(elements.innerText);
    })
})