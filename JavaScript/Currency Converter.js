let riel = 2103942;
let kyat = 19092;
let krone = 109;
let lek = 9094;

/*
  console.log(riel);
  console.log(kyat);
  console.log(krone);
  console.log(lek);
*/

let riel_to_usd = 0.00025;
let kyat_to_usd = 0.00048;
let krone_to_usd = 0.09;
let lek_to_usd = 0.011;

let riel_dollars = riel * riel_to_usd;
let kyat_dollars = kyat * kyat_to_usd;
let krone_dollars = krone * krone_to_usd;
let lek_dollars = lek * lek_to_usd;

let total_dollars = riel_dollars + kyat_dollars + krone_dollars + lek_dollars - (1*4);
console.log(total_dollars);





