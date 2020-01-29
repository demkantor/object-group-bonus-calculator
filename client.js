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
console.log(employeeBonusInfo("employees[i].name"));
console.log(employeeWithBonus);

let bonus = 0;
let adjustedBonus = 1;
let readjustedBonus = 1;

function rating(reviewRating, annualSalary){
  if (reviewRating <= 2){
    return "no bonus";
  } else
    if (reviewRating === 3){
      bonus = (1.04*annualSalary);
    }else 
      if (reviewRating === 4){
        bonus = (1.06*annualSalary);
      }else
        if (reviewRating === 5){
          bonus = (1.1*annualSalary);
        }
        return "bonus is: " + bonus
  }

  console.log(rating(3, 47000));

  function yearsOfServices(employeeNumber, annualSalary){
    if (employeeNumber > 999 && employeeNumber < 9999){
      adjustedBonus = 1.05*annualSalary;
      return "Adjusted Bonus: " + adjustedBonus;
    } else {
      return "no additional bonus"
    }
  }
  
  console.log(yearsOfServices(6243, 74750));

  function tooMuchMoney (annualSalary){
    if (annualSalary > 65000){
      readjustedBonus = (.99 * adjustedBonus);
    }else{
      return "no bonus adjustment based on salary"
    }
    return readjustedBonus;
  }

console.log(tooMuchMoney(74750));

//no bonus can be above 13% and none below 0%

/*
let keys = Object.keys(employees);
console.log(keys);
let values = Object.values(employees);
console.log(values);
let entries = Object.entries(employees);
console.log(entries);
*/

console.log( employees );
