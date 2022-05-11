const quest = require("./createQuest");

// DECLARE GLOBAL VARIABLES
// ------------------------------------------------------------------------------------------
var damage = 0;
var injury = 0;
var outcome;
var activeAdventurerId = 1;
var battle = [];


// DECLARE UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------------
async function gameMechanics(activeAdventurerId) {
  adventurerData = await fetch(`/api/adventurer/${activeAdventurerId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });

  var strWinPercentage = ((adventurerData.strength * adventurerData.class.strMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterStrength / 100));
  var dexWinPercentage = ((adventurerData.dexterity * adventurerData.class.dexMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterDexerity / 100));
  var intWinPercentage = ((adventurerData.intelligence * adventurerData.class.intMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterIntelligence / 100));

  battleArray = [strWinPercentage, dexWinPercentage, intWinPercentage];
  adventurerHitPoints = sum(adventurerData.strength + adventurerData.dexterity + adventurerData.intelligence);
  damage = 0;
  injury = 0;
  let i = 0;
  while (damage < quest.monsterHitPoints && injury < adventurerHitPoints) {
    if (Math.random() > battleArray[i]) {
      damage++
      battle.push(`Die you foul beast! - You've landed a blow!!!!!!!`)
      if (i === battleArray.length - 1) {
        i = 0;
      } else {
        i++;
      }
    } else {
      injury++
      battle.push(`Ouch! That hurt! - You've taken damage!`);
      if (i === battleArray.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }
  }

  if (hits / (hits + misses) > 0.7) {
    outcome = "Win"
  } else {
    outcome = "Loss"
  }

  return battle;
}




// EVENT LISTENERS
// ------------------------------------------------------------------------------------------











module.exports = { outcome, battle };