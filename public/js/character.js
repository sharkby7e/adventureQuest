
// function displayPointsLeft() {
//   var pointsLeft = 15 - strChoice + dexChoice + intChoice;
//   $('#remaining-points').text(pointsLeft);
//   window.setTimeout("displayPointsLeft()", 10);
// }


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


// function classList(){
//   var classes = document.getElementById('classes').value
//   switch (classes) {
//       case 'Warrior':
//         Class.id;
//           break;
//       case 'Wizard':
//         Class.id;
//           break;
//       case 'Rogue':
//             Class.id;
//             break;
// }
// }


// async function createBubba(Class, Strength, Dexterity, Intelligence, Name){
//   try{
//   const bubba = await fetch('api/adventurer', {
    
//     method: 'Post',
//     body: json.stringify({Class, Strength, Dexterity, Intelligence, Name})
//     })
//   }
//     catch(err){

//     }
//   }

  function stats(maxPicks) {
    maxPicks = maxPicks || 10; //default
  
    //make sure all picks have a checked value
    var checkedCount = 0;
    var selected = getElementsById('selected')  
    for(var i = 0; i < selected.length; i++) {
      var rad = selected[i];
  
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

  var selected = getElementsById('selected')

  selected.onclick(stats)




  // $('#battle').text(battleArr[i]);
  // $('#adventurerHP').text(adventurerHPArr[i]);
  // $('#monsterHP').text(monsterHPArr[i]);
  // $('#damage').text(damageArr[i]);
  // $('#injuries').text(injuryArr[i]);
  // $('#win').text(win);