

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
        $('#monster').append($('<option>').text(data.results[i].name));
      }
      return data;
    });
}

// Populate narratives in checkbox list
function createNarratives(arr) {
  function createForms() {
    for (var i = 0; i < arr.length; i++) {
      $('#form-container').append($(`<div>`)
        .addClass("form-check").attr({ id: `form-check-${i}` })
        .append($(`<input>`).addClass('form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer').attr({ type: 'checkbox', id: 'flexCheckDefault' })));
      $(`#form-container`)
        .append($(`#form-check-${i}`)
          .append($(`<label>`).addClass('form-check-label inline-block text-warning').attr({ for: "flexCheckDefault" }).text(arr[i])));
    }
  }
  if ($('#form-container').length > 0) {
    $('#form-container').remove();
    $(`#questList`).append($('<div>').attr({ id: 'form-container' }));
    createForms();
  } else {
    $(`#questList`).append($('<div>').attr({ id: 'form-container' }));
    createForms();
  }
  
}




// $('#create').on('click', (res,req)=> {
//   if(){

//   } else {

//   }
// })


function getDifficulty() {
  // $('#diff').[i].
}






// EVENT LISTENERS
// --------------------------------------------------------------------------------------------------------------------------
$('#monster').on('change', () => {
  var monsterSelected = $('#monster option:selected').text();
  var narratives = [
    `Defeat the ${monsterSelected} that has been ravaging the city`,
    `Beat this ${monsterSelected} for looking at me funny.`,
    `This ${monsterSelected} had been a menace to society and needs to be eliminated before he destroys everything`,
    `This is your only chance to defeat this ${monsterSelected} before he snaps his fingers and makes half of us disappear`,
    `Defeat this ${monsterSelected} for kicking my dog. They will feel the wrath of mine pain`,
    `${monsterSelected} is getting away with my lucky charms hurry and stop the ${monsterSelected} before they finish them`
  ];
  createNarratives(narratives);
});



// FUNCTIONS TO BE INIATED UPON PAGE LOADING
// --------------------------------------------------------------------------------------------------------------------------
monsterMash()


