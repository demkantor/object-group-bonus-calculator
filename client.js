const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

employees.forEach(loopThroughEmployees);
function loopThroughEmployees(item, index) {
  for (let key in item) {
    console.log(item[key]);
  }
}
loopThroughEmployees(employees);

function findValues(){
let i, item;
    for (i = 0; i < employees.length; i++) {
     for (item in employees[i]) {
     return (item + ": " + employees[i][item]);
    }
  }
}
console.log(findValues());

let employeeWithBonus = [];
function employeeBonusInfo(employee){
  let employeeObject = {
    name: employee.name,
    bonusPercentage: employee.bonusPercentage,
    totalCompensation: employee.totalCompensation,
    totalBonus: employee.totalBonus
  }
  return employeeWithBonus.push(employeeObject);
}
console.log(employeeBonusInfo("Scout"));
console.log(employeeWithBonus);



/*
let keys = Object.keys(employees);
console.log(keys);
let values = Object.values(employees);
console.log(values);
let entries = Object.entries(employees);
console.log(entries);
*/

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
