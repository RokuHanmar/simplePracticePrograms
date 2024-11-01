let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 18;

if (age > 18 && early === true) {
  raceNumber += 1000;
}

if (age > 18 && early === true) {
  console.log(`Racer ${raceNumber} will race at 9:30 am`);
} else if (age > 18 && early === false) {
  console.log(`Racer ${raceNumber} will race at 11:30 am`);
} else if (age < 18) {
  console.log(`Racer ${raceNumber} will race at 12:30 pm`);
} else {
  console.log("All other racers see the registration desk");
}
