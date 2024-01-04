// Using Classes

class PersonClass {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else {
            this.sleepMood = "lazy";
        }
    }

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else {
            this.healthRate = 50;
        }
    }

    buy(items) {
        if (items === 1) {
            this.money -= 10;
        }
    }
}

var person1 = new PersonClass("engy", 100, "happy", 100);
person1.sleep(8);
person1.eat(3);
person1.buy(1);
console.log(person1);
