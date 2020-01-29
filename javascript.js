console.log("final js");
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
  
for(let i=0; i<employees.length; i++){
    bonusCalculator(employees[i]);
}

  function bonusCalculator(employee){
      //console.log("this is employee", employee);
      let newObject = {
          name: employee.name,
          bonusPercentage: 0,
          totalCompensation: 0,
          totalBonus: 0
      }
      //folowing code assigns bonus % to new object
      if(employee.reviewRating <= 2){
          newObject.bonusPercentage = 0
      } else if (employee.reviewRating ==3){
        newObject.bonusPercentage = .04;
      } else if (employee.reviewRating == 4){
        newObject.bonusPercentage = .06;
      } else if (employee.reviewRating == 5){
        newObject.bonusPercentage = .10;
      }
      //the following code checks how long they have been with company
      if(employee.employeeNumber.length == 4){
          newObject.bonusPercentage += .05;
      }
      if(employee.annualSalary > 65000){
          newObject.bonusPercentage -= .01;
      }

      if(newObject.bonusPercentage > .13){
          newObject.bonusPercentage = .13;
      }else if(newObject.bonusCalculator < 0){
            newObject.bonusCalculator = 0;
      }
      newObject.totalBonus = Number(employee.annualSalary) * newObject.bonusPercentage;
      newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalBonus;

      console.log(newObject);
      document.write("here is the adjusted bonuses: " + newObject);
    }

    










  //console.log("over and done!");