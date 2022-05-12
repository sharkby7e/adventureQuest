const adventurers = $("#adventurers");
const quests = $("#quests");
let adventurerId;
let questId;
const adventureQuest = $("#begin");

function adventChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  adventurerId = e.target.getAttribute("data-id");
  console.log(adventurerId);
  if (questId) {
    showButton();
  }
}

function questChoiceHandler(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log("click");
  questId = e.target.getAttribute("data-id");
  console.log(questId);
  if (adventurerId) {
    showButton();
  }
}

function showButton() {
  adventureQuest.removeClass("hidden");
}

async function postAQ(adv, qid) {
  if ((adv, qid)) {
    const res = await fetch(`api/adventurequest`, {
      method: "POST",
      body: JSON.stringify({ adventurerId: adv, questId: qid }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("nice");
    }
  }
}

adventurers.on("click", adventChoiceHandler);
quests.on("click", questChoiceHandler);
adventureQuest.on("click", postAQ(adventurerId, questId));
// EVENT LISTENERS
// ------------------------------------------------------------------------------------------
