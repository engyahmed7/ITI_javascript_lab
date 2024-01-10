class Person {
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

class Employee extends Person {
  #salary;

  constructor(
    fullName,
    money,
    sleepMood,
    healthRate,
    id,
    email,
    workMood,
    salary,
    isManager
  ) {
    super(fullName, money, sleepMood, healthRate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.#salary = salary >= 1000 ? salary : 1000;
    this.isManager = isManager;
  }

  work(hours) {
    if (hours == 8) {
      this.workMood = "happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }

  getWorkMood() {
    return this.workMood;
  }

  setHealthRate(healthRate) {
    this.healthRate = healthRate >= 0 && healthRate <= 100 ? healthRate : 0;
  }

  getHealthRate() {
    return this.healthRate;
  }

  getSalary() {
    return this.#salary;
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
    this.employees = this.employees.filter((emp) => emp.id !== empId);
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
  const id = employeeIdCounter++;
  let salary = prompt("Enter Salary:");
  salary = salary < 1000 ? salary : 1000;

  let workM = prompt("Enter no. of hours of work:");
  const employee = new Employee(
    name,
    100,
    "", 
    0,  
    id,
    email,
    "",
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

const fire= prompt("Do you want to fire employee? (y/n)");
if(fire === "y"){
  const empIdToFire = prompt("Enter employee id to fire:");
  office.fire(parseInt(empIdToFire));
  console.log(office.getAllEmployees());
}
else{
  alert("Thank you");
}
