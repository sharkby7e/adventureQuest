// DECLARE GLOBAL VARIABLES
// --------------------------------------------------------------------------------------------------------------------------
var difficulty = -0.2;
var monsterStrength;
var monsterDexerity;
var monsterIntelligence;
var checkedBoxesArray;



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
              .attr({ type: "checkbox", value: `quest-${i}`, id: "flexCheckDefault", name: "quest" })
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


function checkCheckBoxes() {
  checkBoxArray = document.querySelectorAll('input[name=quest]')
  checkedBoxesArray = [];
  for (let i = 0; i < checkBoxArray.length; i++) {
    if (checkBoxArray[i].checked === true) {
      checkedBoxesArray.push(i);
    }
  }
  return checkedBoxesArray;
}




// EVENT LISTENERS
// --------------------------------------------------------------------------------------------------------------------------
$("#monster").on("change", () => {
  monsterSelected = $("#monster option:selected").text();
  var narratives = [
    `Defeat the ${monsterSelected} that has been ravaging the city`,
    `Beat this ${monsterSelected} for looking at me funny.`,
    `This ${monsterSelected} had been a menace to society and needs to be eliminated before he destroys everything`,
    `This is your only chance to defeat this ${monsterSelected} before he snaps his fingers and makes half of us disappear`,
    `Defeat this ${monsterSelected} for kicking my dog. They will feel the wrath of mine pain`,
    `${monsterSelected} is getting away with my lucky charms hurry and stop the ${monsterSelected} before they finish them`,
  ];
  createNarratives(narratives);
});

$("#difficulty").on("click", (e) => {
  switch ($(e.target).attr("id")) {
    case "star-1":
      difficulty = 0; //direct reduction of probability by percentage
      break;
    case "star-2":
      difficulty = -0.2; //direct reduction of probability by percentage
      break;
    case "star-3":
      difficulty = -0.3; //direct reduction of probability by percentage
      break;
    case "star-4":
      difficulty = -0.4; //direct reduction of probability by percentage
      break;
    case "star-5":
      difficulty = -0.5; //direct reduction of probability by percentage
      break;

    default:
      difficulty = 1;
  }
});

$('#create').on('click', () => {
  checkCheckBoxes()
  chosenMonster = monsterSelected.replace(/ /g, "-").toLowerCase();
  monster = fetch(`https://www.dnd5eapi.co/api/monsters/${chosenMonster}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    monsterStrength = data.strength;
    monsterDexerity = data.dexterity;
    monsterIntelligence = data.intelligence;
    monsterHitPoints = data.hit_points;


    let windowVariable = (function () {
      let Menu = {};
      return {
        difficulty: difficulty,
        monsterStrength: data.strength,
        monsterDexerity: data.dexterity,
        monsterIntelligence: data.intelligence,
        monsterHitPoints: data.hit_points,
        checkedBoxesArray: data.hit_points
      }
    })();


  });


})



// FUNCTIONS TO BE INIATED UPON PAGE LOADING
// --------------------------------------------------------------------------------------------------------------------------
monsterMash();








//https://hashnode.com/post/module-not-defined-as-an-error-in-javascript-cjf5sq8tm00zpy5s213knebuc
// module.exports = { difficulty, monsterStrength, monsterDexerity, monsterIntelligence, monsterHitPoints, checkedBoxesArray };

