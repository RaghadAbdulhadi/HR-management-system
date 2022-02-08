'use strict';
function GenerateEmployee(emplyeeId, fullName, department, level) {
    this.emplyeeId = emplyeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = `./images/${this.fullName}.PNG`;
    this.netSalary = 0;
}


let min = 0;
let max = 0;
GenerateEmployee.prototype.salary = function () {

    if (this.level == 'Junior') {
        min = 500;
        max = 1000;
    }
    else if (this.level == 'Mid-Senior') {
        min = 1000;
        max = 1500;
    }
    else if (this.level == 'Senior') {
        min = 1500;
        max = 2000;
    }
    let randomSalary = Math.floor(Math.random() * (max - min) + min);
    let tax = randomSalary * 0.075;
    this.netSalary = randomSalary - tax;
}

GenerateEmployee.prototype.render = function () {
    document.write(`<p>${this.fullName}</p>`);
    document.write(`<p>${this.netSalary}</p>`);

}

let employeeOne = new GenerateEmployee(1000, 'Ghazi Samer', 'Administration', 'Senior');
let employeeTwo = new GenerateEmployee(1001, 'Lana Ali', 'Finance', 'Senior');
let employeeThree = new GenerateEmployee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
let employeeFour = new GenerateEmployee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
let employeeFive = new GenerateEmployee(1004, 'Omar Zaid', 'Development', 'Senior');
let employeeSix = new GenerateEmployee(1005, 'Rana Saleh', 'Development', 'Junior');
let employeeSeven = new GenerateEmployee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

let employees = [employeeOne, employeeTwo, employeeThree, employeeFour, employeeFive, employeeSix, employeeSeven];

for (let i = 0; i < employees.length; i++) {
    employees[i].salary();
    employees[i].render();
}
