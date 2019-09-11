import canIterate from '../js/domain';

test('Map should show true', () => {
  const result = canIterate(new Map());
  expect(result).toBe(true);
});

test('Set should show true', () => {
  const result = canIterate(new Set());
  expect(result).toBe(true);
});

test('null should show false', () => {
  const result = canIterate(null);
  expect(result).toBe(false);
});

test('10 should show false', () => {
  const result = canIterate(10);
  expect(result).toBe(false);
});

test('Netology should show true', () => {
  const result = canIterate('Netology');
  expect(result).toBe(true);
});
