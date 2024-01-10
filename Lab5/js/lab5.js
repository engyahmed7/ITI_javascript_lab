class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours == 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals == 3) {
      this.healthRate = 100;
    } else if (meals == 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  }

  buy(item) {
    if (item == 1) {
      this.money -= 10;
    }
  }
}

class Employee extends Person {
  #salary;
  static counter=1;

  constructor(
    fullName,
    money,
    sleepMood,
    healthRate,
    email,
    workMood,
    salary,
    isManager
  ) {
    super(fullName, money, sleepMood, healthRate);
    this.id = Employee.counter++;
    this.email = email;
    this.workMood = workMood;
    this.#salary = salary;
    this.isManager = isManager;
  }

  work(hours) {
    if (hours == 8) {
      this.workMood = "happy";
    } else if (hours < 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }

  setSalary(salaryVal) {
    if (salaryVal >= 1000) {
      this.#salary = salaryVal;
    } else {
      this.#salary = 1000;
    }
  }

  getSalary() {
    return this.#salary;
  }

  setHealthRate(healthRateVal) {
    if (healthRateVal >= 0 && healthRateVal <= 100) {
      this.healthRate = healthRateVal;
    } else {
      this.healthRate = 0;
    }
  }

  getHealthRate() {
    return this.healthRate;
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees.map((employee) => ({
      id: employee.id,
      email: employee.email,
      workMood: employee.workMood,
      isManager: employee.isManager,
      healthRate: employee.getHealthRate(),
      sleepMood: employee.sleepMood,
      salary: employee.isManager ? "***" : employee.getSalary(),
    }));
  }

  getEmployee(empId) {
    const employee = this.employees.find((emp) => emp.id === empId);
    if (employee) {
      if (employee.isManager) {
        return {
          id: employee.id,
          email: employee.email,
          workMood: employee.workMood,
          isManager: true,
          healthRate: employee.getHealthRate(),
          sleepMood: employee.sleepMood,
        };
      } else {
        return employee;
      }
    } else {
      return "Not Found";
    }
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    return this.employees.filter((emp) => emp.id !== empId);
  }
}

const officeName = prompt("Enter the office name:");
const office = new Office(officeName);
let employeeIdCounter = 1;

while (true) {
  const action = prompt(`
    Menu:
    - For adding new employee enter "add"
    - If manager press "mngr"
    - If normal employee press "nrml"
    - To quit the application enter "q"
    Enter your data:`);

  if (action === null) {
    break;
  }

  if (action.toLowerCase() === "q") {
    break;
  }

  const name = prompt("Enter Name:");
  const email = prompt("Enter Email:");
  let money=prompt("Enter money:");
  let salary = prompt("Enter Salary:");
  salary >= 1000 ? salary : salary=1000;

  let workM = prompt("Enter no. of hours of work:");
  const employee = new Employee(
    name,
    money,
    "", // sleepMood placeholder
    0, // healthRate placeholder
    email,
    "", // workMood placeholder
    salary,
    action.toLowerCase() === "mngr"
  );

  employee.work(parseInt(workM));

  const sleepHours = prompt("Enter hours of sleep:");
  employee.sleep(parseInt(sleepHours));

  const meals = prompt("Enter number of meals (1-3):");
  employee.eat(parseInt(meals));

  office.hire(employee);
}

console.log(
  "Application quit. Final list of employees:\n",
  office.getAllEmployees()
);

const empId = prompt("Enter employee id to get his/her data:");
const employeeData = office.getEmployee(parseInt(empId));
console.log(employeeData);

const fire = prompt("Do you want to fire employee? (y/n)");
if (fire === "y") {
  const empIdToFire = prompt("Enter employee id to fire:");
  office.fire(parseInt(empIdToFire));
  console.log(office.getAllEmployees());
} else {
  alert("Thank you");
}
