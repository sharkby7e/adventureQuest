
function displayPointsLeft() {
  var pointsLeft = 15 - strChoice + dexChoice + intChoice;
  $('#stat-points').text(pointsLeft);
  window.setTimeout("displayPointsLeft()", 10);
}
