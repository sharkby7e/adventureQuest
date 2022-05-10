
function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $('#remaining-points').text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);
}





function attackProbability() {
  var adventurerStr;
  var adventurerDex;
  var adventurerInt;

}

var strMultplier;
var dexMultplier;
var intMultplier;




async function init() {

  var activeAdventurerId = 1;


  classData = await fetch('/api/class/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });
  adventurerData = await fetch('/api/adventurer/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });


  adventurerData[this.userId].strMultiplier;


      adventurerStr * classData[classChoice].strMultiplier;
      adventurerDex * classData[classChoice].dexMultiplier;
      adventurerInt * classData[classChoice].intMultiplier;




}



init();