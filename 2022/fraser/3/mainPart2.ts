const fs = require("fs");

const groupFinder = () => {
  let rawData;
  let badgeStore:string[] = []

  try {
    const data = fs.readFileSync("./input.txt", "utf8");
    rawData = data;
  } catch (err) {
    console.error(err);
  }

  let ruckSacks: string[] = rawData.split(/\r?\n/);
  let duplicateItems: string[] = [];
  // get groups of 3
  for (let i = 0; i < ruckSacks.length; i += 3) {
    console.log(ruckSacks[i], ruckSacks[i + 1], ruckSacks[i + 2]);
    // Sort by the longest string from group of 3
    let groupOfThreeRucksack = [
      ruckSacks[i],
      ruckSacks[i + 1],
      ruckSacks[i + 2],
    ];
    groupOfThreeRucksack.sort(function (a, b) {
      return b.length - a.length;
    });

      let duplicateArray:string[] = []
      for (let w = 0; w < groupOfThreeRucksack[0].length; w++) {
        if(groupOfThreeRucksack[1].indexOf(groupOfThreeRucksack[0][w]) !== -1){
            if(groupOfThreeRucksack[2].indexOf(groupOfThreeRucksack[0][w]) !== -1){
                if(duplicateArray.indexOf(groupOfThreeRucksack[0][w]) === -1){
                    duplicateArray.push(groupOfThreeRucksack[0][w])
                    badgeStore.push(groupOfThreeRucksack[0][w])

                }
            }
        }
      }
      duplicateArray = []
  }
  let results = badgeStore.map((item) => {
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
};

module.exports = groupFinder;

groupFinder();
