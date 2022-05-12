function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $("#stat-points").text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);
}
console.log("script is linked");
// DECLARE GLOBAL VARIABLES
// ------------------------------------------------------------------------------------------
var damage = 0;
var injury = 0;
var outcome;
var battle = [];
var adventurerId = 0;
var questId = 0;
var adventurer = [];
var quest = [];
const adventurers = $("#adventurers");
const quests = $("#quests");
// DECLARE UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------------
async function getQuest() {
  await fetch(`/api/quests/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quest = data.allQuests[0];
    })
    .then(getAdventurer());
}

async function getAdventurer() {
  await fetch(`/api/adventurer`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      adventurer = data[0];
    })
    .then(function () {
      gameMechanics(adventurer, quest);
    });
}

function gameMechanics(adventurer, quest) {
  var strWinPercentage =
    (adventurer.strength * adventurer.class.strMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterStr / 100);
  var dexWinPercentage =
    (adventurer.dexterity * adventurer.class.dexMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterDex / 100);
  var intWinPercentage =
    (adventurer.intelligence * adventurer.class.intMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterInt / 100);

  console.log("str win % :" + strWinPercentage);
  console.log("dex win % :" + dexWinPercentage);
  console.log("int win % :" + intWinPercentage);

  battleArray = [strWinPercentage, dexWinPercentage, intWinPercentage];
  adventurerHitPoints =
    adventurer.strength + adventurer.dexterity + adventurer.intelligence;

  console.log("battleArray: " + battleArray);
  console.log("adv hit points = " + adventurerHitPoints);
  console.log("monster hitpoints " + quest.monsterHitPoints);

  damage = 0;
  injury = 0;
  let i = 0;
  while (damage < quest.monsterHitPoints && injury < adventurerHitPoints) {
    if (Math.random() > battleArray[i]) {
      damage = damage + 1;
      battle.push(`Die you foul beast! - You've landed a blow!`);
      if (i === battleArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    } else {
      injury = injury + 1;
      battle.push(
        `Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!`
      );
      if (i === battleArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    }
  }

  if (damage / (damage + injury) > 0.7) {
    outcome = "Win";
  } else {
    outcome = "Loss";
  }

  console.log("damage dealt =" + damage);
  console.log("injuries sustained in battle =" + injury);
  console.log("outcome: " + outcome);
  console.log("The battle itself: " + battle);

  return battle;
}

function adventChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  adventurerId = e.target.getAttribute("data-id");
  console.log(adventurerId);
}
function questChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  questId = e.target.getAttribute("data-id");
  console.log(questId);
}
// EVENT LISTENERS
// ------------------------------------------------------------------------------------------
$("#adventurers[class=name]").on("click", (e) => {
  e.preventDefault();
    console.log('hello');

});



  // getQuest();


// $("#").on("click", () => {
adventurers.on("click", adventChoiceHandler);
quests.on("click", questChoiceHandler);
//   getQuest();

// });
