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

const calculateSimilarityScore = (left: number[], right: number[]): number => {
  const frequencyMap = new Map<number, number>();

  for (const num of right) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num)! + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  let similarityScore = 0;

  for (const num of left) {
    const frequency = frequencyMap.get(num) || 0;
    similarityScore += num * frequency;
  }

  return similarityScore;
};

const [leftList, rightList] = readInput(inputFilePath);
const similarityScore = calculateSimilarityScore(leftList, rightList);

console.log(similarityScore);
