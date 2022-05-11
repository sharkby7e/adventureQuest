const quest = require("./createQuest");


var wins = 0;
var losses = 0;
var outcome;
var activeAdventurerId = 1;

async function gameMechanics(activeAdventurerId) {
  battleScore = 0;
  adventurerData = await fetch(`/api/adventurer/${activeAdventurerId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });


  strWinPercentage = ((adventurerData.strength * adventurerData.class.strMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterStrength / 100));
  dexWinPercentage = ((adventurerData.dexterity * adventurerData.class.dexMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterDexerity / 100));
  intWinPercentage = ((adventurerData.intelligence * adventurerData.class.intMultiplier) / 100) + quest.difficulty + (0 - (quest.monsterIntelligence / 100));

  battleArray = [strWinPercentage, dexWinPercentage, intWinPercentage];
  for (let i = 0; i < battleArray.length; i++) {
    if (Math.random() > battleArray[i]) {
      battleScore++
    }
  }
  let wins = 0;
  let losses = 0;
  let count = 0;
  while (count < battleArray.length * 100) {
    if (Math.random() > battleArray[i]) {
      wins++
    } else {
      losses++
    }
    count++
  }

  if (wins / (wins + losses) > 0.7) {
    outcome = "Win"
  } else {
    outcome = "Lose"
  }

}


module.exports = { outcome };