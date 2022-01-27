'use strict';
let newEmployeeCard = document.getElementById('addEmployeeSection');
function GenerateEmployee(emplyeeId, fullName, department, level, imageUrl) {
    this.emplyeeId = emplyeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    //push new object instances
    GenerateEmployee.allEmployees.push(this);
}


GenerateEmployee.allEmployees = [];
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
//Random Id Number
function emplyeeId() {
    return Math.floor(Math.random() * 899999 + 100000);
}

function render() {
    let employees;

    for (let i = 0; i < GenerateEmployee.allEmployees.length; i++) {
        employees = GenerateEmployee.allEmployees[i];

        //Create a div to contain the employees information
        let employeeCard = document.createElement('div');
        newEmployeeCard.appendChild(employeeCard);

        //Add Employee Picture
        let employeePic = document.createElement('img');
        employeeCard.appendChild(employeePic);
        employeePic.setAttribute('src', employees.imageUrl);
        employeePic.style.width = '200px';
        employeePic.style.borderRadius = "200px";

        //Add Emplyee Full Name
        let employeeFullName = document.createElement('h3');
        employeeCard.appendChild(employeeFullName);
        employeeFullName.textContent = `Employee Name: ${employees.fullName}`;

        //Add EmployeeId 
        let newEmployeeId = document.createElement('p');
        employeeCard.appendChild(newEmployeeId);
        newEmployeeId.textContent = `Employee Id: ${employees.emplyeeId}`;

        //Add Department 
        let emplyeeDepartment = document.createElement('p');
        employeeCard.appendChild(emplyeeDepartment);
        emplyeeDepartment.textContent = `Department: ${employees.department}`;

        //Add Level
        let employeeLevel = document.createElement('p');
        employeeCard.appendChild(employeeLevel);
        employeeLevel.textContent = `Level: ${employees.level}`;

        //Add Salary
        let employeeSalary = document.createElement('p');
        employeeCard.appendChild(employeeSalary);
        employeeSalary.textContent = `Salary: ${employees.salary}`;
    }
    //Add table layout
    let tableLayout = document.createElement('table');
    newEmployeeCard.appendChild(tableLayout);

    //Row#1
    let tableRow1 = document.createElement('tr');
    tableLayout.appendChild(tableRow1);

    //Row#1 - Department
    let tableHead1 = document.createElement('th');
    tableRow1.appendChild(tableHead1);
    tableHead1.textContent = 'Department';

    //Row#1 - # of employees
    let tableHead2 = document.createElement('th');
    tableRow1.appendChild(tableHead2);
    tableHead2.textContent = '# of Employees';

    //Row#1 - Total Salary
    let tableHead3 = document.createElement('th');
    tableRow1.appendChild(tableHead3);
    tableHead3.textContent = 'Total Salary';

    //Row#1 - Average
    let tableHead4 = document.createElement('th');
    tableRow1.appendChild(tableHead4);
    tableHead4.textContent = 'Average';

    //Row#2 
    let tableRow2 = document.createElement('tr');
    tableLayout.appendChild(tableRow2);

    //Row#2 - Administration
    let tableHead5 = document.createElement('th');
    tableRow2.appendChild(tableHead5);
    tableHead5.textContent = 'Administration';

    //Row#2 - Total Number of the employees in Administration department
    let tableEmpAdm = document.createElement('td');
    tableRow2.appendChild(tableEmpAdm);
    let sumdep = 0;
    for (let j = 0; j < GenerateEmployee.allEmployees.length; j++) {
        if (GenerateEmployee.allEmployees[j].department == "Administration") {
            sumdep = sumdep + 1;
            tableEmpAdm.textContent = sumdep;
        }
    }

    //Row#3 - Total Salary of the employees in Administration department
    let tableTotalSalaryAdm = document.createElement('td');
    tableRow2.appendChild(tableTotalSalaryAdm);
    let EmpSalarySum = 0;
    for (let i = 0; i < GenerateEmployee.allEmployees.length; i++) {
        if (GenerateEmployee.allEmployees[i].department == "Administration") {
            let EmpSalary = allEmployees[i].salary;
            EmpSalarySum += EmpSalary
            tableTotalSalaryAdm.textContent = EmpSalarySum;
            console.log(EmpSalary)
            this.salary();
        }
    }

    //Row#3 - Total Salary of the employees in Administration department
    let tableAvgSalaryAdm = document.createElement('td');
    tableRow2.appendChild(tableAvgSalaryAdm);
    let avgSalary = EmpSalarySum/sumdep;
    tableAvgSalaryAdm.textContent = avgSalary;
    //console.log(avgSalary);




}
if (localStorage.getItem('employee') === null) {
    let employeeOne = new GenerateEmployee(1000, 'Ghazi Samer', 'Administration', 'Senior', './images/GhaziSamer.jpg');
    let employeeTwo = new GenerateEmployee(1001, 'Lana Ali', 'Finance', 'Senior', './images/LanaAli.jpg');
    let employeeThree = new GenerateEmployee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './images/TamaraAyoub.jpg');
    let employeeFour = new GenerateEmployee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './images/SafiWalid.jpg');
    let employeeFive = new GenerateEmployee(1004, 'Omar Zaid', 'Development', 'Senior', './images/OmarZaid.jpg');
    let employeeSix = new GenerateEmployee(1005, 'Rana Saleh', 'Development', 'Junior', './images/RanaSaleh.jpg');
    let employeeSeven = new GenerateEmployee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './images/HadiAhmad.jpg');

    let employeess = [employeeOne, employeeTwo, employeeThree, employeeFour, employeeFive, employeeSix, employeeSeven];
    for (let i = 0; i < employeess.length; i++) {
        employeess[i].salary();
    }

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
    let EmployeesNewCard = new GenerateEmployee(emplyeeId(), fullName, department, level, imageUrl);
    settingItem();
    EmployeesNewCard.salary();
    newEmployeeCard.innerHTML = "";
    render();
}

//Local Storage
function settingItem() {
    let data = JSON.stringify(GenerateEmployee.allEmployees);
    localStorage.setItem('employee', data);
}

function gettingItem() {
    let stringObj = localStorage.getItem('employee');
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null) {
        GenerateEmployee.allEmployees = parsObj;
    }
    render();
}
gettingItem();

