console.log("script is linked");
// DECLARE GLOBAL VARIABLES
// ------------------------------------------------------------------------------------------
var damage = 0;
var fightArray = [];
var injury = 0;
var injuryString = '';
var damageString = '';
var adventurerHPStr = '';
var adventurerPower;
var monsterHPStr = '';
var outcome;
var battleString = '';
var questId;
var adventurerId;
var adventurer = [];
var quest = [];

const adventureQuestIndex = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
console.log(adventureQuestIndex)
// TESTING
//=================================================================================================
// const adventureQuestIndex = 1;
// var questIndex = 0;
// var adventurerIndex = 0;
//=================================================================================================



// DECLARE UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------------
async function getAQIndex() {
  await fetch(`/api/adventurequest/${adventureQuestIndex}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let questId = data.questId;
      console.log(questId);
      let adventurerId = data.adventurerId;
      console.log(adventurerId);
      getQuest(questId, adventurerId);
    })
}

async function getQuest(iQ, iA) {
  console.log(iQ)
  await fetch(`/api/quests/${iQ}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let quest = data;
      let adventurerId = iA;
      getAdventurer(adventurerId, quest);
    })
}

async function getAdventurer(aId, qData) {
  quest = qData;
  await fetch(`/api/adventurer/${aId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      adventurer = data;
    })
    .then(function () {
      gameMechanics(adventurer, quest);
    })
}

function gameMechanics(adventurer, quest) {
  var strWinPercentage =
    (adventurer.strength * adventurer.class.strMultiplier) / 50 + quest.difficulty + (0 - quest.monsterStr / 100);
  var dexWinPercentage =
    (adventurer.dexterity * adventurer.class.dexMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterDex / 100);
  var intWinPercentage =
    (adventurer.intelligence * adventurer.class.intMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterInt / 100);


  fightArray = [strWinPercentage, dexWinPercentage, intWinPercentage];
  adventurerHitPoints = adventurer.strength + adventurer.dexterity + adventurer.intelligence - 40;
  adventurerPower = (((strWinPercentage + dexWinPercentage + intWinPercentage) / 3) / 1);
  monsterHitPoints = quest.monsterHitPoints;

  var tookDamageArr = [
    `Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!`,
    `That one was free... I need to make to even the odds for a challenge! - You've taken damage!`,
    `You're not getting away with that! Come here!!! - You've taken damage!`,
    `You think that hurt?! Think again, I'm just getting started! - You've taken damage!`,
    `If I wanted a kiss I'd have called your mother! - You've taken damage!`
  ]
  var dealtDamageArr = [
    `Die you foul beast! You don't stand a chance! - You've landed a blow!`,
    `Not today! I will purify this land of your filth! - You've landed a blow!`,
    `Go on... Try again and witness the pain I wrought upon your flesh! - You've landed a blow!`,
    `I'm in need of some good practice!... and you're in need of a lesson! - You've landed a blow!`,
    `I shall bathe in your blood as I rain hellfire down upon your damned soul!!! - You've landed a blow!`
  ]


  console.log("adv hit points = " + adventurerHitPoints);
  console.log("monster hitpoints " + monsterHitPoints);

  damage = 0;
  injury = 0;
  let i = 0;

  while (monsterHitPoints > 0 && adventurerHitPoints > 0) {
    if (Math.random() < fightArray[i] + adventurerPower) {
      damage = Math.ceil(Math.floor((Math.random() * 3) + 1) + adventurerPower);
      damageString = damageString.concat(damage.toString() + '|');
      injuryString = injuryString.concat(' ' + '|');
      battleString = battleString.concat(dealtDamageArr[Math.floor((Math.random() * (dealtDamageArr.length - 1)) + 1)] + '|');
      monsterHitPoints = monsterHitPoints - damage;
      monsterHPStr = monsterHPStr.concat(monsterHitPoints.toString() + '|');
      adventurerHPStr = adventurerHPStr.concat(adventurerHitPoints.toString() + '|');
      if (i === fightArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    } else {
      injury = Math.ceil(Math.floor((Math.random() * 5) + 1) - adventurerPower);
      injuryString = injuryString.concat(injury.toString() + '|');
      damageString = damageString.concat(' ' + '|');
      battleString = battleString.concat(tookDamageArr[Math.floor((Math.random() * (tookDamageArr.length - 1)) + 1)] + '|');
      adventurerHitPoints = adventurerHitPoints - injury;
      adventurerHPStr = adventurerHPStr.concat(adventurerHitPoints.toString() + '|');
      monsterHPStr = monsterHPStr.concat(monsterHitPoints.toString() + '|');
      if (i === fightArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    }
  }

  if (monsterHitPoints < 1) {
    win = true;
  } else {
    win = false;
  }

  battleArr = battleString.split('|');
  adventurerHPArr = adventurerHPStr.split('|');
  monsterHPArr = monsterHPStr.split('|');
  damageArr = damageString.split('|');
  injuryArr = injuryString.split('|');

  battleArr.push(' ');
  adventurerHPArr.push(' ');
  monsterHPArr.push(' ');
  damageArr.push(' ');
  injuryArr.push(' ');
  console.log(battleString);
  console.log(battleArr);
  if (win) { outcome = 'VICTORY!!!' } else { outcome = "Death comes to us all..." }


  showBattle(battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome);
}


function showBattle(battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome) {
  let videoDurationInSecs = 44;
  let interval = Math.floor((videoDurationInSecs * 1000) / battleArr.length);
  let i = 0;
  initiateGamePlay(i, interval, videoDurationInSecs, battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome);
}


function initiateGamePlay(i, interval, Duration, battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome) {
  battle = setInterval(function () {
    Duration--;
    console.log('round ' + i)
    if (Duration === 0) {
      clearInterval(battle);
      console.log("Out of time...");
    } else {

      if (i === battleArr.length - 2) {
        $('#battle').text('');
        $('#adventurerHP').text('');
        $('#monsterHP').text('');
        $('#damage').text('');
        $('#injuries').text('');
        $('#outcome').text(outcome);
        $('#back-to-questboard').append('<button>').attr({ id: 'results' })
        return;
      } else {
        $('#battle').text(battleArr[i]);
        $('#adventurerHP').text(adventurerHPArr[i]);
        $('#monsterHP').text(monsterHPArr[i]);
        $('#damage').text(damageArr[i]);
        $('#injuries').text(injuryArr[i]);
        $('#outcome').text('');
        i = i + 1;
      }
    }
console.log(interval);
  }, interval);
}




// 












// EVENT LISTENERS
// ------------------------------------------------------------------------------------------
$("#results").on("click", (e) => {
  e.preventDefault();
  window.location.href = '/results';
});








// INITIATE ON PAGE LOAD
// ------------------------------------------------------------------------------------------
getAQIndex();





  // function initiateGamePlay() {
  //   var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  //   $("#stat-points").text(pointsLeft);
  //   window.setTimeout("initiateGamePlay()", 10);
  // }



// setTimeout(function(){
//   window.location.href = '/results';
// }, 1000);