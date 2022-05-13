console.log("script is linked");

var selectedClass;
var advName;
var str;
var dex;
var int;
var pntsAvail;
sendStr = 0;
sendDex = 0;
sendInt = 0;

// User selects Class
$("#classAdv").on("change", async () => {
  selectedClass = $("#classAdv option:selected").text();
  console.log(selectedClass);
});

async function createAdventurer(
  classId,
  title,
  strength,
  dexterity,
  intelligence,
  name
) {
  const response = await fetch("api/adventurer", {
    method: "POST",
    body: JSON.stringify({
      classId,
      title,
      strength,
      dexterity,
      intelligence,
      name,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/questboard");
  } else {
    alert("Fail");
  }
}

$("#create").on("click", (e) => {
  e.preventDefault();
  console.log("click");
  advName = document.getElementById(`newAdvName`).value.trim(); // const text = document.querySelector('input[id="newAdvName"]').value.trim();
  console.log(advName);

  pntsAvail = $("#pntsAvail").text();
  if (str + int + dex > 15) {
    sendStr = 35;
    sendDex = 35;
    sendInt = 35;
  } else {
    sendStr = 30 + str;
    sendDex = 30 + dex;
    sendInt = 30 + int;
  }
  let classNum = 1;
  if (selectedClass === "Warrior") {
    classNum = 1;
  } else if (selectedClass === "Wizard") {
    classNum = 2;
  } else if (selectedClass === "Rogue") {
    classNum = 3;
  }

  title = "Sultan";
  console.log(classNum);
  console.log(title);
  console.log(sendStr);
  console.log(sendDex);
  console.log(sendInt);
  console.log(advName);
  createAdventurer(classNum, title, sendStr, sendDex, sendInt, advName);
});

$("#str").on("change", (e) => {
  e.preventDefault;
  let curStr = $("#str").val();
  let curDex = $("#dex").val();
  let curInt = $("#int").val();
  str = $("#str").val();
  if (curStr + curInt + curDex < 15) {
    let spendTotal = curStr + curInt + curDex;
    let pntsLeft = 15 - spendTotal;
    let strPntsLeft = pntsLeft.toString();
    $("#pntsAvail").text("");
    $("#pntsAvail").text(strPntsLeft);
  }
});

$("#dex").on("change", (e) => {
  e.preventDefault;
  let curStr = $("#str").val();
  let curDex = $("#dex").val();
  let curInt = $("#int").val();
  dex = $("#dex").val();
  if (curStr + curInt + curDex < 15) {
    spendTotal = curStr + curInt + curDex;
    let pntsLeft = 15 - spendTotal;
    let strPntsLeft = pntsLeft.toString();
    $("#pntsAvail").text("");
    $("#pntsAvail").text(strPntsLeft);
  }
});

$("#int").on("change", (e) => {
  e.preventDefault;
  let curStr = $("#str").val();
  let curDex = $("#dex").val();
  let curInt = $("#int").val();
  int = $("#int").val();
  if (curStr + curInt + curDex < 15) {
    let spendTotal = curStr + curInt + curDex;
    let pntsLeft = 15 - spendTotal;
    let strPntsLeft = pntsLeft.toString();
    $("#pntsAvail").text("");
    $("#pntsAvail").text(strPntsLeft);
  }
});

// function picker(maxPicks) {
//   var checkedCount = 0;
//   var selected = getElementsByTagName("<input>");
//   console.log(selected);
//   for (var i = 0; i < selected.length; i++) {
//     var rad = selected[i];
//
//     if (rad.checked) {
//     }
//     checkedCount++;
//   }
// }

//     if (checkedCount < maxPicks) {
//       return confirm('You can still increase stats. Do you want to continue?');
//     } else if (checkedCount > maxPicks) {
//       alert('You only have ' + maxPicks + 'stat increase. Choose wisely');
//       return false;
//     }
//     return true;
//   }

// var selected = getElementsById('selected')

// selected.onclick(stats(maxPicks))
