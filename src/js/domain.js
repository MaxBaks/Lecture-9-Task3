class Team {
  constructor() {
    this.characters = new Set();
  }

  add(newHero) {
    try {
      if (this.characters.size === 5) {
        throw Error('В команде не может быть больше 5 персонажей!');
      } else {
        const heroForSearch = this.toArray().find(e => e.name === newHero.name);
        if (heroForSearch !== undefined) {
          throw Error('В команде уже есть такой персонаж!');
        }

        this.characters.add(newHero);
        return this.characters;
      }
    } catch (err) {
      return err;
    }
  }

  addAll(...heroes) {
    try {
      for (const hero of heroes) {
        const heroForSearch = this.toArray().find(e => e.name === hero.name);
        if (heroForSearch === undefined) {
          const response = this.add(hero);
          if (response !== this.characters) {
            throw response;
          }
        }
      }
      return this.characters;
    } catch (err) {
      return err;
    }
  }

  toArray() {
    return [...this.characters];
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
