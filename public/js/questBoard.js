const adventurers = $("#adventurers");
const quests = $("#quests");
const adventureQuest = $("#begin");
const chosenAdv = $("#chosenAdv");
const chosenQue = $("#chosenQue");

adventurers.on("click", adventChoiceHandler);
quests.on("click", questChoiceHandler);

function adventChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  aId = e.target.getAttribute("data-id");
  chosenAdv.text(aId);
  if (chosenQue.text()) {
    showButton();
  }
}

function questChoiceHandler(e) {
  e.preventDefault();
  console.log("click");
  qid = e.target.getAttribute("data-id");
  chosenQue.text(qid);
  if (chosenAdv.text()) {
    showButton();
  }
}

function showButton() {
  adventureQuest.removeClass("hidden");
}

const getQid = () => {
  return chosenQue.text();
};
const getAid = () => {
  return chosenAdv.text();
};

//run adventure quest
adventureQuest.on("click", async () => {
  aid = await getAid();
  qid = await getQid();
  const res = await fetch(`api/adventurequest`, {
    method: "POST",
    body: JSON.stringify({ adventurerId: aid, questId: qid }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    res.json().then((data) => {
      const aq = data.pk.id;
      document.location.replace(`gameplay/${aq}`);
    });
  }
});
