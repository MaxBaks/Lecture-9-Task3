import {
  Team, Character,
} from '../js/domain';

test('characters should be added correctly', () => {
  const team = new Team();
  team.add(new Character('Лучник1', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник2', 'Bowman', 50, 1, 40, 10));

  const expected = new Set();
  expected.add({
    name: 'Лучник1', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
  });
  expected.add({
    name: 'Лучник2', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
  });

  expect(team.characters).toEqual(expected);
});


test('team should be iterated correctly', () => {
  const team = new Team();
  team.add(new Character('Лучник1', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник2', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник3', 'Bowman', 50, 1, 40, 10));

  const result = new Set();
  for (const hero of team) {
    result.add(hero);
  }

  const expected = new Set();
  expected.add(new Character('Лучник1', 'Bowman', 50, 1, 40, 10));
  expected.add(new Character('Лучник2', 'Bowman', 50, 1, 40, 10));
  expected.add(new Character('Лучник3', 'Bowman', 50, 1, 40, 10));

  expect(result).toEqual(expected);
});


test('error should be shown when team is full', () => {
  const team = new Team();
  team.add(new Character('Лучник1', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник2', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник3', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник4', 'Bowman', 50, 1, 40, 10));
  team.add(new Character('Лучник5', 'Bowman', 50, 1, 40, 10));
  const result = team.add(new Character('Лучник6', 'Bowman', 50, 1, 40, 10));

  const expected = Error('В команде не может быть больше 5 персонажей!');

  expect(result).toEqual(expected);
});
