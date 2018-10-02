function dwarfRollCall(dwarves) {
  var moreDwarves = [];
  for(var i = 0; i < dwarves.length; i++) {
<<<<<<< HEAD
    moreDwarves.push((i+1)+". "+dwarves[i] );
=======
    moreDwarves.push((i+1)+". "+dwarves[i]);
>>>>>>> c007e81699f66fe80689dbd570c2ab8faa3a33ca
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