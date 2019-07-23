const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
}; //creating a random number between 1-10; *10 for limit +1 so it isn't 0
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
}; //set randNum to below 1 allowing it to be 0, and used a ternary operator to determine choice of parameters
const attackPlayer = function(health) {
  return health - randomDamage();
}; //parameter is health then subtracted random damage
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
}; //log the current state of player's health
const logDeath = (winner, loser) => {
  console.log(`${winner} has defeated ${loser}`);
}; //log who defeated whom
const isDead = health => {
  return health <= 0;
}; //return true is health is less than or equal to zero.

function fight() {
  const player1 = "Caption America"; //named player one
  const player2 = "Ironman"; //named player two
  let player1Health = 100; //set both player's health to starting point of 100
  let player2Health = 100;
  while (true) {
    //created a while loop, repeat until conditions met.
    let attacker = chooseOption(player1, player2); //set attacker to result of random player function
    if (attacker === player1) {
      //conditional if the random attacker picks player 1
      player2Health = attackPlayer(player2Health); //set, not declared, the value of player2's health to the health function
      logHealth(player2, player2Health); //logged to the console the current health after an attack
      if (isDead(player2Health)) {
        //conditional if player2's health is true (below or equal to zero)
        logDeath(player1, player2); //log the victory
        break; //end the loop
      }
    } else {
      player1Health = attackPlayer(player1Health); //this is the result of player1 not being chosen and defaulted to player2 being chosen
      logHealth(player1, player1Health); //log the health after an attack
      if (isDead(player1Health)) {
        //another conditional if the player's health is zero or below it is true
        logDeath(player2, player1); //therefore log the result
        break; //end the loop
      }
    }
  }
}
fight(); //call the fight function to start the fight
