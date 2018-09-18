function dwarfRollCall(dwarves) {
  var moreDwarves = [];
  for(var i = 0; i < dwarves.length; i++) {
    moreDwarves.push((i+1)+". "+dwarves[i] );
  } return moreDwarves.join(' ');
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    calls.push(planeteerCalls[i].toUpperCase + "!");
  } return calls;
}

function longPlaneteerCalls(words) {
  if (words.length >= 4) {
    return true;
  } else {
    return false;
  }
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++) {
    if(foods[i] === "cheddar") {
      return foods[i];
    } 
  }
  if(foods !== "cheddar") {
    return "no cheese!";
  }
}