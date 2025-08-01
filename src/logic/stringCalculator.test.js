const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number for single number", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum for two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("returns sum for multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws error on negative numbers", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed -1");
  });

  test("shows all negative numbers in error", () => {
    expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed -1,-3");
  });
});
