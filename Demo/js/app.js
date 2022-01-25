'use strict';

//create a constructor to generate an employee fullName and Salary 
function GenerateEmployee(emplyeeId, fullName) {
    this.emplyeeId = emplyeeId;
    this.fullName = fullName;
    // this.department = '';
    // {
    //     administration: administration,
    //     marketing: marketing,
    //     development: development,
    //     finance: finance
    // };
    // this.level = '';
    // {
    //     junior: junior,
    //     midSenior: midSenior,
    //     senior: senior
    // };
    //this.imageUrl = `../images/${this.fullName}.PNG`;
}

GenerateEmployee.prototype.department = function(){
    if(this.department === "administration"){
        return this.department = "administration";
    }
    else if (this.department === "marketing"){
        return this.department = "marketing";
    }
    else if (this.department === "development"){
        return this.department = "development";
    }
    else if (this.department === "finance"){
        return this.department = "finance"
    }
    document.write(`the department of the empployee ${this.department}`)
}
// let depa;
// GenerateEmployee.prototype.level = function(){
//     let depa = document.write(`the department of the empployee ${this.department}`)
//     if(this.level === "junior"){
//         return this.level = "junior";
//     }
//     else if(this.level === "midSenior"){
//         return this.level = "midSenior";
//     }
//     else{
//         return this.level = "senior"
//     }
// return depa;
// }

//Makes a new object and assign the object to the keyword this ... binds the function to the keyword this
let employeeOne = new GenerateEmployee(1000, 'Ghazi Samer');
employeeOne.render();
this.department('development');


//Calculate the Salary for each employee depending on the level

// let min = 0;
// let max = 0;
// let randomSalary;
//add a method to the constructor function using prototype to calculate the salary 
// GenerateEmployee.prototype.salary = function () {

//     if (this.level.junior === true) {
//         min = 500;
//         max = 1000;
//     }
//     else if (this.level.midSenior === true) {
//         min = 1000;
//         max = 1500;
//     }
//     else if (this.level.senior === true) {
//         min = 1500;
//         max = 2000;
//     }
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     document.write(`<p>${this.fullName}</p>`)
//     document.write(`<p>Salary: ${this.salary}</p>`)
//     randomSalary = Math.floor(Math.random() * (max - min) + min);
//     return randomSalary;
// }
// console.log(randomSalary);




// let employeeOne = new GenerateEmployee(1000, 'Ghazi Samer',administration, senior);
// let employeeTwo = new GenerateEmployee(1001, 'Lana Ali', false, false, false, true, false, false, true);
// let employeeThree = new GenerateEmployee(1002, 'Tamara Ayoub', false, true, false, false, false, false, true);
// let employeeFour = new GenerateEmployee(1003, 'Safi Walid', true, false, false, false, false, true, false);
// let employeeFive = new GenerateEmployee(1004, 'Omar Zaid', false, false, true, false, false, false, true);
// let employeeSix = new GenerateEmployee(1005, 'Rana Saleh', false, false, true, false, true, false, false);
// let employeeSeven = new GenerateEmployee(1006, 'Hadi Ahmad', false, false, false, true, false, true, false);


// employeeOne.salary();
// employeeTwo.salary();
// employeeThree.salary();
// employeeFour.salary();
// employeeFive.salary();
// employeeSix.salary();
// employeeSeven.salary();

// document.write(`<p>${this.fullName}</p>`)

// document.write(`<p>${this.salary}</p>`)

























    //      Calculate the salary for each employee      //
/**
    if the level of the employee is Senior
        generate a random value between the min and the max
        Min 1500 Max 2000

    if the level of the employee is Mid-Senior
        generate a random value between the min and the max
        Min 1000 Max 1500

    if the level of the employee is Junior
        generate a random value between the min and the max
        Min 500 Max 1000

Use the random function to get the random salary
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
 */






        //     Calculate the net Salary        //
/**
 Net Salary = RandomSalary - Tax
 Tax = RandomSalary * Tax Percentage
 */







