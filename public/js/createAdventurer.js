console.log("script is linked");

var selectedClass;
var advName;
var str;
var dex;
var int;



// User selects Class
$("#classAdv").on("change", async () => {
  selectedClass = $("#classAdv option:selected").text();
  console.log(selectedClass);
});

async function createBubba(Class, Strength, Dexterity, Intelligence, Name) {
  try {
    const bubba = await fetch("api/adventurer", {
      method: "Post",
      body: json.stringify({ Class, Strength, Dexterity, Intelligence, Name }),
    });
  } catch (err) {
    res.status(500).json(err);
  }
}

$("#create").on("click", (e) => {
  e.preventDefault();
  console.log("click");
  advName = document.getElementById(`newAdvName`).value.trim(); // const text = document.querySelector('input[id="newAdvName"]').value.trim();
  console.log(advName);
  createBubba(advName, selectedClass);
});


$("#str").on("change", (e) => {
  e.preventDefault;
  str = $('#str').val();
  pntsAvail = $('#PntsAvail').text()
  console.log(str)
});
$("#dex").on("change", (e) => {
  e.preventDefault;
  dex = $('#dex').val();
  console.log(dex)
});
$("#int").on("change", (e) => {
  e.preventDefault;
  int = $('#int').val();
  console.log(int)
});


function picker(maxPicks) {
  var checkedCount = 0;
  var selected = getElementsByTagName("<input>");
  console.log(selected);
  for (var i = 0; i < selected.length; i++) {
    var rad = selected[i];

    if (rad.checked) {
    }
    checkedCount++;
  }
}

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
