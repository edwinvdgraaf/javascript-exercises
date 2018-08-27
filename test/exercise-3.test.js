const Exercise3 = require('../src/exercise-3');
const ENABLED_EXERCISES = require('../enabled-exercises');

describe('exercise 3 - Bouncing balls', () => {
  if(ENABLED_EXERCISES.EXERCISE_3) {
    it("works", () => {

      expect(Exercise3(3.0, 0.66, 1.5)).toBe(3);
      expect(Exercise3(30.0, 0.66, 1.5)).toBe(15);
      expect(Exercise3(40.0, 0.4, 10.0)).toBe(3);
      expect(Exercise3(10.0, 0.6, 10.0)).toBe(-1);

      const testequal = (h, bounce, window, expected) => {
        expect(Exercise3(h, bounce, window)).toBe(expected);
      }

      testequal(3.0, 0.66, 1.5, 3);
      testequal(30.0, 0.66, 1.5, 15);
      testequal(30.0, 0.75, 1.5, 21);
      testequal(30.0, 0.4, 10.0, 3);
      testequal(40.0, 0.4, 10.0, 3);
      testequal(10.0, 0.6, 10.0, -1);
      testequal(40.0, 1.0, 10.0, -1);
      testequal(-5.0, 0.66, 1.5, -1);
      testequal(5.0, -1.0, 1.5, -1);

      testequal(10.5, 0.6, 1.5, 7);
      testequal(46.0, 0.75, 46.00, -1);
      testequal(10.5, 0.6, 1.5, 7);
      testequal(109.5, 0.75, 1.09, 33);
      testequal(12.2, 12.2, 12.2, -1);
      testequal(5.0, 0.83, 5.0, -1);
      testequal(109.0, 0.75, 1.09, 33);
      testequal(3.0, 0.75, 3.0, -1);
      testequal(2.99, 0.75, 3.0, -1);
      testequal(25.8, 0.6, 2.8, 9);
      testequal(57.0, 0.9, 0.57, 87);
      testequal(15.25, 0.6, 1.0, 11);
      testequal(109.0, 0.75, 1.09, 33);
      testequal(12.0, 0.6, 1.5, 9);
      testequal(14.0, 0.24, 1.4, 3);
      testequal(7.5, 0.75, 7.5, -1);
      testequal(15.25, 0.6, 1.0, 11);
      testequal(12.0, 0.6, 1.5, 9);
      testequal(12.2, 12.2, 12.2, -1);
      testequal(67.0, 0.6, 3.0, 13);
      testequal(61.0, 1.1, 6.1, -1);
      testequal(25.8, 0.6, 2.8, 9);
      testequal(110.0, 0.75, 1.09, 33);
      testequal(19.0, 0.75, 1.9, 17);
      testequal(25.8, 0.6, 2.8, 9);
      testequal(41.8, 0.6, 4.8, 9);
      testequal(98.0, 9.0, 9.8, -1);
      testequal(15.9, 1.0, 1.9, -1);
    });
  }

  it("exports a object", () => {
    expect(typeof Exercise3).toBe("function");
  });
});