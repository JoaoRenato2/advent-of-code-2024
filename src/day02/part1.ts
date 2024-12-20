import * as fs from "fs";
const inputFilePath = "./src/day02/input.txt";

const readInput = (filePath: string): number => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  let cont = 0;
  const lines = fileContent.trim().split("\n");
  lines.forEach((line, index) => {
    const numberArray = line.split(" ").map(Number);
    const result = isSafeOrNot(numberArray);
    if (result === 1) {
      cont++;
    }
  });
  console.log("result: ", cont);

  return cont;
};

const isSafeOrNot = (array: number[]): number => {
  for (let index = 0; index < array.length - 1; index++) {
    const diff = array[index + 1] - array[index];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return 0;
    }

    if (index > 0 && diff > 0 !== array[index] - array[index - 1] > 0) {
      return 0;
    }
  }

  return 1;
};

console.log(readInput(inputFilePath));
