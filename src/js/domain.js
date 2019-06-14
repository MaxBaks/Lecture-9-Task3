class Team {
  constructor() {
    this.characters = new Set();
  }

  add(newHero) {
    try {
      if (this.characters.size === 5) {
        throw Error('В команде не может быть больше 5 персонажей!');
      } else {
        this.characters.add(newHero);
        return this.characters;
      }
    } catch (err) {
      return err;
    }
  }

  toArray() {
    return [...this.characters];
  }

  [Symbol.iterator]() {
    let index = 0;
    const finish = this.toArray().length;
    return {
      next: () => ({
        value: this.toArray()[index++],
        done: index === finish + 1,
      }),
    };
  }
}

class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

export {
  Team, Character,
};
