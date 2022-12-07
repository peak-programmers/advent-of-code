const fs = require("fs");

const crateMover = () => {
  let rawData;
  try {
    const data = fs.readFileSync("./input.txt", "utf8");
    rawData = data;
  } catch (err) {
    console.error(err);
  }

  let splitByNewLine: string[] = rawData.split(/\r?\n/);

  // Isolate  the crate layout
  // console.log(splitByNewLine)
  let crateLayoutRaw = splitByNewLine.splice(0, splitByNewLine.indexOf(""));
  // Remove last line of crate layout raw
  crateLayoutRaw.pop();

  // Isolate the move order
  let moveOrders = splitByNewLine.splice(
    splitByNewLine.indexOf("") + 1,
    splitByNewLine.length
  );
  //   console.log(moveOrders);

  let moveOrdersNeatened = moveOrders.map((item) => {
    let matchedNumbers = item.match(/\d+/g);
    // let convertedToNumbers = matchedNumbers?.map((element) => {
    //     return Number(element)
    // })
    // return convertedToNumbers
    return matchedNumbers;
  });
  //   console.log(moveOrdersNeatened);

  let splitByGap = crateLayoutRaw.map((item) => {
    return item.match(/.{1,4}/g);
  });
  // console.log(splitByGap)

  // Loop through each sub array and identify if element is blank

  let neaterFormat = splitByGap.map((item) => {
    // console.log(item)
    let subArrayLetterIdentified = item?.map((element) => {
      // console.log(element)
      return element.match(/[A-Z]/g);
    });
    let neatenedSubArray = subArrayLetterIdentified?.map((element) => {
      if (element !== null) {
        let newElement = element[0];
        newElement = newElement.trim();
        return newElement;
      } else {
        return null;
      }
    });
    return neatenedSubArray;
  });
  console.log(neaterFormat, "crates to move ");

  // Transpose array
  let newArray: any = [];

  for (let n = 0; n < neaterFormat.length + 1; n++) {
    let columnArray = neaterFormat.map((element) => {
      return element[n];
    });
    let columnArrayWithoutNulls = columnArray.filter((item) => {
      return item !== null;
    });
    newArray.push(columnArrayWithoutNulls);
  }

  console.log(newArray);

  // Make the moves

  moveOrdersNeatened.forEach((order) => {
    // console.log(order);

    let moveAmount = Number(order[0]);
    let from = Number(order[1]) - 1;
    let to = Number(order[2]) - 1;

    console.log(moveAmount, from, to);

    for (let n = 0; n < moveAmount; n++) {
      let crateToMove = newArray[from]?.shift();
      newArray[to]?.unshift(crateToMove);
    }
  });
  console.log(newArray);

  // Create string of top crates
  let finalString = "";
  newArray.forEach((item) => {
    finalString += item[0];
  });
  console.log(finalString);
};

module.exports = crateMover;

crateMover();
