const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
const attackPlayer = function(health) {
  return health - randomDamage();
};
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} has defeated ${loser}`);
};
const isDead = health => {
  return health <= 0;
};

function fight() {
  const player1 = "Henry";
  const player2 = "Sebastian";
  let player1Health = 100;
  let player2Health = 100;
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight();
