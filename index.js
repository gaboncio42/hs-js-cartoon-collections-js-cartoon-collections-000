function dwarfRollCall(dwarves) {
  var moreDwarves = [];
  console.log(dwarves.length);
  for(var i = 0; i < dwarves.length / 2; i++) {
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
    } else if(foods[i] === "swiss cheese") {
      return foods[i];}
  }
  if(foods !== "cheddar") {
    return "no cheese!";
  }
}

function wordsWithB (words) {
  var newWords = [];
  for(var i = 0; i < length.words; i++) {
    if(words[i].startsWith("b")) {
      newWords.push(words[i]);
    }
  } return newWords;
}