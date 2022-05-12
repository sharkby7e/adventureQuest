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
var adventurerId = 0;
var questId = 0;
var adventurer = [];
var quest = [];

const adventureQuestIndex = window.location.toString().split('/')[window.location.toString().split('/').length - 1];



// DECLARE UTILITY FUNCTIONS
// ------------------------------------------------------------------------------------------




async function getAQIndex() {
  await fetch(`/api/quests/${adventureQuestIndex}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      questIndex = data.questId;
      adventurerIndex = data.adventurerId;
    })
    .then(getQuest(questIndex, adventurerIndex));
}

async function getQuest(iQuest, iAdv) {
  await fetch(`/api/quests/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      quest = data.allQuests[iQuest];
    })
    .then(getAdventurer(iAdv));
}

async function getAdventurer(advId) {
  await fetch(`/api/adventurer`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      adventurer = data[advId];
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
    console.log('test');
  }

  if (monsterHitPoints < 1) {
    win = true;
  } else {
    win = false;
  }

  console.log("str win %: " + strWinPercentage);
  console.log("dex win %: " + dexWinPercentage);
  console.log("int win %: " + intWinPercentage);
  console.log("fightArray: " + fightArray);

  console.log("adv hit points = " + adventurerHPStr);
  console.log("monster hitpoints " + monsterHPStr);
  console.log("damage dealt = " + damageString);
  console.log("injuries sustained in battle = " + injuryString);
  console.log("The battle itself: " + battleString);
  console.log("win: " + win);

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

  if (win) { outcome = 'VICTORY!!!' } else { outcome = "Death comes to us all..." }


  showBattle(battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome);
}


function showBattle(battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome) {
  videoDurationInSecs = 44;
  initiateGamePlay(videoDurationInSecs, battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome);
}


function initiateGamePlay(Duration, battleArr, adventurerHPArr, monsterHPArr, damageArr, injuryArr, outcome) {
  if (i === battleArr.length) {
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
    window.setTimeout("initiateGamePlay()", ((Duration * 1000) / battleArr.length));
  }
}







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