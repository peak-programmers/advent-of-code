var fs = require("fs");
var groupFinder = function () {
    var rawData;
    var badgeStore = [];
    try {
        var data = fs.readFileSync("./input.txt", "utf8");
        rawData = data;
    }
    catch (err) {
        console.error(err);
    }
    var ruckSacks = rawData.split(/\r?\n/);
    console.log(ruckSacks);
    var duplicateItems = [];
    // get groups of 3
    for (var i = 0; i < ruckSacks.length; i += 3) {
        console.log(ruckSacks[i], ruckSacks[i + 1], ruckSacks[i + 2]);
        // Sort by the longest string from group of 3
        var groupOfThreeRucksack = [
            ruckSacks[i],
            ruckSacks[i + 1],
            ruckSacks[i + 2],
        ];
        groupOfThreeRucksack.sort(function (a, b) {
            return b.length - a.length;
        });
        // let subStringsLengthArray = groupOfThreeRucksack.map((item) => {
        //     return item.length
        // })
        console.log(groupOfThreeRucksack);
        // Iterate through the longest string and find the common letter across all 3 strings
        // for (let q = 0; q < groupOfThreeRucksack.length; q++) {
        console.log(groupOfThreeRucksack[0]);
        // loop through first string and find common with 2nd and 3rd strings
        var duplicateArray = [];
        for (var w = 0; w < groupOfThreeRucksack[0].length; w++) {
            console.log(w);
            if (groupOfThreeRucksack[1].indexOf(groupOfThreeRucksack[0][w]) !== -1) {
                console.log("FOUND DUPLICATE", groupOfThreeRucksack[0][w]);
                if (groupOfThreeRucksack[2].indexOf(groupOfThreeRucksack[0][w]) !== -1) {
                    if (duplicateArray.indexOf(groupOfThreeRucksack[0][w]) === -1) {
                        duplicateArray.push(groupOfThreeRucksack[0][w]);
                        badgeStore.push(groupOfThreeRucksack[0][w]);
                        console.log(badgeStore);
                    }
                }
            }
        }
        duplicateArray = [];
        //   console.log(badgeStore)
    }
    var results = badgeStore.map(function (item) {
        var charCode = item.charCodeAt(0);
        if (charCode < 97) {
            charCode -= 38;
        }
        else {
            charCode -= 96;
        }
        // console.log(charCode, item)
        return charCode;
    });
    console.log(results.reduce(function (a, b) { return a + b; }, 0));
    var total = results.reduce(function (a, b) { return a + b; }, 0);
    return total;
};
module.exports = groupFinder;
groupFinder();
