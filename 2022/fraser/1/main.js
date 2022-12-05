const fs = require('fs')

let caloriesListRaw
let subtotal = 0
let largestSubtotal = 0
let podium = [0, 0, 0]

try {
    const data = fs.readFileSync('./input.txt', 'utf8');
    caloriesListRaw = data;
} catch (err) {
    console.error(err);
}
let caloriesSplit = caloriesListRaw.split(/\r?\n/)
for (let i = 0; i < caloriesSplit.length; i++) {

    let caloriesNumber = Number(caloriesSplit[i])
    subtotal += caloriesNumber
    if (caloriesSplit[i + 1] === '' || isNaN(caloriesSplit[i + 1])) {

        if (subtotal > podium[2]) {
            podium.push(subtotal)
            podium.shift()
        } else if (subtotal > podium[1]) {
            podium.splice(2, 0, subtotal)
            podium.shift()
        } else if (subtotal > podium[0]) {
            podium.splice(1, 0, subtotal)
            podium.shift()
        }
        // if( subtotal > largestSubtotal){
        //     largestSubtotal = subtotal
        // }
        subtotal = 0
    }
}

console.log(podium)
console.log(podium.reduce((a, b) => a + b, 0))