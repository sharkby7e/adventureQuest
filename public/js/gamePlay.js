const quest = require("./createQuest");


var battleScore = 0;
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
  if (battleScore > 1) { outcome = "Win" } else { outcome = "Lose" }

}


