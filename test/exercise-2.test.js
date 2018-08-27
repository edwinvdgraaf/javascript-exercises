const Exercise2 = require('../src/exercise-2');
const ENABLED_EXERCISES = require('../enabled-exercises');

describe('exercise 2 - Working with objects and functions', () => {

  if(ENABLED_EXERCISES.EXERCISE_2) {
    const object = {
      a: {
        path: {
          with: {
            answer: '42'
          }
        },
        isRoot: false
      },
      b: {
        value: 99
      }
    }

    test('get value at path with a.path.with.answer', () => {
      const result = getValueForPath(object, 'a.path.with.answer');
      expect(result).toBe('42');
    });

    test('get value at path with a.isRoot', () => {
      const result = getValueForPath(object, 'a.isRoot');
      expect(result).toBe(false);
    });
  
  }

  test('a object is returned', () => {
    expect(typeof {}).toBe('object');
  });
});