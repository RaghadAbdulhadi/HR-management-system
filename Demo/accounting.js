function gettingItems() {
  let stringObj = localStorage.getItem('employee');
  let parsObj = JSON.parse(stringObj);
  if (parsObj !== null) {
    return parsObj;
  } else {
    return [];
  }
  
}
console.log(gettingItems());

let newEmployeeCard = document.getElementById('addEmployeeSection');
let newArr = gettingItems();
// let salary = salary();

//Add a for Loop to loop over the things you got from the local storage and put the function inside as we made in the app.js
function render2() {

  //Add table layout
  let tableLayout = document.getElementById('table');
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
  let sumdepAd = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].department == "Administration") {
      sumdepAd = sumdepAd + 1;
      tableEmpAdm.textContent = sumdepAd;
    }
  }

  //Row#2 - Total Salary of the employees in Administration department
  let tableTotalSalaryAdm = document.createElement('td');
  tableRow2.appendChild(tableTotalSalaryAdm);
  let EmpSalarySumAd = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].department == "Administration") {
      let EmpSalary = newArr[i].netSalary;
      EmpSalarySumAd = Math.floor(EmpSalarySumAd + EmpSalary);
      tableTotalSalaryAdm.textContent = EmpSalarySumAd;
    }
  }

  //Row#2 - Avg Salary of the employees in Administration department
  let tableAvgSalaryAdm = document.createElement('td');
  tableRow2.appendChild(tableAvgSalaryAdm);
  let avgSalaryAd = Math.floor(EmpSalarySumAd / sumdepAd);
  tableAvgSalaryAdm.textContent = avgSalaryAd;
  //console.log(avgSalary);

  //Row#3 
  let tableRow3 = document.createElement('tr');
  tableLayout.appendChild(tableRow3);

  //Row#3 - Marketing
  let tableHead6 = document.createElement('th');
  tableRow3.appendChild(tableHead6);
  tableHead6.textContent = 'Marketing';

  //Row#3 - Total Number of the employees in Marketing department
  let tableEmpMark = document.createElement('td');
  tableRow3.appendChild(tableEmpMark);
  let sumdepMa = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].department == "Marketing") {
      sumdepMa = sumdepMa + 1;
      tableEmpMark.textContent = sumdepMa;
    }
  }

  //Row#3 - Total Salary of the employees in Marketing department
  let tableTotalSalaryMark = document.createElement('td');
  tableRow3.appendChild(tableTotalSalaryMark);
  let EmpSalarySumMa = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].department == "Marketing") {
      let EmpSalary = newArr[i].netSalary;
      EmpSalarySumMa =  Math.floor(EmpSalarySumMa + EmpSalary);
      tableTotalSalaryMark.textContent = EmpSalarySumMa;
    }
  }

  //Row#3 - Avg Salary of the employees in Marketing department
  let tableAvgSalaryMark = document.createElement('td');
  tableRow3.appendChild(tableAvgSalaryMark);
  let avgSalaryMa = Math.floor(EmpSalarySumMa / sumdepMa);
  tableAvgSalaryMark.textContent = avgSalaryMa;
  //console.log(avgSalary);
  
  //Row#4 
  let tableRow4 = document.createElement('tr');
  tableLayout.appendChild(tableRow4);

  //Row#4 - Development
  let tableHead7 = document.createElement('th');
  tableRow4.appendChild(tableHead7);
  tableHead7.textContent = 'Development';

  //Row#4 - Total Number of the employees in Development department
  let tableEmpDeve = document.createElement('td');
  tableRow4.appendChild(tableEmpDeve);
  let sumdepDev = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].department == "Development") {
      sumdepDev = sumdepDev + 1;
      tableEmpDeve.textContent = sumdepDev;
    }
  }

  //Row#4 - Total Salary of the employees in Development department
  let tableTotalSalaryDeve = document.createElement('td');
  tableRow4.appendChild(tableTotalSalaryDeve);
  let EmpSalarySumDev = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].department == "Development") {
      let EmpSalary = newArr[i].netSalary;
      EmpSalarySumDev = Math.floor(EmpSalarySumDev + EmpSalary);
      tableTotalSalaryDeve.textContent = EmpSalarySumDev;
    }
  }

  //Row#4 - Avg Salary of the employees in Development department
  let tableAvgSalaryDeve = document.createElement('td');
  tableRow4.appendChild(tableAvgSalaryDeve);
  let avgSalaryDe = Math.floor(EmpSalarySumDev / sumdepDev);
  tableAvgSalaryDeve.textContent = avgSalaryDe;
  //console.log(avgSalary);
 


  //Row#5
  let tableRow5 = document.createElement('tr');
  tableLayout.appendChild(tableRow5);

  //Row#5 - Finance
  let tableHead8 = document.createElement('th');
  tableRow5.appendChild(tableHead8);
  tableHead8.textContent = 'Finance';

  //Row#5 - Total Number of the employees in Finance department
  let tableEmpFin = document.createElement('td');
  tableRow5.appendChild(tableEmpFin);
  let sumdepFi = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].department == "Finance") {
      sumdepFi = sumdepFi + 1;
      tableEmpFin.textContent = sumdepFi;
    }
  }

  //Row#5 - Total Salary of the employees in Finance department
  let tableTotalSalaryFin = document.createElement('td');
  tableRow5.appendChild(tableTotalSalaryFin);
  let EmpSalarySumFi = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].department == "Finance") {
      let EmpSalary = newArr[i].netSalary;
      EmpSalarySumFi = Math.floor(EmpSalarySumFi + EmpSalary);
      tableTotalSalaryFin.textContent = EmpSalarySumFi;
    }
  }

  //Row#5 - Avg Salary of the employees in Finance department
  let tableAvgSalaryFin = document.createElement('td');
  tableRow5.appendChild(tableAvgSalaryFin);
  let avgSalaryFi = Math.floor(EmpSalarySumFi / sumdepFi);
  tableAvgSalaryFin.textContent = avgSalaryFi;
  //console.log(avgSalary);




  //Row#6
  let tableRow6 = document.createElement('tr');
  tableLayout.appendChild(tableRow6);

  //Row#6 - Total
  let tableHead9 = document.createElement('th');
  tableRow6.appendChild(tableHead9);
  tableHead9.textContent = 'Total';

  //Row#6 - Total Number of Employees
  let tableTotal = document.createElement('td');
  tableRow6.appendChild(tableTotal);
  tableTotal.textContent =  sumdepAd + sumdepFi + sumdepDev + sumdepMa;

  
  //Row#6 - Total Salary for all Departments
  let tableTotalSalary = document.createElement('td');
  tableRow6.appendChild(tableTotalSalary);
  tableTotalSalary.textContent = EmpSalarySumFi + EmpSalarySumDev + EmpSalarySumMa + EmpSalarySumAd;


  //Row#6 - Avg Salary for all Departments
  let tableAvgSalary = document.createElement('td');
  tableRow6.appendChild(tableAvgSalary);
  tableAvgSalary.textContent =   avgSalaryAd + avgSalaryMa + avgSalaryDe + avgSalaryFi;
  
}

render2();