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

  let moveOrdersNeatened = moveOrders.map((item) => {
    let matchedNumbers = item.match(/\d+/g);
    return matchedNumbers;
  });

  let splitByGap = crateLayoutRaw.map((item) => {
    return item.match(/.{1,4}/g);
  });

  // Loop through each sub array and identify if element is blank

  let neaterFormat = splitByGap.map((item) => {
    let subArrayLetterIdentified = item?.map((element) => {
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

  // Reverse the Arrays

  let reversedArray = newArray.map((item) => {
    let reversedSubArray = item.reverse()
    return reversedSubArray
  }) 

  console.log(reversedArray);

  // Make the moves

  moveOrdersNeatened.forEach((order) => {

    let moveAmount = Number(order[0]);
    let from = Number(order[1]) - 1;
    let to = Number(order[2]) - 1;

    if (moveAmount === 1) {
      for (let n = 0; n < moveAmount; n++) {
        let crateToMove = reversedArray[from]?.pop();
        reversedArray[to]?.push(crateToMove);
      }
    } else {
      let index = (-1 * moveAmount)
      let cratesToMove = reversedArray[from].slice(index);
        for (let n = 0; n < moveAmount; n++) {
          reversedArray[from].pop()
         let moveMe = cratesToMove.shift()
         reversedArray[to].push(moveMe)

    }

    }
  });

  // Create string of top crates
  let finalString = "";
  newArray.forEach((item) => {
    finalString += item[item.length -1];
  });
  console.log(finalString);
};

module.exports = crateMover;

crateMover();
