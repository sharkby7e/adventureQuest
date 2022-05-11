
function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $('#spendable-points').text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);
}
