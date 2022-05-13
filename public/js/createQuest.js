// DECLARE GLOBAL VARIABLES
// --------------------------------------------------------------------------------------------------------------------------
var difficulty = -0.2;
var description;
var monster;
var monsterStr;
var monsterDex;
var monsterInt;
var monsterHitPoints;

var clickEvent = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: false,
});

// DECLARE UTILITY FUNCTIONS
// --------------------------------------------------------------------------------------------------------------------------
// Populate monsters in options menu
function monsterMash() {
  fetch(`https://www.dnd5eapi.co/api/monsters`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.results.length; i++) {
        $("#monster").append($("<option>").text(data.results[i].name));
      }
      return data;
    });
}

// Populate narratives in checkbox list
function createNarratives(arr) {
  function createForms() {
    for (var i = 0; i < arr.length; i++) {
      $("#form-container").append(
        $(`<div>`)
          .addClass("form-check")
          .attr({ id: `form-check-${i}` })
          .append(
            $(`<input>`)
              .addClass(
                "form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              )
              .attr({
                type: "checkbox",
                value: `quest-${i}`,
                id: "flexCheckDefault",
                name: "quest",
              })
          )
      );
      $(`#form-container`).append(
        $(`#form-check-${i}`).append(
          $(`<label>`)
            .addClass("form-check-label inline-block text-warning")
            .attr({ for: "flexCheckDefault" })
            .text(arr[i])
        )
      );
    }
  }
  if ($("#form-container").length > 0) {
    $("#form-container").remove();
    $(`#questList`).append($("<div>").attr({ id: "form-container" }));
    createForms();
  } else {
    $(`#questList`).append($("<div>").attr({ id: "form-container" }));
    createForms();
  }
}

async function createQuest() {
  const response = await fetch("/api/quests", {
    method: "POST",
    body: JSON.stringify({
      difficulty,
      monster,
      description,
      monsterStr,
      monsterDex,
      monsterInt,
      monsterHitPoints,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/questboard");
  } else {
    alert("Failed to send");
  }
}

// EVENT LISTENERS
// --------------------------------------------------------------------------------------------------------------------------
$("#monster").on("change", async () => {
  monsterSelected = $("#monster option:selected").text();
  chosenMonster = monsterSelected.replace(/ /g, "-").toLowerCase();
  monsterFetch = await fetch(
    `https://www.dnd5eapi.co/api/monsters/${chosenMonster}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      monsterData = data;
      monster = monsterSelected;
      monsterStr = data.strength;
      monsterDex = data.dexterity;
      monsterInt = data.intelligence;
      monsterHitPoints = data.hit_points;
    })
    .then(function () {
      var narratives = [
        `Defeat the ${monsterSelected} that has been ravaging the city`,
        `Beat this ${monsterSelected} for looking at me funny.`,
        `This ${monsterSelected} had been a menace to society and needs to be eliminated before he destroys everything`,
        `This is your only chance to defeat this ${monsterSelected} before he snaps his fingers and makes half of us disappear`,
        `Defeat this ${monsterSelected} for kicking my dog. They will feel the wrath of mine pain`,
        `${monsterSelected} is getting away with my lucky charms hurry and stop the ${monsterSelected} before they finish them`,
      ];

      createNarratives(narratives);

      if (monsterHitPoints < 40) {
        $("#difficulty").html("DIFFICULTY: PEASANT");
      } else if (monsterHitPoints < 80) {
        $("#difficulty").html("DIFFICULTY: BRAWLER");
      } else if (monsterHitPoints < 120) {
        $("#difficulty").html("DIFFICULTY: SOLDIER");
      } else if (monsterHitPoints < 160) {
        $("#difficulty").html("DIFFICULTY: HERO");
      } else if (monsterHitPoints >= 160) {
        $("#difficulty").html("DIFFICULTY: LEGENDARY");
      }
    });
});

$("#create").on("click", async () => {
  let checkBoxArray = document.querySelectorAll("input[name=quest]");
  let descriptionArray = document.querySelectorAll(
    "label[for=flexCheckDefault]"
  );
  let checkedBoxesArray = [];
  let checkedBox;
  for (let i = 0; i < checkBoxArray.length; i++) {
    if (checkBoxArray[i].checked === true) {
      checkedBoxesArray.push(i);
    }
  }
  if (checkedBoxesArray.length === 0) {
    checkedbox = 0;
  } else {
    checkedBox = checkedBoxesArray[0];
  }
  description = descriptionArray[checkedBox].innerHTML;

  switch (monsterHitPoints) {
    case monsterHitPoints < 40:
      difficulty = 0; //direct reduction of probability by percentage
      break;
    case monsterHitPoints < 80:
      difficulty = -0.2; //direct reduction of probability by percentage
      break;
    case monsterHitPoints < 120:
      difficulty = -0.3; //direct reduction of probability by percentage
      break;
    case monsterHitPoints < 160:
      difficulty = -0.4; //direct reduction of probability by percentage
      break;
    case monsterHitPoints >= 160:
      difficulty = -0.5; //direct reduction of probability by percentage
      break;
  }

  createQuest();
});

// FUNCTIONS TO BE INIATED UPON PAGE LOADING
// --------------------------------------------------------------------------------------------------------------------------
monsterMash();
