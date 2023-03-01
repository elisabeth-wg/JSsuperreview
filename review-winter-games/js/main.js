//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function evens([arr]) {
    let newArr = []
    for (let i; i < arr.length; i++){
        if (i % 2 === 0) {
            newArr.push(i)
        }
    }
    return newArr
}



// function onlyEvensFinder(arr) {
//     let onlyEvens = []
//     arr.forEach(e => {
//         if (e % 2 === 0) {
//             onlyEvens.push(e)
//         }
//     })
//     return onlyEvens
// }