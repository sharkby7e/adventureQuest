
// function displayPointsLeft() {
//   var pointsLeft = 15 - strChoice + dexChoice + intChoice;
//   $('#remaining-points').text(pointsLeft);
//   window.setTimeout("displayPointsLeft()", 10);
// }

function classLists() {
  fetch(`api/adventurer`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        $("#classAdv").append($("<option>").text(data));
      }
      return data;
    });
}

classLists()
