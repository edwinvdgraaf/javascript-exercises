const Exercise1 = require('../src/exercise-1');
const ENABLED_EXERCISES = require('../enabled-exercises');

describe('exercise 1 - Working with strings, numbers, arrays and control flows', () => {
  if(ENABLED_EXERCISES.EXERCISE_1) {
    it("implements a isString function", () => {
      expect(Exercise1.isString("my string")).toBe(true);
      expect(Exercise1.isString(false)).toBe(false);
      expect(Exercise1.isString(undefined)).toBe(false);
      expect(Exercise1.isString({})).toBe(false);
    });

    it("implements a isPalindrome function", () => {
      expect(Exercise1.isPalindrome("lepel")).toBe(true);
      expect(Exercise1.isPalindrome("palindrome")).toBe(false);
    });

    it("implements a isPalindrome function", () => {
      expect(Exercise1.titleize("my string")).toBe("My String");
      expect(Exercise1.titleize("My Second string")).toBe("My Second string");
    });
  }


  it("exports a object", () => {
    expect(typeof Exercise1).toBe("object");
  });
});