// console.log('Pac-Man eats ghosts for lunch.');

// pacman-arrays
 const ghosts = ['inky', 'Blinky', 'Pinky', 'Clyde'];


console.log('There are ${ghosts.length}');
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

// pacman-objects-1
const inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

// pacman-objects-2
const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky);
console.log(ghosts.blinky)

console.log(ghosts['inky']);
console.log(ghosts['blinky']);

const ghostName = 'clyde';
ghosts[ghostName];


// pacman-for-loops
const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
for (var index = 0; index < ghosts.length; index ++) { console.log('Pac-Man eats ' + 'ghosts[index]');
}

// pacman-if-else
const powerPelletEaten = false;
const ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');

// pacman-switch
var ghost = 'Blinky';
var colour;

switch (ghost) {
case 'Inky':
  colour = 'Cyan';
  break;
case 'Blinky':
  colour = 'Red';
  break;
case 'Pinky':
  colour = 'Red';
  break;
case 'Clyde':
  colour = 'Orange';
  break;
}

console.log('${ghost} is the colour ${colour}');


named function
function eatDot() {
  console.log("MUNCH!");
}

// anonymous function
var eatDot = function() {
  console.log("MUNCH!")
}

// arrow function (also anonymous)
var eatDor = () => {
  console.log("MUNCH!");
}

// pacman-returns
function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
      case 'powerPellet':
        scoreToAdd = 50;
        break;
      case 'firstGhost':
        scoreToAdd = 200;
        break;
      case 'secondGhost':
      scoreToAdd = 400;
      break;
    }
    return currentScore + scoreToAdd;
}

let score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
