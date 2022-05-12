


function adventChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  adventurerId = e.target.getAttribute("data-id");
  console.log(adventurerId);
}
function questChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  questId = e.target.getAttribute("data-id");
  console.log(questId);
}





// EVENT LISTENERS
// ------------------------------------------------------------------------------------------


adventurers.on("click", adventChoiceHandler);
quests.on("click", questChoiceHandler);