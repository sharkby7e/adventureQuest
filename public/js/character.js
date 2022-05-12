
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


