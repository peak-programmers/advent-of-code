const fs = require("fs");

const overlapChecker = () => {
  let rawData;
  try {
    const data = fs.readFileSync("./input.txt", "utf8");
    rawData = data;
  } catch (err) {
    console.error(err);
  }

  let splitByNewLine: string[] = rawData.split(/\r?\n/);

  const search = "-";
  const alsoSearchFor = ",";
  const replaceWith = " ";

  let removeCharacters = splitByNewLine.map((item) => {
    console.log(item);
    item = item.split(search).join(replaceWith);
    item = item.split(alsoSearchFor).join(replaceWith);
    let splitBySpaces = item.split(" ");
    return splitBySpaces;
  });
  console.log(removeCharacters);
  let counter = 0;
  removeCharacters.forEach((item) => {
    console.log(item);
    let elf1Low = Number(item[0]);
    let elf1High = Number(item[1]);
    let elf2Low = Number(item[2]);
    let elf2High = Number(item[3]);
    // console.log(elf1Low,elf1High,elf2Low,elf2High)

    if (elf1High < elf2Low) {
      console.log("Condition 1");
    } else if (elf1Low > elf2High ) {
      console.log("Condition 2");
    } else {
      counter++;
    }
  });
  console.log(counter);
};

module.exports = overlapChecker;

overlapChecker();
