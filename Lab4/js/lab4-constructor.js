// Constructor function

function Person(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
    
    this.sleep = function (hours) {
        if (hours === 7) {
            this.sleepMood = "happy";
        } else if (hours < 7) {
            this.sleepMood = "tired";
        } else {
            this.sleepMood = "lazy";
        }
    };

    this.eat = function (meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else {
            this.healthRate = 50;
        }
    };

    this.buy = function (items) {
        if (items === 1) {
            this.money -= 10;
        }
    };
}

var person1 = new Person("engy", 100, "happy", 100);
person1.sleep(8);
person1.eat(3);
person1.buy(1);
console.log(person1);
