'use strict';
function GenerateEmployee(emplyeeId, fullName, department, level, imageUrl) {
    this.emplyeeId = emplyeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
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
    this.salary = randomSalary - tax;
}
function emplyeeId() {
   return  Math.floor(Math.random() * 899999 + 100000);
}

GenerateEmployee.prototype.render = function () {
    // document.write(`<p>${this.fullName}</p>`);
    // document.write(`<p>${this.salary}</p>`);

    //Add a div and append it to addEmployeeSection
    let newEmployeeCard = document.getElementById('addEmployeeSection');
    let employeeCard = document.createElement('div');
    newEmployeeCard.appendChild(employeeCard);
    // employeeCard.style.backgroundColor = "red";

    //Add Image for each employee in img tag and append it to employeeCard
    let employeePic = document.createElement('img');
    employeeCard.appendChild(employeePic);
    employeePic.setAttribute('src', this.imageUrl);
    employeePic.style.width = '200px'
    employeePic.style.borderRadius = "200px"

    //Add Emplyee Full Name
    let employeeFullName = document.createElement('h3');
    employeeCard.appendChild(employeeFullName);
    employeeFullName.textContent = `Employee Name: ${this.fullName}`;

    // //Add EmployeeId to the newEmployeeCard 
    let newEmployeeId = document.createElement('p');
    employeeCard.appendChild(newEmployeeId);
    newEmployeeId.textContent = `Employee Id: ${this.emplyeeId}`;

    //Add Department 
    let emplyeeDepartment = document.createElement('p');
    employeeCard.appendChild(emplyeeDepartment);
    emplyeeDepartment.textContent = `Department: ${this.department}`;

    //Add Level
    let employeeLevel = document.createElement('p');
    employeeCard.appendChild(employeeLevel);
    employeeLevel.textContent = `Level: ${this.level}`;


    //Add Salary
    let employeeSalary = document.createElement('p');
    employeeCard.appendChild(employeeSalary);
    employeeSalary.textContent = `Salary: ${this.salary}`;
}

let employeeOne = new GenerateEmployee(1000, 'Ghazi Samer', 'Administration', 'Senior','./images/GhaziSamer.jpg');
let employeeTwo = new GenerateEmployee(1001, 'Lana Ali', 'Finance', 'Senior', './images/LanaAli.jpg');
let employeeThree = new GenerateEmployee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './images/TamaraAyoub.jpg');
let employeeFour = new GenerateEmployee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './images/SafiWalid.jpg');
let employeeFive = new GenerateEmployee(1004, 'Omar Zaid', 'Development', 'Senior','./images/OmarZaid.jpg');
let employeeSix = new GenerateEmployee(1005, 'Rana Saleh', 'Development', 'Junior','./images/RanaSaleh.jpg');
let employeeSeven = new GenerateEmployee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior','./images/HadiAhmad.jpg');

let employees = [employeeOne, employeeTwo, employeeThree, employeeFour, employeeFive, employeeSix, employeeSeven];

for (let i = 0; i < employees.length; i++) {
    employees[i].salary();
    employees[i].render();
}




//Event
let newEmployee = document.getElementById('newEmployee');
newEmployee.addEventListener('submit', addNewEmployee);

function addNewEmployee(event) {
    event.preventDefault();
    // console.log(event.target.getAttribute('value'));
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.imageUrl.value;
    console.log(fullName, department, level, imageUrl);
    let EmployeesNewCard = new GenerateEmployee(emplyeeId(),fullName, department, level, imageUrl);
    EmployeesNewCard.salary();
    EmployeesNewCard.render();
}
