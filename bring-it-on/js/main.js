// *Variables*
// Create a variable and console log the value

let num = 3
console.log(num)

// Create a variable, add 10 to it, and alert the value

let color = 345
color += 10
alert(color)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourAlertDiff(n1, n2, n3, n4) {
    let difference = n1 - n2 - n3 - n4
    alert (difference)
}

// Create a function that divides one number by another and returns the remainder

function divideRemainder(n1, n2) {
    return n1%n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(n1, n2, n3) {
    if ((n1 * n2 * n3) % 3 === 0) {
        alert('Zebra')
    }
}


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordie(word, num) {
    for (let i = 0; i < num; i++){
        console.log(word)
    }
} 