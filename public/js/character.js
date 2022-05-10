
function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $('#remaining-points').text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);