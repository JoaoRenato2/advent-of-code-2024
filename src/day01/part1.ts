import * as fs from "fs";
const inputFilePath = "./src/day01/input.txt";

const readInput = (filePath: string): [number[], number[]] => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const leftList: number[] = [];
  const rightList: number[] = [];

  fileContent
    .trim()
    .split("\n")
    .forEach((line) => {
      const [left, right] = line.split(/\s+/).map(Number);
      leftList.push(left);
      rightList.push(right);
    });

  return [leftList, rightList];
};

const calculateTotalDistance = (left: number[], right: number[]): number => {
  const sortedLeft = [...left].sort((a, b) => a - b);
  const sortedRight = [...right].sort((a, b) => a - b);

  return sortedLeft.reduce(
    (sum, leftValue, index) => sum + Math.abs(leftValue - sortedRight[index]),
    0
  );
};

const [leftList, rightList] = readInput(inputFilePath);
const totalDistance = calculateTotalDistance(leftList, rightList);

console.log("Distância total entre as listas:", totalDistance);
