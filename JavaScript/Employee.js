class Employee{
  constructor(name, hourlyWage){
    this.name = name;
    this.hourlyWage = hourlyWage;
    this.hoursWorked = 0;
  }

  logHours(numberOfHoursWorked) {
    return this.hoursWorked += numberOfHoursWorked;
  }
  generatePaycheck(){
    console.log(this.hoursWorked * this.hourlyWage);
    this.hoursWorked = 0;
    return this.hoursWorked;
  }
}
