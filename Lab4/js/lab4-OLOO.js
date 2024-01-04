const PersonMethods = {
    init(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    },
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },
  
    buy(items) {
      this.money -= items * 10;
    }
  };
  
  const createPerson = (fullName, money, sleepMood, healthRate) => {
    const person = Object.create(PersonMethods);
    person.init(fullName, money, sleepMood, healthRate);
    return person;
  };
  
  var person1 = createPerson("engy", 100, "happy", 100);
person1.sleep(8);
person1.eat(3);
person1.buy(1);
console.log(person1);