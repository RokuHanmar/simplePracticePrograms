const getSleepHours = (day) => {
day = day.toLowerCase();
  switch (day) {
    case "monday":
    return 8;
    break;

    case "tuesday":
    return 7;
    break;

    case "wednesday":
    return 6;
    break;

    case "thursday":
    return 5;
    break;

    case "friday":
    return 4;
    break;

    case "saturday":
    return 3;
    break;

    case "sunday":
    return 2;
    break;

    default:
    return "Invalid input";
  }
}

const getActualSleepHours = () =>
+  getSleepHours("Monday")
+  getSleepHours("Tuesday");
+  getSleepHours("Wednesday");
+  getSleepHours("Thursday");
+  getSleepHours("Friday");
+  getSleepHours("Saturday");
+  getSleepHours("Sunday");

//console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

//console.log(getIdealSleepHours());

const calculateSleepDebt = (ideal) => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(ideal);
  if (actualSleepHours === idealSleepHours) {
    console.log("You get the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    var totalDifference = actualSleepHours - idealSleepHours;
    console.log("You get too much sleep");
    console.log(`You are ${totalDifference} hours ahead of your schedule`);
  } else {
    var totalDifference = idealSleepHours - actualSleepHours;
    console.log("You don't get enough sleep");
    console.log(`You are ${totalDifference} hours behind your schedule`);
  }

}

calculateSleepDebt(5);
