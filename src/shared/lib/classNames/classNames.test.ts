import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someNames')).toBe('someNames');
  });
  test('with additional', () => {
    expect(classNames('someNames', ['class1', 'class2'])).toBe(
      'someNames class1 class2'
    );
  });
  test('with mods', () => {
    expect(
      classNames('someNames', ['class1', 'class2'], {
        hover: true,
        scrollable: true,
      })
    ).toBe('someNames class1 class2 hover scrollable');
  });
  test('with mods false', () => {
    expect(
      classNames('someNames', ['class1', 'class2'], {
        hover: true,
        scrollable: false,
      })
    ).toBe('someNames class1 class2 hover');
  });
  test('with mods undefined', () => {
    expect(
      classNames('someNames', ['class1', 'class2'], {
        hover: true,
        scrollable: undefined,
      })
    ).toBe('someNames class1 class2 hover');
  });
});
