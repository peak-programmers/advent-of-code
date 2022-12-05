
const rucksackSorter = () => {
    let rawData
    try {
        const data = fs.readFileSync('./input.txt', 'utf8');
        rawData = data;
    } catch (err) {
        console.error(err);
    }

    let ruckSacks:string[] = rawData.split(/\r?\n/)

    let duplicateItems:string[] = []

for (let i = 0; i < ruckSacks.length; i++){
// console.log(ruckSacks[i])
let halfOfLength = (ruckSacks[i].length) / 2
// console.log(halfOfLength)
let firstRucksack = ruckSacks[i].slice(0,halfOfLength)
let secondRucksack = ruckSacks[i].slice(halfOfLength,ruckSacks[i].length)
// console.log(firstRucksack, secondRucksack)
let subRucksack:string[] = []
for(let f = 0; f < firstRucksack.length; f++){
    console.log(firstRucksack[f], "firstRucksack")
    if(secondRucksack.indexOf(firstRucksack[f]) !== -1){
        console.log("secondRucksack has the same letter")
        if(subRucksack.indexOf(firstRucksack[f]) === -1){
            console.log("subRucksack doesn't yet have this letter")
            subRucksack.push(firstRucksack[f])

        duplicateItems.push(firstRucksack[f])
        }
    }
}
subRucksack = []
}

let results = duplicateItems.map((item) => {
    let charCode = item.charCodeAt(0)
    if(charCode < 97){
        charCode -= 38
    } else {
        charCode -= 96
    }
    return charCode
})
console.log(results.reduce((a, b) => a + b, 0))
let total = results.reduce((a, b) => a + b, 0)
    return total
}

module.exports = rucksackSorter

rucksackSorter()

