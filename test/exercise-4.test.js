const Exercise4 = require('../src/exercise-4');
const ENABLED_EXERCISES = require('../enabled-exercises');

const {
  one, two, three, times, plus, dividedBy
} = require('../src/exercise-4');

describe('exercise 3 - The functional calculator', () => {
  if(ENABLED_EXERCISES.EXERCISE_4) {
    it("the numbers functions", () => {
      expect(Exercise3.one()).toBe(1);
      expect(Exercise3.two()).toBe(2);
      expect(Exercise3.three()).toBe(3);
    });

    it("the times operation", () => {
      const result = seven(times(five()));
      expect(result).toBe(35);
    });

    it("the plus operation", () => {
      const result = four(plus(nine()));;
      expect(result).toBe(13);
    });

    it("the minus operation", () => {
      const result = eight(minus(three()));
      expect(result).toBe(5);
    });

    it("the divided operation", () => {
      const result = six(dividedBy(two()));;
      expect(result).toBe(3);
    })
  }

  it("exports a object", () => {
    expect(typeof Exercise4).toBe("object");
  });
});