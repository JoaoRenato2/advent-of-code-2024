import * as fs from "fs";
const inputFilePath = "./src/day02/input.txt";

const readInput = (filePath: string): number => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  let safeCount = 0;
  const lines = fileContent.trim().split("\n");

  lines.forEach((line) => {
    const numberArray = line.split(" ").map(Number);
    if (isSafeOrNot(numberArray)) {
      safeCount++;
    }
  });

  console.log("Safe reports count:", safeCount);
  return safeCount;
};

const isSafeOrNot = (array: number[]): boolean => {
  if (isStrictlySafe(array)) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    const modifiedArray = array.slice(0, i).concat(array.slice(i + 1));
    if (isStrictlySafe(modifiedArray)) {
      return true;
    }
  }

  return false;
};

const isStrictlySafe = (array: number[]): boolean => {
  for (let i = 0; i < array.length - 1; i++) {
    const diff = array[i + 1] - array[i];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (i > 0 && diff > 0 !== array[i] - array[i - 1] > 0) {
      return false;
    }
  }

  return true;
};

console.log(readInput(inputFilePath));
