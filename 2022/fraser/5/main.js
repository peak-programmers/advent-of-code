var fs = require("fs");
var crateMover = function () {
    var rawData;
    try {
        var data = fs.readFileSync("./input.txt", "utf8");
        rawData = data;
    }
    catch (err) {
        console.error(err);
    }
    var splitByNewLine = rawData.split(/\r?\n/);
    // Isolate  the crate layout
    // console.log(splitByNewLine)
    var crateLayoutRaw = splitByNewLine.splice(0, splitByNewLine.indexOf(""));
    // Remove last line of crate layout raw
    crateLayoutRaw.pop();
    // Isolate the move order
    var moveOrders = splitByNewLine.splice(splitByNewLine.indexOf("") + 1, splitByNewLine.length);
    //   console.log(moveOrders);
    var moveOrdersNeatened = moveOrders.map(function (item) {
        var matchedNumbers = item.match(/\d+/g);
        // let convertedToNumbers = matchedNumbers?.map((element) => {
        //     return Number(element)
        // })
        // return convertedToNumbers
        return matchedNumbers;
    });
    //   console.log(moveOrdersNeatened);
    var splitByGap = crateLayoutRaw.map(function (item) {
        return item.match(/.{1,4}/g);
    });
    // console.log(splitByGap)
    // Loop through each sub array and identify if element is blank
    var neaterFormat = splitByGap.map(function (item) {
        // console.log(item)
        var subArrayLetterIdentified = item === null || item === void 0 ? void 0 : item.map(function (element) {
            // console.log(element)
            return element.match(/[A-Z]/g);
        });
        var neatenedSubArray = subArrayLetterIdentified === null || subArrayLetterIdentified === void 0 ? void 0 : subArrayLetterIdentified.map(function (element) {
            if (element !== null) {
                var newElement = element[0];
                newElement = newElement.trim();
                return newElement;
            }
            else {
                return null;
            }
        });
        return neatenedSubArray;
    });
    console.log(neaterFormat, "crates to move ");
    // Transpose array
    var newArray = [];
    var _loop_1 = function (n) {
        var columnArray = neaterFormat.map(function (element) {
            return element[n];
        });
        var columnArrayWithoutNulls = columnArray.filter(function (item) {
            return item !== null;
        });
        newArray.push(columnArrayWithoutNulls);
    };
    for (var n = 0; n < neaterFormat.length + 1; n++) {
        _loop_1(n);
    }
    console.log(newArray);
    // Make the moves
    moveOrdersNeatened.forEach(function (order) {
        // console.log(order);
        var _a, _b;
        var moveAmount = Number(order[0]);
        var from = Number(order[1]) - 1;
        var to = Number(order[2]) - 1;
        console.log(moveAmount, from, to);
        for (var n = 0; n < moveAmount; n++) {
            var crateToMove = (_a = newArray[from]) === null || _a === void 0 ? void 0 : _a.shift();
            (_b = newArray[to]) === null || _b === void 0 ? void 0 : _b.unshift(crateToMove);
        }
    });
    console.log(newArray);
    // Create string of top crates
    var finalString = "";
    newArray.forEach(function (item) {
        finalString += item[0];
    });
    console.log(finalString);
};
module.exports = crateMover;
crateMover();
