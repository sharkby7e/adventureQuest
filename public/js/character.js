
// function displayPointsLeft() {
//   var pointsLeft = 15 - strChoice + dexChoice + intChoice;
//   $('#remaining-points').text(pointsLeft);
//   window.setTimeout("displayPointsLeft()", 10);
// }

const { json } = require("express/lib/response");

// const { Class } = require("../../models");

// function classLists() {
//   fetch(`api/adventurer`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         $("#classAdv").append($("<option>").text(data));
//       }
//       return data;
//     });
// }

// classLists()


function classList(){
  var classes = document.getElementById('classes').value
  switch (classes) {
      case 'Warrior':
        Class.id;
          break;
      case 'Wizard':
        Class.id;
          break;
      case 'Rogue':
            Class.id;
            break;
}
}


async function createBubba(Class, Strength, Dexterity, Intelligence, Name){
  try{
  const bubba = await fetch('api/adventurer', {
    
    method: 'Post',
    body: json.stringify({Class, Strength, Dexterity, Intelligence, Name})
    })
  }
    catch(err){

    }
  }

  function stats(maxPicks) {
    maxPicks = maxPicks || 15; //default
  
    //make sure all picks have a checked value
    var checkedCount = 0;
    var allR = document.getElementsByTagName('input');
  
    for(var i = 0; i < allR.length; i++) {
      var rad = allR[i];
  
      if (rad.checked) checkedCount++;
    }
  
    if (checkedCount < maxPicks) {
      return confirm('You can still increase stats. Do you want to continue?');
    } else if (checkedCount > maxPicks) {
      alert('You only have ' + maxPicks + 'stat increase. Choose wisely');
      return false;
    }
    return true;
  }


