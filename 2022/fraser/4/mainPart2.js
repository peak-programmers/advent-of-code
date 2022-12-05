var fs = require("fs");
var overlapChecker = function () {
    var rawData;
    try {
        var data = fs.readFileSync("./input.txt", "utf8");
        rawData = data;
    }
    catch (err) {
        console.error(err);
    }
    var splitByNewLine = rawData.split(/\r?\n/);
    var search = "-";
    var alsoSearchFor = ",";
    var replaceWith = " ";
    var removeCharacters = splitByNewLine.map(function (item) {
        console.log(item);
        item = item.split(search).join(replaceWith);
        item = item.split(alsoSearchFor).join(replaceWith);
        var splitBySpaces = item.split(" ");
        return splitBySpaces;
    });
    console.log(removeCharacters);
    var counter = 0;
    removeCharacters.forEach(function (item) {
        console.log(item);
        var elf1Low = Number(item[0]);
        var elf1High = Number(item[1]);
        var elf2Low = Number(item[2]);
        var elf2High = Number(item[3]);
        // console.log(elf1Low,elf1High,elf2Low,elf2High)
        if (elf1High < elf2Low) {
            console.log("Condition 1");
        }
        else if (elf1Low > elf2High) {
            console.log("Condition 2");
        }
        else {
            counter++;
        }
    });
    console.log(counter);
};
module.exports = overlapChecker;
overlapChecker();
