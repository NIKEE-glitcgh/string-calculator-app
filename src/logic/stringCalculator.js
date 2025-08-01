export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const [delimiterLine, rest] = numbers.split("\n");
    delimiter = new RegExp(delimiterLine.slice(2));
    numbers = rest;
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}
