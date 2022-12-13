var fs = require("fs");
var markerDetector = function () {
    var rawData;
    try {
        var data = fs.readFileSync("./input.txt", "utf8");
        rawData = data;
    }
    catch (err) {
        console.error(err);
    }
    // console.log(rawData)
    // Loop through string
    // Take a substring of i to i + 3
    // If all letters are unique, return index of string + 3
    for (var i = 0; i < rawData.length; i++) {
        // console.log(rawData[i])
        var substring = rawData.slice(i, i + 14);
        // console.log(substring)
        var uniqueLetterCount = new Set(substring).size;
        // console.log(uniqueLetterCount)
        if (uniqueLetterCount === 14) {
            // console.log(rawData[i+3])
            console.log(i + 14, "i+14", substring);
            return i;
        }
    }
    // crateLayoutRaw.pop();
    // Isolate the move order
    // let moveOrders = splitByNewLine.splice(
    //   splitByNewLine.indexOf("") + 1,
    //   splitByNewLine.length
    // );
    // //   console.log(moveOrders);
    // let moveOrdersNeatened = moveOrders.map((item) => {
    //   let matchedNumbers = item.match(/\d+/g);
    //   // let convertedToNumbers = matchedNumbers?.map((element) => {
    //   //     return Number(element)
    //   // })
    //   // return convertedToNumbers
    //   return matchedNumbers;
    // });
    // //   console.log(moveOrdersNeatened);
    // let splitByGap = crateLayoutRaw.map((item) => {
    //   return item.match(/.{1,4}/g);
    // });
    // // console.log(splitByGap)
    // // Loop through each sub array and identify if element is blank
    // let neaterFormat = splitByGap.map((item) => {
    //   // console.log(item)
    //   let subArrayLetterIdentified = item?.map((element) => {
    //     // console.log(element)
    //     return element.match(/[A-Z]/g);
    //   });
    //   let neatenedSubArray = subArrayLetterIdentified?.map((element) => {
    //     if (element !== null) {
    //       let newElement = element[0];
    //       newElement = newElement.trim();
    //       return newElement;
    //     } else {
    //       return null;
    //     }
    //   });
    //   return neatenedSubArray;
    // });
    // console.log(neaterFormat, "crates to move ");
    // // Transpose array
    // let newArray: any = [];
    // for (let n = 0; n < neaterFormat.length + 1; n++) {
    //   let columnArray = neaterFormat.map((element) => {
    //     return element[n];
    //   });
    //   let columnArrayWithoutNulls = columnArray.filter((item) => {
    //     return item !== null;
    //   });
    //   newArray.push(columnArrayWithoutNulls);
    // }
    // console.log(newArray);
    // // Make the moves
    // moveOrdersNeatened.forEach((order) => {
    //   // console.log(order);
    //   let moveAmount = Number(order[0]);
    //   let from = Number(order[1]) - 1;
    //   let to = Number(order[2]) - 1;
    //   console.log(moveAmount, from, to);
    //   for (let n = 0; n < moveAmount; n++) {
    //     let crateToMove = newArray[from]?.shift();
    //     newArray[to]?.unshift(crateToMove);
    //   }
    // });
    // console.log(newArray);
    // // Create string of top crates
    // let finalString = "";
    // newArray.forEach((item) => {
    //   finalString += item[0];
    // });
    // console.log(finalString);
};
module.exports = markerDetector;
markerDetector();
