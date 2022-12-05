var fs = require('fs');
var rucksackSorter = function () {
    var rawData;
    try {
        var data = fs.readFileSync('./input.txt', 'utf8');
        rawData = data;
    }
    catch (err) {
        console.error(err);
    }
    var ruckSacks = rawData.split(/\r?\n/);
    var duplicateItems = [];
    for (var i = 0; i < ruckSacks.length; i++) {
        // console.log(ruckSacks[i])
        var halfOfLength = (ruckSacks[i].length) / 2;
        // console.log(halfOfLength)
        var firstRucksack = ruckSacks[i].slice(0, halfOfLength);
        var secondRucksack = ruckSacks[i].slice(halfOfLength, ruckSacks[i].length);
        // console.log(firstRucksack, secondRucksack)
        var subRucksack = [];
        for (var f = 0; f < firstRucksack.length; f++) {
            console.log(firstRucksack[f], "firstRucksack");
            if (secondRucksack.indexOf(firstRucksack[f]) !== -1) {
                console.log("secondRucksack has the same letter");
                if (subRucksack.indexOf(firstRucksack[f]) === -1) {
                    console.log("subRucksack doesn't yet have this letter");
                    subRucksack.push(firstRucksack[f]);
                    duplicateItems.push(firstRucksack[f]);
                }
            }
        }
        subRucksack = [];
    }
    // Remove duplicate letters
    // duplicateItems = duplicateItems.filter((value,index) => duplicateItems.indexOf(value) === index);
    console.log(duplicateItems.length);
    var results = duplicateItems.map(function (item) {
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
module.exports = rucksackSorter;
rucksackSorter();
